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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { selectedOption, setSelectedOption } = useGlobal();
  const { searchTerm, setSearchTerm } = useGlobal();
  const { userData, getAdminProfile } = useGlobal();
  const [notification, setNoticiation] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const notifications = [
    {
      id: 1,
      type: "invoice",
      title: "Change Invoice Theme",
      description: "Lincoln Philips Change Invoice Theme.",
      time: "5 min ago",
    },
    {
      id: 2,
      type: "invoice",
      title: "Dr.Bharat",
      description: "Created Bill by dr.bharat.",
      time: "5 min ago",
    },
    {
      id: 3,
      type: "payment",
      title: "Payment Received.",
      description: "24,668 is the payment done of Miracle Center.",
      time: "1:52PM",
      status: "paid",
    },
    {
      id: 4,
      type: "payment",
      title: "Payment Cancelled.",
      description: "24,688 is the payment Cancelled of Miracle Center.",
      time: "1:52PM",
      status: "cancelled",
    },
    {
      id: 5,
      type: "profile",
      title: "Lincoln Philips",
      description:
        "Dr.Bharat Patel has been appointed to work with Successfully In Hospital.",
      time: "1:34PM",
    },
    {
      id: 6,
      type: "profile",
      title: "Lincoln Philips",
      description: "Doctor Removed Rakesh Patel.",
      time: "9:00AM",
    },
  ];

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
    <div class="header sticky top-0 bg-white z-10 flex items-center justify-between p-2">
      <div class="breadcrumbs flex items-center space-x-2 text-gray-600">
        <IoHomeSharp />
        <IoIosArrowForward class="icon" />
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink to="/">
            <Typography variant="body2" color="inherit" class="text-sm">
              Home
            </Typography>
          </NavLink>
          <Typography variant="body2" color="text-primary" class="text-sm">
            {breadcrumbNames[location.pathname.split("/")[1]] || "Page"}
          </Typography>
        </Breadcrumbs>
      </div>

      <div class="flex justify-between items-center mt-4">
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
            className="bg-gray-200 rounded-full p-2 mx-2 relative"
          >
            <Badge badgeContent={4} color="secondary">
              <Notifications onClick={() => setNoticiation(true)} />
            </Badge>
          </button>
          <NavLink to={"/doctor/profile"}>
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
      {notification && (
        <div className="w-[400px] bg-white shadow-lg rounded-lg absolute top-[80px] right-[159px] z-50">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="text-lg font-semibold">Notification</h2>
            <button className="text-red-500 hover:text-red-600">
              <IoCloseCircle onClose={() => setNoticiation(false)} />
            </button>
          </div>
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-3 px-4 py-3"
              >
                <div className="flex-shrink-0">
                  {notification.type === "invoice" && (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  )}
                  {notification.type === "payment" && (
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          notification.status === "paid"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      />
                    </div>
                  )}
                  {notification.type === "profile" && (
                    <img
                      src="/placeholder.svg?height=32&width=32"
                      alt="Profile"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.description.split(" ").map((word, index) => {
                      if (
                        ["invoice", "theme", "bill", "appointed"].some((term) =>
                          word.toLowerCase().includes(term)
                        )
                      ) {
                        return (
                          <span key={index} className="text-blue-500">
                            {word}{" "}
                          </span>
                        );
                      }
                      if (word.toLowerCase().includes("done")) {
                        return (
                          <span key={index} className="text-green-500">
                            {word}{" "}
                          </span>
                        );
                      }
                      if (
                        ["cancelled", "removed"].some((term) =>
                          word.toLowerCase().includes(term)
                        )
                      ) {
                        return (
                          <span key={index} className="text-red-500">
                            {word}{" "}
                          </span>
                        );
                      }
                      return word + " ";
                    })}
                  </p>
                </div>
                <div className="flex-shrink-0 text-xs text-gray-400">
                  {notification.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
