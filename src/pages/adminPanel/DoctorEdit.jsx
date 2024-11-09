import { useEffect, useState } from "react";
import { FaCircleMinus } from "react-icons/fa6";
import './doctorManagement.css';
import apiService from '../../services/api.js';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { countryCodes, DoctorFormData } from "./constants.js";
import { Country, State, City } from "country-state-city"; // Import country-state-city

const DoctorEdit = () => {
  const { doctorId } = useParams(); // Retrieve doctorId from URL parameters
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(DoctorFormData); // Initialize with DoctorFormData
  const [signatureFile, setSignatureFile] = useState(null); // State for signature file
  const [photoFile, setPhotoFile] = useState(null); // State for photo file
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]); // State for countries
  const [states, setStates] = useState([]); // State for states
  const [cities, setCities] = useState([]); // State for cities

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        if (doctorId) {
          const response = await apiService.GetDoctorById(doctorId);
          console.log("Doctor Data Response:", response.data.data); // Log the full data
          if (response.data.data) {
            setDoctorData(response.data.data); // Update state with the doctor dataz
          }
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
    setCountries(Country.getAllCountries()); // Fetch countries
  }, [doctorId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(); // Create a new FormData object

      // Append JSON data to FormData
      for (const [key, value] of Object.entries(doctorData)) {
        formData.append(key, value); // Append each field of doctorData
      }

      // Append signature file if it exists
      if (signatureFile) {
        formData.append('signature', signatureFile); // Append the signature file
      }

      // Append photo file if it exists
      if (photoFile) {
        formData.append('profilePicture', photoFile); // Append the photo file
      }

      // Post the combined FormData to your API
      const response = await apiService.EditDoctor(doctorId, formData);
      console.log("Doctor updated successfully:", response.data);
      alert("Doctor updated successfully!");
      navigate("/doctorManagement");
    } catch (error) {
      console.error("Error updating doctor:", error);
      alert("An error occurred while updating the doctor.");
    }
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSignatureFile(file);
      // Preview signature image
      setDoctorData({ ...doctorData, signature: URL.createObjectURL(file) });
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      // Preview photo image
      setDoctorData({ ...doctorData, avatar: URL.createObjectURL(file) });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });

    if (name === "country") {
      const selectedCountry = countries.find(country => country.isoCode === value);
      setStates(State.getStatesOfCountry(selectedCountry.isoCode)); // Fetch states based on selected country
      setDoctorData(prevData => ({ ...prevData, state: "", city: "" })); // Reset state and city
      setCities([]); // Clear cities
    } else if (name === "state") {
      const selectedState = states.find(state => state.isoCode === value);
      setCities(City.getCitiesOfState(doctorData.country, selectedState.isoCode)); // Fetch cities based on selected state
      setDoctorData(prevData => ({ ...prevData, city: "" })); // Reset city
    }
  };

  if (loading) {
    return <p>Loading doctor data...</p>;
  }

  return (
    <div className="doctorEdit-section">
      <div className="row">
        <div className="main">
          <form onSubmit={handleSubmit}>
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
                        {[ 
                          { label: "Doctor Name", name: "name", type: "text", placeholder: "Enter Doctor Name", value: doctorData.name },
                          { label: "Doctor Qualification", name: "qualification", type: "text", placeholder: "Enter Doctor Qualification", value: doctorData.qualification },
                          { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"], value: doctorData.gender },
                          { label: "Specialty Type", name: "speciality", type: "text", placeholder: "Enter Specialty Type", value: doctorData.speciality },
                          { label: "Working Time", name: "workingTime", type: "text", placeholder: "Enter Working Time", value: doctorData.workingTime },
                          { label: "Work On", name: "workingOn", type: "text", placeholder: "Enter Work On", value: doctorData.workingOn },
                          { label: "Check Up Time", name: "patientCheckupTime", type: "text", placeholder: "Enter Check Up Time", value: doctorData.patientCheckupTime },
                          { label: "Break Time", name: "breakTime", type: "text", placeholder: "Enter Break Time", value: doctorData.breakTime },
                          { label: "Experience", name: "experience", type: "text", placeholder: "Enter Experience", value: doctorData.experience },
                          { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter Phone Number", value: doctorData.phone },
                          { label: "Country Code", name: "countryCode", type: "select", options: countryCodes, value: doctorData.countryCode },
                          { label: "Age", name: "age", type: "number", placeholder: "Enter Age", value: doctorData.age },
                          { label: "Email", name: "email", type: "email", placeholder: "Enter Email", value: doctorData.email },
                          { label: "Country", name: "country", type: "select", options: countries, value: Country.getAllCountries().find(c => c.name === doctorData.country).isoCode  },
                          { label: "State", name: "state", type: "select", options: states, value: doctorData.state, isDisabled: !doctorData.country },
                          { label: "City", name: "city", type: "select", options: cities, value: doctorData.city, isDisabled: !doctorData.state },
                          { label: "Zip Code", name: "zipCode", type: "text", placeholder: "Enter Zip Code", value: doctorData.zipCode },
                          { label: "Address", name: "doctorAddress", type: "text", placeholder: "Enter Address", value: doctorData.doctorAddress },
                          { label: "Description", name: "description", type: "text", placeholder: "Enter Description", value: doctorData.description },
                          { label: "Online Consultation Rate", name: "onlineConsultationRate", type: "text", placeholder: "Enter Consultation Rate", value: doctorData.onlineConsultationRate },
                        ].map((field, index) => (
                          <div className="input-box" key={index}>
                            <div className="label">{field.label}</div>
                            {field.type === 'select' ? (
                              <select name={field.name} value={field.value} onChange={handleInputChange} disabled={field.isDisabled}>
                                <option value="">Select {field.label}</option>
                                {field.options.map((option) => {
                                  if(field.label == "Country Code") {
                                    return (<option key={option.isoCode || option.name} value={option.isoCode || option.name}>
                                  {option.code + ' ' + option.country}
                                  </option>)
                                  }
                                  else if(field.label == "Gender"){
                                    return (<option key={option.isoCode || option.name} value={option.isoCode || option.name}>
                                      {option}
                                      </option>)
                                  }
                                  else{
                                  return(<option key={option.isoCode || option.name} value={option.isoCode || option.name}>
                                    {option.name}
                                  </option>)
                                  }
})}
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
                    <form className="flex">
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
 