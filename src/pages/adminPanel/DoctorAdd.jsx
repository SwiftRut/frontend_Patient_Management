import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaCircleMinus, FaImage } from "react-icons/fa6";
import './doctorManagement.css'
import { FaLink } from "react-icons/fa6";

const DoctorAdd = () => {
  return (
    <div>
      <div className="doctorAdd-section">
        <div className="row">
          <div className="main">

            <div className="top">
              <div className="content">
                <div className="head">
                  <p> Add New Doctor</p>
                </div>

                <div className="details flex">
                  <div className="left flex">
                    <div className="choose-photo">
                      <div className="image">
                        <img src="../img/doctorAdd.png" alt="" />
                      </div>

                      <p>Choose Photo</p>
                    </div>

                    <div className="upload-sign">
                      <div className="title">
                        <p>Signature</p>
                      </div>
                    <div className="sign">
                      <FaImage />
                      <p>
                      Upload a file
                      </p>
                      <h5>PNG Up To 5MB</h5>
                    </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-box">
                      <form action="" className="flex">

                        <div className="input-box">
                          <div className="label">Doctor Name</div>
                          <input type="text" placeholder="Enter Doctor Name " />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Doctor Qualification</div>
                          <input type="text" placeholder="Enter Doctor Qualification" />
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
                          Specialty Type 
                          </div>
                          <input type="date" placeholder="Enter Specialty Type" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Work On
                          </div>
                          <select name="" id="">
                            <option >Select Work On</option>
                          </select>
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Working Time
                          </div>
                          <input type="text" placeholder="Enter Working Time" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Check Up Time 
                          </div>
                          <input type="text" placeholder="Enter Check Up Time" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Break Time 
                          </div>
                          <input type="text" placeholder="Enter Break Time" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Experience 
                          </div>
                          <input type="text" placeholder="Enter Experience" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Phone Number 
                          </div>
                          <input type="text" placeholder="Enter Phone Number" />
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
                          Doctor Email 
                          </div>
                          <input type="text" placeholder="Enter Doctor Email" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Country 
                          </div>
                          <select name="" id="">
                            <option >Select Country</option>
                            <option >1</option>
                          </select>
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          State 
                          </div>
                          <select name="" id="">
                            <option >Select State</option>
                            <option >1</option>
                          </select>
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          City 
                          </div>
                          <select name="" id="">
                            <option >Select City</option>
                            <option >1</option>
                          </select>
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Zip code 
                          </div>
                          <input type="text" placeholder="Enter Zip code" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                          Doctor Address 
                          </div>
                          <input type="text" placeholder="Enter Doctor Address" />
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
                          Online Consultation Rate 
                          </div>
                          <input type="text" placeholder="Enter Online Consultation Rate" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

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
                    <form action="" className="flex">

                      <div className="input-box">
                        <div className="label"> Doctor Current Hospital</div>
                        <input type="text" placeholder="Enter Doctor Current Hospital" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label"> Hospital Name</div>
                        <input type="text" placeholder="Enter Hospital Name" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Hospital Address</div>
                        <input type="text" placeholder="Enter Hospital Address" />
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Hospital Website Link</div>
                        <input type="text" placeholder="Enter Hospital Website Link" />
                        <div className="link-icon">
                        <FaLink />
                      </div>
                        <div className="minus-circle">
                          <FaCircleMinus />
                        </div>
                      </div>

                      <div className="input-box">
                        <div className="label">Emergency Contact Number</div>
                        <input type="text" placeholder="Enter Emergency Contact Number" />
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
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAdd;
