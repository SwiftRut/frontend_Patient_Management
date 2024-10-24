import { useState } from "react";
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

const DoctorHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const user = {
    firstName: "Lincoln",
    lastName: "Philips",
    email: "lincon@gmail.com",
    phoneNumber: "99130 53222",
    hospitalName: "Silver Park Medical Center",
    Password: "123456",
    gender: "Male",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    role: "doctor",
  };

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
  console.log(location.pathname.split("/")[2]);
  return (
    <div className="header bg-white shadow-md sticky top-0 z-50 flex items-center justify-between p-4">
      {/* Breadcrumb */}
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/doctor">
            Home
          </Link>
          {location.pathname !== "/" && <Link to={"/doctor"}>doctor</Link>}
          {location.pathname !== "/" && (
            <NavLink to={location.pathname.split("/")[2]}>
              <Typography variant="body2" color="textPrimary">
                {breadcrumbNames[location.pathname.split("/")[2]]}
              </Typography>
            </NavLink>
          )}
        </Breadcrumbs>
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
          <NavLink to={"/doctor/profile"}>
            <div className="flex items-center">
              <Avatar src={admin} alt="User Image" />
              <div className="ml-2">
                <Typography variant="body2" fontWeight="bold">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {user.role}
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
