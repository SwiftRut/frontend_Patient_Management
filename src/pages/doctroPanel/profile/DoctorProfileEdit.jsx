
import { FaCamera } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const DoctorProfileEdit = () => {
  return (
    <div>
      <div className="doctor-edit-section">
        <div className="row">
          <div className="main">
            <div className="top"></div>
            <div className="profile-setting">
              <div className="head">
                <p>Profile Setting</p>
              </div>
              <div className="content flex">
                <div className="left">
                  <div className="img-box">
                    <div className="img">
                      <img src="../img/profile.png" alt="" />
                    </div>
                    <div className="change-profile">
                      <ul>
                        <li><FaCamera /><span>Change Profile</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="content">
                    <div className="head">
                      <div className="title">
                        <p>Edit Profile</p>
                      </div>
                    </div>
                    <div className="form-box">
                      <form className="flex">
                        <div className="input-box">
                          <div className="label">First Name <span>*</span></div>
                          <input
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Last Name <span>*</span></div>
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Email Address <span>*</span></div>
                          <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Phone Number <span>*</span></div>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Hospital Name <span>*</span></div>
                          <input
                            type="text"
                            name="hospitalName"
                            placeholder="Hospital Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Gender <span>*</span></div>
                          <select
                            name="gender"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">Country <span>*</span></div>
                          <select name="" id="">
                            <option value="">1</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">State <span>*</span></div>
                          <select name="" id="">
                            <option value="">1</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">City <span>*</span></div>
                          <select name="" id="">
                            <option value="">1</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="save-btn">
                            <button type="submit">Save</button>
                          </div>
                          <div className="cancel-btn">
                            <NavLink to={'/doctor/profile'}>
                              <button type="button">Cancel</button>
                            </NavLink>
                          </div>
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
  )
}

export default DoctorProfileEdit