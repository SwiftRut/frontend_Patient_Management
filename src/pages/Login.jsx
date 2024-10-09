import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Login = () => {
  const navigate = useNavigate();
  const { UniversalLogin } = useAuth();
  const [formData, setFormData] = useState({
    identifier: "mohitdudhat22@gmail.com",
    password: "123@abc",
    remember: "true",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
    try {
      const success = await UniversalLogin(formData);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="login-section">
        <div className="row">
          <div className="main flex">
            <div className="form">
              <div className="content">
                <div className="head">
                  <p>Login</p>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="form-box">
                  <form onSubmit={handleSubmit} className="flex">
                    <div className="input-box">
                      <div className="label">
                        Email or Phone <span>*</span>
                      </div>
                      <input
                        type="text"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        placeholder="Enter Email or Phone Number"
                      />
                    </div>

                    <div className="input-box">
                      <div className="label">
                        Password <span>*</span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                      />
                      <div className="eye">
                        <img src="../img/eye-slash.png" alt="eye" />
                      </div>
                    </div>

                    <div className="condition">
                      <div className="remember-forgot flex">
                        <div className="remember flex">
                          <input
                            type="checkbox"
                            name="remember"
                            checked={formData.remember === "true"}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                remember: e.target.checked ? "true" : "false",
                              })
                            }
                          />
                          <p>Remember me</p>
                        </div>
                        <div className="forgot">
                          <span>Forgot password?</span>
                        </div>
                      </div>

                      <div className="login-btn">
                        <button type="submit">Login</button>
                      </div>
                      <div className="registration-btn">
                        <p>Don’t have an account? Register</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="img-box">
              <div class="slider">
                <img src="/img/register.png" alt="Image 1" />
                <img src="/img/register2.png" alt="Image 2" />
                <div class="dots">
                  <span class="dot active"></span>
                  <span class="dot"></span>
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

export default Login;
