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
          <nav class="mb-40">
            <ul class="space-y-2">
              <li>
                <NavLink to={"/patient"}>
                  <span class="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] transition duration:300 rounded-lg"><RiContactsBookFill className="me-2"/>Personal Health Record</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/patient/appointment"}>
                  <span class="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] transition duration:300 rounded-lg"><FaCalendarCheck className="me-2"/>Appointment Booking</span>
                </NavLink>
              </li>
              <li>
              <NavLink to={"/patient"}>
                  <span class="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] transition duration:300 rounded-lg"><FaFilePrescription className="me-2"/> Prescription Access</span>
                </NavLink>
              </li>
              <li>
              <NavLink to={"/patient"}>
                  <span class="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] transition duration:300 rounded-lg"><FaLaptopMedical className="me-2"/>Teleconsultation Access</span>
                </NavLink>
              </li>
              <li>
              <NavLink to={"/patient/chatScreen"}>
                  <span  class="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] transition duration:300 rounded-lg"><IoMdChatbubbles className="me-2"/>Chat</span>
                </NavLink>
              </li>
              <li>
              <NavLink to={"/patient"}>
                  <span class="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] transition duration:300 rounded-lg"
                  > <RiBillLine className="me-2"/>Bills</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="aside-img">
            <div className="img">
              <img src="/img/header-img.png" width="150px" />
            </div>
            <div className="text">
              <h3>Hospital appointment</h3>
              <p>
                You have to fill up the form to be admitted to the hospital.
              </p>
              <div className="btn">
                <button>
                  <FaCalendarAlt />
                  <h3> Appointment</h3>
                </button>
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
      {/* <div className="siderbar">
      <div className="w-[17%]">
      <div class="flex flex-col h-screen bg-background">
  <div class="p-4">
    <h1 class="text-2xl font-bold text-primary">Hospital</h1>
    <p class="text-muted-foreground">Digital Care</p>
  </div>
  <nav class="flex-grow">
    <ul class="space-y-2">
      <li><a href="#" class="flex items-center p-2 text-muted hover:bg-muted/10 rounded-lg">Personal Health Record</a></li>
      <li><a href="#" class="flex items-center p-2 text-primary hover:bg-primary/10 rounded-lg">Appointment Booking</a></li>
      <li><a href="#" class="flex items-center p-2 text-muted hover:bg-muted/10 rounded-lg">Prescription Access</a></li>
      <li><a href="#" class="flex items-center p-2 text-muted hover:bg-muted/10 rounded-lg">Teleconsultation Access</a></li>
      <li><a href="#" class="flex items-center p-2 text-muted hover:bg-muted/10 rounded-lg">Chat</a></li>
      <li><a href="#" class="flex items-center p-2 text-muted hover:bg-muted/10 rounded-lg">Bills</a></li>
    </ul>
  </nav>
  <div class="p-4">
    <div class="bg-card p-4 rounded-lg shadow-md">
      <img aria-hidden="true" alt="hospital appointment" src="https://openui.fly.dev/openui/24x24.svg?text=🗓️" class="mb-2" />
      <p class="text-muted-foreground">Hospital appointment</p>
      <p class="text-muted-foreground">You have to fill up the form to be admitted to the hospital.</p>
      <button class="mt-2 bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-lg">Appointment</button>
    </div>
  </div>
  <div class="p-4">
    <a href="#" class="text-muted hover:text-destructive">Logout</a>
  </div>
</div>
      </div>
      </div> */}
    </>
  );
}
