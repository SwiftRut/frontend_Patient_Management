import React from 'react'
import '../pages.css'

export default function AdminChangePassword() {
  return (
    <div>
      <div className="changePassword-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="changePassword-content">
                <div className="head">
                  <p>Reset Password</p>
                </div>

                <div className="changePassword-form-box">
                  <form className="flex">

                    <div className="input-box">
                      <div className="label">
                        New Password <span>*</span>
                      </div>
                      <input type="text"
                        placeholder="Enter New Password "
                      />
                      <div className="eye">
                        <img src="../img/eye-slash.png" alt="" />
                        {/* <img src="../img/Vector.png" alt="" /> */}
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="label">
                        Confirm Password <span>*</span>
                      </div>
                      <input type="text"
                        placeholder="Enter Confirm Password "
                      />
                      <div className="eye">
                        <img src="../img/eye-slash.png" alt="" />
                        {/* <img src="../img/Vector.png" alt="" /> */}
                      </div>
                    </div>

                    <div className="condition">

                      <div className="otp">
                        <button type="submit">Reset Password</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
            <div className="img-box"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
