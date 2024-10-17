import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";
import { useAuth } from "../hooks/useAuth.jsx";
import { Country, City, State } from "country-state-city";
import { PatientFormData } from "./constant.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const PatientRegistration = () => {
  const navigate = useNavigate();
  const { PatientRegister } = useAuth();
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const genders = ["male", "female", "other"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const [formData, setFormData] = useState(PatientFormData);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

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
      images.forEach((image) => (image.style.display = "none"));
      images[currentIndex].style.display = "block";
      dots.forEach((dot, index) =>
        dot.classList.toggle("active", index === currentIndex)
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    if (name === "country") {
      const selectedCountry = countries.find(
        (country) => country.isoCode === value
      );
      setStates(State.getStatesOfCountry(selectedCountry.isoCode));
      setFormData((prevState) => ({ ...prevState, state: "", city: "" }));
      setCities([]);
    } else if (name === "state") {
      const selectedState = states.find((state) => state.isoCode === value);
      setCities(City.getCitiesOfState(formData.country, selectedState.isoCode));
      setFormData((prevState) => ({ ...prevState, city: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await PatientRegister(formData);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="patient-registration-section">
      <div className="row">
        <div className="main flex">
          <div className="form">
            <div className="content">
              <div className="head">
                <p>Registration</p>
              </div>
              <div className="form-box">
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} className="flex">
                  {[
                    { label: "First Name", name: "firstName", type: "text" },
                    { label: "Last Name", name: "lastName", type: "text" },
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Phone Number", name: "phone", type: "tel" },
                    { label: "Age", name: "age", type: "number" },
                    { label: "Height(cm)", name: "height", type: "number" },
                    { label: "Weight(kg)", name: "weight", type: "number" },
                    { label: "Date of Birth", name: "dob", type: "date" },
                  ].map((input) => (
                    <div className="input-box" key={input.name}>
                      <div className="label">
                        {input.label} <span>*</span>
                      </div>
                      <input
                        type={input.type}
                        name={input.name}
                        value={formData[input.name]}
                        onChange={handleChange}
                        placeholder={`Enter ${input.label}`}
                        required
                      />
                    </div>
                  ))}

                  <div className="input-box">
                    <div className="label">
                      Gender <span>*</span>
                    </div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      {genders.map((gender) => (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Blood Group <span>*</span>
                    </div>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>

                  {[
                    {
                      label: "Country",
                      name: "country",
                      options: countries,
                      isDisabled: false,
                    },
                    {
                      label: "State",
                      name: "state",
                      options: states,
                      isDisabled: !formData.country,
                    },
                    {
                      label: "City",
                      name: "city",
                      options: cities,
                      isDisabled: !formData.state,
                    },
                  ].map((select) => (
                    <div className="input-box" key={select.name}>
                      <div className="label">
                        {select.label} <span>*</span>
                      </div>
                      <select
                        name={select.name}
                        value={formData[select.name]}
                        onChange={handleChange}
                        required
                        disabled={select.isDisabled}
                      >
                        <option value="">{`Select ${select.label}`}</option>
                        {select.options.map((option) => (
                          <option
                            key={option.isoCode || option.name}
                            value={option.isoCode || option.name}
                          >
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}

                  <div className="input-box">
                    <div className="label">
                      Address <span>*</span>
                    </div>
                    <div className="password-input-container">
                      <input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                      />
                    </div>
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Password <span>*</span>
                    </div>
                    <div className="password-input-container">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
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
                  </div>

                  <div className="input-box">
                    <div className="label">
                      Confirm Password <span>*</span>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
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
                      <p>
                        Already have an account?{" "}
                        <span onClick={() => navigate("/login")}>Login</span>
                      </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;
