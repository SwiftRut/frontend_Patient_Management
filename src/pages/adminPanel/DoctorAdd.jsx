import { useEffect, useState } from "react";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import apiService from "../../services/api.js";
import "./doctorManagement.css";
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
          <div className="main">
            <form action="" onSubmit={handleSubmit}>
              <div className="top">
                <div className="content">
                  <div className="head">
                    <p>Add New Doctor</p>
                  </div>
                  <div className="details flex">
                    <div className="left flex">
                      <div className="choose-photo">
                        <div
                          className="image"
                          onClick={() =>
                            document
                              .getElementById("profilePictureUpload")
                              .click()
                          }
                        >
                          {profilePicturePreview ? (
                            <img
                              src={profilePicturePreview}
                              alt="Profile Preview"
                              style={{
                                width: "100%",
                                height: "auto",
                                cursor: "pointer",
                              }}
                            />
                          ) : (
                            <img
                              src="../img/doctorAdd.png"
                              alt=""
                              style={{ cursor: "pointer" }}
                            />
                          )}  
                        </div>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          onChange={handleProfilePictureChange}
                          style={{ display: "none" }}
                          id="profilePictureUpload"
                          name="profilePicture"
                        />
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            document
                              .getElementById("profilePictureUpload")
                              .click()
                          }
                        >
                          Choose Photo
                        </p>
                      </div>
                      <div className="upload-sign">
                        <div className="title">
                          <p>Signature</p>
                        </div>
                        <div className="sign">
                          <FaImage />
                          <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleSignatureChange}
                            style={{ display: "none" }}
                            id="signatureUpload"
                            name="signature"
                          />
                          <label
                            htmlFor="signatureUpload"
                            style={{ cursor: "pointer" }}
                          >
                            Upload a file
                          </label>
                          <h5>PNG or JPEG Up To 5MB</h5>
                          {signaturePreview && (
                            <img
                              src={signaturePreview}
                              alt="Signature Preview"
                              style={{ width: "100%", marginTop: "10px" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="form-box">
                        <form className="flex">
                          <div className="input-box">
                            <div className="label">Doctor Name</div>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter Doctor Name"
                              maxLength={50}
                              value={formData.doctorName}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Doctor Qualification</div>
                            <input
                              type="text"
                              name="qualification"
                              placeholder="Enter Doctor Qualification"
                              maxLength={30}
                              value={formData.qualification}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Gender</div>
                            <select
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                            >
                              <option>Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Specialty Type</div>
                            <input
                              type="text"
                              name="speciality"
                              placeholder="Enter Specialty Type"
                              maxLength={30}
                              value={formData.speciality}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Working Time</div>
                            <div className="time-range">
                              <select
                                name="workingTime"
                                value={formData.workingTime}
                                onChange={handleChange}
                              >
                                <option value="">Start Time</option>
                                {timeOptions?.map((time, index) => (
                                  <option key={index} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Work On</div>
                            <select
                              name="workingOn"
                              value={formData.workingOn}
                              onChange={handleChange}
                            >
                              <option value="">Select Work Type</option>
                              <option value="Part-time">Part-time</option>
                              <option value="Full-time">Full-time</option>
                              <option value="Contract">Contract</option>
                            </select>
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Check Up Time</div>
                            <div className="time-range">
                              <select
                                name="patientCheckupTime"
                                value={formData.patientCheckupTime}
                                onChange={handleChange}
                              >
                                <option value="">Start Time</option>
                                {timeOptions.map((time, index) => (
                                  <option key={index} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Break Time</div>
                            <div className="time-range">
                              <select
                                name="breakTime"
                                value={formData.breakTime}
                                onChange={handleChange}
                              >
                                <option value="">Start Time</option>
                                {timeOptions.map((time, index) => (
                                  <option key={index} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Experience</div>
                            <input
                              type="number"
                              name="experience"
                              placeholder="Enter Experience in Years"
                              maxLength={10}
                              value={formData.experience}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Phone Number</div>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Enter Phone Number"
                              maxLength={15}
                              value={formData.phoneNumber}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Country Code</div>
                            <input type="text" name="countryCode" value={isoCodes} disabled />
                            {/* <select
                              name="countryCode"
                              value={isoCodes}
                              // onChange={handleChange}
                              disabled
                            >
                              {countryCodes.map((country, index) => (
                                <option key={index} value={country.code}>
                                  {country.code} ({country.country})
                                </option>
                              ))}
                            </select> */}
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Age</div>
                            <input
                              type="number"
                              name="age"
                              placeholder="Enter Age"
                              maxLength={3}
                              value={formData.age}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Email</div>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Email"
                              maxLength={100}
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Country</div>
                            <select
                              name="country"
                              // value={formData.country}
                              onChange={handleChange}
                            >
                              <option value="">Select Country</option>
                              {countries.map(country => (
                                <option key={country.isoCode} value={country.isoCode}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="input-box">
                            <div className="label">State</div>
                            <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              disabled={!formData.country} // Disable if no country is selected
                            >
                              <option value="">Select State</option>
                              {states.map(state => (
                                <option key={state.isoCode} value={state.isoCode}>
                                  {state.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="input-box">
                            <div className="label">City</div>
                            <select
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              disabled={!formData.state} // Disable if no state is selected
                            >
                              <option value="">Select City</option>
                              {cities.map(city => (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="input-box">
                            <div className="label">Zip Code</div>
                            <input
                              type="text"
                              name="zipCode"
                              placeholder="Enter Zip Code"
                              maxLength={10}
                              value={formData.zipCode}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Address</div>
                            <input
                              type="text"
                              name="doctorAddress"
                              placeholder="Enter Address"
                              maxLength={200}
                              value={formData.address}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">Description</div>
                            <input
                              name="description"
                              placeholder="Enter Description"
                              maxLength={500}
                              value={formData.description}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">
                              Password <span>*</span>
                            </div>
                            <div className="password-input-container">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                              />
                              <div className="eye" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                              </div>
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">
                              Confirm Password <span>*</span>
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              placeholder="Confirm Password"
                              required
                            />
                            <div className="eye" onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">
                              Online Consultation Rate
                            </div>
                            <input
                              type="number"
                              name="onlineConsultationRate"
                              placeholder="Enter Rate"
                              maxLength={10}
                              value={formData.onlineConsultationRate}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom">
                <div className="content">
                  <div className="details">
                    <div className="form-box">
                      <form className="flex">
                        <div className="input-box">
                          <div className="label">Current Hospital</div>
                          <input
                            type="text"
                            name="currentHospital"
                            placeholder="Enter Current Hospital"
                            maxLength={30}
                            value={formData.hospital && allHospitals.find((hospital) => hospital._id === formData.hospital.toString().name) || formData.currentHospital}
                            onChange={handleChange}
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Hospital Name</div>
                          <input
                            type="text"
                            name="hospitalName"
                            placeholder="Enter Hospital Name"
                            maxLength={100}
                            value={allHospitals?.find((item) => item._id === formData.hospital)?.name || formData.hospitalName}
                            onChange={handleChange}
                            disabled={true}
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">Hospital</div>
                          <select
                            name="hospital"
                            value={formData.hospital}
                            onChange={handleChange}
                          >
                            <option value="">Select Hospital</option>
                            {allHospitals.map((hospital) => (
                              <option key={hospital._id} value={hospital._id}>
                                {hospital.name}
                              </option>
                            ))}
                          </select>
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Hospital Address</div>
                          <input
                            type="text"
                            name="hospitalAddress"
                            placeholder="Enter Hospital Address"
                            maxLength={200}
                            value={allHospitals?.find((item) => item._id === formData.hospital)?.address || formData.hospitalAddress}
                            onChange={handleChange}
                            disabled={true}
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Hospital Website</div>
                          <input
                            type="url"
                            name="worksiteLink"
                            placeholder="Enter Hospital Website"
                            maxLength={100}
                            value={formData.hospitalWebsite}
                            onChange={handleChange}
                            disabled={true}
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Emergency Contact</div>
                          <input
                            type="tel"
                            name="emergencyContactNo"
                            placeholder="Enter Emergency Contact"
                            maxLength={15}
                            value={formData.emergencyContactNo}
                            onChange={handleChange}
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="save-btn flex">
                <button type="submit">Add </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAdd;
