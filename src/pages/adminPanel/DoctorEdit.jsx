import { useEffect, useState } from "react";
import { FaCircleMinus, FaImage, FaLink } from "react-icons/fa6";
import './doctorManagement.css';
import apiService from '../../services/api.js';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DoctorFormData } from "./constants.js";

const DoctorEdit = () => {
  const { doctorId } = useParams(); // Retrieve doctorId from URL parameters
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(DoctorFormData);

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
                      {[
                        { label: "Doctor Name", name: "name", type: "text", placeholder: "Enter Doctor Name", value: doctorData.name },
                        { label: "Doctor Qualification", name: "qualification", type: "text", placeholder: "Enter Doctor Qualification", value: doctorData.qualification },
                        { label: "Gender", name: "gender", type: "select", options: ["", "male", "female", "other"], value: doctorData.gender },
                        { label: "Specialty Type", name: "speciality", type: "text", placeholder: "Enter Specialty Type", value: doctorData.speciality },
                        { label: "Work On", name: "workingTime", type: "text", placeholder: "Enter Work On", value: doctorData.workingTime },
                        { label: "Working Time", name: "workingTime", type: "text", placeholder: "Enter Working Time", value: doctorData.workingTime },
                        { label: "Check Up Time", name: "patientCheckupTime", type: "text", placeholder: "Enter Check Up Time", value: doctorData.patientCheckupTime },
                        { label: "Break Time", name: "breakTime", type: "text", placeholder: "Enter Break Time", value: doctorData.breakTime },
                        { label: "Experience", name: "experience", type: "text", placeholder: "Enter Experience", value: doctorData.experience },
                        { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter Phone Number", value: doctorData.phone },
                        { label: "Country Code", name: "countryCode", type: "select", options: ["1", "2"], value: "" },
                        { label: "Age", name: "age", type: "number", placeholder: "Enter Age", value: doctorData.age },
                        { label: "Email", name: "email", type: "email", placeholder: "Enter Email", value: doctorData.email },
                        { label: "Country", name: "country", type: "text", placeholder: "Enter Country", value: doctorData.country },
                        { label: "State", name: "state", type: "text", placeholder: "Enter State", value: doctorData.state },
                        { label: "City", name: "city", type: "text", placeholder: "Enter City", value: doctorData.city },
                        { label: "Zip Code", name: "zipCode", type: "text", placeholder: "Enter Zip Code", value: doctorData.zipCode },
                        { label: "Address", name: "doctorAddress", type: "text", placeholder: "Enter Address", value: doctorData.doctorAddress },
                        { label: "Description", name: "description", type: "text", placeholder: "Enter Description", value: doctorData.description },
                        { label: "Online Consultation Rate", name: "onlineConsultationRate", type: "text", placeholder: "Enter Consultation Rate", value: doctorData.onlineConsultationRate },
                      ].map((field, index) => (
                        <div className="input-box" key={index}>
                          <div className="label">{field.label}</div>
                          {field.type === 'select' ? (
                            <select name={field.name} value={field.value} onChange={handleInputChange}>
                              {field.options.map((option, i) => (
                                <option value={option} key={i}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              value={field.value}
                              onChange={handleInputChange}
                              placeholder={field.placeholder}
                            />
                          )}
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                      ))}
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
                    {[
                      { label: "Current Hospital", name: "currentHospital", type: "text", placeholder: "Enter Doctor Current Hospital", value: doctorData.currentHospital },
                      { label: "Hospital Name", name: "hospitalName", type: "text", placeholder: "Enter Hospital Name", value: doctorData.hospitalName },
                      { label: "Hospital Address", name: "hospitalAddress", type: "text", placeholder: "Enter Hospital Address", value: doctorData.hospitalAddress },
                      { label: "Hospital Website", name: "worksiteLink", type: "text", placeholder: "Enter Hospital Website", value: doctorData.worksiteLink },
                      { label: "Emergency Contact", name: "emergencyContactNo", type: "text", placeholder: "Enter Emergency Contact", value: doctorData.emergencyContactNo },
                    ].map((field, index) => (
                      <div className="input-box" key={index}>
                        <div className="label">{field.label}</div>
                        <input
                          type={field.type}
                          name={field.name}
                          value={field.value}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                        />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>
                    ))}
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
