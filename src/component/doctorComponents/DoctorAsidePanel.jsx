import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown, IoMdListBox } from "react-icons/io";
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
      <div class="sidebar flex">
        <div class="asite bg-white text-gray-500 w-[15%] h-screen fixed top-0 left-0 border border-r">
          <div class="logo font-bold mb-5 text-center">
            <img src="/img/logo.png" alt="Logo" class="w-3/4 h-auto" />
          </div>
          <div class="menu flex flex-col h-[80%] justify-between">
            <ul class="bg-white">
              <li>
                <NavLink
                  to="/doctor"
                  className="flex items-center p-3 text-base font-semibold text-gray-500 hover:bg-gradient-to-r from-[#D5F1FA] hover:text-[#0EABEB] transition duration-300"
                >
                  <div className="mr-3 text-xl ">
                    <FaCalendarAlt />
                  </div>
                  <span>Appointment Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctor/patientRecordAccesst"
                  className="flex items-center p-3 text-base font-semibold text-gray-500 hover:bg-gradient-to-r from-[#D5F1FA] hover:text-[#0EABEB] transition duration-300"
                >
                  <div className="mr-3 text-xl ">
                    <IoMdListBox />
                  </div>
                  <span>Patient Record Accesst</span>
                </NavLink>
              </li>
              <li className="flex flex-col">
                <button
                  onClick={toggleAccordion}
                  className="flex items-center w-full p-3 text-base font-semibold text-gray-500  hover:bg-gradient-to-r from-[#D5F1FA] hover:text-[#0EABEB] transition duration-300"
                >
                  <BsFillBagPlusFill className="mr-3 text-base" />
                  <p className="flex items-center justify-between">
                    <span>Prescription Tools</span>{" "}
                    <IoIosArrowDown className="ml-10" />
                  </p>
                </button>
                <ul
                  className={`${
                    isAccordionOpen ? "block" : "hidden"
                  } space-y-2 pl-8 list-disc`}
                >
                  <li>
                    <NavLink
                      to="/doctor/createPrescriptionTools"
                      className="block p-2 text-gray-500 hover:text-[#0EABEB] font-medium  text-md rounded transition duration-300"
                    >
                      create
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/doctor/managePrescriptionTools"
                      className="block p-2 text-gray-500 hover:text-[#0EABEB] font-medium  text-md transition duration-300"
                    >
                      Manage
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/doctor/teleconsultationModule"
                  className="flex items-center p-3 text-base font-semibold text-gray-500 hover:bg-gradient-to-r from-[#D5F1FA] hover:text-[#0EABEB] transition duration-300"
                >
                  <div className="mr-3 text-xl ">
                    <MdOutlineWifiCalling />
                  </div>
                  <span>Teleconsultation Module</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctor/chatScreen"
                  className="flex items-center p-3 text-base font-semibold text-gray-500 hover:bg-gradient-to-r from-[#D5F1FA] hover:text-[#0EABEB] transition duration-300"
                >
                  <div className="mr-3 text-xl ">
                    <IoMdChatbubbles />
                  </div>
                  <span>Chat</span>
                </NavLink>
              </li>
            </ul>
            <div className="">
              <button
                onClick={() => logout()}
                className="w-full flex items-center gap-3 p-4 text-red-600 bg-red-100 font-semibold hover:bg-red-200 transition duration-300"
              >
                <img src="../img/logout.png" alt="Logout" className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
