/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import apiService from '../../services/api.js';
import "../pages.css";

const AdminMobile = () => {
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!identifier) {
      setError('Please enter an email or phone number');
      return;
    }

    try {
      // Call the forgot password API
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

  return (
    <>
      <div className="admin-mobile-section">
        <div className="row">
          <div className="main">
            <div className="form">
              <div className="admin-mobile-content">
                <div className="head">
                  <p>Forgot Password</p>
                </div>

                <div className="note">
                  <p>Enter your email and we’ll send you an OTP to reset your password.</p>
                </div>

                {/* Display success message */}
                {successMessage && <div className="success-message">{successMessage}</div>}

                {/* Display error message */}
                {error && <div className="error-message">{error}</div>}

                <div className="admin-mobile-form-box">
                  <form className="flex" onSubmit={handleSubmit}>
                    <div className="input-box">
                      <div className="label">
                        Email or Phone <span>*</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Email or Phone"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)} 
                      />
                    </div>

                    <div className="condition">
                      <div className="otp">
                        <button type="submit">Get OTP</button>
                      </div>

                      <div className="login-btn">
                        <p><span>Back To Login</span></p>
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
    </>
  );
};

export default AdminMobile;
