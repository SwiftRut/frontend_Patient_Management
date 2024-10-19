import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { TbCalendarClock } from "react-icons/tb";
import { TbCalendarX } from "react-icons/tb";
import { BiSolidCalendar } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [openModel, setOpenModel] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleViewDoctorDetails = () => {
    setOpenModel(true);
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
                      {/* Input group for date picker */}
                      <div className="border rounded-md flex p-2 items-center">
                        {/* Calendar icon positioned to the left */}
                        <span className=" pl-3 text-gray-500 me-1">
                          <FaCalendarAlt />
                        </span>

                        {/* Input field with proper padding for icons */}
                        <input
                          type="text"
                          className="form-control"
                          style={{ width: "270px" }} // pl-10 for left icon, pr-10 for right icon
                          value="2 Jan, 2022 - 13 Jan, 2022"
                          readOnly
                        />

                        {/* Close icon with rounded background */}
                        <div className="h-5 w-5 rounded-full text-white bg-[#E11D29]">
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

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full mx-auto bg-white rounded-lg shadow-md"
                        >
                          <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                            <h2 className="text-lg font-semibold text-foreground">
                              {val.doctorName}
                            </h2>
                            <div
                              onClick={() => {
                                handleViewDoctorDetails(val);
                              }}
                              className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                            >
                              <IoEyeSharp />
                            </div>
                          </div>
                          <div className="p-3 border">
                            <div className="flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Type
                              </span>
                              <span className="text-sm font-medium text-[#FFC313]">
                                {val.appointmentType}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Hospital Name
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.hospitalName}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Date
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentDate}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Time
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentTime}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Patient Issue
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.patientIssue}
                              </p>
                            </div>
                            <div className="flex justify-between mt-4">
                              <button className="border p-2 rounded-md w-[47%] text-lg font-semibold text-[#4F4F4F] flex items-center justify-center">
                                <TbCalendarX className="me-2" />
                                Cancel
                              </button>
                              <button className="bg-[#f6f8fb] text-[#4F4F4F] hover:bg-[#0EABEB] text-lg font-semibold hover:text-white transition duration-300 p-2 rounded-md w-[47%] flex items-center justify-center">
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">
                      My Appointment
                    </h1>

                    <div className="flex items-center space-x-3">
                      {/* Input group for date picker */}
                      <div className="relative w-72">
                        {/* Calendar icon positioned to the left */}
                        <span
                          className="absolute inset-y-0  pl-3 flex items-center text-gray-500"
                          style={{ left: "-5px" }}
                        >
                          <i className="fa-solid fa-calendar-days"></i>
                        </span>

                        {/* Input field with proper padding for icons */}
                        <input
                          type="text"
                          className="form-control "
                          style={{ width: "270px" }} // pl-10 for left icon, pr-10 for right icon
                          value="2 Jan, 2022 - 13 Jan, 2022"
                          readOnly
                        />

                        {/* Close icon with rounded background */}
                        <span className="absolute inset-y-0 right-5  flex items-center w-6 h-6 bg-red-700 rounded-full my-auto justify-center">
                          <i className="fa-solid fa-xmark text-white"></i>
                        </span>
                      </div>

                      {/* Book Appointment button */}
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center space-x-2 ">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {/* Calendar icon */}
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full mx-auto bg-white rounded-lg shadow-md"
                        >
                          <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                            <h2 className="text-lg font-semibold text-foreground">
                              {val.doctorName}
                            </h2>
                            <div className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2">
                              <IoEyeSharp />
                            </div>
                          </div>
                          <div className="p-3 border">
                            <div className="flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Type
                              </span>
                              <span className="text-sm font-medium text-[#FFC313]">
                                {val.appointmentType}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Hospital Name
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.hospitalName}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Date
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentDate}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Time
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentTime}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Patient Issue
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">
                      My Appointment
                    </h1>

                    <div className="flex items-center space-x-3">
                      {/* Input group for date picker */}
                      <div className="relative w-72">
                        {/* Calendar icon positioned to the left */}
                        <span
                          className="absolute inset-y-0  pl-3 flex items-center text-gray-500"
                          style={{ left: "-5px" }}
                        >
                          <i className="fa-solid fa-calendar-days"></i>
                        </span>

                        {/* Input field with proper padding for icons */}
                        <input
                          type="text"
                          className="form-control "
                          style={{ width: "270px" }} // pl-10 for left icon, pr-10 for right icon
                          value="2 Jan, 2022 - 13 Jan, 2022"
                          readOnly
                        />

                        {/* Close icon with rounded background */}
                        <span className="absolute inset-y-0 right-5  flex items-center w-6 h-6 bg-red-700 rounded-full my-auto justify-center">
                          <i className="fa-solid fa-xmark text-white"></i>
                        </span>
                      </div>

                      {/* Book Appointment button */}
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center space-x-2 ">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {/* Calendar icon */}
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full mx-auto bg-white rounded-lg shadow-md"
                        >
                          <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                            <h2 className="text-lg font-semibold text-foreground">
                              {val.doctorName}
                            </h2>
                            <div className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2">
                              <IoEyeSharp />
                            </div>
                          </div>
                          <div className="p-3 border">
                            <div className="flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Type
                              </span>
                              <span className="text-sm font-medium text-[#FFC313]">
                                {val.appointmentType}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Hospital Name
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.hospitalName}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Date
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentDate}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Time
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentTime}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Patient Issue
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">
                      My Appointment
                    </h1>

                    <div className="flex items-center space-x-3">
                      {/* Input group for date picker */}
                      <div className="relative w-72">
                        {/* Calendar icon positioned to the left */}
                        <span
                          className="absolute inset-y-0  pl-3 flex items-center text-gray-500"
                          style={{ left: "-5px" }}
                        >
                          <i className="fa-solid fa-calendar-days"></i>
                        </span>

                        {/* Input field with proper padding for icons */}
                        <input
                          type="text"
                          className="form-control "
                          style={{ width: "270px" }} // pl-10 for left icon, pr-10 for right icon
                          value="2 Jan, 2022 - 13 Jan, 2022"
                          readOnly
                        />

                        {/* Close icon with rounded background */}
                        <span className="absolute inset-y-0 right-5  flex items-center w-6 h-6 bg-red-700 rounded-full my-auto justify-center">
                          <i className="fa-solid fa-xmark text-white"></i>
                        </span>
                      </div>

                      {/* Book Appointment button */}
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center space-x-2 ">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {/* Calendar icon */}
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full mx-auto bg-white rounded-lg shadow-md"
                        >
                          <div className="bg-[#f6f8fb] p-3 flex items-center justify-between  ">
                            <h2 className="text-lg font-semibold text-foreground">
                              {val.doctorName}
                            </h2>
                            <div className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:100 p-2">
                              <IoEyeSharp />
                            </div>
                          </div>
                          <div className="p-3 border">
                            <div className="flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Type
                              </span>
                              <span className="text-sm font-medium text-[#FFC313]">
                                {val.appointmentType}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Hospital Name
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.hospitalName}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Date
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentDate}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Appointment Time
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.appointmentTime}
                              </p>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-base font-normal text-[#818194]">
                                Patient Issue
                              </span>
                              <p className="text-sm font-medium text-[#4F4F4F]">
                                {val.patientIssue}
                              </p>
                            </div>
                            <div className="flex justify-between mt-4">
                              <button className="border p-2 rounded-md w-[47%] text-lg font-semibold text-[#4F4F4F] flex items-center justify-center hover:bg-red-500 hover:text-white transition duration-100">
                                <TbCalendarX className="me-2" />
                                Cancel
                              </button>
                              <button className="bg-[#f6f8fb] text-[#4F4F4F] hover:bg-[#0EABEB] text-lg font-semibold hover:text-white transition duration-100 p-2 rounded-md w-[47%] flex items-center justify-center">
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

      {openModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="onsite-modal">
              <div className="onsite-modal-content">
                <div className="onsite-modal-header">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border max-w-lg pb-52 p-3">
                    <div className="top flex items-center border-b pb-3">
                      <div
                        className="w-9 h-9 flex items-center justify-center rounded-full border me-2"
                        onClick={() => setOpenModel(false)}
                      >
                        <IoIosArrowBack />
                      </div>
                      <h3 className="text-lg text-[#030229] font-bold">
                        Doctor Management
                      </h3>
                    </div>
                    <div className="bg-[#2522a6] p-2 flex items-center rounded-md m-3">
                      <img
                        src="https://placehold.co/100x100"
                        alt="Doctor's photo"
                        className="rounded-full border-2 border-white mr-4 w-[20%]"
                      />
                      <div className="text-white">
                        <h2 className="text-lg font-semibold">
                          Dr. Cristofer Pasquinades
                        </h2>
                        <span className="bg-[#718ebf] flex w-[80px] p-1 rounded-full text-sm mt-2">
                          <img src="/image/vuesax.png" />
                          <h3 className="ms-2">Male</h3>
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-[#f6f8fb] m-3 rounded-md">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-[#A7A7A7] font-normal text-md">
                            Qualification
                          </h3>
                          <p className="text[#141414] font-medium text-sm">
                            MBBS
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[#A7A7A7] font-normal text-md">
                            Years Of Experience
                          </h3>
                          <p className="text[#141414] font-medium text-sm">
                            6+ Year
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[#A7A7A7] font-normal text-md">
                            Specialty Type
                          </h3>
                          <p className="text[#141414] font-medium text-sm">
                            Obstetrics
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[#A7A7A7] font-normal text-md">
                            Working Time
                          </h3>
                          <p className="text[#141414] font-medium text-sm">
                            6 Hour
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[#A7A7A7] font-normal text-md">
                            Break Time
                          </h3>
                          <p className="text[#141414] font-medium text-sm">
                            1 Hour
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[#A7A7A7] font-normal text-md">
                            Emergency Contact Number
                          </h3>
                          <p className="text[#141414] font-medium text-sm">
                            48555-20103
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-[#A7A7A7] font-normal text-md">
                          Description
                        </h3>
                        <p className="text[#141414] font-medium text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Onsite
              selectedDoctor={selectedDoctor}
              setOpenModel={setOpenModel}
            /> */}
              </div>
              <div
                className="onsite-modal-overlay"
                onClick={() => setOpenModel(false)}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
