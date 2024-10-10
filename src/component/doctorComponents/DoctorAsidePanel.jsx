import { NavLink } from "react-router-dom";
import "./doctorAsidePanel.css";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { BsFillBagPlusFill } from "react-icons/bs";
import { MdOutlineWifiCalling } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";

export default function DoctorAsidePanel() {
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
                <NavLink to={"/doctor"}>
                  <div className="icon">
                    <FaCalendarAlt />
                  </div>
                  <span>Appointment Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctor/patientRecordAccesst"}>
                  <div className="icon">
                    <IoMdListBox />
                  </div>
                  <span>Patient Record Accesst</span>
                </NavLink>
              </li>
              <li onClick={toggleAccordion} style={{ display: "flex", flexDirection: "column" }}>
                <NavLink>
                  <div className="flex" style={{ flexDirection: "row" }}>
                    <div className="icon">
                      <BsFillBagPlusFill />
                    </div>
                    <span className="menu-item">Prescription Tools</span>
                  </div>
                </NavLink>

                {/* Accordion Dropdown */}
                {isAccordionOpen && (
                  <ul style={{ width: "100%" }} className="dropdown">
                    <li>
                      <NavLink to={"/doctor/createPrescriptionTools"}>
                        <span>create</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/doctor/managePrescriptionTools"}>
                        <span>Manage</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink to={"/doctor/teleconsultationModule"}>
                  <div className="icon">
                    <MdOutlineWifiCalling />
                  </div>
                  <span>Teleconsultation Module</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/doctor/chatScreen"}>
                  <div className="icon">
                    <IoMdChatbubbles />
                  </div>
                  <span>Chat</span>
                </NavLink>
              </li>
            </ul>
            <div className="logout-btn">
              <button className="flex" onClick={() => logout()}>
                <img src="../img/logout.png" alt="" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
