import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PatientHeader from "../../component/PatientComponents/PatientHeader";
import PersonalHealthRecord from "./profile/PersonalHealthRecord";
import PatientProfile from "./profile/PatientProfile";
import Prescriptions from "./profile/Prescriptions";
import TestReport from "./profile/TestReport";
import MedicalHistory from "./profile/MedicalHistory";
import AllAppointment from "./profile/Allappoiment";
import Appointment from "./Appointment";
import AppointmentBooking from "./AppointmentBooking";
import ChatScreen1 from "./ChatScreen1";
import PriscriptionAccess from "./PriscriptionAccess";
import Teleconsultation from "./Teleconsultation";
import Bills from "./Bills";
import { RiContactsBookFill } from "react-icons/ri";
import {
  FaCalendarCheck,
  FaFilePrescription,
  FaLaptopMedical,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";

export default function PatientPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static z-30`}
      >
        <div className="flex flex-col h-full">
          <div className="text-right pe-2">
            <button onClick={toggleSidebar} className="md:hidden">
              <X size={24} />
            </button>
          </div>
          <div className="logo p-4 text-center flex items-center justify-between p-4 border-b">
            {/* <NavLink to="/patient"> */}
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-full max-w-[200px] mx-auto"
            />
            {/* </NavLink> */}
          </div>
          <nav className="mb-32">
            <ul className="space-y-2 p-2">
              {[
                {
                  to: "/patient",
                  icon: RiContactsBookFill,
                  text: "Personal Health Record",
                },
                {
                  to: "/patient/appointment",
                  icon: FaCalendarCheck,
                  text: "Appointment Booking",
                },
                {
                  to: "/patient/priscriptionAccess",
                  icon: FaFilePrescription,
                  text: "Prescription Access",
                },
                {
                  to: "/patient/teleconsultation",
                  icon: FaLaptopMedical,
                  text: "Teleconsultation Access",
                },
                {
                  to: "/patient/chatScreen",
                  icon: IoMdChatbubbles,
                  text: "Chat",
                },
                { to: "/patient/bills", icon: RiBillLine, text: "Bills" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className="flex items-center p-3 text-[#818194] hover:text-[#0eabeb] hover:bg-gradient-to-r from-[#d5f1fa] to-white transition duration-300 rounded-lg"
                  >
                    <item.icon className="me-2" />
                    <span>{item.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="aside-img mx-auto w-4/5 bg-[#f4f4f4] text-center relative p-4 mb-4 rounded-lg">
            <img
              src="/img/header-img.png"
              alt="Hospital"
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-1/2"
            />
            <div className="text mt-12">
              <h3 className="text-[#141414] text-lg font-semibold">
                Hospital appointment
              </h3>
              <p className="text-[#4f4f4f] text-sm py-2">
                You have to fill up the form to be admitted to the hospital.
              </p>
              <div className="btn flex justify-center">
                <button className="flex items-center bg-[#0eabeb] text-white px-4 py-2 rounded-lg">
                  <FaCalendarAlt className="mr-2" />
                  <span>Appointment</span>
                </button>
              </div>
            </div>
          </div>
          <div className="logout-btn">
            <button
              onClick={logout}
              className="flex items-center justify-center w-full p-3 bg-[rgba(225,29,42,0.16)] text-[#e11d29] font-semibold"
            >
              <img src="../img/logout.png" alt="Logout" className="mr-2" />{" "}
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-10xl mx-auto py-1 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button onClick={toggleSidebar} className="lg:hidden">
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <PatientHeader />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-10xl mx-auto py-2 sm:px-6 lg:px-8">
            <Routes>
              <Route path="" element={<PersonalHealthRecord />} />
              <Route path="profile/*" element={<PatientProfile />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/testReport" element={<TestReport />} />
              <Route path="/medicalHistory" element={<MedicalHistory />} />
              <Route path="/allAppointment" element={<AllAppointment />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/bills" element={<Bills />} />
              <Route path="/teleconsultation" element={<Teleconsultation />} />
              <Route
                path="/appointmentBooking"
                element={<AppointmentBooking />}
              />
              <Route
                path="/priscriptionAccess"
                element={<PriscriptionAccess />}
              />
              <Route path="/chatScreen" element={<ChatScreen1 />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
