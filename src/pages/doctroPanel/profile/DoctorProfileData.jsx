import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useGlobal } from "../../../hooks/useGlobal";
import '../profile/doctorProfile.css'

const DoctorProfileData = () => {
  const { user } = useAuth();
  const { getDoctorProfile, userData } = useGlobal();

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
    const fetchData = async () => {
      try {
        await getDoctorProfile(user.id);
      } catch (error) {
        console.error(error);
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
          </div>
          <div className="input-box">
            <div className="label">
              Email Address <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Email Address" value={userData?.email} />
          </div>
          <div className="input-box">
            <div className="label">
              Phone Number* <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Phone Number*" value={userData?.phone} />
          </div>

          <div className="input-box">
            <div className="label">
              Hospital Name <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Hospital Name" value={userData?.hospitalName} />
          </div>

          <div className="input-box">
            <div className="label">
              Gender <span>*</span>
            </div>
            <input disabled type="text" placeholder="Gender" value={userData?.gender} />
          </div>

          <div className="input-box">
            <div className="label">
              City <span>*</span>
            </div>
            <input disabled type="text" placeholder=" City" value={userData?.city} />
          </div>

          <div className="input-box">
            <div className="label">
              State <span>*</span>
            </div>
            <input disabled type="text" placeholder=" State" value={userData?.state} />
          </div>

          <div className="input-box">
            <div className="label">
              Country <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Country" value={userData?.country} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorProfileData;
