/* eslint-disable no-unused-vars */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { NavLink } from "react-router-dom";
import '../profile/doctorProfile.css'
import { useGlobal } from "../../../hooks/useGlobal";

export const DoctorAside = () => {
  const { userData } = useGlobal();
  return (
    <div className="left">
      <div className="img-box">
        <div className="img">
          <img src={userData?.avatar || "../img/dr-profile.png"} className='rounded-full' />
        </div>
        <p>{userData ? `${userData?.firstName} ${userData?.lastName}` : 'Lincoln Philips'}</p>
      </div>
      <div className="menu">
        <p>Menu</p>

        <ul>
          <li>
            <NavLink to={"/doctor/profile"}>
              <CgProfile /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/doctor/profile/changePassword"}>
              <FaLock /> <span>Change Password</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/doctor/profile/termsCondition"}>
              <FaStickyNote /> <span>Terms & Condition</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/doctor/profile/privacyPolicy"}>
              <SiSpringsecurity /> <span>Privacy Policy</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
