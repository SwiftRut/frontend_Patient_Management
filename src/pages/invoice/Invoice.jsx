import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./invoice.css";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import { useGlobal } from "../../hooks/useGlobal";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import AddFieldModal from "../../AddFieldsModal";
import PatientDetailsForm from "../PatientDetailsForm";

const Invoice = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createBill, updateBill, bill, userData, getAdminProfile } = useGlobal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dynamicFields, setDynamicFields] = useState([]);
  const [currentSection, setCurrentSection] = useState(null);
    // State for managing patient form data
    const [patientData, setPatientData] = useState({
      name: '',
      diseaseName: '',
      doctorName: '',
      description: '',
      discount: '',
      tax: '',
      amount: '',
      totalAmount: '',
      paymentType: '',
      age: '',
      gender: '',
      address: '',
    });
    const openModal = (section) => {
      setCurrentSection(section);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentSection(null);
    };
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalId: "",
    otherText: "",
    email: "",
    billDate: new Date().toISOString().slice(0, 10),
    billTime:"",
    billNumber: "",
    phoneNumber: "",
    hospitalAddress: "",
    logo: null,
    patientName: "",
    diseaseName: "",
    doctorName: "",
    description: "",
    discount: "",
    tax: "",
    amount: "",
    totalAmount: "",
    paymentType: "",
    age: "",
    gender: "",
    patientAddress: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdminProfile(user.id);
        setFormData(prevData => ({
          ...prevData,
          email: data?.email || "",
          hospitalName: data?.hospital?.name || "",
          hospitalId: data?.hospital?._id || "",
          phoneNumber: data?.hospital?.phoneNumber || "",
        }));
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    
    dynamicFields.forEach((field, index) => {
      data.append(`dynamicField_${index}`, JSON.stringify(field));
    });

    try {
      if (bill.id) {
        await updateBill(data, bill.id);
      } else {
        await createBill(data);
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({ ...prevData, logo: e.target.files[0] }));
  };
  const [hospitalDynamicFields, setHospitalDynamicFields] = useState([]);
  const [patientDynamicFields, setPatientDynamicFields] = useState([]);

  const handleDynamicFieldChange = (section, fieldName, value) => {
    if (section === 'hospital') {
      setFormData(prevData => ({ ...prevData, [fieldName]: value }));
    } else if (section === 'patient') {
      setPatientData(prevData => ({ ...prevData, [fieldName]: value }));
    }
  };

  const handleNewField = (field) => {
    console.log('Handling new field:', field, 'for section:', currentSection);
    if (currentSection === 'hospital') {
      setHospitalDynamicFields(prevFields => [...prevFields, field]);
      setFormData(prevData => ({ ...prevData, [field.name]: '' }));
    } else if (currentSection === 'patient') {
      setPatientDynamicFields(prevFields => [...prevFields, field]);
      setPatientData(prevData => ({ ...prevData, [field.name]: '' }));
    }
    closeModal();
  };

  const removeDynamicField = (section, index) => {
    if (section === 'hospital') {
      const fieldToRemove = hospitalDynamicFields[index];
      setHospitalDynamicFields(prevFields => prevFields.filter((_, i) => i !== index));
      setFormData(prevData => {
        const newData = { ...prevData };
        delete newData[fieldToRemove.name];
        return newData;
      });
    } else if (section === 'patient') {
      const fieldToRemove = patientDynamicFields[index];
      setPatientDynamicFields(prevFields => prevFields.filter((_, i) => i !== index));
      setPatientData(prevData => {
        const newData = { ...prevData };
        delete newData[fieldToRemove.name];
        return newData;
      });
    }
  };
  console.log(hospitalDynamicFields)
  return (
    <div>
      {/* create-bill hospital & patient details section start  */}
      <div className="create-bill-section">
        <div className="row">
          <div className="main">
            <div className="title">
              <p>Create Bill</p>
            </div>

            <div className="hospital-details">
              <div className="content">
                <div className="head flex">
                  <p>Hospital Details</p>
                  <button className="flex" onClick={openModal}>
                    <FaEdit />
                    <span>Add New Field</span>
                  </button>
                </div>

                <div className="details flex">
                  <div className="left">
                    <div className="upload-logo">
                      <label htmlFor="logo-upload">
                        <FaImage />
                        <p>
                          <span>Upload a file</span> or drag and drop
                        </p>
                        <h5>PNG, JPG, GIF up to 10MB</h5>
                      </label>
                      <input
                        type="file"
                        id="logo-upload"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>

                  <div className="right">
                    <div className="form-box">
                      <form className="flex" onSubmit={handleSubmit}>
                        <div className="input-box">
                          <div className="label">Name</div>
                          <input
                            type="text"
                            name="hospitalName"
                            value={formData.hospitalName}
                            onChange={handleInputChange}
                            placeholder="Enter Name"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">Other Text</div>
                          <input
                            type="text"
                            name="otherText"
                            value={formData.otherText}
                            onChange={handleInputChange}
                            placeholder="Enter Other Text"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">
                            Email <span>*</span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Email"
                            required
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">
                            Bill Date <span>*</span>
                          </div>
                          <input
                            type="date"
                            name="billDate"
                            value={formData.billDate}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">
                            Bill Time <span>*</span>
                          </div>
                          <input
                            type="time"
                            name="billTime"
                            value={formData.billTime}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">
                            Bill Number <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="billNumber"
                            value={formData.billNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Bill Number"
                            required
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">
                            Phone Number <span>*</span>
                          </div>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Phone Number"
                            required
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">
                            Address <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="hospitalAddress"
                            value={formData.hospitalAddress}
                            onChange={handleInputChange}
                            placeholder="Enter Address"
                            required
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        {hospitalDynamicFields.map((field, index) => (
                    <DynamicField
                      key={index}
                      field={field}
                      value={formData[field.name] || ''}
                      onChange={(name, value) => handleDynamicFieldChange('hospital', name, value)}
                      onRemove={() => removeDynamicField('hospital', index)}
                    />
                  ))}
                        <div className="save-btn flex ml-5">
                          <button type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <PatientDetailsForm
              openModal={() => openModal('patient')}
              patientData={patientData}
              setPatientData={setPatientData}
              dynamicFields={patientDynamicFields}
              onDynamicFieldChange={(name, value) => handleDynamicFieldChange('patient', name, value)}
              onRemoveDynamicField={(index) => removeDynamicField('patient', index)}
            />

            <div className="save-btn flex">
              <button onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
      <AddFieldModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddField={(field) => handleNewField(currentSection, field)}
      />
    </div>
  );
};

export default Invoice;