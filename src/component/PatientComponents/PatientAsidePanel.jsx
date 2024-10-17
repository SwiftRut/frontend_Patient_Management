import { NavLink } from "react-router-dom";
import "./patientAsidePanel.css";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { RiContactsBookFill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";
import { FaFilePrescription } from "react-icons/fa6";
import { FaLaptopMedical } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

export default function PatientAsidePanel() {
  const { logout } = useAuth();
  // const toggleAccordion = () => {
  //   setAccordionOpen((prevState) => !prevState);
  // };

  return (
    <>
      <div className="sidebar">
        <div className="asite">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </div>
          <div className="menu flex">
            <div>
              <ul>
                <li>
                  <NavLink to={"/patient"}>
                    <div className="icon">
                      <RiContactsBookFill />
                    </div>
                    <span>Personal Health Record</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/patient/appointment"}>
                    <div className="icon">
                      <FaCalendarCheck />
                    </div>
                    <span>Appointment Booking</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/patient"}>
                    <div className="icon">
                      <FaFilePrescription />
                    </div>
                    <span className="menu-item">Prescription Access</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/patient"}>
                    <div className="icon">
                      <FaLaptopMedical />
                    </div>
                    <span>Teleconsultation Access</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/patient/chatScreen"}>
                    <div className="icon">
                      <IoMdChatbubbles />
                    </div>
                    <span>Chat</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/patient"}>
                    <div className="icon">
                      <RiBillLine />
                    </div>
                    <span>Bill</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <div className="aside-img">
                  <div className="img">
                    <img src="/img/header-img.png" width="150px" />
                  </div>
                  <div className="text">
                    <h3>Hospital appointment</h3>
                    <p>You have to fill up the form to be admitted to the hospital.</p>
                    <div className="btn">
                      <button>
                        <FaCalendarAlt />
                        <h3> Appointment</h3>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="logout-btn">
                <button className="flex" onClick={() => logout()}>
                  <img src="../img/logout.png" alt="" /> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
