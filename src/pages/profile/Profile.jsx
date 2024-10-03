import React from "react";
import "../profile/profile.css";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { FaEdit } from "react-icons/fa";

export default function Profile() {
  return (
    <div>
      <div className="profile-section">
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
                    <p>Lincoln Philips</p>
                  </div>
                  <div className="menu">
                    <p>Menu</p>

                    <ul>
                      <li>
                        <CgProfile /> <span>Profile</span>
                      </li>
                      <li>
                        <FaLock /> <span>Change Password</span>
                      </li>
                      <li>
                        <FaStickyNote /> <span>Terms & Condition</span>
                      </li>
                      <li>
                        <SiSpringsecurity /> <span>Privacy Policy</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="right">
                  <div className="content">
                    <div className="head flex">
                      <div className="title">
                        <p>Profile</p>
                      </div>
                      <div className="edit">
                        <button className="flex">
                          <FaEdit />
                          <span>Edit Profile</span>
                        </button>
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
                          <input type="text" placeholder=" Phone Number*" />
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
                          <input type="text" placeholder=" Gender" />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            City <span>*</span>
                          </div>
                          <input type="text" placeholder=" City" />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            State <span>*</span>
                          </div>
                          <input type="text" placeholder=" State" />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Country <span>*</span>
                          </div>
                          <input type="text" placeholder=" Country" />
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
}
