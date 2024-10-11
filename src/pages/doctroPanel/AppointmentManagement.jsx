import { useEffect, useState } from "react";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { CalendarToday, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomDateModal from "../../component/modals/CustomDateModal.jsx";
import CancelAppointmentModal from "../../component/modals/CancelAppointmentModal.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useGlobal } from "../../hooks/useGlobal.jsx";
import apiService from "../../services/api.js";
import "./doctorPanel.css";


export default function AppointmentManagement() {
  // const { user } = useAuth();
  // const { getAllAppointments, allAppointements } = useGlobal();

  useEffect(() => {
    getAppointments();
  }, []);

  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Today Appointment');

  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const [openCancelAppointmentModal, setOpenCancelAppointmentModal] = useState(false);
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState({
    today: [
      {
        patientName: "Marcus Philips",
        diseaseName: "Viral Infection",
        patientIssue: "Stomach Ache",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "4:30 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Julianna Warren",
        diseaseName: "Diabetes",
        patientIssue: "Stomach Ache",
        appointmentDate: "3 Jan, 2022",
        appointmentTime: "2:40 PM",
        appointmentType: "Onsite",
      },
    ],
    upcoming: [
      {
        patientName: "London Shaffer",
        diseaseName: "Viral Infection",
        patientIssue: "Feeling Tired",
        appointmentDate: "5 Jan, 2022",
        appointmentTime: "5:35 PM",
        appointmentType: "Onsite",
      },
    ],
    previous: [
      {
        patientName: "Leslie Mccray",
        diseaseName: "Blood Pressure",
        patientIssue: "Headache",
        appointmentDate: "6 Jan, 2022",
        appointmentTime: "9:30 PM",
        appointmentType: "Online",
      },
    ],
    canceled: [
      {
        patientName: "Marcus Philips",
        diseaseName: "Viral Infection",
        patientIssue: "Stomach Ache",
        appointmentDate: "7 Jan, 2022",
        appointmentTime: "4:30 PM",
        appointmentType: "Onsite",
      },
    ],
  });


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.AllAppointments();
        const appointmentData = response.data;

        setAppointments({
          today: appointmentData.today || [],
          upcoming: appointmentData.upcoming || [],
          previous: appointmentData.previous || [],
          canceled: appointmentData.canceled || [],
        });
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Get appointments based on active tab
  const getAppointments = () => {
    switch (activeTab) {
      case "Today Appointment":
        return appointments.today;
      case "Upcoming Appointment":
        return appointments.upcoming;
      case "Previous Appointment":
        return appointments.previous;
      case "Cancel Appointment":
        return appointments.canceled;
      default:
        return [];
    }
  };

  const filteredAppointments = getAppointments().filter((appointment) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      appointment.patientName.toLowerCase().includes(lowerSearchTerm) ||
      appointment.diseaseName.toLowerCase().includes(lowerSearchTerm) ||
      appointment.patientIssue.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md m-6">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-8 text-sm font-semibold text-gray-500 thead">
          {[
            "Today Appointment",
            "Upcoming Appointment",
            "Previous Appointment",
            "Cancel Appointment",
          ].map((tab) => (
            <Button
              key={tab}
              className={
                activeTab === tab
                  ? "!text-[#0EABEB] !border-b-2 !border-[#0EABEB]"
                  : "text-gray-400"
              }
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      <div className="menu flex  justify-between items-center mb-3">
        <h3>{activeTab}</h3>
        <div className="">
          {/* Search Bar and Appointment Time Slot */}
          <div className=" flex items-center space-x-4">
            {/* Search Field */}

            <TextField
              className="search outline-none"
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

            {/* Appointment Time Slot Button */}
            <div className="time-slot">
              <Button
                variant="contained"
                color="primary"
                className="!text-sm time-slot"
                onClick={() => navigate("/doctor/appointmentTimeSlot")}
              >
                Appointment Time Slot
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Appointments */}
      <div className="max-h-[600px] overflow-y-auto t-data">
        <table className="min-w-full table-auto">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="p-3 text-left text-sm font-semibold">Patient Name</th>
              <th className="p-3 text-left text-sm font-semibold">Disease Name</th>
              <th className="p-3 text-left text-sm font-semibold">Patient Issue</th>
              <th className="p-3 text-left text-sm font-semibold">Appointment Date</th>
              <th className="p-3 text-left text-sm font-semibold">Appointment Time</th>
              <th className="p-3 text-left text-sm font-semibold">Appointment Type</th>
              <th className="p-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{appointment.patientName}</td>
                <td className="p-3">{appointment.diseaseName}</td>
                <td className="p-3">{appointment.patientIssue}</td>
                <td className="p-3">{appointment.appointmentDate}</td>
                <td className="p-3 text-blue-600">
                  <span className="a-time">{appointment.appointmentTime}</span>
                </td>
                <td className="p-3">
                  <h3
                    className={`px-3 py-1 text-sm font-medium rounded-full ${appointment.appointmentType === "Online" ? "bg-yellow-100 text-yellow-600" : "bg-blue-100 text-blue-600"}`}
                  >
                    {appointment.appointmentType}
                  </h3>
                </td>
                <td className="p-3 btn">
                  <IconButton color="primary" onClick={() => setOpenCustomDateModal(true)}>
                    <CalendarToday style={{ color: "#E11D29" }} />
                  </IconButton>

                  <IconButton color="secondary" onClick={() => setOpenCancelAppointmentModal(true)}>
                    <CalendarToday style={{ color: "#5678E9" }} />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomDateModal open={openCustomDateModal} onClose={() => setOpenCustomDateModal(false)} />
      <CancelAppointmentModal
        open={openCancelAppointmentModal}
        onClose={() => setOpenCancelAppointmentModal(false)}
      />
    </div>
  );
}
