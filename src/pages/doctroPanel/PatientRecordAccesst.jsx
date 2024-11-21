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
    <div className="bg-[#e4e3e3] p-6 h-full">
      <div className="patioentRecord p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold mb-4">Patient Record Access</h2>
          <div className="flex space-x-4">
            <TextField
              className="bg-[#f6f8fb] rounded-full"
              variant="outlined"
              placeholder="Search Patient"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <Select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="Month">Month</MenuItem>
              <MenuItem value="Week">Week</MenuItem>
              <MenuItem value="Day">Day</MenuItem>
            </Select>
          </div>
        </div>

        <div className="pr-data max-h-[600px] overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="p-3 text-left text-sm font-semibold">
                  Patient Name
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Disease Name
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Patient Issue
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Last Appointment Date
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Last Appointment Time
                </th>
                <th className="p-3 text-left text-sm font-semibold">Age</th>
                <th className="p-3 text-left text-sm font-semibold">Gender</th>
                <th className="p-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, index) => (
                <tr key={index}>
                  <td className="p-3 text-sm">{patient.patientName}</td>
                  <td className="p-3 text-sm">{patient.diseaseName}</td>
                  <td className="p-3 text-sm">{patient.patientIssue}</td>
                  <td className="p-3 text-sm">{patient.lastAppointmentDate}</td>
                  <td className="p-3 text-sm">{patient.lastAppointmentTime}</td>
                  <td className="p-3 text-sm">{patient.age}</td>
                  <td className="p-3 gender">
                    <span
                      className={
                        patient.gender === "Male"
                          ? "text-blue-500"
                          : "text-pink-500"
                      }
                    >
                      {patient.gender === "Male" ? "♂" : "♀"}
                    </span>
                  </td>
                  <td className="p-3">
                    <IconButton color="primary">
                      <Visibility
                        onClick={() =>
                          navigate(
                            `/doctor/patientDetail/${patient.patientsId}`
                          )
                        }
                      />
                    </IconButton>
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
