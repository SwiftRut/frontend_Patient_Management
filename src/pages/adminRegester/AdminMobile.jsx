/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import apiService from '../../services/api.js';
import '../pages.css';

const AdminMobile = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const location = useLocation(); // Use this to get the current route
  const navigate = useNavigate();

  const isLoginMode = location.pathname === '/login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!identifier) {
      setError('Please enter an email or phone number');
      return;
    }

    try {
      const response = await apiService.ForgetPassword({ identifier });
      setSuccessMessage(response.data.message);

      navigate('/verifyOtp', { state: { identifier } });
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!identifier || !password) {
      setError('Please enter email/phone and password');
      return;
    }

    try {
      const response = await apiService.UniversalLogin({ identifier, password });
      setSuccessMessage(response.data.message);
      navigate('/dashboard'); // After successful login
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  // Slider functionality
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

  return (
    <>
      <div className="admin-mobile-section">
        <div className="row">
          <div className="main flex">
            <div className="form">
              <div className="admin-mobile-content">
                <div className="head">
                  <p>{isLoginMode ? 'Login' : 'Forgot Password'}</p>
                </div>

                <div className="note">
                  <p>{isLoginMode ? 'Enter your credentials to log in.' : 'Enter your email or phone and we’ll send you an OTP to reset your password.'}</p>
                </div>

                {/* Display success message */}
                {successMessage && <div className="success-message" style={{ color: "green" }}>{successMessage}</div>}

                {/* Display error message */}
                {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}

                <div className="admin-mobile-form-box">
                  <form className="flex" onSubmit={isLoginMode ? handleLogin : handleSubmit}>
                    <div className="input-box">
                      <div className="label">
                        Email or Phone <span>*</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Email or Phone"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                      />
                    </div>

                    {/* Render password field only in login mode */}
                    {isLoginMode && (
                      <div className="input-box">
                        <div className="label">
                          Password <span>*</span>
                        </div>
                        <input
                          type="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    <div className="condition">
                      <div className="otp">
                        <button type="submit">{isLoginMode ? 'Login' : 'Get OTP'}</button>
                      </div>

                      <div className="login-btn">
                        <p>
                          <span
                            onClick={() => {
                              navigate(isLoginMode ? '/forgot-password' : '/login'); // Navigate between routes
                            }}
                          >
                            {isLoginMode ? 'Forgot Password?' : 'Back To Login'}
                          </span>
                        </p>
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
    </>
  );
};

export default AdminMobile;
