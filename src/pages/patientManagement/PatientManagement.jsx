import "./patientManage.css";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import PatientDetails from "./PatientDetails.jsx"; // Import the PatientDetails component

export default function PatientManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("today"); // State for managing the active tab

  // Sample patient data for different tabs
  const patientsData = {
    today: [
      {
        name: "Marcus Philips",
        issue: "Stomach Ache",
        doctor: "Dr. Mathew Best",
        disease: "Viral Infection",
        time: "4:30 PM",
        type: "Online",
        phone: "92584 58475",
        age: "27 Years",
        gender: "Male",
        address: "B-408 Swastik society, Shivaji marg mota varacha rajkot.",
        date: "2 Jan, 2022",
      },
      // Add more patient objects as needed...
    ],
    upcoming: [
      {
        name: "Alice Johnson",
        issue: "Headache",
        doctor: "Dr. Susan Wright",
        disease: "Migraine",
        time: "3:00 PM",
        type: "Offline",
        phone: "12345 67890",
        age: "30 Years",
        gender: "Female",
        address: "123 Elm Street, Springfield.",
        date: "15 Oct, 2024",
      },
      // Add more patient objects as needed...
    ],
    previous: [
      {
        name: "John Doe",
        issue: "Back Pain",
        doctor: "Dr. John Smith",
        disease: "Muscle Strain",
        time: "10:00 AM",
        type: "Online",
        phone: "98765 43210",
        age: "45 Years",
        gender: "Male",
        address: "456 Oak Street, Metropolis.",
        date: "1 Oct, 2024",
      },
      // Add more patient objects as needed...
    ],
    cancelled: [
      {
        name: "Emma Watson",
        issue: "Flu Symptoms",
        doctor: "Dr. Emma Brown",
        disease: "Influenza",
        time: "1:00 PM",
        type: "Online",
        phone: "56789 01234",
        age: "32 Years",
        gender: "Female",
        address: "789 Pine Street, Gotham.",
        date: "10 Oct, 2024",
      },
      // Add more patient objects as needed...
    ],
  };

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  // Get the patients for the active tab
  const currentPatients = patientsData[activeTab];

  return (
    <>
      <div className="patient-section bg-gray">
        <div className="row">
          <div className="main">
            <div className="flex top-menu">
              <button onClick={() => setActiveTab("today")}>Today Appointment</button>
              <button onClick={() => setActiveTab("upcoming")}>Upcoming Appointment</button>
              <button onClick={() => setActiveTab("previous")}>Previous Appointment</button>
              <button onClick={() => setActiveTab("cancelled")}>Cancel Appointment</button>
            </div>
            <div className="top flex align-center">
              <div className="heading">
                <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Appointments</h3>
              </div>
              <div className="search-btn flex">
                <div className="input flex align-center">
                  <div className="search">
                    <CiSearch />
                  </div>
                  <input type="text" placeholder="Search Patient" />
                </div>
              </div>
            </div>
            <div className="pr-data max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              <table className="min-w-full table-auto">
                <thead className="sticky top-0 bg-gray-100 z-10">
                  <tr>
                    <th className="p-3 text-left text-lg font-semibold">Patient Name</th>
                    <th className="p-3 text-left text-lg font-semibold">Patient Issue</th>
                    <th className="p-3 text-left text-lg font-semibold">Doctor Name</th>
                    <th className="p-3 text-left text-lg font-semibold">Diseases Name</th>
                    <th className="p-3 text-left text-lg font-semibold">Appointment Time</th>
                    <th className="p-3 text-left text-lg font-semibold">Appointment Type</th>
                    <th className="p-3 text-left text-lg font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPatients.map((patient, index) => (
                    <tr key={index} className="border-t">
                      <td className="flex align-center p-3">
                        <div className="avatar">
                          <img src="/img/Avatar.png" alt="Avatar" />
                        </div>
                        <div className="name">
                          <h3>{patient.name}</h3>
                        </div>
                      </td>
                      <td className="p-3">
                        <h3>{patient.issue}</h3>
                      </td>
                      <td className="p-3">
                        <h3>{patient.doctor}</h3>
                      </td>
                      <td className="p-3">
                        <h3>{patient.disease}</h3>
                      </td>
                      <td className="time p-3">
                        <h3>{patient.time}</h3>
                      </td>
                      <td className="time p-3">
                        <h3>{patient.type}</h3>
                      </td>
                      <td className="action p-3">
                        <div className="view" onClick={() => openModal(patient)}>
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <PatientDetails patient={selectedPatient} closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
