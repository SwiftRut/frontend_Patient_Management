import { FaCamera } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useEdit } from '../../hooks/useEdit';
import { useLocationData } from '../../hooks/useLocationData';
import Prop
export const Edit = () => {
  const navigate = useNavigate();
  const { profile, handleInputChange, handleImageChange, handleFormSubmit } = useEdit();
  const { countries, states, cities, loadStates, loadCities } = useLocationData(profile.country, profile.state);

  return (
    <div className="edit-section">
      <div className="row">
        <div className="main">
          <div className="profile-setting">
            <div className="head"><p>Profile Setting</p></div>
            <div className="content flex">
              <div className="left">
                <div className="img-box">
                  <img src={profile.profilePic || "../img/profile.png"} alt="" className="rounded-full" />
                  <div className="change-profile">
                    <input 
                      type="file" 
                      id="profilePic" 
                      name="profilePic" 
                      style={{display: 'none'}} 
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                    <label htmlFor="profilePic">
                      <FaCamera />
                      <span>Change Profile</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="content">
                  <div className="title"><p>Edit Profile</p></div>
                  <form onSubmit={handleFormSubmit} className="flex form-box">
                    <Input label="First Name" name="firstName" value={profile.firstName} handleChange={handleInputChange} required />
                    <Input label="Last Name" name="lastName" value={profile.lastName} handleChange={handleInputChange} required />
                    <Input label="Email Address" name="email" value={profile.email} handleChange={handleInputChange} required />
                    <Input label="Phone Number" name="phone" value={profile.phone} handleChange={handleInputChange} required />
                    <Input label="Hospital Name" name="hospitalName" value={profile.hospitalName} handleChange={handleInputChange} required />
                    <Select label="Gender" name="gender" value={profile.gender} options={["Male", "Female"]} handleChange={handleInputChange} required />
                    <Select label="Country" name="country" value={profile.country} options={countries} handleChange={(e) => {
                      handleInputChange(e);
                      loadStates();
                    }} required />
                    <Select label="State" name="state" value={profile.state} options={states} handleChange={(e) => {
                      handleInputChange(e);
                      loadCities();
                    }} required />
                    <Select label="City" name="city" value={profile.city} options={cities} handleChange={handleInputChange} required />
                    <div className="flex">
                      <button type="submit" className="save-btn">Save</button>
                      <button type="button" onClick={() => navigate('/profile')} className="cancel-btn">Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, handleChange, required = false }) => (
  <div className="input-box">
    <label className="label">{label}{required && <span>*</span>}</label>
    <input
      type="text"
      name={name}
      value={value || ''}
      onChange={handleChange}
      placeholder={`Enter ${label}`}
      required={required}
    />
  </div>
);
Input.PropTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
}
const Select = ({ label, name, value, options, handleChange, required = false }) => (
  <div className="input-box">
    <label className="label">{label}{required && <span>*</span>}</label>
    <select
      name={name}
      value={value || ''}
      onChange={handleChange}
      required={required}
    >
      <option value="">Select {label}</option>
      {options.map((option, index) =>
        typeof option === 'string' ? (
          <option key={index} value={option}>{option}</option>
        ) : (
          <option key={option.value} value={option.value}>{option.label}</option>
        )
      )}
    </select>
  </div>
);

Select.PropTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
}
