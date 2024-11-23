import { useState } from "react";
import apiService from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfileChangePassword = () => {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const passwordRegex =
/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+{}:;<>?,.@])[A-Za-z\d!$%^&*()_+{}:;<>?,.@]{8,}$/

  const changePassword = async (id, userData) => {
    try {
      const response = await apiService.ChangePassword(id, userData);
      toast.success("Password changed successfully");
      navigate("/profile");
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error("Error changing password");
      throw error;
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Current Password
    if (!currentPassword) {
      formErrors.currentPassword = "Current password is required.";
      isValid = false;
    }

    // Validate New Password
    if (!newPassword) {
      formErrors.newPassword = "New password is required.";
      isValid = false;
    } else if (!passwordRegex.test(newPassword)) {
      formErrors.newPassword =
        "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.";
      isValid = false;
    }

    // Validate Confirm Password
    if (!confirmPassword) {
      formErrors.confirmPassword = "Confirm password is required.";
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      formErrors.confirmPassword =
        "Confirm password does not match new password.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      changePassword(user.id, {
        currentPassword,
        newPassword,
        confirmPassword,
      });
    }
  };

  return (
    <div className="ProfileChangePassword-section">
  <div className="right w-3/4 mx-auto">
    <div className="content p-8 rounded-xl shadow-sm bg-white">
      <div className="head">
        <div className="title">
          <p className="text-2xl font-semibold text-gray-800">Change Password</p>
        </div>
        <div className="description pt-4">
          <p className="text-sm font-normal text-gray-600">
            To change your password, please fill in the fields below. Your
            password must contain at least 8 characters, it must also
            include at least one uppercase letter, one lowercase letter, one
            number, and one special character.
          </p>
        </div>
      </div>
      <div className="form-box pt-5">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="change-input-box relative">
            <label className="absolute top-1 left-3 bg-white text-gray-500 text-sm">Current Password <span className="text-red-500">*</span></label>
            <div className="password-input-container relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Enter Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <div
                className="eye absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
            {errors.currentPassword && <span className="error text-red-500 text-sm">{errors.currentPassword}</span>}
          </div>
          <div className="change-input-box relative">
            <label className="absolute top-1 left-3 bg-white text-gray-500 text-sm">New Password <span className="text-red-500">*</span></label>
            <div className="password-input-container relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <div
                className="eye absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
            {errors.newPassword && <span className="error text-red-500 text-sm">{errors.newPassword}</span>}
          </div>
          <div className="change-input-box relative">
            <label className="absolute top-1 left-3 bg-white text-gray-500 text-sm">Confirm Password <span className="text-red-500">*</span></label>
            <div className="password-input-container relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <div
                className="eye absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
            {errors.confirmPassword && <span className="error text-red-500 text-sm">{errors.confirmPassword}</span>}
          </div>
          <div className="change-input-box">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold text-lg rounded-lg p-3 hover:bg-blue-600"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


  );
};

export default ProfileChangePassword;
