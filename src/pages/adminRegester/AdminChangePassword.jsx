import { useEffect, useState } from 'react'
import apiService from '../../services/api.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../pages.css'

export default function AdminChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const { identifier } = location.state || {}; // Access the identifier passed from the previous component

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const images = slider.querySelectorAll("img");
    const dots = slider.querySelectorAll(".dot");
    let currentIndex = 0;
    images[currentIndex].style.display = "block";
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });
    });
    function updateSlider() {
      images.forEach((image) => {
        image.style.display = "none";
      });
      images[currentIndex].style.display = "block";
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validation checks
    if (!newPassword || !confirmPassword) {
      setError('Both fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await apiService.ResetPassword({
        identifier,
        password: newPassword,
        confirmPassword: confirmPassword
      });
      setSuccessMessage(response.data.message);

      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="changePassword-section">
        <div className="row">
          <div className="main flex">
            <div className="form">
              <div className="changePassword-content">
                <div className="head">
                  <p>Reset Password</p>
                </div>

                {/* Display success message */}
                {successMessage && <div className="success-message">{successMessage}</div>}

                {/* Display error message */}
                {error && <div className="error-message">{error}</div>}

                <div className="changePassword-form-box">
                  <form className="flex" onSubmit={handleSubmit}>

                    <div className="input-box">
                      <div className="label">
                        New Password <span>*</span>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <div className="eye" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Use icons for toggling */}
                      </div>
                    </div>

                    <div className="input-box">
                      <div className="label">
                        Confirm Password <span>*</span>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <div className="eye" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
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
            <div className="img-box">
              <div className="slider">
                <img src="/img/register.png" alt="Image 1" />
                <img src="/img/register2.png" alt="Image 2" />
                <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="vector-1">
                <img src="/img/Vector-1.png" width="100%" />
              </div>
              <div className="vector-2">
                <img src="/img/Vector-2.png" width="100%" />
              </div>
              <div className="vector-dot">
                <img src="/img/Vector-dot.png" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
