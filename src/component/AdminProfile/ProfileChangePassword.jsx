import React from "react";
import '../../pages/profile/profile.css'

const ProfileChangePassword = () => {
  return (
    <div>
      <div className="ProfileChangePassword-section">
        <div className="right">
          <div className="content">
            <div className="head">
              <div className="title">
                <p>Change  Password </p>
              </div>
              <div className="discription">
                <p>
                  To change your password, please fill in the fields below. Your
                  password must contain at least 8 characters, it must also
                  include at least one upper case letter, one lower case letter,
                  one number and one special character.
                </p>
              </div>
            </div>
            <div className="form-box">
              <form action="" className="flex">
                <div className="change-input-box">
                  <div className="label">
                    Current Password <span>*</span>
                  </div>
                  <input type="number" placeholder="Enter Current Password " />
                  <div className="eye">
                    <img src="../img/eye-slash.png" alt="" />
                    {/* <img src="../img/Vector.png" alt="" /> */}
                  </div>
                </div>

                <div className="change-input-box">
                  <div className="label">
                    New Password <span>*</span>
                  </div>
                  <input type="number" placeholder="New Password" />
                  <div className="eye">
                    <img src="../img/eye-slash.png" alt="" />
                    {/* <img src="../img/Vector.png" alt="" /> */}
                  </div>
                </div>

                <div className="change-input-box">
                  <div className="label">
                    Conform Password <span>*</span>
                  </div>
                  <input type="number" placeholder=" Conform Password" />
                  <div className="eye">
                    <img src="../img/eye-slash.png" alt="" />
                    {/* <img src="../img/Vector.png" alt="" /> */}
                  </div>
                </div>

                <div className="change-input-box">
                  <button>Change Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChangePassword;