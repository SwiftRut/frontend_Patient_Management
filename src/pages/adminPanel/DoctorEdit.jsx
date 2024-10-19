import { useEffect, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import './doctorManagement.css';
import apiService from '../../services/api.js';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doctorEditFormFields, doctorEditFormHospitalFields, DoctorFormData } from "./constants.js";
import { useDoctor } from "../../hooks/useDoctor.jsx";


//TODO: Signutrue is not showing up while editing
//TODO: Hospital Id with help of the select hospital field is not added here

const DoctorEdit = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [signatureFile, setSignatureFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getDoctorById} = useDoctor();
  const [doctorData, setDoctorData] = useState(DoctorFormData);

  useEffect(async () => {
    setDoctorData(await getDoctorById(doctorId));
    setLoading(false);
 }, [doctorId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let updatedDoctorData = { ...doctorData };

      if (signatureFile) {
        const signatureUrl = await uploadFile(signatureFile);
        updatedDoctorData.signature = signatureUrl; 
      }

      if (photoFile) {
        const photoUrl = await uploadFile(photoFile); 
        updatedDoctorData.avatar = photoUrl;
      }

      const response = await apiService.EditDoctor(doctorId, updatedDoctorData);
      console.log("Doctor updated successfully:", response.data);
      alert("Doctor updated successfully!");
      navigate("/doctorManagement");
    } catch (error) {
      console.error("Error updating doctor:", error);
      alert("An error occurred while updating the doctor.");
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await apiService.uploadFile(formData); 
    return response.data.url;
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSignatureFile(file);
      setDoctorData({ ...doctorData, signature: URL.createObjectURL(file) });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setDoctorData({ ...doctorData, avatar: URL.createObjectURL(file) });
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
                        <img src={doctorData.avatar} alt="Doctor Avatar" />
                      </div>

                      <div className="choose-img">
                        <label htmlFor="photo-upload" className="upload-label">Choose Photo</label>
                        <input
                          id="photo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          style={{ display: 'none' }} // Hide the file input
                        />
                      </div>
                    </div>

                    <div className="upload-sign">
                      <div className="title">
                        <p>Signature</p>
                      </div>
                      <div className="sign">
                        <img src={doctorData.signature} alt="Doctor Signature" />
                        <label htmlFor="signature-upload" className="upload-label">Upload a file</label>
                        <h5>PNG Up To 5MB</h5>
                        <input
                          id="signature-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleSignatureChange}
                          style={{ display: 'none' }} // Hide the file input
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-box">
                      <form className="flex">
                        {doctorEditFormFields?.map((field, index) => (
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
                                value={doctorData[field.name]}
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
                      {doctorEditFormHospitalFields?.map((field, index) => (
                        <div className="input-box" key={index}>
                          <div className="label">{field.label}</div>
                          <input
                            type={field.type}
                            name={field.name}
                            value={doctorData[field.name]}
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