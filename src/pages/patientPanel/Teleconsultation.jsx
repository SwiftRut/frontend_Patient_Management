import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { TbCalendarClock } from "react-icons/tb";
import { TbCalendarX } from "react-icons/tb";
import { BiSolidCalendar } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { InputBase } from "@mui/material";


const Teleconsultation = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [openModel, setOpenModel] = useState(false);
  const [openModelPrevious, setOpenModelPrevious] = useState(false);
  const [openModelCancel, setOpenModelCancel] = useState(false);
  const [openModelPending, setOpenModelPending] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleViewDoctorDetails = () => {
    setOpenModel(true);
  };
  const handlePreviousDetails = () => {
    setOpenModelPrevious(true);
  };
  const handleCancelDetails = () => {
    setOpenModelCancel(true);
  };
  const handlePendingDetails = () => {
    setOpenModelPending(true);
  };

  const allAppointment = [
    {
      doctorName: "Dr. Smith",
      hospitalName: "City Hospital",
      appointmentType: "Online",
      appointmentDate: "2024-10-01",
      appointmentCancelDate: "2024-09-30",
      appointmentTime: "10:00 AM",
      patientIssue: "Fever and headache",
      diseaseName: "Flu",
    },
    {
      doctorName: "Dr. Johnson",
      hospitalName: "Green Valley Clinic",
      appointmentType: "Offline",
      appointmentDate: "2024-09-28",
      appointmentCancelDate: "2024-09-27",
      appointmentTime: "2:00 PM",
      patientIssue: "Chest pain",
      diseaseName: "Angina",
    },
    {
      doctorName: "Dr. Lee",
      hospitalName: "Health Center",
      appointmentType: "Online",
      appointmentDate: "2024-10-03",
      appointmentCancelDate: "2024-10-02",
      appointmentTime: "1:00 PM",
      patientIssue: "Skin rash",
      diseaseName: "Allergy",
    },
    {
      doctorName: "Dr. Brown",
      hospitalName: "City Hospital",
      appointmentType: "Offline",
      appointmentDate: "2024-09-30",
      appointmentCancelDate: "2024-09-29",
      appointmentTime: "9:00 AM",
      patientIssue: "Knee pain",
      diseaseName: "Arthritis",
    },
    {
      doctorName: "Dr. White",
      hospitalName: "Health Plus Clinic",
      appointmentType: "Online",
      appointmentDate: "2024-10-02",
      appointmentCancelDate: "2024-10-01",
      appointmentTime: "3:00 PM",
      patientIssue: "Back pain",
      diseaseName: "Spondylitis",
    },
  ];
  return (
    <>
      <div>
        <div className="p-4 bg-[#f6f8fb]">
          <div className="container mt-5">
            <div className="bg-white shadow-lg  h-auto p-4 rounded-xl">
              <ul className="overflow-x-auto flex border-b border-gray-300">
                <li className="mr-4">
                  <button
                    onClick={() => setActiveTab("scheduled")}
                    className={`py-2 px-4 font-semibold text-sm ${
                      activeTab === "scheduled"
                        ? "text-[#0EABEB] border-b-2 border-[#0EABEB]"
                        : "text-gray-500"
                    }`}
                  >
                    Scheduled Appointment
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    onClick={() => setActiveTab("previous")}
                    className={`py-2 px-4 font-semibold text-sm ${
                      activeTab === "previous"
                        ? "text-[#0EABEB] border-b-2 border-[#0EABEB]"
                        : "text-gray-500"
                    }`}
                  >
                    Previous Appointment
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    onClick={() => setActiveTab("cancel")}
                    className={`py-2 px-4 font-semibold text-sm ${
                      activeTab === "cancel"
                        ? "text-[#0EABEB] border-b-2 border-[#0EABEB]"
                        : "text-gray-500"
                    }`}
                  >
                    Cancel Appointment
                  </button>
                </li>
                <li className="mr-4">
                  <button
                    onClick={() => setActiveTab("pending")}
                    className={`py-2 px-4 font-semibold text-sm ${
                      activeTab === "pending"
                        ? "text-[#0EABEB] border-b-2 border-[#0EABEB]"
                        : "text-gray-500"
                    }`}
                  >
                    Pending Appointment
                  </button>
                </li>
              </ul>

              {/* Tab content */}
              <div className="tab-content mt-3">
                {activeTab === "scheduled" && (
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                      <h1 className="text-xl font-semibold mb-2 md:mb-0">
                        My Appointment
                      </h1>
                      <div className="flex items-center space-x-3 ">
                        <div className="flex items-center bg-[#F6F8FB] rounded-full px-4 py-1">
                          <GoSearch className="me-2 text-[#4F4F4F]" />
                          <InputBase
                            placeholder="Quick Search"
                            inputProps={{ "aria-label": "search" }}
                            className="flex-grow text-sm text-[#A7A7A7]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div className="border rounded-md flex p-2 items-center">
                          <span className=" pl-3 text-gray-500 me-1">
                            <FaCalendarAlt />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            style={{ width: "270px" }}
                            value="2 Jan, 2022 - 13 Jan, 2022"
                            readOnly
                          />
                          <div className="h-5 w-5 rounded-full text-white bg-[#E11D29] flex items-center justify-center">
                            <IoCloseSharp />
                          </div>
                        </div>

                        {/* Book Appointment button */}
                        <Link to={"/patient/appointmentBooking"}>
                          <button className="px-4 py-2 bg-[#0EABEB] rounded-md text-white flex items-center space-x-2 ">
                            <BiSolidCalendar />
                            <span>Book Appointment</span>
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div
                      className="overflow-y-auto"
                      style={{ height: "550px" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {allAppointment.map((val, index) => (
                          <div
                            key={index}
                            class="w-full mx-auto bg-white rounded-lg shadow-md"
                          >
                            <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                              <h2 class="text-lg font-semibold text-foreground">
                                {val.doctorName}
                              </h2>
                              <div className="flex">
                                <div className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:100 p-2 me-2">
                                  <RiCalendarScheduleFill />
                                </div>
                                <div
                                  onClick={() => {
                                    handleViewDoctorDetails(val);
                                  }}
                                  className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                                >
                                  <IoEyeSharp />
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border">
                              <div class="flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Type
                                </span>
                                <span class="text-sm font-medium text-[#FFC313]">
                                  {val.appointmentType}
                                </span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Hospital Name
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.hospitalName}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Date
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentDate}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Time
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentTime}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Patient Issue
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.patientIssue}
                                </p>
                              </div>
                              <div class="flex justify-between mt-4">
                                <button class="border p-2 rounded-md w-[47%] text-lg font-semibold text-[#4F4F4F] flex items-center justify-center">
                                  <TbCalendarX className="me-2" />
                                  Cancel
                                </button>
                                <button class="bg-[#f6f8fb] text-[#4F4F4F] hover:bg-[#0EABEB] text-lg font-semibold hover:text-white transition duration-300 p-2 rounded-md w-[47%] flex items-center justify-center">
                                  <TbCalendarClock className="me-2" />
                                  Reschedule
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "previous" && (
                  <div className="p-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                      <h1 className="text-[24px] font-bold mb-2 md:mb-0 text-[#030229]">
                        My Appointment
                      </h1>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-[#F6F8FB] rounded-full px-4 py-1">
                          <GoSearch className="me-2 text-[#4F4F4F]" />
                          <InputBase
                            placeholder="Quick Search"
                            inputProps={{ "aria-label": "search" }}
                            className="flex-grow text-sm text-[#A7A7A7]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>

                        {/* Book Appointment button */}
                        <button className="px-4 py-2 bg-[#0EABEB] rounded-md text-white flex items-center space-x-2 ">
                          <FaCalendarDays />
                          {/* Calendar icon */}
                          <span>Book Appointment</span>
                        </button>
                      </div>
                    </div>

                    <div
                      className="overflow-y-auto"
                      style={{ height: "550px" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {allAppointment.map((val, index) => (
                          <div
                            key={index}
                            class="w-full mx-auto bg-white rounded-lg shadow-md"
                          >
                            <div className="bg-[#f6f8fb] p-2 flex items-center justify-between  rounded-t-lg">
                              <h2 class="text-lg font-semibold text-foreground">
                                {val.doctorName}
                              </h2>
                              <div
                                className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                                onClick={() => {
                                  handlePreviousDetails(val);
                                }}
                              >
                                <IoEyeSharp />
                              </div>
                            </div>
                            <div className="p-3 border rounded-b-lg">
                              <div class="flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Type
                                </span>
                                <span class="text-sm font-medium text-[#FFC313]">
                                  {val.appointmentType}
                                </span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Hospital Name
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.hospitalName}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Date
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentDate}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Time
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentTime}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Patient Issue
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.patientIssue}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "cancel" && (
                  <div className="p-2">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                      <h1 className="text-[24px] font-bold mb-2 md:mb-0 text-[#030229]">
                        My Appointment
                      </h1>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-[#F6F8FB] rounded-full px-4 py-1">
                          <GoSearch className="me-2 text-[#4F4F4F]" />
                          <InputBase
                            placeholder="Quick Search"
                            inputProps={{ "aria-label": "search" }}
                            className="flex-grow text-sm text-[#A7A7A7]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>

                        {/* Book Appointment button */}
                        <button className="px-4 py-2 bg-[#0EABEB] rounded-md text-white flex items-center space-x-2 ">
                          <FaCalendarDays />
                          {/* Calendar icon */}
                          <span>Book Appointment</span>
                        </button>
                      </div>
                    </div>

                    <div
                      className="overflow-y-auto"
                      style={{ height: "550px" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {allAppointment.map((val, index) => (
                          <div
                            key={index}
                            class="w-full mx-auto bg-white rounded-lg shadow-md"
                          >
                            <div className="bg-[#f6f8fb] p-2 flex items-center justify-between  rounded-t-lg">
                              <h2 class="text-lg font-semibold text-foreground">
                                {val.doctorName}
                              </h2>
                              <div
                                className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                                onClick={() => {
                                  handleCancelDetails(val);
                                }}
                              >
                                <IoEyeSharp />
                              </div>
                            </div>
                            <div className="p-3 border rounded-b-lg">
                              <div class="flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Type
                                </span>
                                <span class="text-sm font-medium text-[#FFC313]">
                                  {val.appointmentType}
                                </span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Hospital Name
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.hospitalName}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Date
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentDate}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Time
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentTime}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Patient Issue
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.patientIssue}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "pending" && (
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                      <h1 className="text-[24px] font-bold mb-2 md:mb-0 text-[#030229]">
                        My Appointment
                      </h1>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-[#F6F8FB] rounded-full px-4 py-1">
                          <GoSearch className="me-2 text-[#4F4F4F]" />
                          <InputBase
                            placeholder="Quick Search"
                            inputProps={{ "aria-label": "search" }}
                            className="flex-grow text-sm text-[#A7A7A7]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>

                        {/* Book Appointment button */}
                        <button className="px-4 py-2 bg-[#0EABEB] rounded-md text-white flex items-center space-x-2 ">
                          <FaCalendarDays />
                          {/* Calendar icon */}
                          <span>Book Appointment</span>
                        </button>
                      </div>
                    </div>

                    <div
                      className="overflow-y-auto"
                      style={{ height: "550px" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {allAppointment.map((val, index) => (
                          <div
                            key={index}
                            class="w-full mx-auto bg-white rounded-lg shadow-md"
                          >
                            <div className="bg-[#f6f8fb] p-2 flex items-center justify-between rounded-t-lg">
                              <h2 class="text-lg font-semibold text-foreground">
                                {val.doctorName}
                              </h2>
                              <div
                                className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:100 p-2"
                                onClick={() => {
                                  handlePendingDetails(val);
                                }}
                              >
                                <IoEyeSharp />
                              </div>
                            </div>
                            <div className="p-3 border rounded-b-lg">
                              <div class="flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Type
                                </span>
                                <span class="text-sm font-medium text-[#FFC313]">
                                  {val.appointmentType}
                                </span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Hospital Name
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.hospitalName}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Date
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentDate}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Appointment Time
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.appointmentTime}
                                </p>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                <span class="text-base font-normal text-[#818194]">
                                  Patient Issue
                                </span>
                                <p class="text-sm font-medium text-[#4F4F4F]">
                                  {val.patientIssue}
                                </p>
                              </div>
                              <div class="flex justify-between mt-4">
                                <button class="border p-2 rounded-md w-[47%] text-lg font-semibold text-[#4F4F4F] flex items-center justify-center hover:bg-red-500 hover:text-white transition duration-100">
                                  <TbCalendarX className="me-2" />
                                  Cancel
                                </button>
                                <button class="bg-[#f6f8fb] text-[#4F4F4F] hover:bg-[#0EABEB] text-lg font-semibold hover:text-white transition duration-100 p-2 rounded-md w-[47%] flex items-center justify-center">
                                  <TbCalendarClock className="me-2" />
                                  Reschedule
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* scheduled */}
        {openModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="onsite-modal">
                <div className="onsite-modal-content">
                  <div className="onsite-modal-header">
                    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-5">
                      <div class="flex justify-between items-center border-b pb-2">
                        <h2 class="text-lg font-bold text-[#030229] me-20">
                          Scheduled Appointment
                        </h2>
                        <button
                          class="w-6 h-6 bg-red-600 text-white rounded-full flex  justify-center items-center"
                          onClick={() => setOpenModel(false)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="mt-4">
                        <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                          Appointment Type:{" "}
                          <span class="text-[#FFC313] bg-[#fff9e7] px-3 py-1 rounded-full">
                            Online
                          </span>
                        </p>
                        <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                          Appointment Date:{" "}
                          <span class="text-[#030229]">2 Jan, 2022</span>
                        </p>
                        <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                          Appointment Time:{" "}
                          <span class="text-[#030229]">4:30 PM</span>
                        </p>
                        <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                          Hospital Name:{" "}
                          <span class="text-[#030229]">Marcus Phillips</span>
                        </p>
                        <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                          Patient Issue:{" "}
                          <span class="text-[#030229]">Stomach ache</span>
                        </p>
                        <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                          Doctor Name:{" "}
                          <span class="text-[#030229]">Dr. Mathew Best</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="onsite-modal-overlay"
                  onClick={() => setOpenModel(false)}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* previous */}
        {openModelPrevious && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div class="max-w-xl bg-white rounded-lg shadow-lg p-5">
                <div class="flex justify-between items-center border-b pb-2">
                  <h2 class="text-lg font-bold text-[#030229] me-20">
                    Previous Appointment
                  </h2>
                  <button
                    class="w-6 h-6 bg-red-600 text-white rounded-full flex justify-center items-center"
                    onClick={() => setOpenModelPrevious(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="mt-4">
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Appointment Type:{" "}
                    <span class="text-[#FFC313] bg-[#fff9e7] px-3 py-1 rounded-full">
                      Online
                    </span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Appointment Date:{" "}
                    <span class="text-[#030229]">2 Jan, 2022</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Appointment Time:{" "}
                    <span class="text-[#030229]">4:30 PM</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Hospital Name:{" "}
                    <span class="text-[#030229]">Marcus Phillips</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Patient Issue:{" "}
                    <span class="text-[#030229]">Stomach ache</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Doctor Name:{" "}
                    <span class="text-[#030229]">Dr. Mathew Best</span>
                  </p>
                </div>
              </div>
              <div
                className="onsite-modal-overlay"
                onClick={() => setOpenModelPrevious(false)}
              ></div>
            </div>
          </div>
        )}

        {/* cancel */}
        {openModelCancel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div class="max-w-xl bg-white rounded-lg p-5">
                <div class="flex justify-between items-center border-b pb-2">
                  <h2 class="text-lg font-bold text-[#030229] me-20">
                    Cancel Appointment
                  </h2>
                  <button
                    class="w-6 h-6 bg-red-600 text-white rounded-full flex justify-center items-center"
                    onClick={() => setOpenModelCancel(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="mt-4">
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Appointment Type:{" "}
                    <span class="text-[#FFC313] bg-[#fff9e7] px-3 py-1 rounded-full">
                      Online
                    </span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Appointment Date:{" "}
                    <span class="text-[#030229]">2 Jan, 2022</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Appointment Time:{" "}
                    <span class="text-[#030229]">4:30 PM</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Hospital Name:{" "}
                    <span class="text-[#030229]">Marcus Phillips</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Patient Issue:{" "}
                    <span class="text-[#030229]">Stomach ache</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Doctor Name:{" "}
                    <span class="text-[#030229]">Dr. Mathew Best</span>
                  </p>
                </div>
              </div>
              <div
                className="onsite-modal-overlay"
                onClick={() => setOpenModelCancel(false)}
              ></div>
            </div>
          </div>
        )}

        {/* pending */}
        {openModelPending && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div class="max-w-xl bg-white rounded-lg p-5">
                <div class="flex justify-between items-center border-b pb-2">
                  <h2 class="text-lg font-bold text-[#030229] me-20">
                    Pending Appointment
                  </h2>
                  <button
                    class="w-6 h-6 bg-red-600 text-white rounded-full flex justify-center items-center"
                    onClick={() => setOpenModelPending(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="mt-4">
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Appointment Type:{" "}
                    <span class="text-[#FFC313] bg-[#fff9e7] px-3 py-1 rounded-full">
                      Online
                    </span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Appointment Date:{" "}
                    <span class="text-[#030229]">2 Jan, 2022</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Appointment Time:{" "}
                    <span class="text-[#030229]">4:30 PM</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Hospital Name:{" "}
                    <span class="text-[#030229]">Marcus Phillips</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between">
                    Patient Issue:{" "}
                    <span class="text-[#030229]">Stomach ache</span>
                  </p>
                  <p class="text-[#4F4F4F] text-base font-normal flex justify-between my-2">
                    Doctor Name:{" "}
                    <span class="text-[#030229]">Dr. Mathew Best</span>
                  </p>
                </div>
              </div>
              <div
                className="onsite-modal-overlay"
                onClick={() => setOpenModelPending(false)}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Teleconsultation;
