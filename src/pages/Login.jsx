import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import "./pages.css";

const Login = () => {
  const navigate = useNavigate();
  const { UniversalLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const role = await UniversalLogin(data);
      if (role) {
        switch (role) {
          case "admin":
            toast.success("Admin login successful");
            console.log("Navigating to / for admin");
            window.location.href = "/";
            break;
          case "patient":
            toast.success("Patient login successful");
            navigate('/patient', { replace: true });
            break;
          case "doctor":
            toast.success("Doctor login successful");
            navigate('/doctor', { replace: true });
            break;
        }
      }
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
      console.error(err);
    }
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

  return (
    <div className="login-section">
      <div className="row">
        <div className="main flex">
          <div className="form">
            <div className="content">
              <div className="head">
                <p>Login</p>
              </div>
              <div className="form-box">
                <form onSubmit={handleSubmit(onSubmit)} className="flex">
                  <div className="input-box">
                    <div className="label">
                      Email or Phone <span>*</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Email or Phone Number"
                      {...register("identifier", { required: "This field is required" })}
                    />
                    {errors.identifier && (
                      <p className="error-message">{errors.identifier.message}</p>
                    )}
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Password <span>*</span>
                    </div>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        {...register("password", { required: "Password is required" })}
                      />
                      <div className="eye" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                      </div>
                    </div>
                    {errors.password && (
                      <p className="error-message">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="condition">
                    <div className="remember-forgot flex">
                      <div className="remember flex">
                        <input
                          type="checkbox"
                          {...register("remember")}
                        />
                        <p>Remember me</p>
                      </div>
                      <div className="forgot" onClick={() => navigate("/AdminMobile")}>
                        <span style={{ cursor: "pointer" }}>Forgot password?</span>
                      </div>
                    </div>

                    <div className="login-btn">
                      <button type="submit">Login</button>
                    </div>
                    <div
                      className="registration-btn"
                      onClick={() => navigate("/patientRegistration")}
                    >
                      <p style={{ cursor: "pointer" }}>Don’t have an account? Register</p>
                    </div>
                    <div
                      className="registration-btn"
                      onClick={() => navigate("/adminRegistration")}
                    >
                      <p style={{ cursor: "pointer" }}>Don’t have an account? Register (As Admin)</p>
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
  );
};

export default Login;
