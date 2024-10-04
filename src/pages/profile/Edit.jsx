import React from 'react'
import { FaCamera } from "react-icons/fa6";

export const Edit = () => {
  return (
    <div>
        <div className="edit-section">
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
                          <input type="text" placeholder=" Email Address" />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Phone Number* <span>*</span>
                          </div>
                          <input type="number" placeholder=" Phone Number*" />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Hospital Name <span>*</span>
                          </div>
                          <input type="text" placeholder=" Hospital Name" />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Gender <span>*</span>
                          </div>
                          <select name="" id="">
                            <option value="">Male</option>
                            <option value="">Female</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            City <span>*</span>
                          </div>
                          <select name="" id="">
                            <option value="">Surat</option>
                            <option value="">Bhavanagar</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            State <span>*</span>
                          </div>
                          <select name="" id="">
                            <option value="">Gujrat</option>
                            <option value="">Rajasthan</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Country <span>*</span>
                          </div>
                          <select name="" id="">
                            <option value="">India</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="cancel-btn">
                            <button>Cencel</button>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
