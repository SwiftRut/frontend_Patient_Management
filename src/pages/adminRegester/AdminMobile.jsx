import { useEffect } from "react";
import "../pages.css";

const AdminMobile = () => {
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
                  <p>Forgot Password</p>
                </div>

                <div className="note">
                  <p>Enter your email and we’ll send you a otp to reset your password.</p>
                </div>

                <div className="admin-mobile-form-box">
                  <form className="flex">

                    <div className="input-box">
                      <div className="label">
                        Email or Phone <span>*</span>
                      </div>
                      <input type="text"
                        placeholder="Enter Email or Phone"
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
