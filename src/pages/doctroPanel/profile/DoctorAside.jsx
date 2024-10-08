/* eslint-disable no-unused-vars */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const DoctorAside = () => {
  return (
    <div className="left">
      <div className="img-box">
        <div className="img">
          <img src="../../img/dr-profile.png" alt="" />
        </div>
        <p>Lincoln Philips</p>
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
            <NavLink to={"termsCondition"}>
              <FaStickyNote /> <span>Terms & Condition</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"privacyPolicy"}>
              <SiSpringsecurity /> <span>Privacy Policy</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
