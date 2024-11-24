import { useEffect, useState } from "react";
import {
  IconButton,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import { Search, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export default function PatientRecordAccess() {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("Month");
  const navigate = useNavigate();
  const { getAppointmetnsForDoctor, allAppointments } = useGlobal();
  const { user } = useAuth();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      await getAppointmetnsForDoctor(user.id);
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    // Map appointments to patients format
    const mappedPatients = allAppointments.map((appointment) => ({
      id: appointment._id,
      patientsId: appointment.patientId._id,
      patientName: `${appointment.patientId.firstName} ${appointment.patientId.lastName}`,
      diseaseName: appointment.type || "N/A", // or any relevant field for "diseaseName"
      patientIssue: appointment.patient_issue || "N/A",
      lastAppointmentDate: new Date(appointment.date).toLocaleDateString(),
      lastAppointmentTime: new Date(
        appointment.appointmentTime
      ).toLocaleTimeString(),
      age: `${appointment.patientId.age} Years`,
      gender: appointment.patientId.gender,
    }));
    setPatients(mappedPatients);
  }, [allAppointments]);

  const filterByTime = (patients, timeFilter) => {
    const now = new Date();
    return patients.filter((patient) => {
      const appointmentDate = new Date(patient.lastAppointmentDate);
      const diffTime = now - appointmentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

      if (timeFilter === "Month") {
        return diffDays <= 30; // Last 30 days
      } else if (timeFilter === "Week") {
        return diffDays <= 7; // Last 7 days
      } else if (timeFilter === "Day") {
        return diffDays <= 1; // Last 1 day
      }
      return true; // Default case, return all
    });
  };

  const filteredPatients = filterByTime(patients, timeFilter).filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.diseaseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.patientIssue.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(allAppointments);
  return (
    <div className="bg-[#F6F8FB] p-3 h-[92%]">
      <div className="patioentRecord p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[26px] font-bold text-[#030229]">
            Patient Record Access
          </h2>
          <div className="flex space-x-4">
            <div className="search-btn flex">
              <div class="flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
                <div class="text-xl text-gray-700">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search Doctor"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  class="bg-transparent pl-2 text-lg"
                />
              </div>
            </div>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="border rounded-lg  text-[#4F4F4F] px-5 py-2 text-base font-semibold"
            >
              <option value="All">All Time</option>
              <option value="Day">Today</option>
              <option value="Week">Week</option>
              <option value="Month">Month</option>
            </select>
          </div>
        </div>

        <div className="pr-data max-h-[760px] overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold rounded-tl-lg">
                  Patient Name
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                  Disease Name
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                  Patient Issue
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                  Last Appointment Date
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                  Last Appointment Time
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                  Age
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold">
                  Gender
                </th>
                <th className="p-3 text-left text-[#030229] text-lg font-semibold rounded-tr-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3 text-[#4F4F4F] text-base font-semibold">
                    {patient.patientName}
                  </td>
                  <td className="p-3 text-[#4F4F4F] text-base font-semibold">
                    {patient.diseaseName}
                  </td>
                  <td className="p-3 text-[#4F4F4F] text-base font-semibold">
                    {patient.patientIssue}
                  </td>
                  <td className="p-3 text-[#4F4F4F] text-base font-semibold">
                    {patient.lastAppointmentDate}
                  </td>
                  <td className="p-3 ">
                    <span className="bg-[#f6f8fb] rounded-full px-5 py-2 text-center text-[#718EBF] font-semibold">
                      {patient.lastAppointmentTime}
                    </span>
                  </td>
                  <td className="p-3 text-[#4F4F4F] text-base font-semibold">
                    {patient.age}
                  </td>
                  <td className="p-3 gender ">
                    <span
                      className={`flex items-center justify-center w-10 h-10 rounded-full bg-[#F6F8FB] text-[#4F4F4F] text-lg ${
                        patient.gender === "Male"
                          ? "text-blue-500"
                          : "text-pink-500"
                      }`}
                    >
                      {patient.gender === "Male" ? "♂" : "♀"}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-sm flex items-center bg-[#0EABEB] text-white rounded-lg px-2 py-2 ml-2">
                      <FaEye
                        onClick={() =>
                          navigate(
                            `/doctor/patientDetail/${patient.patientsId}`
                          )
                        }
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
