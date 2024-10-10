import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

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
                  <img src="/img/Dashboard.png" alt="Dashboard" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctorManagement"}>
                  <img src="/img/Doctor-Management.png" alt="Doctor Management" />
                  <span>Doctor Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/patientManagement"}>
                  <img src="/img/Patient-Management.png" alt="Patient Management" />
                  <span>Patient Management</span>
                </NavLink>
              </li>
              <li
                onClick={toggleAccordion}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <NavLink>
                <img
                  src="/img/BillingAndPayments.png"
                  alt="Billing and Payments"
                />
                <span className="menu-item">Billing and Payments</span>
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
                  <img src="/img/ReportingAndAnalytics.png" alt="Reporting and Analytics" />
                  <span>Reporting and Analytics</span>
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
