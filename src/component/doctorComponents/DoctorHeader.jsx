import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Breadcrumbs,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Notifications, ArrowDropDown } from "@mui/icons-material";
import admin from "../../assets/admin-image.png";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import { GoHomeFill } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import NotificationBox from "../../NotificaitionBox";

const DoctorHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { selectedOption, setSelectedOption } = useGlobal();
  const { searchTerm, setSearchTerm } = useGlobal();
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, getDoctorProfile } = useGlobal();
  const { user } = useAuth();

  const userName = `${userData?.name || "User"}`;
  const userRole = userData?.role || "Role";
  const userAvatar = userData?.avatar || "/img/avtar.png";

  useEffect(() => {
    getDoctorProfile(user.id);
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) {
      setSelectedOption(option);
    }
    setAnchorEl(null);
  };
  const breadcrumbNames = {
    doctorManagement: "Doctor Management",
    patient: "Patient Management",
    profile: "Profile Setting",
    monitorBilling: "Monitor Billing",
    patientManagement: "Patient Management",
    insuranceClaims: "Insurance Claims",
    reportingAndAnalytics: "Reporting & Analytics",
    paymentMethod: "Payment Method",
    patientRecordAccesst: "Patient Record Accesst",
    createPrescriptionTools: "Create Prescription Tools",
    managePrescriptionTools: "Manage Presciption Tools",
    teleconsultationModule: "Teleconsultation Module",
    chatScreen: "Chat Screen",
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

  return (
    <div className="header bg-white sticky top-0 z-50 flex items-center justify-between p-3">
      {/* Breadcrumb */}
      <div>
        <Breadcrumbs
          aria-label="breadcrumb"
          className="bg-[#f8fcfe] border rounded-full py-2 px-3 text-lg font-normal"
        >
          <div className="flex items-center">
            <GoHomeFill className="text-[#A7A7A7] text-2xl" />
            <FaAngleRight className="text-[#A7A7A7] mx-2" />
          </div>
          <Link underline="hover" color="inherit" to="/doctor">
            Home
          </Link>
          {location.pathname !== "/" && <Link to={"/doctor"}>doctor</Link>}
          {location.pathname !== "/" && (
            <NavLink to={location.pathname.split("/")[2]}>
              <Typography variant="body2" color="#0EABEB">
                {breadcrumbNames[location.pathname.split("/")[2]]}
              </Typography>
            </NavLink>
          )}
        </Breadcrumbs>
      </div>

      <div className="flex">
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
    </div>
  );
};

export default DoctorHeader;
