import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { MdAdd } from "react-icons/md";
import { Visibility } from "@mui/icons-material";
import AddRecord from "../../pages/doctroPanel/AddRecord.jsx";
import { usePatient } from "../../hooks/usePatient.jsx";
import { FaEye } from "react-icons/fa";

const PatientDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { patientDetails, getPatientById } = usePatient();

  useEffect(() => {
    if (id) {
      getPatientById(id);
    }
  }, [id]);

  // Fallback data in case patientDetails is empty or missing fields
  const fallbackData = {
    firstName: "Marcus",
    lastName: "Philips",
    phone: "99130 44537",
    age: "20",
    patient_issue: "Feeling Tired",
    gender: "Male",
    type: "Online",
    address: "B-408 Swastik society, rajkot.",
    appointmentTime: "4:30 PM",
    avatar: "https://via.placeholder.com/150",
  };

  // Merge patientDetails with fallback data, preferring patientDetails values when available
  const displayData = {
    name: patientDetails
      ? `${patientDetails.firstName} ${patientDetails.lastName}`
      : `${fallbackData.firstName} ${fallbackData.lastName}`,
    phone: patientDetails?.phone || fallbackData.phone,
    age: patientDetails?.age ? `${patientDetails.age} Years` : fallbackData.age,
    gender: patientDetails?.gender || fallbackData.gender,
    address: patientDetails?.address || fallbackData.address,
    avatar: patientDetails?.avatar || fallbackData.avatar,
    bloodGroup: patientDetails?.bloodGroup || "Not Specified",
    email: patientDetails?.email || "Not Available",
    height: patientDetails?.height
      ? `${patientDetails.height} cm`
      : "Not Specified",
    weight: patientDetails?.weight
      ? `${patientDetails.weight} kg`
      : "Not Specified",
    country: patientDetails?.country || "Not Specified",
    state: patientDetails?.state || "Not Specified",
    city: patientDetails?.city || "Not Specified",
  };

  // Transform appointment data
  const appointments = patientDetails?.appointmentId || [];

  const handleViewFiles = () => {
    navigate(`/doctor/allFiles`);
  };

  const openModal = () => {
    setSelectedPatient(patientDetails);
    setIsModalOpen(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <div className="p-details p-6 bg-[#f6f8fb]">
        <div className="bg-white rounded-lg shadow-md p-5">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Patient Details</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center">
              <div className="bg-white text-blue-500 me-2 rounded">
                <MdAdd />
              </div>
              <div onClick={openModal}>Add Record</div>
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-1/12">
              <img
                src={displayData.avatar}
                alt="Patient"
                className="w-28 h-28 rounded-full mr-6 border-4"
              />
            </div>
            <div className="flex w-5/6">
              <div className="grid grid-cols-4 gap-0 border-r pe-16 ps-16 w-[80%]">
                <div>
                  <p className="text-gray-500">Patient Name</p>
                  <p className="font-medium">{displayData.name}</p>
                </div>
                <div>
                  <p className="text-gray-500">Contact Number</p>
                  <p className="font-medium">{displayData.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-medium">{displayData.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Gender</p>
                  <p className="font-medium capitalize">{displayData.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500">Blood Group</p>
                  <p className="font-medium">{displayData.bloodGroup}</p>
                </div>
                <div>
                  <p className="text-gray-500">Height</p>
                  <p className="font-medium">{displayData.height}</p>
                </div>
                <div>
                  <p className="text-gray-500">Age</p>
                  <p className="font-medium">{displayData.age}</p>
                </div>
                <div>
                  <p className="text-gray-500">Weight</p>
                  <p className="font-medium">{displayData.weight}</p>
                </div>
              </div>
              <div className="ps-6 w-[20%]">
                <div className="pb-5">
                  <p className="text-gray-500 pb-1">Country</p>
                  <p className="font-medium">{displayData.country}</p>
                </div>
                <div>
                  <p className="text-gray-500">Address</p>
                  <p className="font-medium">{displayData.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-table bg-white p-4 rounded-lg mt-3">
          <h3 className="text-2xl font-bold mb-4 text-[#030229]">
            All Appointments
          </h3>
          <div className="max-h-[calc(100vh-440px)] overflow-y-auto">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr>
                  {/* <th className="p-3 text-left text-lg font-bold text-[#030229]">Disease Name</th> */}
                  <th className="p-3 text-left text-[#030229] text-lg font-semibold rounded-tl-lg">
                    Patient Issue
                  </th>
                  <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                    Appointment Date
                  </th>
                  <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                    Appointment Time
                  </th>
                  <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                    Appointment Type
                  </th>
                  <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                    Status
                  </th>
                  <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="border-t">
                    {/* <td className="p-3 text-lg font-semibold text-[#4F4F4F]">
                    {appointment.disease_name || 'Not Specified'}
                  </td> */}
                    <td className="p-3 text-lg font-semibold text-[#4F4F4F]">
                      {appointment.patient_issue}
                    </td>
                    <td className="p-3 text-lg font-semibold text-[#4F4F4F]">
                      {formatDate(appointment.date)}
                    </td>
                    <td className="p-3">
                      <span className="text-lg font-semibold text-[#718EBF] px-4 py-1 rounded-full bg-[#F6F8FB]">
                        {formatTime(appointment.appointmentTime)}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-5 py-2 text-[#4F4F4F] text-base font-semibold rounded-full w-[80%] text-center capitalize ${
                          appointment.type === "online"
                            ? "bg-[#fff9e7] text-[#FFC313]"
                            : appointment.type === "follow_up"
                              ? "bg-[#eef1fd] text-[#5678E9]"
                              : "bg-[#fff9e7] text-[#FFC313]"
                        }`}
                      >
                        {appointment.type.replace("_", " ")}
                      </span>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-5 py-2 text-[#4F4F4F] text-base font-semibold rounded-full w-[80%] text-center ${
                          appointment.status === "scheduled"
                            ? "bg-green-100 text-green-600"
                            : appointment.status === "completed"
                              ? "bg-[#eef1fd] text-[#5678E9]"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="p-3 text-lg font-semibold">
                      <button
                        className="view text-[#5678E9] bg-gray-100 rounded-lg p-3 text-lg inline-block cursor-pointer"
                        onClick={handleViewFiles}
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal">
            <div className="modal-content">
              <AddRecord
                patient={selectedPatient}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientDetail;
