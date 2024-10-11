import "../pages.css";
import { IoTimeOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

export default function AdminOtp() {
  const inputRefs = useRef([]);

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

  const handleInputChange = (index, event) => {
    const { value } = event.target;

    if (!/^\d*$/.test(value)) {
      // If the input is not a digit, clear the input
      event.target.value = "";
      return;
    }

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && event.target.value === "") {
      inputRefs.current[index - 1].focus();
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
                  <p>Please enter the 6 digit code that send to your phone number.</p>
                </div>

                <div className="admin-otp-form-box">
                  <form className="flex">
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
                            <span>00:30</span>sec
                          </p>
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
  );
}
