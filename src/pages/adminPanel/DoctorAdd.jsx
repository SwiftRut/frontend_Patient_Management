import React from 'react'

const DoctorAdd = () => {
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

                      <FaImage />
                      <p><span>Upload a file</span> or drag and drop</p>
                      <h5>PNG, JPG, GIF up to 10MB</h5>
                    </div>
                  </div>
                  <div className="right">
                    <div className="form-box">
                      <form action="" className="flex">
                        <div className="input-box">
                          <div className="label">First Name</div>
                          <input type="text" placeholder="Enter First Name" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">Other Text</div>
                          <input type="text" placeholder="Enter Other Text" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Email <span>*</span>
                          </div>
                          <input type="text" placeholder="Enter Email" />
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
                            Phone Number <span>*</span>
                          </div>
                          <input type="text" placeholder="Phone Number" />
                          <div className="minus-circle">
                            <FaCircleMinus />
                          </div>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Address <span>*</span>
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
                        <input type="text" placeholder="Enter Name" />
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
                          Doctor Name
                        </div>
                        <input type="text" placeholder="Enter Doctor Name" />
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
                          Age
                        </div>
                        <input type="text" placeholder="Enter Age" />
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

            <div className="save-btn flex">
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorAdd