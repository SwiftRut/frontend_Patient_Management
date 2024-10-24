import { useEffect, useState } from "react";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import apiService from "../../services/api.js";
import "./doctorManagement.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobal } from "../../hooks/useGlobal.jsx";
import { countryCodes, DoctorFormData, timeOptions } from "./constants.js";

const DoctorAdd = () => {
  const navigate = useNavigate();
  const { getAllHospitals, allHospitals } = useGlobal();

  const [signaturePreview, setSignaturePreview] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [formData, setFormData] = useState(DoctorFormData);

  useEffect(() => {
    getAllHospitals();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      alert("Please upload a valid PNG or JPEG file for the profile picture.");
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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }
    const fullPhoneNumber = formData.countryCode + formData.phone;
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

    dataToSubmit.set("phone", fullPhoneNumber);

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
                              maxLength={100}
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
                              maxLength={100}
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
                              type="text"
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
                            <select
                              name="countryCode"
                              value={formData.countryCode}
                              onChange={handleChange}
                            >
                              {countryCodes.map((country, index) => (
                                <option key={index} value={country.code}>
                                  {country.code} ({country.country})
                                </option>
                              ))}
                            </select>
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
                            <input
                              type="text"
                              name="country"
                              placeholder="Enter Country"
                              maxLength={100}
                              value={formData.country}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">State</div>
                            <input
                              type="text"
                              name="state"
                              placeholder="Enter State"
                              maxLength={100}
                              value={formData.state}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>

                          <div className="input-box">
                            <div className="label">City</div>
                            <input
                              type="text"
                              name="city"
                              placeholder="Enter City"
                              maxLength={100}
                              value={formData.city}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
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

                          <div className="input-box">
                            <div className="label">Password</div>
                            <input
                              type="Password"
                              name="password"
                              placeholder="Enter Rate"
                              maxLength={10}
                              value={formData.password}
                              onChange={handleChange}
                            />
                            <div className="minus-circle">
                              <FaCircleMinus />
                            </div>
                          </div>
                          <div className="input-box">
                            <div className="label">Confirm Password</div>
                            <input
                              type="Password"
                              name="confirmPassword"
                              placeholder="Enter Password"
                              maxLength={10}
                              value={formData.confirmPassword}
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
                            maxLength={100}
                            value={formData.hospital && allHospitals.find((hospital) => hospital._id === formData.hospital.toString().name)  || formData.currentHospital}
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
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Emergency Contact</div>
                          <input
                            type="text"
                            name="emergencyContactNo"
                            placeholder="Enter Emergency Contact"
                            maxLength={15}
                            value={formData.emergencyContact}
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
