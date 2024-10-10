import React, { useEffect, useState } from "react";
import { FaCircleMinus, FaImage, FaLink } from "react-icons/fa6";
import './doctorManagement.css';
import apiService from '../../services/api.js';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DoctorEdit = () => {
  const { doctorId } = useParams(); // Retrieve doctorId from URL parameters
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState({
    name: "",
    qualification: "",
    gender: "",
    speciality: "",
    workOn: "",
    workingTime: "",
    checkUpTime: "",
    breakTime: "",
    experience: "",
    phone: "",
    age: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    doctorAddress: "",
    description: "",
    onlineConsultationRate: "",
    currentHospital: "",
    hospitalName: "",
    hospitalAddress: "",
    worksiteLink: "",
    emergencyContactNo: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        if (doctorId) {
          const response = await apiService.GetDoctorById(doctorId);
          if (response.data.data) {
            setDoctorData(response.data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiService.EditDoctor(doctorId, doctorData);
      console.log("Doctor updated successfully:", response.data);
      alert("Doctor updated successfully!");
      navigate("/doctorManagement")
    } catch (error) {
      console.error("Error updating doctor:", error);
      alert("An error occurred while updating the doctor.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  if (loading) {
    return <p>Loading doctor data...</p>;
  }

  return (
    <div className="doctorEdit-section">
      <div className="row">
        <div className="main">

          <form action="" onSubmit={handleSubmit}>

            <div className="top">
              <div className="content">
                <div className="head">
                  <p>Edit Doctor Detail</p>
                </div>
                <div className="details flex">
                  <div className="left flex">
                    <div className="choose-photo">
                      <div className="image">
                        <img src="../img/doctorAdd.png" alt="" />
                      </div>
                      <p>Choose Photo</p>
                    </div>

                    <div className="upload-sign">
                      <div className="title">
                        <p>Signature</p>
                      </div>
                      <div className="sign">
                        <FaImage />
                        <p>Upload a file</p>
                        <h5>PNG Up To 5MB</h5>
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
                            value={doctorData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Doctor Name"
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
                            value={doctorData.qualification}
                            onChange={handleInputChange}
                            placeholder="Enter Doctor Qualification"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Gender</div>
                          <select
                            name="gender"
                            value={doctorData.gender}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
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
                            value={doctorData.speciality}
                            onChange={handleInputChange}
                            placeholder="Enter Specialty Type"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Work On</div>
                          <input
                            type="text"
                            name="workingTime"
                            value={doctorData.workingTime}
                            onChange={handleInputChange}
                            placeholder="Enter Work On"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Working Time</div>
                          <input
                            type="text"
                            name="workingTime"
                            value={doctorData.workingTime}
                            onChange={handleInputChange}
                            placeholder="Enter Working Time"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Check Up Time</div>
                          <input
                            type="text"
                            name="patientCheckupTime"
                            value={doctorData.patientCheckupTime}
                            onChange={handleInputChange}
                            placeholder="Enter Check Up Time"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Break Time</div>
                          <input
                            type="text"
                            name="breakTime"
                            value={doctorData.breakTime}
                            onChange={handleInputChange}
                            placeholder="Enter Break Time"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Experience</div>
                          <input
                            type="text"
                            name="experience"
                            value={doctorData.experience}
                            onChange={handleInputChange}
                            placeholder="Enter Experience"
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
                            value={doctorData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter Phone Number"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>


                        <div className="input-box">
                          <div className="label">Country Code</div>
                          <select name="countryCode" >
                            <option value="">1</option>
                            <option value="">2</option>
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
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Description</div>
                          <input
                            name="description"
                            value={doctorData.description}
                            onChange={handleInputChange}
                            placeholder="Enter Description"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Online Consultation Rate</div>
                          <input
                            type="text"
                            name="onlineConsultationRate"
                            value={doctorData.onlineConsultationRate}
                            onChange={handleInputChange}
                            placeholder="Enter Consultation Rate"
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
                <div className="details flex">
                  <div className="form-box">
                    <form action="" className="flex">
                      <div className="input-box">
                        <div className="label">Current Hospital</div>
                        <input
                          type="text"
                          name="currentHospital"
                          value={doctorData.currentHospital}
                          onChange={handleInputChange}
                          placeholder="Enter Doctor Current Hospital"
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
                          value={doctorData.hospitalName}
                          onChange={handleInputChange}
                          placeholder="Enter Hospital Name"
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
                          value={doctorData.hospitalAddress}
                          onChange={handleInputChange}
                          placeholder="Enter Hospital Address"
                        />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Hospital Website</div>
                        <input
                          type="text"
                          name="worksiteLink"
                          value={doctorData.worksiteLink}
                          onChange={handleInputChange}
                          placeholder="Enter Hospital Website"
                        />
                        <div className="link-icon">
                          <FaLink />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Emergency Contact</div>
                        <input
                          type="text"
                          name="emergencyContactNo"
                          value={doctorData.emergencyContactNo}
                          onChange={handleInputChange}
                          placeholder="Enter Emergency Contact"
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
              <button type="submit">Save</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default DoctorEdit;
