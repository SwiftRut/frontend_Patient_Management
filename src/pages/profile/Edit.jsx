import { FaCamera } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEdit } from "../../hooks/useEdit";
import { useEffect, useState } from "react";

import { Country, State, City } from "country-state-city";

export const Edit = () => {
  const navigate = useNavigate();
  const { profile, setProfile, handleInputChange, handleImageChange, handleFormSubmit, allHospitals } = useEdit();
  const [isLoading, setIsLoading] = useState(true);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  // Add loading state handler
  useEffect(() => {
    if (profile?.firstName || profile?.email) {
      setIsLoading(false);
    }
  }, [profile]);

  // Load country data on component mount and when profile updates
  useEffect(() => {
    const allCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(allCountries);

    // Set selected country if profile has a saved country
    if (profile?.country) {
      const countryCode = allCountries.find((c) => c.label === profile.country)?.value;
      setSelectedCountry(countryCode);
    }
  }, [profile?.country]); // Changed dependency

  // Load state data when selectedCountry changes or when profile updates
  useEffect(() => {
    if (selectedCountry) {
      const statesList = State.getStatesOfCountry(selectedCountry).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }));
      setStates(statesList);

      if (profile?.state) {
        const stateCode = statesList.find((s) => s.label === profile.state)?.value;
        setSelectedState(stateCode);
      }
    }
  }, [selectedCountry, profile?.state]); // Added profile.state dependency

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

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }
  console.log(profile)
  return (
    <div>
      <div class="edit-section">
        <div class="row">
          <div class="main">
            <div class="top h-[296px] bg-gradient-to-r from-[#4c49ed] to-[#020067]"></div>
            <div class="profile-setting w-[80%] mx-auto mt-[-15%]">
              <div class="head pb-[15px]">
                <p class="text-[44px] font-bold text-white">Profile Setting</p>
              </div>
              <div class="content bg-white rounded-[15px] p-[20px] shadow-[0_0_3px_1px_#d7d5d5] flex">
                <div class="left p-[20px] w-[23%] border-r-[3px] border-[#d9d9d94d]">
                  <div class="img-box">
                    <div class="img">
                      <img
                        src={profile?.avatar || "../img/profile.png"}
                        alt=""
                        class="mx-auto w-[200px] h-[200px] rounded-full"
                      />
                    </div>
                    <div class="change-profile pt-[15px]">
                      <ul>
                        <li class="flex justify-center items-center p-[12px] bg-[#F6F8FB] rounded-[10px]">
                          <label
                            for="profilePic"
                            class="flex items-center cursor-pointer"
                          >
                            <FaCamera />
                            <span class="pl-[15px] text-[#4F4F4F] text-[20px] font-semibold">
                              Change Profile
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="right w-[77%]">
                  <div class="content p-[30px] rounded-[15px]">
                    <div class="head flex justify-between items-center">
                      <div class="title">
                        <p class="text-[34px] font-semibold text-[#030229]">
                          Edit Profile
                        </p>
                      </div>
                    </div>
                    <div class="form-box pt-[20px]">
                      <form
                        onSubmit={handleFormSubmit}
                        class="flex flex-wrap justify-between"
                      >

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            First Name <span class="text-red-500">*</span>
                          </div>
                          <input
                            type="text"
                            name="firstName"
                            value={profile.firstName ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] placeholder-gray-400"
                          />
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            Last Name <span class="text-red-500">*</span>
                          </div>
                          <input
                            type="text"
                            name="lastName"
                            value={profile.lastName ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] placeholder-gray-400"
                          />
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            Email Address <span class="text-red-500">*</span>
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={profile.email ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter Email"
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] placeholder-gray-400"
                          />
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            Phone Number <span class="text-red-500">*</span>
                          </div>
                          <input
                            type="text"
                            name="phone"
                            value={profile.phone ?? ""}
                            onChange={handleInputChange}
                            placeholder="Enter Phone Number"
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] placeholder-gray-400"
                          />
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            Hospital Name <span class="text-red-500">*</span>
                          </div>
                          <select
                            name="hospitalName"
                            value={profile.hospitalId}
                            onChange={handleInputChange}
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] bg-white"
                          >
                            <option value="">Select Hospital</option>
                            {allHospitals.map((hospital) => (
                              <option key={hospital._id} value={hospital._id}>
                                {hospital.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            Gender <span class="text-red-500">*</span>
                          </div>
                          <select
                            name="gender"
                            value={profile.gender || ""}
                            onChange={handleInputChange}
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] bg-white"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                            Country <span class="text-red-500">*</span>
                          </div>
                          <select
                            name="country"
                            value={selectedCountry || ""}
                            onChange={handleCountryChange}
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] bg-white"
                          >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                          State <span class="text-red-500">*</span>
                          </div>
                          <select
                            name="state"
                            value={selectedState || ""}
                            onChange={handleStateChange}
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] bg-white"
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
                        
                        <div class="input-box w-[32%] relative py-[15px]">
                          <div class="label absolute top-[4px] left-[14px] bg-white z-10">
                          City <span class="text-red-500">*</span>
                          </div>
                          <select
                            name="gender"
                            value={profile.city || ""}
                            onChange={handleCityChange}
                            class="w-full p-[12px] border rounded-[10px] focus:border-[#718ebf] bg-white"
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


                        <div class="input-box flex justify-end w-full py-[15px]">
                          <div class="save-btn mr-[15px]">
                            <button
                              type="submit"
                              class="p-[12px] bg-[#0EABEB] text-white font-semibold rounded-[10px] text-[20px] w-[160px]"
                            >
                              Save
                            </button>
                          </div>
                          <div class="cancel-btn">
                            <button
                              type="button"
                              class="p-[12px] border text-black font-semibold rounded-[10px] text-[20px] w-[160px] border-gray-300"
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
