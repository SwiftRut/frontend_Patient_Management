import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
// import "../pages.css";
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
        <div className="main flex h-screen">
          {/* Form Section */}
          <div className="form p-6 md:p-12 w-full md:w-1/2 bg-white flex justify-center items-center">
            <div className="content p-6 border border-gray-200 shadow-lg rounded-xl w-full">
              <div className="head p-4">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Login
                </p>
              </div>
              <div className="form-box">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-6 p-5"
                >
                  <div className="input-box relative w-full">
                    <div className="label absolute top-[-0.75rem] left-4 bg-white z-10">
                      Email or Phone <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Email or Phone Number"
                      register={register}
                      errors={errors}
                      name="identifier"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:border-indigo-500"
                    />
                  </div>

                  <div className="input-box relative w-full">
                    <div className="label absolute top-[-0.75rem] left-4 bg-white z-10">
                      Password <span className="text-red-500">*</span>
                    </div>
                    <div className="password-input-container relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:border-indigo-500"
                      />
                      <div
                        className="eye absolute top-4 right-4 cursor-pointer"
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
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="condition w-full pt-5">
                    <div className="remember-forgot flex justify-between items-center">
                      <div className="remember flex items-center">
                        <input
                          type="checkbox"
                          {...register("remember")}
                          className="mr-2"
                        />
                        <p>Remember me</p>
                      </div>
                      <div
                        className="forgot text-blue-500 cursor-pointer"
                        onClick={() => navigate("/AdminMobile")}
                      >
                        <span>Forgot password?</span>
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="w-full mt-4 py-3 border hover:bg-blue-500 hover:text-white rounded-lg border text-gray-700 text-sm font-semibold"
                    >
                      Login
                    </button>

                    <div
                      className="registration-btn mt-4 text-center cursor-pointer"
                      onClick={() => navigate("/patientRegistration")}
                    >
                      <p>
                        Don’t have an account?{" "}
                        <span className="text-blue-500">Register</span>
                      </p>
                    </div>
                    <div
                      className="registration-btn mt-4 text-center cursor-pointer"
                      onClick={() => navigate("/adminRegistration")}
                    >
                      <p>
                        Don’t have an account?{" "}
                        <span className="text-blue-500">
                          Register (As Admin)
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="img-box w-full md:w-1/2 w-1/2 md:p-36 p-0 relative bg-gray-100">
            <ImageSlider images={["/img/register.png", "/img/register2.png"]} />

            <div className="vector-1 absolute right-0 bottom-0 sm:w-1/3 w-[10%]">
              <img src="/img/Vector-1.png" class="w-full" />
            </div>

            <div className="vector-2 absolute left-0 top-0 sm:w-1/3 w-[10%]">
              <img src="/img/Vector-2.png" class="w-full" />
            </div>

            <div className="vector-dot absolute right-0 top-0 sm:w-1/10 w-[10%]">
              <img src="/img/Vector-dot.png" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
