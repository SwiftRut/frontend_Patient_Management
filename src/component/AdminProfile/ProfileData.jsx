import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";

import { useState, useEffect } from 'react';

export default function ProfileData() {
  const { user } = useAuth();
  const { getAdminProfile, userData } = useGlobal();

  // Local state for validation
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospital: '',
    gender: '',
    city: '',
    state: '',
    country: '',
  });

  useEffect(() => {
    getAdminProfile(user.id);
  }, [user.id]);

  // Validation function
  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!userData?.firstName) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    }
    if (!userData?.lastName) {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    }
    if (!userData?.email || !/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = 'Valid Email Address is required';
      valid = false;
    }
    if (!userData?.phone || !/^\d{10}$/.test(userData.phone)) {
      newErrors.phone = 'Valid Phone Number is required';
      valid = false;
    }
    if (!userData?.hospital?.name) {
      newErrors.hospital = 'Hospital Name is required';
      valid = false;
    }
    if (!userData?.gender) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }
    if (!userData?.city) {
      newErrors.city = 'City is required';
      valid = false;
    }
    if (!userData?.state) {
      newErrors.state = 'State is required';
      valid = false;
    }
    if (!userData?.country) {
      newErrors.country = 'Country is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform form submission actions here (if applicable)
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className="content">
      <div className="head flex">
        <div className="title">
          <p>Profile</p>
        </div>
        <div className="edit">
          <NavLink to={"/edit"}>
            <button className="flex">
              <FaEdit />
              <span>Edit Profile</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="form-box">
        <form onSubmit={handleSubmit} className="flex">
          <div className="input-box">
            <div className="label">
              First Name <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Enter First Name"
              value={userData?.firstName}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              Last Name <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Enter Last Name"
              value={userData?.lastName}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              Email Address <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Email Address"
              value={userData?.email}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              Phone Number* <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Phone Number"
              value={userData?.phone}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              Hospital Name <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Hospital Name"
              value={userData?.hospital?.name}
            />
            {errors.hospital && <span className="error">{errors.hospital}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              Gender <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Gender"
              value={userData?.gender}
            />
            {errors.gender && <span className="error">{errors.gender}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              City <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="City"
              value={userData?.city}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              State <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="State"
              value={userData?.state}
            />
            {errors.state && <span className="error">{errors.state}</span>}
          </div>

          <div className="input-box">
            <div className="label">
              Country <span>*</span>
            </div>
            <input
              disabled
              type="text"
              placeholder="Country"
              value={userData?.country}
            />
            {errors.country && <span className="error">{errors.country}</span>}
          </div>

          {/* You can add a submit button if needed */}
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
}

