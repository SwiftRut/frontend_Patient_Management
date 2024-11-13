import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import { useEdit } from "../../../hooks/useEdit";

const DoctorProfileEdit = () => {
  const { profile, setProfile, handleInputChange, handleImageChange, handleFormSubmit, allHospitals
   } = useEdit();
  const [isLoading, setIsLoading] = useState(true);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  // Load country data and initialize selected country
  useEffect(() => {
    const allCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(allCountries);

    if (profile?.country) {
      const country = allCountries.find((c) => c.label === profile.country);
      if (country) {
        setSelectedCountry(country.value);
      }
    }
  }, [profile]); // Changed dependency to profile

  // Load state data and initialize selected state
  useEffect(() => {
    if (selectedCountry) {
      const statesList = State.getStatesOfCountry(selectedCountry).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }));
      setStates(statesList);

      if (profile?.state) {
        const state = statesList.find((s) => s.label === profile.state);
        if (state) {
          setSelectedState(state.value);
        }
      } else {
        setSelectedState(null);
        setCities([]);
      }
    } else {
      setStates([]);
      setSelectedState(null);
      setCities([]);
    }
  }, [selectedCountry, profile?.state]);

  // Load city data and initialize selected city
  useEffect(() => {
    if (selectedCountry && selectedState) {
      const citiesList = City.getCitiesOfState(selectedCountry, selectedState).map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(citiesList);

      if (profile?.city) {
        const city = citiesList.find((c) => c.label === profile.city);
        if (city) {
          setProfile((prev) => ({ ...prev, city: city.value }));
        }
      }
    } else {
      setCities([]);
    }
  }, [selectedState, selectedCountry, profile?.city, setProfile]);

  // Handle country change
  const handleCountryChange = (e) => {
    const countryIsoCode = e.target.value;
    setSelectedCountry(countryIsoCode);
    setSelectedState(null); // Reset state when country changes
    setProfile((prevProfile) => ({
      ...prevProfile,
      country: countries.find((c) => c.value === countryIsoCode)?.label || "",
      state: "", // Reset state in profile
      city: "", // Reset city in profile
    }));
  };

  // Handle state change
  const handleStateChange = (e) => {
    const stateIsoCode = e.target.value;
    setSelectedState(stateIsoCode);
    setProfile((prevProfile) => ({
      ...prevProfile,
      state: states.find((s) => s.value === stateIsoCode)?.label || "",
      city: "", // Reset city when state changes
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

  // Add this effect to handle loading state
  useEffect(() => {
    if (profile?.name) {
      setIsLoading(false);
    }
  }, [profile]);

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <div className="doctor-edit-section">
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
                        <label htmlFor="profilePic">
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
                    <form className="flex" onSubmit={handleFormSubmit}>
                      <div className="input-box">
                        <div className="label">
                          Doctor Name <span>*</span>
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={profile?.name || ""}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                        />
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Email Address <span>*</span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={profile?.email || ""}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                        />
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Phone Number <span>*</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={profile?.phone || ""}
                          onChange={handleInputChange}
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Hospital Name <span>*</span>
                        </div>
                        <select
                          name="hospitalName"
                          value={profile.hospitalId}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Hospital</option>
                          {allHospitals.map((hospital) => (
                            <option key={hospital._id} value={hospital._id}>
                              {hospital.name}
                            </option>
                          ))}
                        </select>{" "}
                      </div>

                      <div className="input-box">
                        <div className="label">
                          Gender <span>*</span>
                        </div>
                        <select
                          name="gender"
                          value={profile?.gender || ""}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
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
                          value={profile?.city || ""}
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

                      <div className="condition flex">
                        <div className="cancel-btn">
                          <NavLink to={"/doctor/profile"}>
                            <button type="button">Cancel</button>
                          </NavLink>
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
  );
};

export default DoctorProfileEdit;
