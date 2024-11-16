import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

const Sidebar = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const { logout } = useAuth();

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="sidebar">
        <div className="asite">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </div>
          <div className="menu flex">
            <ul>
              <li>
                <NavLink to={"/"}>
                  <MdDashboard />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctorManagement"}>
                <FaUser />
                  <p>Doctor Management</p>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/patientManagement"}>
                <FaUsers />
                  <p>Patient Management</p>
                </NavLink>
              </li>
              <li
                onClick={toggleAccordion}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <NavLink>
                <FaSackDollar />
                <p className="menu-item">Billing and Payments</p>
                </NavLink>

                {/* Accordion Dropdown */}
                {isAccordionOpen && (
                  <ul style={{ width: "100%" }} className="dropdown">
                    <li>
                      <NavLink to={"/monitorBilling"}>
                        <span>Monitor Billing</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/insuranceClaims"}>
                        <span>Insurance Claims</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/paymentMethod"}>
                        <span>Payment Methods</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink to={"/reportingAndAnalytics"}>
                <MdAnalytics />
                  <p>Reporting and Analytics</p>
                </NavLink>
              </li>
            </ul>
            <div className="logout-btn">
              {/* Logout button calls the logout function */}
              <button className="flex" onClick={() => logout()}>
                <img src="../img/logout.png" alt="Logout" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
