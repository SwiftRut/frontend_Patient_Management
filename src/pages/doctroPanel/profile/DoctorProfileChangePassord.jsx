import { useState } from "react";
import '../profile/doctorProfile.css'

const DoctorProfileChangePassord = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => { };

  return (
    <div className="doctor-ProfileChangePassword-section">
      <div className="right">
        <div className="content">
          <div className="head">
            <div className="title">
              <p>Change Password</p>
            </div>
            <div className="discription">
              <p>
                To change your password, please fill in the fields below. Your password must contain
                at least 8 characters, it must also include at least one uppercase letter, one
                lowercase letter, one number, and one special character.
              </p>
            </div>
          </div>
          <div className="form-box">
            <form onSubmit={handleSubmit} className="flex">
              <div className="change-input-box">
                <div className="label">
                  Current Password <span>*</span>
                </div>
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>

              <div className="change-input-box">
                <div className="label">
                  New Password <span>*</span>
                </div>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="change-input-box">
                <div className="label">
                  Confirm Password <span>*</span>
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="change-input-box">
                <button type="submit">Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileChangePassord;
