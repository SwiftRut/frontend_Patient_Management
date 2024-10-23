import "./Header.css";
import { IoIosArrowForward } from "react-icons/io";
import { useGlobal } from "../hooks/useGlobal";
import {
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Breadcrumbs,
} from "@mui/material";
import { Notifications, ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { breadcrumbNames } from "./constants";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const { userData } = useGlobal();
  // const {user:userData}= useAuth();
  console.log(userData)
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) {
      setSelectedOption(option);
    }
    setAnchorEl(null);
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?type=${selectedOption}&query=${searchTerm}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const userName = `${userData?.firstName || "User"} ${userData?.lastName || "Name"}`;
  const userRole = userData?.role || "Role";
  const userAvatar = userData?.avatar || "/img/avtar.png";
  console.log("image",userData)

  return (
    <div className="header">
      <div className="breadcrumbs">
        <img src="/img/home-2.png" alt="Home Icon" />
        <IoIosArrowForward className="icon" />
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to={"/"}>
            <Typography variant="body2" color="inherit">
              Home
            </Typography>
          </NavLink>
          {location.pathname !== "/" && (
            <Typography variant="body2" color="textPrimary">
              {breadcrumbNames[location.pathname.split("/")[1]] || "Page"}
            </Typography>
          )}
        </Breadcrumbs>
      </div>

      <div className="flex">
        <div className="flex items-center bg-gray-200 rounded-full px-4">
          <InputBase
            placeholder="Quick Search"
            inputProps={{ "aria-label": "search" }}
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <IconButton aria-label="filter options" onClick={handleClick}>
            <span className="text-sm">{selectedOption}</span>
            <ArrowDropDown />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
            <MenuItem onClick={() => handleClose("All")}>All</MenuItem>
            <MenuItem onClick={() => handleClose("Doctor")}>Doctor</MenuItem>
            <MenuItem onClick={() => handleClose("Patient")}>Patient</MenuItem>
          </Menu>
        </div>

        <div className="flex items-center space-x-4">
          <IconButton aria-label="notifications">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>

          <NavLink to={"/profile"}>
            <div className="flex items-center">
              <Avatar src={userAvatar} alt="User Avatar" />
              <div className="ml-2">
                <Typography variant="body2" fontWeight="bold">
                  {userName}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {userRole}
                </Typography>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
