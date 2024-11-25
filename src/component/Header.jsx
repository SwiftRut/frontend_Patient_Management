// import "./Header.css";
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
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { breadcrumbNames } from "./constants";
import { useAuth } from "../hooks/useAuth";
import { IoHomeSharp } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import NotificationBox from "../NotificaitionBox";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { selectedOption, setSelectedOption } = useGlobal();
  const { searchTerm, setSearchTerm } = useGlobal();
  const { userData, getAdminProfile } = useGlobal();
  const [notification, setNoticiation] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //   {
  //     id: 1,
  //     type: "invoice",
  //     title: "Change Invoice Theme",
  //     description: "Lincoln Philips Change Invoice Theme.",
  //     time: "5 min ago",
  //   },
  //   {
  //     id: 2,
  //     type: "invoice",
  //     title: "Dr.Bharat",
  //     description: "Created Bill by dr.bharat.",
  //     time: "5 min ago",
  //   },
  //   {
  //     id: 3,
  //     type: "payment",
  //     title: "Payment Received.",
  //     description: "24,668 is the payment done of Miracle Center.",
  //     time: "1:52PM",
  //     status: "paid",
  //   },
  //   {
  //     id: 4,
  //     type: "payment",
  //     title: "Payment Cancelled.",
  //     description: "24,688 is the payment Cancelled of Miracle Center.",
  //     time: "1:52PM",
  //     status: "cancelled",
  //   },
  //   {
  //     id: 5,
  //     type: "profile",
  //     title: "Lincoln Philips",
  //     description:
  //       "Dr.Bharat Patel has been appointed to work with Successfully In Hospital.",
  //     time: "1:34PM",
  //   },
  //   {
  //     id: 6,
  //     type: "profile",
  //     title: "Lincoln Philips",
  //     description: "Doctor Removed Rakesh Patel.",
  //     time: "9:00AM",
  //   },
  // ];

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
  useEffect(() => {
    console.log(user);
    getAdminProfile(user.id);
  }, []);
  console.log(userData, "<<<<<<<<<<<<<<<<<<<<<<<<<<< header");
  const userName = `${userData?.firstName || "User"} ${
    userData?.lastName || "Name"
  }`;
  const userRole = userData?.role || "Role";
  const userAvatar = userData?.avatar || "/img/avtar.png";
  console.log("image", userData);

  return (
    <div className="header sticky top-0 bg-white z-10 flex items-center justify-between p-2">
      <div className="breadcrumbs flex items-center space-x-2 text-gray-600 bg-[#f8fcfe] border rounded-full py-2 px-3 text-lg font-normal">
        <IoHomeSharp />
        <IoIosArrowForward className="icon" />
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to="/">
            <Typography variant="body2" color="inherit" className="text-sm">
              Home
            </Typography>
          </NavLink>
          <Typography variant="body2" color="text-primary" className="text-sm">
            {breadcrumbNames[location.pathname.split("/")[1]] || "Page"}
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="flex justify-between items-center mt-0">
        <div className="flex items-right items-center bg-gray-100 rounded-full px-4">
          <RiSearchLine className="text-[#4F4F4F] text-xl me-2" />
          <InputBase
            placeholder="Quick Search"
            inputProps={{ "aria-label": "search" }}
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <IconButton aria-label="dropdown" onClick={handleClick}>
            <span className="text-sm">{selectedOption}</span>
            <ArrowDropDown />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleClose(null)}
          >
            <MenuItem onClick={() => handleClose("All")}>All</MenuItem>
            <MenuItem onClick={() => handleClose("Doctor")}>Doctor</MenuItem>
            <MenuItem onClick={() => handleClose("Patient")}>Patient</MenuItem>
          </Menu>
        </div>
        <div className="flex items-center space-x-4">
          <button
            aria-label="notifications"
            // className="bg-gray-200 rounded-full p-2 mx-2 relative"
          >
            <Badge color="secondary">
              <NotificationBox />
            </Badge>
          </button>
          <NavLink to={"/profile"}>
            <div className="flex items-center">
              <Avatar src={userAvatar} alt="User Image" />
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
