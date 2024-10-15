import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import "./invoice.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";
import InputField from './InputField';
import { formDataObject, PatientBillFields } from './Contants';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import { useGlobal } from '../../hooks/useGlobal';

const EditBill = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const { user } = useAuth();
  const { createBill, updateBill, bill, getBillById } = useGlobal();
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
    try {
      await updateBill(formData, bill.id);
      // navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
    useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBillById(id);
        console.log(data, "data")
        setFormData({
          ...data,});
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };
    fetchData();
  }, []);

  const HospitalBillFields = [  
    { label: "Patient Name", name: "patientName", type: "text" },
    { label: "Phone Number", name: "phoneNumber", type: "text" },
    { label: "Gender", name: "gender", type: "select", options: [
      { label: "Select Gender", value: "" },
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" }
    ]},
    { label: "Age", name: "age", type: "text" },
    {
      label: "Doctor Name",
      name: "doctorId",
      type: "select",
      options: [
        { label: "Select Doctor Name", value: "" },
        ...allDoctors.map((doctor) => ({ label: doctor.name, value: doctor._id }))
      ],
    },
    { label: "Disease Name", name: "diseaseName", type: "text"},
    { label: "Description", name: "description", type: "text" },
    { label: "Payment Type", name: "paymentType", type: "select", options: [
      { label: "Select Payment Type", value: "" },
      { label: "Cash", value: "Cash" },
      { label: "Insurance", value: "Insurance" },
      { label: "Credit Card", value: "Credit Card" }
    ]},
    { label: "Bill Date", name: "billDate", type: "date" },
    { label: "Bill Time", name: "billTime", type: "text" },
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

            <div className="save-btn flex">
              <button type="submit" form="create-bill-form" onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBill