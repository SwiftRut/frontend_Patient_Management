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
  ListItemIcon,
} from "@mui/material";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineKeyboardArrowRight, MdMenu } from "react-icons/md";
import {
  Notifications,
  ArrowDropDown,
  Search,
  Home,
  Close,
} from "@mui/icons-material";
import admin from "../../assets/admin-image.png";

const PatientHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const user = {
    firstName: "Lincoln",
    lastName: "Philips",
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

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const breadcrumbNames = {
    doctorManagement: "Doctor Management",
    patient: "Patient Management",
    profile: "Profile Setting",
    // ... (other breadcrumb names)
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
        <ListItem button component={Link} to="/patient">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar src={admin} alt="User Image" />
          </ListItemIcon>
          <ListItemText
            primary={`${user.firstName} ${user.lastName}`}
            secondary={user.role}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="bg-white sticky top-0 flex flex-wrap items-center justify-between p-2 w-full min-w-[230px]">
      <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
        {/* <IconButton className="sm:hidden mr-2" onClick={toggleDrawer(true)}>
          <MdMenu />
        </IconButton> */}
        <Breadcrumbs
          aria-label="breadcrumb"
          className="bg-[#f8fcfe] p-2 rounded-full text-xs sm:text-sm"
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

      <div className="flex items-center justify-center w-full sm:w-auto">
        {/* Search bar for larger screens */}
        <div className="hidden sm:flex items-center bg-gray-200 rounded-full px-4 mr-4">
          <InputBase
            placeholder="Quick Search"
            inputProps={{ "aria-label": "search" }}
            className="flex-grow text-sm"
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
        </div>

        {/* Search icon for small screens */}
        <IconButton className="sm:hidden mr-2" onClick={toggleSearch}>
          <Search />
        </IconButton>

        <IconButton
          aria-label="notifications"
          className="hidden sm:inline-flex"
        >
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
        <div className="hidden sm:flex items-center ml-4">
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

      {/* Collapsible search bar for small screens */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="flex items-center bg-gray-200 rounded-full px-4">
              <InputBase
                placeholder="Quick Search"
                inputProps={{ "aria-label": "search" }}
                className="flex-grow text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <IconButton onClick={handleSearch}>
                <Search />
              </IconButton>
              <IconButton aria-label="dropdown" onClick={handleClick}>
                <span className="text-sm">{selectedOption}</span>
                <ArrowDropDown />
              </IconButton>
            </div>
            <IconButton
              className="absolute top-2 right-2"
              onClick={toggleSearch}
            >
              <Close />
            </IconButton>
          </div>
        </div>
      )}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose("All")}>All</MenuItem>
        <MenuItem onClick={() => handleClose("Doctor")}>Doctor</MenuItem>
        <MenuItem onClick={() => handleClose("Patient")}>Patient</MenuItem>
      </Menu>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default PatientHeader;
