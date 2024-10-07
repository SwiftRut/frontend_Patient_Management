import { FaCamera } from "react-icons/fa6";
import {useNavigate } from 'react-router-dom';
import { useLocationData } from "../../hooks/useLocationData";
import { useEdit } from "../../hooks/useEdit";

export const Edit = () => {
  const navigate = useNavigate();
  const { profile, setProfile, handleInputChange, handleImageChange, handleFormSubmit } = useEdit();
  const { countries, states, cities, loadStates, loadCities } = useLocationData(profile.country, profile.state);

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
                      <img src={profile?.avatar || "../img/profile.png"} alt="" className='rounded-full' />
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
                            <button type="button" onClick={() => {setProfile({...profile});navigate('/profile')}}>Cancel</button>
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