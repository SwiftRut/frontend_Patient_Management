import React from "react";
import "./pages.css";

const Registration = () => {
  return (
    <>
      <div className="registration-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="head">
                <p>Registration</p>
              </div>
              <div className="form-box">
                <form action="" className="flex">
                  <div className="input-box">
                    <div className="label">
                      First Name <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter First Name" />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Last Name <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Last Name" />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Email Address <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Email Address" />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Phone Number <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Phone Number" />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Country <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select Country</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      State <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select State</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      City <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select City</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Select Hospital <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select Hospital*</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>
                        <button>Create Hospital</button>
                      </option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Password <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Password" />
                    <div className="eye">
                      <img src="../eye-slash.png" alt="" />
                      {/* <img src="../Vector.png" alt="" /> */}
                    </div>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Confirm Password <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Confirm Password" />
                    <div className="eye">
                      <img src="../eye-slash.png" alt="" />
                      {/* <img src="../Vector.png" alt="" /> */}
                    </div>
                  </div>

                  <div className="condition">
                    <div className="policies">
                      <input type="radio" />
                      <p>
                        I agree to all the <span>T&C</span> and{" "}
                        <span>Privacy Policies.</span>
                      </p>
                    </div>

                    <div className="register-btn">
                      <button>Register</button>
                    </div>
                    <div className="login-btn">
                      <p>Already have an account ? Login</p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="img-box"></div>
            </div>
          </div>
        </div>
      </div>

      {/* create-Hospital form start */}

      {/* <div className="hospital-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="head">
                <p>Hospital Name</p>
              </div>
              <div className="form-box">
                <form action="" className="flex">

                  <div className="input-box">
                    <div className="label">
                    Hospital Name <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Hospital Name" />
                  </div>

                  <div className="input-box">
                    <div className="label">
                    Hospital Address <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Hospital Address" />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Country <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select Country</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      State <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select State</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      City <span>*</span>
                    </div>

                    <select name="" id="">
                      <option>Select City</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Zip Code <span>*</span>
                    </div>
                    <input type="text" placeholder="Enter Zip Code" />
                  </div>

                  <div className="btn flex">
                    <div className="cancel-btn">
                      <button>Cancel</button>
                    </div>

                    <div className="save-btn">
                      <button>Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* create-Hospital form end */}
    </>
  );
};

export default Registration;
