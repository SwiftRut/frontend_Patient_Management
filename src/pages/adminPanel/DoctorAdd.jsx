import { useEffect, useState } from "react";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import apiService from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useGlobal } from "../../hooks/useGlobal.jsx";
import { countryCodes, DoctorFormData, timeOptions } from "./constants.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Country, State, City } from "country-state-city"; // Import country-state-city

const DoctorAdd = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { getAllHospitals, allHospitals } = useGlobal();

  const [signaturePreview, setSignaturePreview] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [formData, setFormData] = useState(DoctorFormData);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isoCodes, setIsoCodes] = useState([]);

  useEffect(() => {
    getAllHospitals();
    setCountries(Country.getAllCountries()); // Fetch countries
  }, []);
  useEffect(() => {
    if (formData.hospital && allHospitals.length) {
      const selectedHospital = allHospitals.find(hospital => hospital._id === formData.hospital);
      console.log(selectedHospital)
      setFormData(prevData => ({
        ...prevData,
        hospitalName: selectedHospital?.name || prevData.hospitalName,
        hospitalAddress: selectedHospital?.address || prevData.hospitalAddress,
        hospitalWebsite: selectedHospital?.worksiteLink || prevData.hospitalWebsite,
      }));
    }
  }, [formData.hospital, allHospitals]);
  console.log(formData)
  
  const handleChange = (e) => {
    console.log("IONASD")
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    if (name === "country") {
      console.log("hii");
      
      const selectedCountry = countries.find(country => country.isoCode === value);
      console.log(selectedCountry)
      setStates(State.getStatesOfCountry(selectedCountry.isoCode)); // Fetch states based on selected country
      setFormData(prevData => ({ ...prevData, state: "", city: "" })); // Reset state and city
      setIsoCodes(selectedCountry.phonecode); // Set isoCode for use in the next step
      setCities([]); // Clear cities
    } else if (name === "state") {
      const selectedState = states.find(state => state.isoCode === value);
      setCities(City.getCitiesOfState(formData.country, selectedState.isoCode)); // Fetch cities based on selected state
      setFormData(prevData => ({ ...prevData, city: "" })); // Reset city
    }else if (name === "hospital") {
      const selectedHospital = allHospitals.find((hospital) => hospital._id === value);
      console.log(selectedHospital)
      setFormData({
        ...formData,
        hospital: value,
        hospitalName: selectedHospital ? selectedHospital.name : '',
        hospitalAddress: selectedHospital ? selectedHospital.address : '',
        hospitalWebsite: selectedHospital ? selectedHospital.website : '',
        emergencyContactNo: selectedHospital ? selectedHospital.emergencyContactNo : ''

      });
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please upload a valid PNG or JPEG file for the profile picture.");
    }
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    const input = e.target;

    if (file) {
      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        toast.error("Please upload a valid PNG or JPEG file for the signature.");
        input.value = ''; // Reset input
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB
        toast.error("File size must be less than 5MB.");
        input.value = ''; // Reset input
        return;
      }

      setFormData((prevData) => ({
        ...prevData,
        signature: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setSignaturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.warning("No file selected. Please upload a signature.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     // Validate all fields
     const newErrors = {};
     allFields.forEach(field => {
       const error = validateField(field, fdata[field]);
       if (error) newErrors[field] = error;
     });
 
     // File validation
     if (!fdata.profilePicture) {
       newErrors.profilePicture = 'Profile picture is required';
     }
     if (!fdata.signature) {
       newErrors.signature = 'Signature is required';
     }
     
     // Required field validation
    const requiredFields = [
      'country', 'state', 'city', 'hospital', 'workingTime',
      'patientCheckupTime', 'breakTime'
    ];
    
    requiredFields.forEach(field => {
      if (!fdata[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    setErrors(newErrors);


    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }
  
    // Fetch the country, state, and city names based on the selected ISO codes
    const countryObj = Country.getAllCountries().find(country => country.isoCode === formData.country);
    const countryName = countryObj?.name;
  
    const stateObj = State.getStatesOfCountry(formData.country).find(state => state.isoCode === formData.state);
    const stateName = stateObj?.name;
  
    const cityObj = City.getCitiesOfState(formData.country, formData.state).find(city => city.name === formData.city);
    const cityName = cityObj?.name;
  
    console.log("Form Data:", formData.city, formData.country, formData.state);
    console.log("Resolved Names:", cityName, countryName, stateName, "<<<<<<<<<<<<<< this is submitted");
    
    if (!countryName || !stateName || !cityName) {
      toast.error("Please select a valid country, state, and city.");
      return;
    }
  
    // Construct the full phone number
    const fullPhoneNumber = formData.countryCode + formData.phone;
  
    // Prepare data to submit
    const dataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "signature" || key === "profilePicture") {
        if (formData[key]) {
          dataToSubmit.append(key, formData[key]);
        }
      } else {
        dataToSubmit.append(key, formData[key]);
      }
    });
    
    // Set additional data
    dataToSubmit.set("countryCode", formData.countryCode);
    dataToSubmit.set("phone", fullPhoneNumber);
    dataToSubmit.set("country", countryName);
    dataToSubmit.set("state", stateName);
    dataToSubmit.set("city", cityName);
  
    // Submit the form data
    try {
      const response = await apiService.CreateDoctor(dataToSubmit);
      console.log(response.data);
      if (response) {
        navigate("/doctorManagement");
        toast.success("Doctor added successfully.");
      }
    } catch (error) {
      console.error("Error adding doctor:", error);
      toast.error("Failed to add doctor. Please try again later.");
    }
  };
  

  return (
    <div>
      <div className="doctorAdd-section">
        <div className="row">
          <div className="main p-[20px] bg-white ">
            <form action="" onSubmit={handleSubmit}>
              <div className="top border p-[20px] rounded-[15px] my-[15px]">
                <div className="content">
                  <div className="head">
                    <p className="text-[24px] font-bold text-[#030229]">Add New Doctor</p>
                  </div>
                  <div className="details flex justify-between">

                    <div class="flex w-[19%] flex-col items-center">
                      <div class="">
                        <div
                          class="w-full cursor-pointer"
                          onclick="document.getElementById('profilePictureUpload').click()"
                        >
                          <div class="relative mt-[30px]">
                            <img
                              src={profilePicturePreview ? profilePicturePreview : '../img/doctorAdd.png'}
                              alt={profilePicturePreview ? 'Profile Preview' : ''}
                              class="w-full h-auto cursor-pointer"
                            />
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          id="profilePictureUpload"
                          name="profilePicture"
                          class="hidden"
                          onchange={handleProfilePictureChange}
                        />
                        <p
                          class="mt-2 cursor-pointer text-center text-blue-500"
                          onclick="document.getElementById('profilePictureUpload').click()"
                        >
                          Choose Photo
                        </p>
                      </div>
                      <div class="flex w-[100%] flex-col  mt-5 ">
                        <div class="text-lg font-semibold">
                          <p className="text-start">Signature</p>
                        </div>
                        <div class="mt-2 flex flex-col items-center w-[100%] border-2 border-dashed border-[#D3D3D3] rounded-[6px] p-5">
                          <div>
                            <FaImage />
                          </div>
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            id="signatureUpload"
                            name="signature"
                            class="hidden"
                            onchange={handleSignatureChange}
                          />
                          <label
                            for="signatureUpload"
                            class="mt-2 cursor-pointer text-blue-500"
                          >
                            Upload a file
                          </label>
                          <h5 class="mt-1 text-sm text-gray-500">PNG or JPEG Up To 5MB</h5>
                          {signaturePreview && (
                            <img
                              src={signaturePreview}
                              alt="Signature Preview"
                              class="w-full mt-2"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="right w-[79%]">
                      <div className="form-box">
                        <form className="flex gap-x-[14px] justify-start">

                          <div class="relative py-3 w-[32%]">
                            <label class="absolute top-1 left-3 bg-white z-10 text-sm text-gray-700">
                              Doctor Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter Doctor Name"
                              maxlength="50"
                              value={formData.doctorName}
                              onChange={handleChange}
                              className={`form-input ${touched.name && errors.name ? 'border-red-500' : ''}`}
                              
                            />
                            {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <label class="absolute top-1 left-3 bg-white z-10 text-sm text-gray-700">
                              Doctor Qualification
                            </label>
                            <input
                              type="text"
                              name="qualification"
                              placeholder="Enter Doctor Qualification"
                              maxlength="30"
                              value={formData.qualification}
                              onChange={handleChange}
                              className={`form-input ${touched.qualification && errors.qualification ? 'border-red-500' : ''}`}
                            />
                             {touched.qualification && errors.qualification && (
                <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <label class="absolute top-1 left-3 bg-white z-10 text-sm text-gray-700">
                              Gender
                            </label>
                            <select
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              className={`form-input ${touched.qualification && errors.qualification ? 'border-red-500' : ''}`}
                            >
                              <option>Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            {touched.gender && errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <label class="absolute top-1 left-3 bg-white z-10 text-sm text-gray-700">
                              Specialty Type
                            </label>
                            <input
                              type="text"
                              name="speciality"
                              placeholder="Enter Specialty Type"
                              maxlength="30"
                              value={formData.speciality}
                              onChange={handleChange}
                              className={`form-input ${touched.speciality && errors.speciality ? 'border-red-500' : ''}`}
                            />
                             {touched.speciality && errors.speciality && (
                <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <label class="absolute top-1 left-3 bg-white z-10 text-sm text-gray-700">
                              Working Time
                            </label>
                            <div>
                              <select
                                name="workingTime"
                                value={formData.workingTime}
                                onChange={handleChange}
                                className={`form-input ${touched.workingTime && errors.workingTime ? 'border-red-500' : ''}`}
                              >
                                <option value="">Start Time</option>
                                {timeOptions?.map((time, index) => (
                                  <option key={index} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {touched.speciality && errors.speciality && (
                <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <label class="absolute top-1 left-3 bg-white z-10 text-sm text-gray-700">
                              Work On
                            </label>
                            <select
                              name="workingOn"
                              value={formData.workingOn}
                              onChange={handleChange}
                              className={`form-input ${touched.workingOn && errors.workingOn ? 'border-red-500' : ''}`}
                            >
                              <option value="">Select Work Type</option>
                              <option value="Part-time">Part-time</option>
                              <option value="Full-time">Full-time</option>
                              <option value="Contract">Contract</option>
                            </select>
                            {touched.workingOn && errors.workingOn && (
                <p className="text-red-500 text-sm mt-1">{errors.workingOn}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Check Up Time</div>
                            <div class="relative">
                              <select
                                name="patientCheckupTime"
                                value={formData.patientCheckupTime}
                                onChange={handleChange}
                                className={`form-input ${touched.patientCheckupTime && errors.patientCheckupTime ? 'border-red-500' : ''}`}
                              >
                                <option value="">Start Time</option>
                                {timeOptions.map((time, index) => (
                                  <option key={index} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              {touched.patientCheckupTime && errors.patientCheckupTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.patientCheckupTime}</p>
                )}
                            </div>
               
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Break Time</div>
                            <div class="relative">
                              <select
                                name="breakTime"
                                value={formData.breakTime}
                                onChange={handleChange}
                                className={`form-input ${touched.breakTime && errors.breakTime ? 'border-red-500' : ''}`}
                              >
                                <option value="">Start Time</option>
                                {timeOptions.map((time, index) => (
                                  <option key={index} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              {touched.breakTime && errors.breakTime && (
                <p className="text-red-500 text-sm mt-1">{errors.breakTime}</p>
              )}
                            </div>
                            <div class="absolute top-1.5 right-[-8px] text-gray-400 text-lg">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Experience</div>
                            <input
                              type="number"
                              name="experience"
                              placeholder="Enter Experience in Years"
                              maxLength={10}
                              value={formData.experience}
                              onChange={handleChange}
                              className={`form-input ${touched.experience && errors.experience ? 'border-red-500' : ''}`}
                            />
                            {touched.experience && errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Phone Number</div>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Enter Phone Number"
                              maxLength="15"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              className={`form-input ${touched.phone && errors.phone ? 'border-red-500' : ''}`}
                            />
                            {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Country Code</div>
                            <input
                              type="text"
                              name="countryCode"
                              value={isoCodes}
                              disabled
                              className={`form-input ${touched.countryCode && errors.countryCode ? 'border-red-500' : ''}`}
                            />
                              {touched.countryCode && errors.countryCode && (
                <p className="text-red-500 text-sm mt-1">{errors.countryCode}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Age</div>
                            <input
                              type="number"
                              name="age"
                              placeholder="Enter Age"
                              maxLength="3"
                              value={formData.age}
                              onChange={handleChange}
                              className={`form-input ${touched.age && errors.age ? 'border-red-500' : ''}`}
                            />
                              {touched.age && errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Email</div>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                              maxLength="100"
                              value={formData.email}
                              onChange={handleChange}
                              className={`form-input ${touched.email && errors.email ? 'border-red-500' : ''}`}
                            />
                              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Country</div>
                            <select
                              name="country"
                              onChange={handleChange}
                              className={`form-input ${touched.country && errors.country ? 'border-red-500' : ''}`}
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option
                                  key={country.isoCode}
                                  value={country.isoCode}
                                >
                                  {country.name}
                                </option>
                              ))}
                            </select>
                            {touched.country && errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">State</div>
                            <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              disabled={!formData.country} // Disable if no country is selected
                              className={`form-input ${touched.state && errors.state ? 'border-red-500' : ''}`}
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option
                                  key={state.isoCode}
                                  value={state.isoCode}
                                >
                                  {state.name}
                                </option>
                              ))}
                            </select>
                            {touched.state && errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">City</div>
                            <select
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              disabled={!formData.state} // Disable if no state is selected
                              className={`form-input ${touched.city && errors.city ? 'border-red-500' : ''}`}
                            >
                              <option value="">Select City</option>
                              {cities.map(city => (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                            {touched.city && errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Zip Code</div>
                            <input
                              type="text"
                              name="zipCode"
                              placeholder="Enter Zip Code"
                              maxLength="10"
                              value={formData.zipCode}
                              onChange={handleChange}
                              className={`form-input ${touched.zipCode && errors.zipCode ? 'border-red-500' : ''}`}
                            />
                            {touched.zipCode && errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Address</div>
                            <input
                              type="text"
                              name="doctorAddress"
                              placeholder="Enter Address"
                              maxLength="200"
                              value={formData.address}
                              onChange={handleChange}
                              className={`form-input ${touched.address && errors.address ? 'border-red-500' : ''}`}
                            />
                            {touched.address && errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">Description</div>
                            <input
                              name="description"
                              placeholder="Enter Description"
                              maxLength="500"
                              value={formData.description}
                              onChange={handleChange}
                              className={`form-input ${touched.description && errors.description ? 'border-red-500' : ''}`}
                            />
                            {touched.description && errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">
                              Password <span class="text-red-500">*</span>
                            </div>
                            <div class="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className={`form-input ${touched.password && errors.password ? 'border-red-500' : ''}`}
                              />
                              {touched.password && errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
                              <div
                                className="eye"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <FaEye size={20} />
                                ) : (
                                  <FaEyeSlash size={20} />
                                )}
                              </div>
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">
                              Confirm Password <span class="text-red-500">*</span>
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              placeholder="Confirm Password"
                              required
                            />
                            <div
                              className="eye"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <FaEye size={20} />
                              ) : (
                                <FaEyeSlash size={20} />
                              )}
                            </div>
                          </div>

                          <div class="relative py-3 w-[32%]">
                            <div class="absolute top-1 left-3 bg-white z-10 text-gray-700">
                              Online Consultation Rate
                            </div>
                            <input
                              type="number"
                              name="onlineConsultationRate"
                              placeholder="Enter Rate"
                              maxLength="10"
                              value={formData.onlineConsultationRate}
                              onChange={handleChange}
                              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
                            />
                            <div class="absolute top-1.5 right-[-8px] text-gray-400 text-lg">
                              <FaCircleMinus />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-5 border-2 border-gray-100 rounded-lg my-4">
                <div class="content">
                  <div class="details">
                    <div class="form-box">
                      <form class="flex justify-between gap-y-[15px]">

                        <div class="relative w-[32%]">
                          <div class="absolute top-[-0.75rem] left-3 bg-white text-gray-700">Current Hospital</div>
                          <input
                            type="text"
                            name="currentHospital"
                            placeholder="Enter Current Hospital"
                            maxLength={30}
                            value={
                              (formData.hospital &&
                                allHospitals.find(
                                  (hospital) =>
                                    hospital._id ===
                                    formData.hospital.toString().name
                                )) ||
                              formData.currentHospital
                            }
                            onChange={handleChange}
                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                          />
                          <div class="absolute top-1 right-[-8px] text-gray-400 text-lg">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div class="relative w-[32%]">
                          <div class="absolute top-[-0.75rem] left-3 bg-white text-gray-700">Hospital Name</div>
                          <input
                            type="text"
                            name="hospitalName"
                            placeholder="Enter Hospital Name"
                            maxLength={100}
                            value={
                              allHospitals?.find(
                                (item) => item._id === formData.hospital
                              )?.name || formData.hospitalName
                            }
                            onChange={handleChange}
                            disabled={true}
                            className={`form-input ${touched.hospitalName && errors.hospitalName ? 'border-red-500' : ''}`}
                          />
                            {touched.hospitalName && errors.hospitalName && (
                <p className="text-red-500 text-sm mt-1">{errors.hospitalName}</p>
              )}
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div class="relative w-[32%]">
                          <div class="absolute top-[-0.75rem] left-3 bg-white text-gray-700">Hospital</div>
                          <select
                            name="hospital"
                            value={formData.hospital}
                            onChange={handleChange}
                            className={`form-input ${touched.hospital && errors.hospital ? 'border-red-500' : ''}`}
                          >
                            <option value="">Select Hospital</option>
                            {allHospitals.map((hospital) => (
                              <option key={hospital._id} value={hospital._id}>
                                {hospital.name}
                              </option>
                            ))}
                          </select>
                          {touched.hospital && errors.hospital && (
                <p className="text-red-500 text-sm mt-1">{errors.hospital}</p>
              )}
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div class="relative w-[32%]">
                          <div class="absolute top-[-0.75rem] left-3 bg-white text-gray-700">Hospital Address</div>
                          <input
                            type="text"
                            name="hospitalAddress"
                            placeholder="Enter Hospital Address"
                            maxLength={200}
                            value={
                              allHospitals?.find(
                                (item) => item._id === formData.hospital
                              )?.address || formData.hospitalAddress
                            }
                            onChange={handleChange}
                            disabled={true}
                            ClassName={`form-input ${touched.hospitalAddress && errors.hospitalAddress ? 'border-red-500' : ''}`}
                          />
                          {touched.hospitalAddress && errors.hospitalAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.hospitalAddress}</p>
              )}
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div class="relative w-[32%]">
                          <div class="absolute top-[-0.75rem] left-3 bg-white text-gray-700">Hospital Website</div>
                          <input
                            type="url"
                            name="worksiteLink"
                            placeholder="Enter Hospital Website"
                            maxLength="100"
                            value={formData.hospitalWebsite}
                            onChange={handleChange}
                            disabled={true}
                            className={`form-input ${touched.hospitalWebsite && errors.hospitalWebsite ? 'border-red-500' : ''}`}
                          />
                          {touched.hospitalWebsite && errors.hospitalWebsite && (
                <p className="text-red-500 text-sm mt-1">{errors.hospitalWebsite}</p>
              )}
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div class="relative w-[32%]">
                          <div class="absolute top-[-0.75rem] left-3 bg-white text-gray-700">Emergency Contact</div>
                          <input
                            type="tel"
                            name="emergencyContactNo"
                            placeholder="Enter Emergency Contact"
                            maxLength="15"
                            value={formData.emergencyContactNo}
                            onChange={handleChange}
                            className={`form-input ${touched.qualification && errors.qualification ? 'border-red-500' : ''}`}
                          />
                          {touched.emergencyContactNo && errors.emergencyContactNo && (
                <p className="text-red-500 text-sm mt-1">{errors.emergencyContactNo}</p>
              )}
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>


              <div class="save-btn flex justify-end">
                <button type="submit" class="bg-gray-100 px-10 py-2 text-gray-600 text-lg font-semibold rounded-lg hover:bg-blue-500 hover:text-white">
                  Add
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAdd;