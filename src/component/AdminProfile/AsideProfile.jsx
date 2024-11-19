import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";

export default function AsideProfile() {
  const {userData} = useGlobal();
  return (
    <div className="left w-[23%] border-r-3 border-gray-200 px-5 py-4">
  
  <div className="img-box text-center">
    <div className="img">
      <img
        src={userData?.avatar || "../img/profile.png"}
        alt="Profile"
        className="w-48 h-48 mx-auto rounded-full"
      />
    </div>
    <p className="text-xl font-semibold mt-2">
      {userData ? `${userData?.firstName} ${userData?.lastName}` : "Lincoln Philips"}
    </p>
  </div>

  
  <div className="menu mt-6">
    <p className="text-lg font-semibold text-gray-800 mb-4">Menu</p>
    <ul>
      
      <li className="mb-3">
        <NavLink 
          to=""
          className="flex items-center bg-gray-100 px-4 py-3 rounded-lg hover:bg-blue-100"
        >
          <CgProfile className="text-gray-700 hover:text-blue-500" />
          <span className="ml-4 text-gray-700 hover:text-blue-500 text-sm font-medium">
            Profile
          </span>
        </NavLink>
      </li>
      
      <li className="mb-3">
        <NavLink
          to="changePassword"
          className="flex items-center bg-gray-100 px-4 py-3 rounded-lg hover:bg-blue-100"
        >
          <FaLock className="text-gray-700 hover:text-blue-500" />
          <span className="ml-4 text-gray-700 hover:text-blue-500 text-sm font-medium">
            Change Password
          </span>
        </NavLink>
      </li>
      
      <li className="mb-3">
        <NavLink
          to="termsCondition"
          className="flex items-center bg-gray-100 px-4 py-3 rounded-lg hover:bg-blue-100"
        >
          <FaStickyNote className="text-gray-700 hover:text-blue-500" />
          <span className="ml-4 text-gray-700 hover:text-blue-500 text-sm font-medium">
            Terms & Condition
          </span>
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="privacyPolicy"
          className="flex items-center bg-gray-100 px-4 py-3 rounded-lg hover:bg-blue-100"
        >
          <SiSpringsecurity className="text-gray-700 hover:text-blue-500" />
          <span className="ml-4 text-gray-700 hover:text-blue-500 text-sm font-medium">
            Privacy Policy
          </span>
        </NavLink>
      </li>
    </ul>
  </div>
</div>

  );
}
