import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useGlobal } from "../../../hooks/useGlobal";
import '../profile/doctorProfile.css'

const DoctorProfileData = () => {
  const { user } = useAuth();
  const { getDoctorProfile, userData } = useGlobal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalName: '',
    gender: '',
    city: '',
    state: '',
    country: ''
  });
  const [errorMessages, setErrorMessages] = useState({});

  console.log("userData",userData)
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDoctorProfile(user.id);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
        hospitalName: userData.hospitalName || '',
        gender: userData.gender || '',
        city: userData.city || '',
        state: userData.state || '',
        country: userData.country || ''
      });
    }
  }, [userData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDoctorProfile(user.id);
        
      } catch (error) {
        console.error(error);
        toast.error("Error fetching doctor profile.");
      }
    }
    fetchData();
  }, [])
  
  return (
    <div className="content">
      <div className="head flex">
        <div className="title">
          <p>Profile</p>
        </div>
        <div className="edit">
          <NavLink to={"/doctor/edit"}>
            <button className="flex">
              <FaEdit />
              <span>Edit Profile</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="form-box">
        <form action="" className="flex">
          <div className="input-box">
            <div className="label">
              Doctor Name <span>*</span>
            </div>
            <input disabled type="text" placeholder="Enter Name" value={userData?.name} />
            {errorMessages.name && <p className="error-message">{errorMessages.name}</p>}
          </div>
          <div className="input-box">
            <div className="label">
              Email Address <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Email Address" value={userData?.email} />
            {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
          </div>
          <div className="input-box">
            <div className="label">
              Phone Number* <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Phone Number*" value={userData?.phone} />
            {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
          </div>

          <div className="input-box">
            <div className="label">
              Hospital Name <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Hospital Name" value={userData?.hospitalName} />
              {errorMessages.hospitalName && <p className="error-message">{errorMessages.hospitalName}</p>}
          </div>

          <div className="input-box">
            <div className="label">
              Gender <span>*</span>
            </div>
            <input disabled type="text" placeholder="Gender" value={userData?.gender} />
            {errorMessages.gender && <p className="error-message">{errorMessages.gender}</p>}
          </div>

          <div className="input-box">
            <div className="label">
              City <span>*</span>
            </div>
            <input disabled type="text" placeholder=" City" value={userData?.city} />
            {errorMessages.city && <p className="error-message">{errorMessages.city}</p>}
          </div>

          <div className="input-box">
            <div className="label">
              State <span>*</span>
            </div>
            <input disabled type="text" placeholder=" State" value={userData?.state} />
            {errorMessages.state && <p className="error-message">{errorMessages.state}</p>}
          </div>

          <div className="input-box">
            <div className="label">
              Country <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Country" value={userData?.country} />
            {errorMessages.country && <p className="error-message">{errorMessages.country}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorProfileData;
