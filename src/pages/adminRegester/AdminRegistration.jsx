import { useEffect, useState } from "react";
import "../pages.css";
import { useNavigate } from "react-router-dom";

import { Country, City, State } from "country-state-city";
import Select, { components } from "react-select";
import PropTypes from "prop-types";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
const AdminRegistration = () => {
  const navigate = useNavigate();
  const { AdminRegister } = useAuth();
  const { getAllHospitals, allHospitals, createHospital } = useGlobal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "123@abc",
    confirmPassword: "123@abc",
    phone: "4123456780",
    country: "",
    state: "",
    city: "",
    role: "admin",
    hospital: "",
  });
  const [hospitalFormData, setHospitalFormData] = useState({
    name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const fetchData = async () => {
    setCountries(Country.getAllCountries());
    await getAllHospitals();
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "country") {
      const selectedCountry = countries.find((country) => country.isoCode === value);
      if (selectedCountry) {
        setStates(State.getStatesOfCountry(selectedCountry.isoCode));
        setFormData((prevState) => ({ ...prevState, state: "", city: "" }));
      }
      setCities([]);
    } else if (name === "state") {
      const selectedState = states.find((state) => state.isoCode === value);
      if (selectedState) {
        setCities(City.getCitiesOfState(formData.country, selectedState.isoCode));
        setFormData((prevState) => ({ ...prevState, city: "" }));
      }
    }
  };
  const handleHospitalFormChange = (e) => {
    const { name, value } = e.target;
    setHospitalFormData((prevState) => ({
      ...prevState,
      [name]: value,
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
      await AdminRegister(formData);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };
  const handleHospitalSubmit = async (e) => {
    e.preventDefault();
    try {
      await createHospital(hospitalFormData);
      await fetchData();
      setHospitalFormData({
        name: "",
        address: "",
        country: "",
        state: "",
        city: "",
        zipcode: "",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating hospital:", error);
    }
  };
  const SelectMenuButton = (props) => (
    <components.MenuList {...props}>
      {props.children}
      <button className="add-new-hospital " onClick={() => setIsModalOpen(true)}>
        Add New Hospital
      </button>
    </components.MenuList>
  );
  SelectMenuButton.propTypes = {
    children: PropTypes.node,
  };
  return (
    <>
      <div className="registration-section ">
        <div className="row">
          <div className="main flex">
            <div className="form">
              <div className="content">
                <div className="head">
                  <p>Admin Registration</p>
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-box">
                  <form onSubmit={handleSubmit} className="flex">
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
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
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
                        disabled={!formData.country}
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.isoCode} value={state.isoCode}>
                            {state.name}
                          </option>
                        ))}
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
                        disabled={!formData.state}
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="input-box">
                      <div className="label">
                        Select Hospital <span>*</span>
                      </div>
                      <Select
                        name="hospital"
                        value={
                          allHospitals.find((hospital) => hospital._id === formData.hospital)
                            ? {
                                label: allHospitals.find(
                                  (hospital) => hospital._id === formData.hospital
                                ).name,
                                value: formData.hospital,
                              }
                            : null
                        }
                        onChange={(selectedOption) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            hospital: selectedOption.value,
                          }))
                        }
                        options={allHospitals.map((hospital) => ({
                          value: hospital._id,
                          label: hospital.name,
                        }))}
                        components={{ MenuList: SelectMenuButton }}
                        placeholder="Select Hospital"
                        isClearable
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
                          I agree to all the <span>T&C</span> and <span>Privacy Policies.</span>
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
              <div className="vector-dot">
                <img src="/img/Vector-dot.png" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md">
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="hospital-section">
                  <div className="row">
                    <div className="main">
                      <div className="form">
                        <div className="content">
                          <div className="head">
                            <p>Add New Hospital</p>
                          </div>
                          <div className="form-box">
                            <form onSubmit={handleHospitalSubmit} className="flex">
                              <div className="input-box">
                                <div className="label">
                                  Hospital Name <span>*</span>
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  value={hospitalFormData.name}
                                  onChange={handleHospitalFormChange}
                                  placeholder="Enter Hospital Name"
                                  required
                                />
                              </div>

                              <div className="input-box">
                                <div className="label">
                                  Hospital Address <span>*</span>
                                </div>
                                <input
                                  type="text"
                                  name="address"
                                  value={hospitalFormData.address}
                                  onChange={handleHospitalFormChange}
                                  placeholder="Enter Hospital Address"
                                  required
                                />
                              </div>

                              <div className="input-box">
                                <div className="label">
                                  Country <span>*</span>
                                </div>
                                <select
                                  name="country"
                                  value={hospitalFormData.country}
                                  onChange={handleHospitalFormChange}
                                  required
                                >
                                  <option value="">Select Country</option>
                                  {countries.map((country) => (
                                    <option key={country.isoCode} value={country.isoCode}>
                                      {country.name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="input-box">
                                <div className="label">
                                  State <span>*</span>
                                </div>
                                <select
                                  name="state"
                                  value={hospitalFormData.state}
                                  onChange={handleHospitalFormChange}
                                  required
                                >
                                  <option value="">Select State</option>
                                  {State.getStatesOfCountry(hospitalFormData.country).map(
                                    (state) => (
                                      <option key={state.isoCode} value={state.isoCode}>
                                        {state.name}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>

                              <div className="input-box">
                                <div className="label">
                                  City <span>*</span>
                                </div>
                                <select
                                  name="city"
                                  value={hospitalFormData.city}
                                  onChange={handleHospitalFormChange}
                                  required
                                >
                                  <option value="">Select City</option>
                                  {City.getCitiesOfState(
                                    hospitalFormData.country,
                                    hospitalFormData.state
                                  ).map((city) => (
                                    <option key={city.name} value={city.name}>
                                      {city.name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="input-box">
                                <div className="label">
                                  Zip Code <span>*</span>
                                </div>
                                <input
                                  type="text"
                                  name="zipcode"
                                  value={hospitalFormData.zipcode}
                                  onChange={handleHospitalFormChange}
                                  placeholder="Enter Zip Code"
                                  required
                                />
                              </div>

                              <div className="btn flex">
                                <div className="cancel-btn">
                                  <button type="button" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                  </button>
                                </div>

                                <div className="save-btn">
                                  <button type="submit">Save</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default AdminRegistration;
