import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import "./invoice.css";
import { formDataObject, PatientBillFields } from "./Contants";
import InputField from "./InputField";
import { useDoctor } from "../../hooks/useDoctor";
import { usePatient } from "../../hooks/usePatient";

const CreateBill = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createBill } = useGlobal();
  const { getAllDoctors, allDoctors } = useDoctor();
  const { getAllPatients, allPatients } = usePatient();
  const [formData, setFormData] = useState(formDataObject);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [loadingPatients, setLoadingPatients] = useState(true);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBill(formData); // Submit as plain object
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Fetch doctors when the component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoadingDoctors(true);
      await getAllDoctors(); // Fetch all doctors
      setLoadingDoctors(false);
    };
    fetchDoctors();
  }, []);

  // Fetch patients when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      setLoadingPatients(true);
      await getAllPatients(); // Corrected to fetch patients
      setLoadingPatients(false);
    };
    fetchPatients();
  }, []);

  // Hospital bill fields
  const HospitalBillFields = [
    {
      label: "Patient Name",
      name: "patientId",
      type: "select",
      options: loadingPatients
        ? [{ label: "Loading...", value: "" }]
        : [
            { label: "Select Patient Name", value: "" },
            ...(Array.isArray(allPatients) && allPatients.length > 0
              ? allPatients.map((patient) => ({
                  label: `${patient.firstName} ${patient.lastName}`,
                  value: patient._id,  
                }))
              : []),
          ],
    },
    { label: "Phone Number", name: "phoneNumber", type: "text" },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: [
        { label: "Select Gender", value: "" },
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
      ],
    },
    { label: "Age", name: "age", type: "text" },
    {
      label: "Doctor Name",
      name: "doctorId",
      type: "select",
      options: loadingDoctors
        ? [{ label: "Loading...", value: "" }]
        : [
            { label: "Select Doctor Name", value: "" },
            ...(Array.isArray(allDoctors) && allDoctors.length > 0
              ? allDoctors.map((doctor) => ({
                  label: doctor.name,
                  value: doctor._id,
                }))
              : []),
          ],
    },
    { label: "Disease Name", name: "diseaseName", type: "text" },
    { label: "Description", name: "description", type: "text" },
    {
      label: "Payment Type",
      name: "paymentType",
      type: "select",
      options: [
        { label: "Select Payment Type", value: "" },
        { label: "Cash", value: "Cash" },
        { label: "Insurance", value: "Insurance" },
        { label: "Credit Card", value: "Credit Card" },
      ],
    },
    { label: "Bill Date", name: "billDate", type: "date" },
    { label: "Bill Time", name: "billTime", type: "time" },
    { label: "Bill Number", name: "billNumber", type: "text" },
    { label: "Discount (%)", name: "discount", type: "text" },
    { label: "Tax", name: "tax", type: "text" },
    { label: "Amount", name: "amount", type: "text" },
    { label: "Total Amount", name: "totalAmount", type: "text" },
    { label: "Address", name: "address", type: "text" },
  ];

  return (
    <div>
      <div className="bill-insurance-section">
        <div className="row">
          <div className="main">
            <div className="title">
              <p>Create Bill</p>
            </div>

            <div className="patient-details">
              <div className="content">
                <div className="details flex">
                  <div className="form-box">
                    {/* Added missing form id */}
                    <form onSubmit={handleSubmit} className="flex" id="create-bill-form">
                      {HospitalBillFields.map((field, index) => (
                        <InputField
                          key={index}
                          {...field}
                          value={formData[field.name]}
                          onChange={handleChange}
                        />
                      ))}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Render additional insurance details if the payment type is "Insurance" */}
            {formData.paymentType === "Insurance" && (
              <div className="insurance-details">
                <div className="content">
                  <div className="head">
                    <p>Insurance Details</p>
                  </div>

                  <div className="details flex">
                    <div className="form-box">
                      <form className="flex">
                        {PatientBillFields.map((field, index) => (
                          <InputField
                            key={index}
                            {...field}
                            value={formData[field.name]}
                            onChange={handleChange}
                          />
                        ))}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="save-btn flex">
              <button
                type="submit"
                form="create-bill-form" // Refers to the form id
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBill;
