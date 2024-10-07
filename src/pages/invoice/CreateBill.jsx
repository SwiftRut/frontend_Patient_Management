import React from "react";
import { FaEdit } from "react-icons/fa";
import "./invoice.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaImage } from "react-icons/fa";

const CreateBill = () => {
  return (
    <div>
      {/* create-bill & insurance section start  */}

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
                    <form action="" className="flex">

                      <div className="input-box">
                        <div className="label"> Patient Name</div>
                        <input type="text" placeholder="Enter Patient Name" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label"> Phone Number</div>
                        <input type="text" placeholder="Enter Phone Number " />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Gender
                        </div>
                        <select name="" id="">
                          <option >Select Gender</option>
                        </select>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Age
                        </div>
                        <input type="text" placeholder="Enter Age" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Doctor Name
                        </div>
                        <input type="text" placeholder="Enter Doctor Name" />
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
                        <div className="label">
                          Description
                        </div>
                        <input type="text" placeholder="Enter Description" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Payment Type
                        </div>
                        <select name="" id="">
                          <option >Select Payment Type</option>
                        </select>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Bill Date <span>*</span>
                        </div>
                        <input type="date" placeholder="Enter Bill Date" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Bill Time <span>*</span>
                        </div>
                        <input type="text" placeholder="Enter Bill Time" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Bill Number <span>*</span>
                        </div>
                        <input type="text" placeholder="Enter Bill Number" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Discount (%)
                        </div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Tax
                        </div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Amount
                        </div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Total Amount
                        </div>
                        <input type="text" placeholder="0000" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>





                      <div className="input-box">
                        <div className="label">
                          Address
                        </div>
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

            <div className="insurance-details">
              <div className="content">

                <div className="head">
                  <p>Insurance Details</p>
                </div>

                <div className="details flex">
                  <div className="form-box">
                    <form action="" className="flex">

                      <div className="input-box">
                        <div className="label"> Insurance Company</div>
                        <input type="text" placeholder="Enter Insurance Company" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Insurance Plan</div>
                        <input type="text" placeholder="Enter Insurance Plan" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Claim Amount
                        </div>
                        <input type="text" placeholder="Enter Claim Amount" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Claimed Amount
                        </div>
                        <input type="text" placeholder="Enter Claimed Amount" />
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

      {/* create-bill & insurance section end */}
    </div>
  )
}

export default CreateBill