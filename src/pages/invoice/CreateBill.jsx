import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import "./invoice.css";
import { formDataObject, PatientBillFields } from "./Contants";
import FormInput from '../../component/common/FormInput';
import { useDoctor } from "../../hooks/useDoctor";
import { usePatient } from "../../hooks/usePatient";

const CreateBill = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createBill } = useGlobal();
  const { getAllDoctors, allDoctors } = useDoctor();
  const { getAllPatients, allPatients, getPatientById } = usePatient();

  const [formData, setFormData] = useState({
    ...formDataObject,
    billDate: new Date().toISOString().split("T")[0],
    billTime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    billNumber: 100,
    totalAmount: 0,
  });

  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [loadingPatients, setLoadingPatients] = useState(true);

  // Function to calculate total amount
  const calculateTotalAmount = (amount, discount, tax) => {
    const amountNumber = parseFloat(amount) || 0;
    const discountNumber = parseFloat(discount) || 0;
    const taxNumber = parseFloat(tax) || 0;

    const discountedAmount = amountNumber - (amountNumber * discountNumber) / 100;
    const totalAmount = discountedAmount + (discountedAmount * taxNumber) / 100;
    return totalAmount.toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    // If patientId changes, fetch and populate patient details
    if (name === "patientId" && value) {
      fetchPatientDetails(value);
    }

    if (["amount", "discount", "tax"].includes(name)) {
      updatedFormData.totalAmount = calculateTotalAmount(
        updatedFormData.amount,
        updatedFormData.discount,
        updatedFormData.tax
      );
    }

    setFormData(updatedFormData);
  };

  // Fetch patient details based on selected patient ID
  const fetchPatientDetails = async (patientId) => {
    try {
      const patientDetails = await getPatientById(patientId);
      setFormData((prev) => ({
        ...prev,
        phone: patientDetails.phone || "", 
        age: patientDetails.age || "",
        gender: patientDetails.gender || "",
        address: patientDetails.address || "",
        patientName: `${patientDetails.firstName} ${patientDetails.lastName}`, 
      }));
    } catch (error) {
      console.error("Error fetching patient details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBill(formData); 
      setFormData((prev) => ({
        ...prev,
        billNumber: prev.billNumber + 1, 
        totalAmount: 0, 
      }));
      navigate("/"); 
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoadingDoctors(true);
      await getAllDoctors();
      setLoadingDoctors(false);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoadingPatients(true);
      await getAllPatients();
      setLoadingPatients(false);
    };
    fetchPatients();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setFormData((prev) => ({
        ...prev,
        billTime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), 
      }));
    }, 60000); 

    return () => clearInterval(interval);
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
    { label: "Phone Number", name: "phone", type: "text", readOnly: true },
    {
      label: "Gender",
      name: "gender",
      type: "select",
      options: [
        { label: "Select Gender", value: "" },
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
      value: formData.gender, 
    },
    { label: "Age", name: "age", type: "text", readOnly: true },
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
    {
      label: "Bill Date",
      name: "billDate",
      type: "date",
      value: formData.billDate,
      readOnly: true,
    },
    {
      label: "Bill Time",
      name: "billTime",
      type: "text",
      value: formData.billTime,
      readOnly: true,
    },
    {
      label: "Bill Number",
      name: "billNumber",
      type: "text",
      value: formData.billNumber,
      readOnly: true,
    },
    { label: "Discount (%)", name: "discount", type: "text" },
    { label: "Tax", name: "tax", type: "text" },
    { label: "Amount", name: "amount", type: "text" },
    {
      label: "Total Amount",
      name: "totalAmount",
      type: "text",
      value: formData.totalAmount,
      readOnly: true,
    },
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
                    <form onSubmit={handleSubmit} className="flex" id="create-bill-form">
                      {HospitalBillFields.map((field) => (
                        <FormInput
                          key={field.name}
                          label={field.label}
                          type={field.type}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleChange({
                            target: {
                              name: field.name,
                              value: e.target.value
                            }
                          })}
                          placeholder={field.placeholder}
                        />
                      ))}
                    </form>
                  </div>
                </div>
              </div>
            </div>

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
                          <FormInput
                            key={index}
                            label={field.label}
                            type={field.type}
                            value={formData[field.name] || ''}
                            onChange={(e) => handleChange({
                              target: {
                                name: field.name,
                                value: e.target.value
                              }
                            })}
                            placeholder={field.placeholder}
                          />
                        ))}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="save-btn flex">
              <button type="submit" form="create-bill-form" onClick={handleSubmit}>
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
