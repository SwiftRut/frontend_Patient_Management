import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";
import { useAuth } from "../context/AuthContext";

const Registration = () => {
  const navigate = useNavigate();
  const { PatientRegister } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "a",
    lastName: "a",
    email: "a@gmail.com",
    password: "abc@123",
    confirmPassword: "abc@123",
    phone: "9913239031",
    country: "india",
    state: "California",
    city: "Los Angeles",
    role: "patient",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      console.log(formData, "<<<<<<<<<<<<<<<<<<<<<<<<<< Registration form data");
      await PatientRegister(formData);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="registration-section">
      <div className="row">
        <div className="main">
          <div className="form">
            <div className="content">
              <div className="head">
                <p>Registration</p>
              </div>
              <div className="form-box">
                <form onSubmit={handleSubmit} className="flex">
                  {error && <div className="error-message">{error}</div>}
                  
                  <div className="input-box">
                    <div className="label">
                      First Name <span>*</span>
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Last Name <span>*</span>
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Email Address <span>*</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email Address"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Phone Number <span>*</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Country <span>*</span>
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="USA">USA</option>
                      {/* Add more country options */}
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      State <span>*</span>
                    </div>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      <option value="California">California</option>
                      {/* Add more state options */}
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      City <span>*</span>
                    </div>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Los Angeles">Los Angeles</option>
                      {/* Add more city options */}
                    </select>
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
                      required
                    />
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Confirm Password <span>*</span>
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  <div className="condition">
                    <div className="policies">
                      <input type="checkbox" required />
                      <p>
                        I agree to all the <span>T&C</span> and
                        <span>Privacy Policies.</span>
                      </p>
                    </div>

                    <div className="register-btn">
                      <button type="submit">Register</button>
                    </div>
                    <div className="login-btn">
                      <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
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
  );
};

export default Registration;