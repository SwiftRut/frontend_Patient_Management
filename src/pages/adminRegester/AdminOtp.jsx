import "../pages.css";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiService from '../../services/api.js';

export default function AdminOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { identifier } = location.state || {};
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(300); // 5 minutes = 300 seconds

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        setIsResendDisabled(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (index, event) => {
    const { value } = event.target;

    if (!/^\d*$/.test(value)) {
      event.target.value = "";
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && event.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await apiService.VerifyOtp({
        identifier,
        otp: enteredOtp,
      });

      setSuccessMessage(response.data.message);
      navigate('/resetPassword', { state: { identifier } });
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  const handleResendOtp = async () => {
    setError('');
    setSuccessMessage('');
    setIsResendDisabled(true);
    setTimer(300);

    try {
      const response = await apiService.ForgetPassword({ identifier });
      setSuccessMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="admin-otp-section">
        <div className="row">
          <div className="main flex">
            <div className="form">
              <div className="admin-otp-content">
                <div className="head">
                  <p>Enter OTP</p>
                </div>

                <div className="note">
                  <p>Please enter the 6-digit code that was sent to your phone number.</p>
                </div>

                {/* Display success message */}
                {successMessage && <div className="success-message" style={{ color: "green" }}>{successMessage}</div>}

                {/* Display error message */}
                {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}

                <div className="admin-otp-form-box">
                  <form className="flex" onSubmit={handleSubmit}>
                    {[...Array(6)].map((_, index) => (
                      <div className="input-box" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          pattern="\d*"
                          inputMode="numeric"
                          ref={(el) => (inputRefs.current[index] = el)} // Fixed here
                          onChange={(e) => handleInputChange(index, e)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          style={{ MozAppearance: "textfield" }}
                        />
                      </div>
                    ))}

                    <div className="condition">
                      <div className="resend-otp flex">
                        <div className="sec">
                          <p className="flex">
                            <IoTimeOutline />
                            <span>{formatTime(timer)}</span> sec
                          </p>
                        </div>
                        <div className="r-otp">
                          <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={isResendDisabled} // Disable button based on state
                          >
                            Resend OTP
                          </button>
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
                <img src="/img/Vector-1.png" width="100%" alt="Vector 1" />
              </div>
              <div className="vector-2">
                <img src="/img/Vector-2.png" width="100%" alt="Vector 2" />
              </div>
              <div className="vector-dot">
                <img src="/img/Vector-dot.png" width="100%" alt="Vector Dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
