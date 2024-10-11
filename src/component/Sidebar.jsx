import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Sidebar = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const { logout } = useAuth();

  // Function to toggle the accordion state
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
                  <div className="padding">
                    <img src="/img/Dashboard.png" />
                    <span>Dashboard</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctorManagement"}>
                  <div className="padding">
                    <img src="/img/Doctor-Management.png" />
                    <span>Doctor Management</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/patientManagement"}>
                  <div className="padding">
                    <img src="/img/Patient-Management.png" />
                    <span>Patient Management</span>
                  </div>
                </NavLink>
              </li>
              <li
                onClick={toggleAccordion}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <NavLink>
                  <div className="padding">
                    <img
                      src="/img/BillingAndPayments.png"
                      alt="Billing and Payments"
                    />
                    <span className="menu-item">Billing and Payments</span>
                  </div>
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
                        <span>insuranceClaims</span>
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
                  <div className="padding">
                    <img src="/img/ReportingAndAnalytics.png" />
                    <span>Reporting and Analytics</span>
                  </div>
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
