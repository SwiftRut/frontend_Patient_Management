import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "../pages.css";
import InputField from "../../components/Login/InputField";
import Button from "../../components/Login/Button";
import ImageSlider from "../../components/Login/ImageSlider";

const Login = () => {
  const navigate = useNavigate();
  const { UniversalLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => await UniversalLogin(data);

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
                  <InputField
                    label="Email or Phone"
                    type="text"
                    register={register}
                    errors={errors}
                    name="identifier"
                    placeholder="Enter Email or Phone Number"
                  />
                  <div className="input-box">
                    <div className="label">
                      Password <span>*</span>
                    </div>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <div
                        className="eye"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FaEye size={20} />
                        ) : (
                          <FaEyeSlash size={20} />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <p className="error-message">{errors.password.message}</p>
                    )}
                  </div>

                  <div className="condition">
                    <div className="remember-forgot flex">
                      <div className="remember flex">
                        <input type="checkbox" {...register("remember")} />
                        <p>Remember me</p>
                      </div>
                      <div
                        className="forgot"
                        onClick={() => navigate("/AdminMobile")}
                      >
                        <span style={{ cursor: "pointer" }}>
                          Forgot password?
                        </span>
                      </div>
                    </div>

                    <Button onClick={handleSubmit(onSubmit)}>Login</Button>
                    <div
                      className="registration-btn"
                      onClick={() => navigate("/patientRegistration")}
                    >
                      <p style={{ cursor: "pointer" }}>
                        Don’t have an account? Register
                      </p>
                    </div>
                    <div
                      className="registration-btn"
                      onClick={() => navigate("/adminRegistration")}
                    >
                      <p style={{ cursor: "pointer" }}>
                        Don’t have an account? Register (As Admin)
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="img-box">
            <ImageSlider images={["/img/register.png", "/img/register2.png"]} />
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
