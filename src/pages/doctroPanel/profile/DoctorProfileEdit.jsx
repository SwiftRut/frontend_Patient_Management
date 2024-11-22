import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import { useEdit } from "../../../hooks/useEdit";

const DoctorProfileEdit = () => {
  const {
    profile,
    setProfile,
    handleInputChange,
    handleImageChange,
    handleFormSubmit,
    allHospitals,
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

  console.log(profile);
  return (
    <div className="doctor-edit-section">
    <div className="row">
      <div className="main">
        <div className="top bg-gradient-to-r from-[#4c49ed] to-[#020067] h-[296px]"></div>
        <div className="profile-setting w-[80%] mx-auto mt-[-15%]">
          <div className="head pb-[15px]">
            <p className="text-[44px] font-bold text-white">Profile Setting</p>
          </div>
          <div className="content bg-white rounded-[15px] p-[20px] shadow-[0px_0px_3px_1px_#d7d5d5] flex">
            <div className="left w-[23%] p-[20px] border-r-[2px] border-[#d9d9d94d]">
              <div className="img-box">
                <div className="img">
                  <img
                    src={profile?.avatar || "../img/profile.png"}
                    alt=""
                    className="w-[214px] h-[214px] rounded-full mx-auto"
                  />
                </div>
                <div className="change-profile pt-[15px]">
                  <ul>
                    <li className="flex justify-center items-center p-[12px_14px] bg-[#F6F8FB] rounded-[10px]">
                      <input
                        type="file"
                        id="profilePic"
                        name="profilePic"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                      <label htmlFor="profilePic" className="flex items-center">
                        <FaCamera className="text-[#4F4F4F]" />
                        <span className="pl-[15px] text-[20px] font-semibold text-[#4F4F4F]">
                          Change Profile
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="right w-[77%]">
              <div className="content p-[30px_20px] rounded-[15px] shadow-[0px_0px_0px_0px_white]">
                <div className="head flex justify-between items-center">
                  <div className="title">
                    <p className="text-[34px] font-semibold text-[#030229]">Edit Profile</p>
                  </div>
                </div>
                <div className="form-box pt-[20px]">
                  <form className="flex gap-x-[18px]" onSubmit={handleFormSubmit}>
                
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">Doctor Name <span>*</span></div>
                      <input
                        type="text"
                        name="name"
                        value={profile?.name || ""}
                        onChange={handleInputChange}
                        placeholder="Enter Name"
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] placeholder-[#a7a7a7]"
                      />
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">Email Address <span>*</span></div>
                      <input
                        type="email"
                        name="email"
                        value={profile?.email || ""}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full  py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] placeholder-[#a7a7a7]"
                      />
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">Phone Number <span>*</span></div>
                      <input
                        type="tel"
                        name="phone"
                        value={profile?.phone || ""}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] placeholder-[#a7a7a7]"
                      />
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">Hospital Name <span>*</span></div>
                      <select
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] bg-white text-[#a7a7a7]"
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
                      </select>
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">Gender <span>*</span></div>
                      <select
                        name="gender"
                        value={profile?.gender || ""}
                        onChange={handleInputChange}
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] bg-white text-[#a7a7a7]"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">Country <span>*</span></div>
                      <select
                        name="country"
                        value={selectedCountry || ""}
                        onChange={handleCountryChange}
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] bg-white text-[#a7a7a7]"
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.value} value={country.value}>
                            {country.label}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">State <span>*</span></div>
                      <select
                        name="state"
                        value={selectedState || ""}
                        onChange={handleStateChange}
                        disabled={!selectedCountry}
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] bg-white text-[#a7a7a7]"
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.value} value={state.value}>
                            {state.label}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    <div className="input-box relative py-[15px] w-[32%]">
                      <div className="label absolute top-[4px] left-[14px] bg-white">City <span>*</span></div>
                      <select
                        name="city"
                        value={profile?.city || ""}
                        onChange={handleCityChange}
                        disabled={!selectedState}
                        className="w-full py-[12px] px-[14px] border-[1px] border-[#d9d9d9] rounded-[10px] focus:border-[#718ebf] bg-white text-[#a7a7a7]"
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.value} value={city.value}>
                            {city.label}
                          </option>
                        ))}
                      </select>
                    </div>
  
                    <div className="condition flex justify-end gap-[10px] pt-[20px]">
                      <div className="cancel-btn">
                        <NavLink to={"/doctor/profile"}>
                          <button type="button" className="w-[160px] py-[12px] px-[14px] border-[1px] border-[#D3D3D3] rounded-[10px] text-black font-semibold text-[20px]">
                            Cancel
                          </button>
                        </NavLink>
                      </div>
                      <div className="save-btn">
                        <button type="submit" className="w-[160px] py-[12px] px-[14px] bg-[#0EABEB] rounded-[10px] text-white text-[20px] font-semibold">
                          Save
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
  
  );
};

export default DoctorProfileEdit;
