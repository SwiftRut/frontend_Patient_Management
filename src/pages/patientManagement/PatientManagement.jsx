import "./patientManage.css";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import PatientDetails from "./PatientDetails.jsx";
import { usePatient } from "../../hooks/usePatient.jsx";

export default function PatientManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const { getAllPatients, allPatients, getAllAppointments } = usePatient();

  const filterAppointments = () => {
    if (!allPatients || !Array.isArray(allPatients)) return [];
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Flatten all appointments from all patients
    const allAppointments = allPatients.flatMap(patient => 
      (patient.appointmentId || []).map(apt => ({
        name: `${patient.firstName} ${patient.lastName}`,
        issue: apt.patient_issue,
        doctor: "Dr. " + (apt.doctorId?.name || "Unknown"), 
        disease: apt.type,
        time: new Date(apt.appointmentTime).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        type: apt.type === "follow_up" ? "Follow-up" : "Consultation",
        phone: patient.phone,
        age: `${patient.age} Years`,
        gender: patient.gender,
        address: patient.address,
        date: new Date(apt.date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        status: apt.status,
        appointmentDate: new Date(apt.date),
        patientDetails: {
          ...patient,
          appointment: apt
        }
      }))
    );

    switch (activeTab) {
      case "today":
        return allAppointments.filter(apt => {
          const aptDate = new Date(apt.appointmentDate);
          return aptDate.getDate() === today.getDate() &&
                 aptDate.getMonth() === today.getMonth() &&
                 aptDate.getFullYear() === today.getFullYear() &&
                 apt.status === "scheduled";
        });
      
      case "upcoming":
        return allAppointments.filter(apt => 
          apt.appointmentDate > tomorrow &&
          apt.status === "scheduled"
        );
      
      case "previous":
        return allAppointments.filter(apt => 
          apt.appointmentDate < today ||
          apt.status === "completed"
        );
      
      case "cancelled":
        return allAppointments.filter(apt => 
          apt.status === "cancelled"
        );
      
      default:
        return [];
    }
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  useEffect(() => {
    const filtered = filterAppointments();
    setFilteredAppointments(filtered);
  }, [allPatients, activeTab]);

  const openModal = (patient) => {
    setSelectedPatient(patient.patientDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  // Filter based on search query
  const searchFilteredAppointments = filteredAppointments.filter(
    (appointment) =>
      appointment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  <input
                    type="text"
                    placeholder="Search Patient"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div
              className="pr-data h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
              style={{ maxHeight: "calc(100vh - 260px)" }}
            >
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
                  {searchFilteredAppointments.length > 0 ? (
                    searchFilteredAppointments.map((appointment, index) => (
                      <tr key={index} className="border-t">
                        <td className="flex align-center p-3">
                          <div className="avatar">
                            <img src={appointment.patientDetails?.avatar || "/img/Avatar.png"} alt="Avatar" />
                          </div>
                          <div className="name">
                            <h3>{appointment.name}</h3>
                          </div>
                        </td>
                        <td className="p-3">
                          <h3>{appointment.issue}</h3>
                        </td>
                        <td className="p-3">
                          <h3>{appointment.doctor}</h3>
                        </td>
                        <td className="p-3">
                          <h3>{appointment.disease}</h3>
                        </td>
                        <td className="time p-3">
                          <h3>{appointment.time}</h3>
                        </td>
                        <td className="time p-3">
                          <h3>{appointment.type}</h3>
                        </td>
                        <td className="action p-3">
                          <div className="view" onClick={() => openModal(appointment)}>
                            <FaEye />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="p-3 text-center">
                        No appointments found.
                      </td>
                    </tr>
                  )}
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