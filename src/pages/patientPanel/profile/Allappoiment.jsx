import React, { useState } from "react";
import "../style.css";

const AllAppointment = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  const allAppointment = [
    {
      doctorName: "Dr. Smith",
      hospitalName: "City Hospital",
      appointmentType: "Online",
      appointmentDate: "2024-10-01",
      appointmentTime: "10:00 AM",
      patientIssue: "Fever and headache",
      diseaseName: "Flu",
    },
    {
      doctorName: "Dr. Johnson",
      hospitalName: "Green Valley Clinic",
      appointmentType: "Offline",
      appointmentDate: "2024-09-28",
      appointmentTime: "2:00 PM",
      patientIssue: "Chest pain",
      diseaseName: "Angina",
    },
    {
      doctorName: "Dr. Lee",
      hospitalName: "Health Center",
      appointmentType: "Online",
      appointmentDate: "2024-10-03",
      appointmentTime: "1:00 PM",
      patientIssue: "Skin rash",
      diseaseName: "Allergy",
    },
    {
      doctorName: "Dr. Brown",
      hospitalName: "City Hospital",
      appointmentType: "Offline",
      appointmentDate: "2024-09-30",
      appointmentTime: "9:00 AM",
      patientIssue: "Knee pain",
      diseaseName: "Arthritis",
    },
    {
      doctorName: "Dr. White",
      hospitalName: "Health Plus Clinic",
      appointmentType: "Online",
      appointmentDate: "2024-10-02",
      appointmentTime: "3:00 PM",
      patientIssue: "Back pain",
      diseaseName: "Spondylitis",
    },
  ];

  const description = [
    {
      descriptiondate: "2 Jan, 2024",
      lorem1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, voluptatibus hic. Repudiandae vel eaque mollitia molestiae at fugiat sed nesciunt! Maxime,",
      lorem2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempora velit error nobis cum.",
    },
    {
      descriptiondate: "3 Jan, 2024",
      lorem1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, voluptatibus hic. Repudiandae vel eaque mollitia molestiae at fugiat sed nesciunt! Maxime,",
      lorem2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempora velit error nobis cum.",
    },
    {
      descriptiondate: "4 Jan, 2024",
      lorem1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, voluptatibus hic. Repudiandae vel eaque mollitia molestiae at fugiat sed nesciunt! Maxime,",
      lorem2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempora velit error nobis cum.",
    },
    {
      descriptiondate: "5 Jan, 2024",
      lorem1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, voluptatibus hic. Repudiandae vel eaque mollitia molestiae at fugiat sed nesciunt! Maxime,",
      lorem2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempora velit error nobis cum.",
    },
    {
      descriptiondate: "6 Jan, 2024",
      lorem1:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, voluptatibus hic. Repudiandae vel eaque mollitia molestiae at fugiat sed nesciunt! Maxime,",
      lorem2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempora velit error nobis cum.",
    },
  ];

  return (
    <div>
      <div className="container mt-5">
        <div className="bg-white shadow-lg w-full h-auto p-4 rounded-xl">
          <ul className="w-full flex border-b border-gray-300">
            <li className="mr-4">
              <button
                onClick={() => setActiveTab("appointments")}
                className={`py-2 px-4 font-semibold ${activeTab === "appointments" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                All Appointment
              </button>
            </li>
            <li className="mr-4">
              <button
                onClick={() => setActiveTab("documents")}
                className={`py-2 px-4 font-semibold ${activeTab === "documents" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                All Document
              </button>
            </li>
            <li className="mr-4">
              <button
                onClick={() => setActiveTab("prescriptions")}
                className={`py-2 px-4 font-semibold ${activeTab === "prescriptions" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                All Prescription
              </button>
            </li>
            <li className="mr-4">
              <button
                onClick={() => setActiveTab("descriptions")}
                className={`py-2 px-4 font-semibold ${activeTab === "descriptions" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"}`}
              >
                All Description
              </button>
            </li>
          </ul>

          {/* Tab content */}
          <div className="tab-content mt-3">
            {activeTab === "appointments" && (
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
                        <p className="font-light text-gray-600">Hospital Name</p>
                        <span className="text-sm">{val.hospitalName}</span>
                      </div>
                      <div className="flex justify-between items-center px-3">
                        <p className="font-light text-gray-600">Appointment type</p>
                        <span className="text-sm text-orange-300">{val.appointmentType}</span>
                      </div>{" "}
                      <div className="flex justify-between items-center px-3">
                        <p className="font-light text-gray-600">Appointment Date</p>
                        <span className="text-sm">{val.appointmentDate}</span>
                      </div>{" "}
                      <div className="flex justify-between items-center px-3">
                        <p className="font-light text-gray-600">Appointment time</p>
                        <span className="text-sm">{val.appointmentTime}</span>
                      </div>{" "}
                      <div className="flex justify-between items-center px-3">
                        <p className="font-light text-gray-600">patient issue</p>
                        <span className="text-sm">{val.patientIssue}</span>
                      </div>{" "}
                      <div className="flex justify-between items-center px-3">
                        <p className="font-light text-gray-600">Disease Name</p>
                        <span className="text-sm">{val.diseaseName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "documents" && (
              <div className="p-4">
                <p>No documents available.</p>
              </div>
            )}
            {activeTab === "prescriptions" && (
              <div className="p-4">
                <p>No prescriptions available.</p>
              </div>
            )}
            {activeTab === "descriptions" && (
              <div className="overflow-y-auto" style={{ height: "550px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {description.map((val, index) => (
                    <div
                      key={index}
                      className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                    >
                      <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                        <h6 className="text-md font-semibold">Description</h6>
                        <h6>{val.descriptiondate}</h6>
                      </div>
                      <div className="px-3">
                        <p>
                          <i className="fa-solid fa-circle pe-2" style={{ fontSize: "6px" }}></i>
                          {val.lorem1}
                        </p>
                        <p>
                          <i className="fa-solid fa-circle pe-2" style={{ fontSize: "6px" }}></i>
                          {val.lorem2}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointment;
