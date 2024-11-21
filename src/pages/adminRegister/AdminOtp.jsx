import "../pages.css";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiService from '../../services/api.js';
import { toast } from 'react-hot-toast';

export default function AdminOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { identifier } = location.state || {};
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(60); // 1 minute = 60 seconds

  // Check if identifier is valid
  useEffect(() => {
    if (!identifier) {
      toast.error("Invalid request. Please try again.");
      navigate('/someFallbackRoute'); // Navigate to a fallback route
    }
  }, [identifier, navigate]);

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

  // Countdown Timer for Resend OTP
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
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && event.target.value === "") {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await apiService.VerifyOtp({
        identifier,
        otp: enteredOtp,
      });

      toast.success(response.data.message);
      navigate('/resetPassword', { state: { identifier } });
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  const handleResendOtp = async () => {
    setIsResendDisabled(true);
    setTimer(60);

    try {
      const response = await apiService.ForgetPassword({ identifier });
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div>
      <ToastContainer />
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

                <div className="admin-otp-form-box">
                  <form className="flex" onSubmit={handleSubmit}>
                    {[...Array(6)].map((_, index) => (
                      <div className="input-box" key={index}>
                        <input
                          type="text"
                          maxLength="1"
                          pattern="\d*"
                          inputMode="numeric"
                          ref={(el) => (inputRefs.current[index] = el)}
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
                            disabled={isResendDisabled}
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
