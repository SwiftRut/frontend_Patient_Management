import React from "react";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import DynamicField from "./DynamicField";
import { FaEdit } from "react-icons/fa";

const HospitalDetailsForm = ({
  formData,
  handleInputChange,
  handleFileChange,
  handleSubmit,
  hospitalDynamicFields,
  handleDynamicFieldChange,
  removeDynamicField,
  openModal,
}) => {
  return (
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
                    value={formData[field.name] || ""}
                    onChange={(name, value) => handleDynamicFieldChange("hospital", name, value)}
                    onRemove={() => removeDynamicField("hospital", index)}
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
  );
};

export default HospitalDetailsForm;
