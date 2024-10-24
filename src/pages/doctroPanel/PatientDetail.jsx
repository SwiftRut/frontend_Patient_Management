import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { Visibility } from "@mui/icons-material";
import AddRecord from "../../pages/doctroPanel/AddRecord.jsx";

const PatientDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); 

  const patientData = {
    name: "Marcus Philips",
    number: "99130 44537",
    doctorName: "Dr. Marcus Philips",
    age: "20 Years",
    issue: "Feeling Tired",
    gender: "Male",
    appointmentType: "Online",
    address: "B-408 Swastik society, rajkot.",
    lastAppointmentDate: "2 Jan, 2022",
    lastAppointmentTime: "4:30 PM",
    imageUrl: "https://via.placeholder.com/150",
  };

  const appointments = [
    {
      diseaseName: "Viral Infection",
      issue: "Feeling Tired",
      date: "2 Jan, 2022",
      time: "4:30 PM",
      type: "Online",
    },
    {
      diseaseName: "Diabetes",
      issue: "Stomach Ache",
      date: "5 Jan, 2022",
      time: "5:00 PM",
      type: "Onsite",
    },
    // Add more appointment data
  ];

  // Step 2: Add handleViewFiles function to navigate to the desired route
  const handleViewFiles = () => {
    navigate(`/doctor/allFiles`);
  };

  const openModal = () => {
    // setSelectedPatient(patient);
    setIsModalOpen(true);
  };



  return (
    <>
      <div className="p-details p-6 bg-[#f6f8fb]">
        {/* Patient Details Section */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Patient Details</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
              <div className="bg-white text-blue-500 me-2 rounded">
                <MdAdd />
              </div>
              <div onClick={() => openModal()}>Add Record</div>
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-1/12 ">
              <img
                src={patientData.imageUrl}
                alt="Patient"
                className="w-28 h-28 rounded-full mr-6 border-4"
              />
            </div>
            <div className="flex w-5/6">
              <div className="grid grid-cols-4 gap-0 border-r pe-16">
                <div>
                  <p className="text-gray-500">Patient Name</p>
                  <p className="font-medium">{patientData.name}</p>
                </div>
                <div>
                  <p className="text-gray-500">Patient Number</p>
                  <p className="font-medium">{patientData.number}</p>
                </div>
                <div>
                  <p className="text-gray-500">Patient Issue</p>
                  <p className="font-medium">{patientData.issue}</p>
                </div>
                <div>
                  <p className="text-gray-500">Patient Gender</p>
                  <p className="font-medium">{patientData.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500">Doctor Name</p>
                  <p className="font-medium">{patientData.doctorName}</p>
                </div>
                <div>
                  <p className="text-gray-500">Doctor Name</p>
                  <p className="font-medium">{patientData.doctorName}</p>
                </div>
                <div>
                  <p className="text-gray-500">Patient Age</p>
                  <p className="font-medium">{patientData.age}</p>
                </div>
                <div>
                  <p className="text-gray-500">Patient Address</p>
                  <p className="font-medium">{patientData.address}</p>
                </div>
              </div>
              <div className="ps-5">
                <div className="pb-5">
                  <p className="text-gray-500 pb-1">Last Appointment Time</p>
                  <p className="font-medium">{patientData.lastAppointmentTime}</p>
                </div>
                <div>
                  <p className="text-gray-500">Last Appointment Time</p>
                  <p className="font-medium">{patientData.lastAppointmentTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="p-table bg-white p-4 rounded-lg mt-3">
          <h3 className="text-2xl font-bold mb-4 text-[#030229]">All Appointments</h3>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-lg font-bold text-[#030229]">Disease Name</th>
                <th className="p-3 text-left text-lg font-bold text-[#030229]">Patient Issue</th>
                <th className="p-3 text-left text-lg font-bold text-[#030229]">Appointment Date</th>
                <th className="p-3 text-left text-lg font-bold text-[#030229]">Appointment Time</th>
                <th className="p-3 text-left text-lg font-bold text-[#030229]">Appointment Type</th>
                <th className="p-3 text-left text-lg font-bold text-[#030229]">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 text-lg font-semibold text-[#4F4F4F]">
                    {appointment.diseaseName}
                  </td>
                  <td className="p-3 text-lg font-semibold text-[#4F4F4F]">{appointment.issue}</td>
                  <td className="p-3 text-lg font-semibold text-[#4F4F4F]">{appointment.date}</td>
                  <td className="p-3">
                    <span className="text-lg font-semibold text-[#718EBF] px-4 py-1 rounded-full bg-[#F6F8FB]">
                      {appointment.time}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-lg font-semibold rounded-full ${appointment.type === "Online"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                        }`}
                    >
                      {appointment.type}
                    </span>
                  </td>
                  <td className="p-3 text-lg font-semibold">
                    <IconButton color="primary" onClick={handleViewFiles}>
                      {" "}
                      {/* Step 3: Add onClick event */}
                      <Visibility />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal">
            <div className="modal-content">
              <AddRecord patient={selectedPatient} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientDetail;
