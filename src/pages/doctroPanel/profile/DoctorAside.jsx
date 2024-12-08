/* eslint-disable no-unused-vars */
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../../hooks/useGlobal";

export const DoctorAside = () => {
  const { userData } = useGlobal();
  return (
    <div className="left w-[23%] p-5 w-1/4 border border-r border-black">
      <div className="img-box text-center">
        <div className="img">
          <img
            src={userData?.avatar || "../img/dr-profile.png"}
            className="rounded-full mx-auto w-[214px] h-[214px]"
          />
        </div>
        <p className="text-[24px] text-[#030229] font-semibold py-2">
          {userData ? `Dr. ${userData?.name}` : ""}
        </p>
      </div>
      <div className="menu">
        <p className="text-[20px] font-semibold text-[#030229] py-2">Menu</p>
        <ul>
          <li className="mb-2">
            <NavLink
              to={"/doctor/profile"}
              className="flex items-center bg-[#F6F8FB] p-4 rounded-[10px] hover:text-sky-500 hover:fill-sky-500"
            >
              <CgProfile />
              <span className="ml-4 text-base font-[18px] text-[#4F4F4F] hover:text-sky-500">
                Profile
              </span>
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to={"/doctor/profile/changePassword"}
              className="flex items-center bg-[#F6F8FB] p-4 rounded-[10px] hover:text-sky-500 hover:fill-sky-500"
            >
              <FaLock />
              <span className="ml-4 text-base font-[18px] text-[#4F4F4F] hover:text-sky-500">
                Change Password
              </span>
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to={"/doctor/profile/termsCondition"}
              className="flex items-center bg-[#F6F8FB] p-4 rounded-[10px] hover:text-sky-500 hover:fill-sky-500"
            >
              <FaStickyNote />
              <span className="ml-4 text-base font-[18px] text-[#4F4F4F] hover:text-sky-500">
                Terms & Condition
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/doctor/profile/privacyPolicy"}
              className="flex items-center bg-[#F6F8FB] p-4 rounded-[10px] hover:text-sky-500 hover:fill-sky-500"
            >
              <SiSpringsecurity />
              <span className="ml-4 text-base font-[18px] text-[#4F4F4F] hover:text-sky-500">
                Privacy Policy
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
