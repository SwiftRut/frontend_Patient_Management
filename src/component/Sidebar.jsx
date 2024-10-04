import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

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
                  <img src="/img/Dashboard.png" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctorManagement"}>
                  <img src="/img/Doctor-Management.png" />
                  <span>Doctor Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <img src="/img/Patient-Management.png" />
                  <a href="#">Patient Management</a>
                </NavLink>
              </li>
              <li
                onClick={toggleAccordion}
                style={{ display: "flex", flexDirection: "column"}}
              >
                <NavLink>
                  <img
                    src="/img/BillingAndPayments.png"
                    alt="Billing and Payments"
                    width="50px"
                  />
                  <a className="menu-item">Billing and Payments</a>
                </NavLink>

                {/* Accordion Dropdown */}
                {isAccordionOpen && (
                  <ul>
                    <li>
                      <a href="#">Invoice Management</a>
                    </li>
                    <li>
                      <a href="#">Payment History</a>
                    </li>
                    <li>
                      <a href="#">Payment Methods</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <img src="/img/ReportingAndAnalytics.png" />
                <a href="#">Reporting and Analytics</a>
              </li>
            </ul>
            <div className="logout-btn">
              <button className="flex">
                <img src="../img/logout.png" alt="" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
