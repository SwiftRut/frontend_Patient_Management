import React, { useState } from "react";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import apiService from '../../services/api.js';
import './doctorManagement.css';
import { useNavigate } from "react-router-dom";

const timeOptions = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30"
];

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
];

const DoctorAdd = () => {
  const navigate = useNavigate();

  const [signaturePreview, setSignaturePreview] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    gender: '',
    speciality: '',
    workOnStart: '',
    workingTimeStart: '',
    checkUpTimeStart: '',
    breakTimeStart: '',
    experience: '',
    phone: '',
    countryCode: '+1',
    age: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    doctorAddress: '',
    description: '',
    onlineConsultationRate: '',
    currentHospital: '',
    hospitalName: '',
    hospitalAddress: '',
    worksiteLink: '',
    emergencyContactNo: '',
    signature: null,
    profilePicture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg") && file.size <= 5 * 1024 * 1024) {
      setFormData((prevData) => ({
        ...prevData,
        signature: file, // Store the file in the state
      }));

      // Create a preview of the uploaded image
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignaturePreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PNG or JPEG file up to 5MB.");
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg") && file.size <= 5 * 1024 * 1024) {
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
      alert("Please upload a PNG or JPEG file up to 5MB for the profile picture.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullPhoneNumber = formData.countryCode + formData.phone;
    const dataToSubmit = { ...formData, phone: fullPhoneNumber };

    try {
      const response = await apiService.CreateDoctor(dataToSubmit);
      console.log(response.data);
      if (response) {
        navigate("/doctorManagement");
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
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
                        <div className="image" onClick={() => document.getElementById("profilePictureUpload").click()}>
                          {profilePicturePreview ? (
                            <img
                              src={profilePicturePreview}
                              alt="Profile Preview"
                              style={{ width: "100%", height: "auto", cursor: 'pointer' }}
                            />
                          ) : (
                            <img src="../img/doctorAdd.png" alt="" style={{ cursor: 'pointer' }} />
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/png, image/jpeg"
                          onChange={handleProfilePictureChange}
                          style={{ display: "none" }}
                          id="profilePictureUpload"
                        />
                        <p style={{ cursor: 'pointer' }} onClick={() => document.getElementById("profilePictureUpload").click()}>
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
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            id="signatureUpload"
                          />
                          <label htmlFor="signatureUpload" style={{ cursor: 'pointer' }}>
                            Upload a file
                          </label>
                          <h5>PNG or JPEG Up To 5MB</h5>
                          {signaturePreview && <img src={signaturePreview} alt="Signature Preview" style={{ width: '100%', marginTop: '10px' }} />}
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
                            <select name="gender" value={formData.gender} onChange={handleChange}>
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
                              <select name="workingTime" value={formData.workingTime} onChange={handleChange}>
                                <option value="">Start Time</option>
                                {timeOptions.map((time, index) => (
                                  <option key={index} value={time}>{time}</option>
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
                                  <option key={index} value={time}>{time}</option>
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
                                  <option key={index} value={time}>{time}</option>
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
                            <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                              {countryCodes.map((country, index) => (
                                <option key={index} value={country.code}>{country.code} ({country.country})</option>
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
                            <div className="label">Online Consultation Rate</div>
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
                            maxLength={100}
                            value={formData.currentHospital}
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
                            value={formData.hospitalName}
                            onChange={handleChange}
                          />
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
                            value={formData.hospitalAddress}
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
