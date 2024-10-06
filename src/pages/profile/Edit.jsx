import { useEffect, useState } from 'react';
import { FaCamera } from "react-icons/fa6";
import { useGlobal } from '../../context/GlobalContext';
import { useAuth } from '../../context/AuthContext';
import { Country, State, City } from 'country-state-city';
import {useNavigate } from 'react-router-dom';

export const Edit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { editAdminProfile, adminData } = useGlobal();
  const [profile, setProfile] = useState({...adminData,hospitalName:adminData?.hospital?.name});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [imageBlob, setImageBlob] = useState(null);
  useEffect(() => {
    const loadCountries = () => {
      const allCountries = Country.getAllCountries().map(country => ({
        value: country.isoCode,
        label: country.name
      }));
      setCountries(allCountries);
    };
    loadCountries();
  }, []);

  useEffect(() => {
    if (profile.country) {
      const statesList = State.getStatesOfCountry(profile.country).map(state => ({
        value: state.isoCode,
        label: state.name
      }));
      setStates(statesList);
    } else {
      setStates([]);
    }
    setCities([]);  // Reset cities if country changes
  }, [profile.country]);

  useEffect(() => {
    if (profile.state) {
      const citiesList = City.getCitiesOfState(profile.country, profile.state).map(city => ({
        value: city.name,
        label: city.name
      }));
      setCities(citiesList);
    } else {
      setCities([]);
    }
  }, [profile.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const blob = new Blob([file], { type: file.type });
      setImageBlob(blob);
      
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePic: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new FormData object
      const formData = new FormData();
      
      // Append all profile data to formData
      Object.keys(profile).forEach(key => {
        formData.append(key, profile[key]);
      });
      
      // Append the image blob if it exists
      if (imageBlob) {
        formData.append('profilePic', imageBlob, 'profile.jpg');
      }
      console.log(formData,profile)
      // Call the editAdminProfile function with formData
      await editAdminProfile(user.id, formData);
      navigate('/profile');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
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
                      <img src={adminData?.avatar || "../img/profile.png"} alt="" className='rounded-full' />
                    </div>
                    <div className="change-profile">
                      <ul>
                        <li>
                        <input 
                            type="file" 
                            id="profilePic" 
                            name="profilePic" 
                            style={{display: 'none'}} 
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                          <label htmlFor="profilePic"><FaCamera /><span>Change Profile</span></label>
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
                          <div className="label">First Name <span>*</span></div>
                          <input
                            type="text"
                            name="firstName"
                            value={profile?.firstName || ''}
                            onChange={handleInputChange}
                            placeholder="Enter First Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Last Name <span>*</span></div>
                          <input
                            type="text"
                            name="lastName"
                            value={profile.lastName || ''}
                            onChange={handleInputChange}
                            placeholder="Enter Last Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Email Address <span>*</span></div>
                          <input
                            type="text"
                            name="email"
                            value={profile.email || ''}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Phone Number <span>*</span></div>
                          <input
                            type="text"
                            name="phone"
                            value={profile.phone || ''}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Hospital Name <span>*</span></div>
                          <input
                            type="text"
                            name="hospitalName"
                            value={profile?.hospitalName || ''}
                            onChange={handleInputChange}
                            placeholder="Hospital Name"
                          />
                        </div>

                        <div className="input-box">
                          <div className="label">Gender <span>*</span></div>
                          <select
                            name="gender"
                            value={profile.gender || ''}
                            onChange={handleInputChange}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">Country <span>*</span></div>
                          <select
                            name="country"
                            value={profile.country || ''}
                            onChange={(e) => handleInputChange({ target: { name: 'country', value: e.target.value } })}
                          >
                            {countries.map(country => (
                              <option key={country.value} value={country.value}>{country.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">State <span>*</span></div>
                          <select
                            name="state"
                            value={profile.state || ''}
                            onChange={(e) => handleInputChange({ target: { name: 'state', value: e.target.value } })}
                          >
                            {states.map(state => (
                              <option key={state.value} value={state.value}>{state.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="label">City <span>*</span></div>
                          <select
                            name="city"
                            value={profile.city || ''}
                            onChange={(e) => handleInputChange({ target: { name: 'city', value: e.target.value } })}
                          >
                            {cities.map(city => (
                              <option key={city.value} value={city.value}>{city.label}</option>
                            ))}
                          </select>
                        </div>

                        <div className="input-box">
                          <div className="save-btn">
                            <button type="submit">Save</button>
                          </div>
                          <div className="cancel-btn">
                            <button type="button" onClick={() => {setProfile({...adminData});navigate('/profile')}}>Cancel</button>
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
