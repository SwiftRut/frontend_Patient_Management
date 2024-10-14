import { useState } from "react";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
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
      <div>
        <div className="container mt-5">
          <div className="bg-white shadow-lg  h-auto p-4 rounded-xl">
            <ul className="overflow-x-auto flex border-b border-gray-300">
              <li className="mr-4">
                <button
                  onClick={() => setActiveTab("scheduled")}
                  className={`py-2 px-4 font-semibold ${activeTab === "scheduled" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                >
                  Scheduled Appointment
                </button>
              </li>
              <li className="mr-4">
                <button
                  onClick={() => setActiveTab("previous")}
                  className={`py-2 px-4 font-semibold ${activeTab === "previous" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                >
                  Previous Appointment
                </button>
              </li>
              <li className="mr-4">
                <button
                  onClick={() => setActiveTab("cancel")}
                  className={`py-2 px-4 font-semibold ${activeTab === "cancel" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
                >
                  Cancel Appointment
                </button>
              </li>
              <li className="mr-4">
                <button
                  onClick={() => setActiveTab("pending")}
                  className={`py-2 px-4 font-semibold ${activeTab === "pending" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">My Appointment</h1>

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
                      <Link to={"/patient/appointmentBooking"}>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center space-x-2 ">
                          <i className="fa-solid fa-calendar-days"></i> {/* Calendar icon */}
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
                          className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                        >
                          <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                            <h6 className="text-md font-semibold">{val.doctorName}</h6>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment type</p>
                            <span className="text-sm text-orange-300">{val.appointmentType}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Hospital Name</p>
                            <span className="text-sm">{val.hospitalName}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment Date</p>
                            <span className="text-sm">{val.appointmentDate}</span>
                          </div>{" "}
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment time</p>
                            <span className="text-sm">{val.appointmentTime}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">patient issue</p>
                            <span className="text-sm">{val.patientIssue}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <button className="px-3 py-2 border-2 m-2">
                              <i className="fa-solid fa-business-time text-gray-600"></i> Cancle
                            </button>
                            <button className="px-3 py-2 rounded-lg m-2 bg-btn-bg text-white">
                              <i className="fa-solid fa-business-time  "></i> Reschedule
                            </button>
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">My Appointment</h1>

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
                        <i className="fa-solid fa-calendar-days"></i> {/* Calendar icon */}
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                        >
                          <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                            <h6 className="text-md font-semibold">{val.doctorName}</h6>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment type</p>
                            <span className="text-sm text-orange-300">{val.appointmentType}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Hospital Name</p>
                            <span className="text-sm">{val.hospitalName}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment Date</p>
                            <span className="text-sm">{val.appointmentDate}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment time</p>
                            <span className="text-sm">{val.appointmentTime}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">patient issue</p>
                            <span className="text-sm">{val.patientIssue}</span>
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">My Appointment</h1>

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
                        <i className="fa-solid fa-calendar-days"></i> {/* Calendar icon */}
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                        >
                          <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                            <h6 className="text-md font-semibold">{val.doctorName}</h6>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment type</p>
                            <span className="text-sm text-orange-300">{val.appointmentType}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Hospital Name</p>
                            <span className="text-sm">{val.hospitalName}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment Date</p>
                            <span className="text-sm">{val.appointmentDate}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment Cancel Date</p>
                            <span className="text-sm">{val.appointmentDate}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment time</p>
                            <span className="text-sm">{val.appointmentTime}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">patient issue</p>
                            <span className="text-sm">{val.patientIssue}</span>
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
                    <h1 className="text-xl font-semibold mb-2 md:mb-0">My Appointment</h1>

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
                        <i className="fa-solid fa-calendar-days"></i> {/* Calendar icon */}
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto" style={{ height: "550px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {allAppointment.map((val, index) => (
                        <div
                          key={index}
                          className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                        >
                          <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                            <h6 className="text-md font-semibold">{val.doctorName}</h6>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment type</p>
                            <span className="text-sm text-orange-300">{val.appointmentType}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Hospital Name</p>
                            <span className="text-sm">{val.hospitalName}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment Date</p>
                            <span className="text-sm">{val.appointmentDate}</span>
                          </div>{" "}
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">Appointment time</p>
                            <span className="text-sm">{val.appointmentTime}</span>
                          </div>
                          <div className="flex justify-between items-center px-3">
                            <p className="font-light text-gray-600">patient issue</p>
                            <span className="text-sm">{val.patientIssue}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <button className="px-3 py-2 border-2 m-2">
                              <i className="fa-solid fa-business-time text-gray-600"></i> Cancle
                            </button>
                            <button className="px-3 py-2 rounded-lg m-2 bg-btn-bg text-white">
                              <i className="fa-solid fa-business-time  "></i> Reschedule
                            </button>
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
    </div>
  );
};

export default Appointment;
