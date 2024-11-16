import { useState } from "react";
import '../../pages/profile/profile.css';
import apiService from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {toast} from 'react-hot-toast';

const ProfileChangePassword = () => {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false); 
  const [showNewPassword, setShowNewPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  const changePassword = async (id, userData) => {
    try {
      const response = await apiService.ChangePassword(id, userData);
      toast.success("Password changed successfully");   
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Error changing password");
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New Password and Confirm Password do not match.");     
      return;
    }
    changePassword(user.id, { currentPassword, newPassword, confirmPassword });
  };

  return (
    <div className="ProfileChangePassword-section">
      <div className="right">
        <div className="content">
          <div className="head">
            <div className="title">
              <p>Change Password</p>
            </div>
            <div className="discription">
              <p>
                To change your password, please fill in the fields below. Your
                password must contain at least 8 characters, it must also
                include at least one uppercase letter, one lowercase letter,
                one number, and one special character.
              </p>
            </div>
          </div>
          <div className="form-box">
            <form onSubmit={handleSubmit} className="flex">
              <div className="change-input-box">
                <div className="label">
                  Current Password <span>*</span>
                </div>
                <div className="password-input-container">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Enter Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <div className="eye" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                    {showCurrentPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </div>
                </div>
              </div>

              <div className="change-input-box">
                <div className="label">
                  New Password <span>*</span>
                </div>
                <div className="password-input-container">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <div className="eye" onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </div>
                </div>
              </div>

              <div className="change-input-box">
                <div className="label">
                  Confirm Password <span>*</span>
                </div>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                  </div>
                </div>
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

export default ProfileChangePassword;