import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import "./invoice.css";
import { formDataObject, PatientBillFields } from "./Contants";
import InputField from "./InputField";
import { useDoctor } from "../../hooks/useDoctor";

const CreateBill = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createBill, updateBill, bill, getAdminProfile } = useGlobal();
  const { getAllDoctors, allDoctors } = useDoctor();
  const [formData, setFormData] = useState(formDataObject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "<<<<<<<<<<<<<< formdata");
    console.log(bill, "<<<<<<<<<<<<<< bill");
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    console.log(data, "<<<<<<<<<<<<<< data");
    try {
      await createBill(data);
      // navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
const HospitalBillFields = [  
    { label: "Patient Name", name: "patientName", type: "text" },
    { label: "Phone Number", name: "phoneNumber", type: "text" },
    { label: "Gender", name: "gender", type: "select", options: ["Select Gender", "Male", "Female", "Other"] },
    { label: "Age", name: "age", type: "text" },
    { label: "Doctor Name", name: "doctorName", type: "select", options: ["Select Doctor Name", ...allDoctors.map((doctor) => doctor.name)] , values: allDoctors.map((doctor) => doctor._id)},
    { label: "Disease Name", name: "diseaseName", type: "text"},
    { label: "Description", name: "description", type: "text" },
    { label: "Payment Type", name: "paymentType", type: "select", options: ["Select Payment Type", "Cash", "Insurance", "Credit Card"] },
    { label: "Bill Date", name: "billDate", type: "date" },
    { label: "Bill Time", name: "billTime", type: "text" },
    { label: "Bill Number", name: "billNumber", type: "text" },
    { label: "Discount (%)", name: "discount", type: "text" },
    { label: "Tax", name: "tax", type: "text" },
    { label: "Amount", name: "amount", type: "text" },
    { label: "Total Amount", name: "totalAmount", type: "text" },
    { label: "Address", name: "address", type: "text" },
  ]
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
                    <form onSubmit={handleSubmit} className="flex">
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

        {formData.paymentType === "Insurance" && <div className="insurance-details">
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
            </div>}
            <div className="save-btn flex">
              <button type="submit" form="create-bill-form" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBill;
