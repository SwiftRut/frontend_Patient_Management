import React from 'react'
import "../pages.css";
import { IoTimeOutline } from "react-icons/io5";

export default function AdminOtp() {
  return (
    <div>
      <div className="admin-otp-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="admin-otp-content">
                <div className="head">
                  <p>Enter OTP</p>
                </div>

                <div className="note">
                  <p>Please enter the 6 digit code that send to your phone number.</p>
                </div>

                <div className="admin-otp-form-box">
                  <form className="flex">

                    <div className="input-box">
                      <input type="number"
                        placeholder="0"
                      />
                    </div>

                    <div className="input-box">
                      <input type="number"
                        placeholder="0"
                      />
                    </div>

                    <div className="input-box">
                      <input type="number"
                        placeholder="0"
                      />
                    </div>

                    <div className="input-box">
                      <input type="number"
                        placeholder="0"
                      />
                    </div>

                    <div className="input-box">
                      <input type="number"
                        placeholder="0"
                      />
                    </div>

                    <div className="input-box">
                      <input type="number"
                        placeholder="0"
                      />
                    </div>

                    <div className="condition">

                      <div className="resend-otp flex">
                        <div className="sec">
                          <p className='flex'><IoTimeOutline /><span>00:30</span>sec</p>
                        </div>
                        <div className="r-otp">
                          <button>Resend Otp</button>
                        </div>
                      </div>

                      <div className="verify">
                        <button type="submit">Verify</button>
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
