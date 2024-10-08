import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { UniversalLogin, user } = useAuth();
  const [formData, setFormData] = useState({
    identifier: "mohitdudhat@gmail.com",
    password: "123@abc",
    remember: "true",
  });  
  // const [formData, setFormData] = useState({
  //   identifier: "fiyadoctor1@gmail.com",
  //   password: "Fiya@123",
  //   remember: "true",
  // });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await UniversalLogin(formData);
      if (success) {
        if(user.role === 'admin') {
          navigate("/");
        }else if(user.role === 'doctor') {
          navigate("/doctor/profile/");
        }
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
          <div className="main">
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
            <div className="img-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
