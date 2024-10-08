import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./invoice.css";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import { useGlobal } from "../../hooks/useGlobal";
import { FaEdit } from "react-icons/fa";

const Invoice = () => {
  const navigate = useNavigate();
  const { createBill, updateBill, bill } = useGlobal();

  const [formData, setFormData] = useState({
    firstName: "",
    otherText: "",
    email: "",
    billDate: "",
    billTime: "",
    billNumber: "",
    phoneNumber: "",
    address: "",
    name: "",
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
    logo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    if (bill.id) {
      await updateBill(data,bill.id);
    } else {
      await createBill(data);
    }
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  return (
    <div>
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
                  <button className="flex">
                    <FaEdit />
                    <span>Add New Field</span>
                  </button>
                </div>

                <div className="details flex">
                  <div className="left">
                    <div className="upload-logo">
                      <label htmlFor="logo-upload">
                        <FaImage />
                        <p><span>Upload a file</span> or drag and drop</p>
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
                          <div className="label">First Name</div>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
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
                          <div className="label">Email <span>*</span></div>
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Email"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Bill Date <span>*</span></div>
                          <input
                            type="date"
                            name="billDate"
                            value={formData.billDate}
                            onChange={handleInputChange}
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Bill Time <span>*</span></div>
                          <input
                            type="text"
                            name="billTime"
                            value={formData.billTime}
                            onChange={handleInputChange}
                            placeholder="Enter Bill Time"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Bill Number <span>*</span></div>
                          <input
                            type="text"
                            name="billNumber"
                            value={formData.billNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Bill Number"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Phone Number <span>*</span></div>
                          <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Address <span>*</span></div>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter Address"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Patient Name</div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Patient Name"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Disease Name</div>
                          <input
                            type="text"
                            name="diseaseName"
                            value={formData.diseaseName}
                            onChange={handleInputChange}
                            placeholder="Enter Disease Name"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Doctor Name</div>
                          <input
                            type="text"
                            name="doctorName"
                            value={formData.doctorName}
                            onChange={handleInputChange}
                            placeholder="Enter Doctor Name"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Description</div>
                          <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Enter Description"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        {/* Repeat for additional fields as needed */}

                        <div className="save-btn flex">
                          <button type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
