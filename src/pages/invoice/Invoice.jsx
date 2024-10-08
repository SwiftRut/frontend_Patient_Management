import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./invoice.css";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import { useGlobal } from "../../hooks/useGlobal";
import { FaEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import hospitalModel from "../../../../backend_Patient_Management/src/models/hospitalModel";
import { useAuth } from "../../hooks/useAuth";

const Invoice = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createBill, updateBill, bill, userData, getAdminProfile } = useGlobal();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAdminProfile(user.id);
      } catch (error) {
        console.error(error);
      }
    };
    setFormData({
      ...formData,
      hospitalName: userData?.hospital?.name,
      hospitalId: userData?.hospital?._id,
      email: userData?.email,
    });
    fetchData();
  }, []);
  console.log(userData);
  const [formData, setFormData] = useState({
    // Hospital Details
    hospitalName: userData?.hospital?.name,

    hospitalId: userData?.hospital?._id,
    otherText: "",
    email: userData?.email,
    billDate: new Date().toISOString().slice(0, 10),
    billTime: new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    }),
    billNumber: "",
    phoneNumber: "",
    hospitalAddress: "",
    logo: null,
    // Patient Details
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    if (bill.id) {
      await updateBill(data, bill.id);
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
                        <div className="input-box">
                          <div className="label">Patient Name</div>
                          <input
                            type="text"
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleInputChange}
                            placeholder="Enter Name"
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
                        <div className="input-box">
                          <div className="label">Discount (%)</div>
                          <input
                            type="number"
                            name="discount"
                            value={formData.discount}
                            onChange={handleInputChange}
                            placeholder="0000"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">Tax</div>
                          <input
                            type="number"
                            name="tax"
                            value={formData.tax}
                            onChange={handleInputChange}
                            placeholder="0000"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>{" "}
                        <div className="input-box">
                          <div className="label">Amount</div>
                          <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            placeholder="0000"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">Total Amount</div>
                          <input
                            type="number"
                            name="totalAmount"
                            value={formData.totalAmount}
                            onChange={handleInputChange}
                            placeholder="0000"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">Payment Type</div>
                          <select
                            name="paymentType"
                            value={formData.paymentType}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Payment Type</option>
                            <option value="cash">Cash</option>
                            <option value="card">Card</option>
                            <option value="online">Online</option>
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
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="Enter Age"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="input-box">
                          <div className="label">Gender</div>
                          <select
                            name="gender"
                            value={formData.gender}
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
                          <div className="label">Address</div>
                          <input
                            type="text"
                            name="patientAddress"
                            value={formData.patientAddress}
                            onChange={handleInputChange}
                            placeholder="Enter Address"
                          />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>
                        <div className="save-btn flex">
                          <button type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="patient-details">
              <div className="content">
                <div className="head flex">
                  <p>Patient</p>
                  <button className="flex">
                    <FaEdit />
                    <span>Add New Field</span>
                  </button>
                </div>

                <div className="details flex">
                  <div className="form-box">
                    <form action="" className="flex">
                      <div className="input-box">
                        <div className="label"> Name</div>
                        <select name="" id="" style={{ width: "100%" }}>
                          <input type="text" placeholder="Enter Name" />
                          <option>Enter Name</option>
                        </select>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Disease Name</div>
                        <input type="text" placeholder="Enter Disease Name" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Doctor Name</div>
                        <select name="" id="" style={{ width: "100%" }}>
                          <option>Enter Name</option>
                        </select>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Description</div>
                        <input type="text" placeholder="Enter Description" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Discount (%)</div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Tax</div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Amount</div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Total Amount</div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Payment Type</div>
                        <select name="" id="">
                          <option>Select Payment Type</option>
                        </select>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Age</div>
                        <input type="text" placeholder="Enter Age" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Gender</div>
                        <select name="" id="">
                          <option>Select Gender</option>
                        </select>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Address</div>
                        <input type="text" placeholder="Enter Address" />
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
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* create-bill hospital & patient details section end */}
    </div>
  );
};

export default Invoice;
