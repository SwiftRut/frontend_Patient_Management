import "./Header.css";
import { IoIosArrowForward } from "react-icons/io";
// import { MdNotificationImportant } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { FaAngleDown } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
import { Typography, IconButton, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import { Notifications, ArrowDropDown } from "@mui/icons-material";
import { useGlobal } from "../hooks/useGlobal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { userData } = useGlobal();
  console.log(userData);

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
      // Navigate to a search route with selectedOption and searchTerm as query parameters
      navigate(`/search?type=${selectedOption}&query=${searchTerm}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="header">
      <div className="breadcrumbs">
        <img src="/img/home-2.png" />
        <IoIosArrowForward className="icon" />
        Profile Setting
      </div>
      <div className="flex">
        <div className="flex items-right bg-gray-200 rounded-full px-4">
          <InputBase
            placeholder="Quick Search"
            inputProps={{ "aria-label": "search" }}
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <IconButton aria-label="dropdown" onClick={handleClick}>
            <span>{selectedOption}</span>
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
              <Avatar src="/img/avtar.png" alt="User Image" />
              <div className="ml-2">
                <Typography variant="body2" fontWeight="bold">
                  Lincoln Philips
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Admin
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
