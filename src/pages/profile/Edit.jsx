import { FaCamera } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEdit } from "../../hooks/useEdit";
import { useEffect, useState } from "react";

import { Country, State, City } from "country-state-city";

export const Edit = () => {
  const navigate = useNavigate();
  const { profile, setProfile, handleInputChange, handleImageChange, handleFormSubmit } = useEdit();

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  console.log(selectedCountry);

  // Load country data on component mount
  useEffect(() => {
    const allCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(allCountries);

    // Set selected country if profile has a saved country
    if (profile.country) {
      const countryCode = allCountries.find((c) => c.label === profile.country)?.value;
      setSelectedCountry(countryCode);
    }
  }, []);

  // Load state data when selectedCountry changes
  useEffect(() => {
    if (selectedCountry) {
      const statesList = State.getStatesOfCountry(selectedCountry).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }));
      setStates(statesList);

      if (profile.state) {
        const stateCode = statesList.find((s) => s.label === profile.state)?.value;
        setSelectedState(stateCode);
      }
    }
  }, [selectedCountry]);

  // Load city data when selectedState changes
  useEffect(() => {
    if (selectedState) {
      const citiesList = City.getCitiesOfState(selectedCountry, selectedState).map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(citiesList);

      // Set selected city if profile has a saved city
      if (profile.city) {
        const city = citiesList.find((c) => c.label === profile.city);
        if (city) setProfile((prev) => ({ ...prev, city: city.value }));
      }
    } else {
      setCities([]);
    }
  }, [selectedState, selectedCountry, profile.city]);

  // Handle country change
  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    const countryName = countries.find((c) => c.value === countryCode)?.label;
    setProfile((prev) => ({
      ...prev,
      country: countryName || "",
      state: "",
      city: "",
    }));
    setSelectedState(null);
  };

  // Handle state change
  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    const stateName = states.find((s) => s.value === stateCode)?.label;
    setProfile((prev) => ({
      ...prev,
      state: stateName || "",
      city: "",
    }));
  };

  // Handle city change
  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      city: cityName,
    }));
  };

  return (
    <div>
      <div className="edit-section">
        <div className="row">
          <div className="main">
            <div className="top"></div>
            <div className="profile-setting">
              <div className="head">
                <p>Profile Setting</p>
              </div>
              <div className="content flex">
                <div className="left">
                  <div className="img-box">
                    <div className="img">
                      <img
                        src={profile?.avatar || "../img/profile.png"}
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                    <div className="change-profile">
                      <ul>
                        <li>
                          <input
                            type="file"
                            id="profilePic"
                            name="profilePic"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                          <label htmlFor="profilePic" className="flex">
                            <FaCamera />
                            <span>Change Profile</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="content">
                    <div className="head">
                      <div className="title">
                        <p>Edit Profile</p>
                      </div>
                    </div>
                    <div className="form-box">
                      <form onSubmit={handleFormSubmit} className="flex">
                        <div className="input-box">
                          <div className="label">
                            First Name <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="firstName"
                            value={profile.firstName ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Last Name <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="lastName"
                            value={profile.lastName ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Email Address <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="email"
                            value={profile.email ?? ""}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Phone Number <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="phone"
                            value={profile.phone ?? ""}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Hospital Name <span>*</span>
                          </div>
                          <input
                            type="text"
                            name="hospitalName"
                            value={profile.hospitalName ?? ""}
                            onChange={handleInputChange}
                            placeholder="Hospital Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Gender <span>*</span>
                          </div>
                          <select
                            name="gender"
                            value={profile.gender || ""}
                            onChange={handleInputChange}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">
                            Country <span>*</span>
                          </div>
                          <select
                            name="country"
                            value={selectedCountry || ""}
                            onChange={handleCountryChange}
                          >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
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
                            value={selectedState || ""}
                            onChange={handleStateChange}
                            disabled={!selectedCountry}
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state.value} value={state.value}>
                                {state.label}
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
                            value={profile.city || ""}
                            onChange={handleCityChange}
                            disabled={!selectedState}
                          >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                              <option key={city.value} value={city.value}>
                                {city.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="save-btn me-3">
                            <button type="submit">Save</button>
                          </div>
                          <div className="cancel-btn">
                            <button
                              type="button"
                              onClick={() => {
                                setProfile({ ...profile });
                                navigate("/profile");
                              }}
                            >
                              Cancel
                            </button>
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
    </div>
  );
};
