import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Breadcrumbs,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight, MdMenu } from "react-icons/md";
import { Notifications, ArrowDropDown, Search } from "@mui/icons-material";
import admin from "../../assets/admin-image.png";

const PatientHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    appointment: "Appointment Booking",
    PrescriptionAccess: "Prescription Access",
    TeleconsultationAccess: "Teleconsultation Access",
    chatScreen: "Chat Screen",
    Bill: "Bill",
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div className="w-64 p-4">
      <List>
        <ListItem button onClick={handleSearch}>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
            secondary={user.role}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="bg-white sticky top-0 flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 w-full">
      <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
        <IconButton className="sm:hidden mr-2" onClick={toggleDrawer(true)}>
          {/* <MdMenu /> */}
        </IconButton>
        <Breadcrumbs
          aria-label="breadcrumb"
          className="bg-[#f8fcfe] p-2 mb-2 rounded-full text-xs sm:text-sm sm:mb-2"
        >
          <Link
            underline="hover"
            color="inherit"
            to="/patient"
            className="flex items-center"
          >
            <GoHomeFill className="me-1 text-[#A7A7A7]" />
            <MdOutlineKeyboardArrowRight className="text-lg text-[#A7A7A7] me-1" />
            <p>Home</p>
          </Link>
          {location.pathname !== "/" && (
            <Link to={"/patient"} className="text-[#0EABEB]">
              patient
            </Link>
          )}
          {location.pathname !== "/" && (
            <Link
              to={location.pathname.split("/")[2]}
              className="text-[#0EABEB]"
            >
              <Typography variant="body2" color="textPrimary">
                {breadcrumbNames[location.pathname.split("/")[2]]}
              </Typography>
            </Link>
          )}
        </Breadcrumbs>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
        <div className="flex items-center bg-gray-200 rounded-full px-4 mb-2 sm:mb-0 w-full sm:w-full">
          <InputBase
            placeholder="Quick Search"
            inputProps={{ "aria-label": "search" }}
            className="flex-grow text-sm xs:text-[10px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <IconButton onClick={handleSearch}>
            <Search />
          </IconButton>
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
          <IconButton
            aria-label="notifications"
            className="hidden sm:inline-flex"
          >
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <div className="hidden sm:flex items-center">
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
        </div>
      </div>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default PatientHeader;
