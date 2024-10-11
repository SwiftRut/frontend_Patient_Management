import "./Header.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdNotificationImportant } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";

const Header = () => {
  const { userData } = useGlobal();
  return (
    <div className="header">
      <div className="breadcrumbs">
        <img src="/img/home-2.png" />
        <IoIosArrowForward className="icon" />
        Profile Setting
      </div>
      <div className="user-search">
        <div className="search">
          <div className="searching">
            <CiSearch className="serch-icon" />
            <input type="text" placeholder="Quick Search" />
          </div>
          <div className="search-filter flex">
            <span className="filter-text">All</span>
            <FaAngleDown />
          </div>
        </div>
        <div className="flex">
          <div className="notifiction">
            <MdNotificationImportant />
          </div>
          <NavLink to={"/profile"}>
            <div className="user">
              <img src={userData?.avatar || "../img/profile.png"} alt="" className="rounded-full" />
              <div>
                <p>
                  {userData && userData.firstName && userData.lastName
                    ? `${userData?.firstName} ${userData?.lastName}`
                    : "Lincoln Philips"}
                </p>
                <span>Admin</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
