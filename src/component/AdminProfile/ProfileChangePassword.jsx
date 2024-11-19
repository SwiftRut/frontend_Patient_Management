// import { useState } from "react";
// import '../../pages/profile/profile.css';
// import apiService from "../../services/api";
// import { useAuth } from "../../hooks/useAuth";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import {toast} from 'react-hot-toast';

// const ProfileChangePassword = () => {
//   const { user } = useAuth();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const changePassword = async (id, userData) => {
//     try {
//       const response = await apiService.ChangePassword(id, userData);
//       toast.success("Password changed successfully");
//     } catch (error) {
//       console.error("Error changing password:", error);
//       toast.error("Error changing password");
//       throw error;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newPassword !== confirmPassword) {
//       toast.error("New Password and Confirm Password do not match.");
//       return;
//     }
//     changePassword(user.id, { currentPassword, newPassword, confirmPassword });
//   };

//   return (
//     <div className="ProfileChangePassword-section">
//       <div className="right">
//         <div className="content">
//           <div className="head">
//             <div className="title">
//               <p>Change Password</p>
//             </div>
//             <div className="discription">
//               <p>
//                 To change your password, please fill in the fields below. Your
//                 password must contain at least 8 characters, it must also
//                 include at least one uppercase letter, one lowercase letter,
//                 one number, and one special character.
//               </p>
//             </div>
//           </div>
//           <div className="form-box">
//             <form onSubmit={handleSubmit} className="flex">
//               <div className="change-input-box">
//                 <div className="label">
//                   Current Password <span>*</span>
//                 </div>
//                 <div className="password-input-container">
//                   <input
//                     type={showCurrentPassword ? "text" : "password"}
//                     placeholder="Enter Current Password"
//                     value={currentPassword}
//                     onChange={(e) => setCurrentPassword(e.target.value)}
//                   />
//                   <div className="eye" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
//                     {showCurrentPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
//                   </div>
//                 </div>
//               </div>

//               <div className="change-input-box">
//                 <div className="label">
//                   New Password <span>*</span>
//                 </div>
//                 <div className="password-input-container">
//                   <input
//                     type={showNewPassword ? "text" : "password"}
//                     placeholder="New Password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                   />
//                   <div className="eye" onClick={() => setShowNewPassword(!showNewPassword)}>
//                     {showNewPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
//                   </div>
//                 </div>
//               </div>

//               <div className="change-input-box">
//                 <div className="label">
//                   Confirm Password <span>*</span>
//                 </div>
//                 <div className="password-input-container">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm Password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                   <div className="eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//                     {showConfirmPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
//                   </div>
//                 </div>
//               </div>

//               <div className="change-input-box">
//                 <button type="submit">Change Password</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileChangePassword;
import { useState } from "react";
import apiService from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ProfileChangePassword = () => {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+{}:;<>?,.])[A-Za-z\d!$%^&*()_+{}:;<>?,.]{8,}$/;

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
    // <div className="ProfileChangePassword-section">
    //   <div className="right">
    //     <div className="content">
    //       <div className="head">
    //         <div className="title">
    //           <p>Change Password</p>
    //         </div>
    //         <div className="discription">
    //           <p>
    //             To change your password, please fill in the fields below. Your
    //             password must contain at least 8 characters, it must also
    //             include at least one uppercase letter, one lowercase letter, one
    //             number, and one special character.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="form-box">
    //         <form onSubmit={handleSubmit} className="flex">
    //           <div className="change-input-box">
    //             <div className="label">
    //               Current Password <span>*</span>
    //             </div>
    //             <div className="password-input-container">
    //               <input
    //                 type={showCurrentPassword ? "text" : "password"}
    //                 placeholder="Enter Current Password"
    //                 value={currentPassword}
    //                 onChange={(e) => setCurrentPassword(e.target.value)}
    //               />
    //               <div
    //                 className="eye"
    //                 onClick={() => setShowCurrentPassword(!showCurrentPassword)}
    //               >
    //                 {showCurrentPassword ? (
    //                   <FaEye size={20} />
    //                 ) : (
    //                   <FaEyeSlash size={20} />
    //                 )}
    //               </div>
    //             </div>
    //             {errors.currentPassword && (
    //               <span className="error">{errors.currentPassword}</span>
    //             )}
    //           </div>

    //           <div className="change-input-box">
    //             <div className="label">
    //               New Password <span>*</span>
    //             </div>
    //             <div className="password-input-container">
    //               <input
    //                 type={showNewPassword ? "text" : "password"}
    //                 placeholder="New Password"
    //                 value={newPassword}
    //                 onChange={(e) => setNewPassword(e.target.value)}
    //               />
    //               <div
    //                 className="eye"
    //                 onClick={() => setShowNewPassword(!showNewPassword)}
    //               >
    //                 {showNewPassword ? (
    //                   <FaEye size={20} />
    //                 ) : (
    //                   <FaEyeSlash size={20} />
    //                 )}
    //               </div>
    //             </div>
    //             {errors.newPassword && (
    //               <span className="error">{errors.newPassword}</span>
    //             )}
    //           </div>

    //           <div className="change-input-box">
    //             <div className="label">
    //               Confirm Password <span>*</span>
    //             </div>
    //             <div className="password-input-container">
    //               <input
    //                 type={showConfirmPassword ? "text" : "password"}
    //                 placeholder="Confirm Password"
    //                 value={confirmPassword}
    //                 onChange={(e) => setConfirmPassword(e.target.value)}
    //               />
    //               <div
    //                 className="eye"
    //                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    //               >
    //                 {showConfirmPassword ? (
    //                   <FaEye size={20} />
    //                 ) : (
    //                   <FaEyeSlash size={20} />
    //                 )}
    //               </div>
    //             </div>
    //             {errors.confirmPassword && (
    //               <span className="error">{errors.confirmPassword}</span>
    //             )}
    //           </div>

    //           <div className="change-input-box">
    //             <button type="submit">Change Password</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div class="ProfileChangePassword-section">
  <div class="right w-3/4 mx-auto">
    <div class="content p-8 rounded-xl shadow-sm bg-white">
      <div class="head">
        <div class="title">
          <p class="text-2xl font-semibold text-gray-800">Change Password</p>
        </div>
        <div class="description pt-4">
          <p class="text-sm font-normal text-gray-600">
            To change your password, please fill in the fields below. Your
            password must contain at least 8 characters, it must also
            include at least one uppercase letter, one lowercase letter, one
            number, and one special character.
          </p>
        </div>
      </div>
      <div class="form-box pt-5">
        <form onSubmit={handleSubmit} class="space-y-6">
          <div class="change-input-box relative">
            <label class="absolute top-1 left-3 bg-white text-gray-500 text-sm">Current Password <span class="text-red-500">*</span></label>
            <div class="password-input-container relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Enter Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <div
                class="eye absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
            {errors.currentPassword && <span class="error text-red-500 text-sm">{errors.currentPassword}</span>}
          </div>
          <div class="change-input-box relative">
            <label class="absolute top-1 left-3 bg-white text-gray-500 text-sm">New Password <span class="text-red-500">*</span></label>
            <div class="password-input-container relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <div
                class="eye absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
            {errors.newPassword && <span class="error text-red-500 text-sm">{errors.newPassword}</span>}
          </div>
          <div class="change-input-box relative">
            <label class="absolute top-1 left-3 bg-white text-gray-500 text-sm">Confirm Password <span class="text-red-500">*</span></label>
            <div class="password-input-container relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
              />
              <div
                class="eye absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </div>
            </div>
            {errors.confirmPassword && <span class="error text-red-500 text-sm">{errors.confirmPassword}</span>}
          </div>
          <div class="change-input-box">
            <button
              type="submit"
              class="w-full bg-blue-500 text-white font-semibold text-lg rounded-lg p-3 hover:bg-blue-600"
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
