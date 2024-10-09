import "../patientManagement/PatientManagement.css";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import PatientDetails from "./PatientDetails.jsx"; // Import the PatientDetails component

export default function PatientManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);


  const patients = [
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
  ];

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <>
      <div className="patient-section">
        <div className="row">
          <div className="main">
            <div className="flex top-menu">
              <button>Today Appointment</button>
              <button>Upcoming Appointment</button>
              <button>Previous Appointment</button>
              <button>Cancel Appointment</button>
            </div>
            <div className="top flex align-center">
              <div className="heading">
                <h3>Today Appointment</h3>
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
            <div className="table">
              <table>
                <thead>
                  <tr className="table-heading">
                    <th>Patient Name</th>
                    <th>Patient Issue</th>
                    <th>Doctor Name</th>
                    <th>Diseases Name</th>
                    <th>Appointment Time</th>
                    <th>Appointment Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient, index) => (
                    <tr key={index}>
                      <td className="flex align-center">
                        <div className="avatar">
                          <img src="/img/Avatar.png" alt="Avatar" />
                        </div>
                        <div className="name">
                          <h3>{patient.name}</h3>
                        </div>
                      </td>
                      <td>
                        <h3>{patient.issue}</h3>
                      </td>
                      <td>
                        <h3>{patient.doctor}</h3>
                      </td>
                      <td>
                        <h3>{patient.disease}</h3>
                      </td>
                      <td className="time">
                        <h3>{patient.time}</h3>
                      </td>
                      <td className="time">
                        <h3>{patient.type}</h3>
                      </td>
                      <td className="action">
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
