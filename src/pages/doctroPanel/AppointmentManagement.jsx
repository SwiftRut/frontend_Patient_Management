import { useEffect, useState } from "react";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { CalendarToday, Search, DateRange } from "@mui/icons-material";
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
  const [dateRange, setDateRange] = useState("Any Date");


  useEffect(() => {
    getAppointments();
  }, []);

  // const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Today Appointment");

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
      {
        patientName: "Chris Gomez",
        diseaseName: "Hypertension",
        patientIssue: "Dizziness",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "11:00 AM",
        appointmentType: "Online",
      },
      {
        patientName: "Lilly Wells",
        diseaseName: "Allergy",
        patientIssue: "Skin Rash",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "9:15 AM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Thomas Newton",
        diseaseName: "Flu",
        patientIssue: "Fever and Cough",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "3:00 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Eva Ford",
        diseaseName: "Asthma",
        patientIssue: "Shortness of Breath",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "10:00 AM",
        appointmentType: "Onsite",
      },
      {
        patientName: "James Roberts",
        diseaseName: "Migraine",
        patientIssue: "Severe Headache",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "5:00 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Anna Barnes",
        diseaseName: "Hypertension",
        patientIssue: "Chest Pain",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "1:30 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Michael Johnson",
        diseaseName: "Diabetes",
        patientIssue: "Blurry Vision",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "12:00 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Sophia Davis",
        diseaseName: "Heart Disease",
        patientIssue: "Palpitations",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "2:15 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Liam Parker",
        diseaseName: "Flu",
        patientIssue: "Sore Throat",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "9:45 AM",
        appointmentType: "Online",
      },
      {
        patientName: "Grace Collins",
        diseaseName: "Asthma",
        patientIssue: "Coughing",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "11:30 AM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Ethan Moore",
        diseaseName: "Back Pain",
        patientIssue: "Lower Back Ache",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "3:45 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Isabella Walker",
        diseaseName: "Arthritis",
        patientIssue: "Joint Pain",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "4:00 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Oliver Smith",
        diseaseName: "Thyroid",
        patientIssue: "Fatigue",
        appointmentDate: "2 Jan, 2022",
        appointmentTime: "12:30 PM",
        appointmentType: "Online",
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
      {
        patientName: "Amelia Brooks",
        diseaseName: "Allergy",
        patientIssue: "Skin Rash",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "1:00 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Elijah Wood",
        diseaseName: "Asthma",
        patientIssue: "Coughing",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "3:45 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Charlotte Howard",
        diseaseName: "Flu",
        patientIssue: "Sore Throat",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "10:30 AM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Henry Miller",
        diseaseName: "Diabetes",
        patientIssue: "Blurred Vision",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "11:45 AM",
        appointmentType: "Online",
      },
      {
        patientName: "Mia Brown",
        diseaseName: "Hypertension",
        patientIssue: "Dizziness",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "4:00 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Noah Wilson",
        diseaseName: "Migraine",
        patientIssue: "Headache",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "2:00 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Harper Taylor",
        diseaseName: "Arthritis",
        patientIssue: "Joint Pain",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "5:30 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "William Jones",
        diseaseName: "Heart Disease",
        patientIssue: "Chest Pain",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "12:30 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Emma Davis",
        diseaseName: "Thyroid",
        patientIssue: "Fatigue",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "3:15 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "James Green",
        diseaseName: "Flu",
        patientIssue: "Fever and Cough",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "9:30 AM",
        appointmentType: "Online",
      },
      {
        patientName: "Emily Adams",
        diseaseName: "Viral Infection",
        patientIssue: "Feeling Weak",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "11:00 AM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Lucas Thompson",
        diseaseName: "Allergy",
        patientIssue: "Swollen Eyes",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "2:30 PM",
        appointmentType: "Online",
      },
      {
        patientName: "Olivia White",
        diseaseName: "Asthma",
        patientIssue: "Shortness of Breath",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "4:45 PM",
        appointmentType: "Onsite",
      },
      {
        patientName: "Benjamin Moore",
        diseaseName: "Back Pain",
        patientIssue: "Lower Back Ache",
        appointmentDate: "1 Jan, 2022",
        appointmentTime: "10:15 AM",
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
        const response = await apiService.GetAllAppointments();
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
    const appointmentDate = new Date(appointment.appointmentDate);
    const [startDate, endDate] = dateRange.split(" - ").map(date => new Date(date.trim()));

    const isWithinDateRange = dateRange === "Any Date" ||
      (appointmentDate >= startDate && appointmentDate <= endDate);

    return (
      isWithinDateRange &&
      (appointment.patientName.toLowerCase().includes(lowerSearchTerm) ||
        appointment.diseaseName.toLowerCase().includes(lowerSearchTerm) ||
        appointment.patientIssue.toLowerCase().includes(lowerSearchTerm))
    );
  });

  return (
    <div className="bg-[#e4e3e3] p-6 h-full">
      <div className="p-6 bg-white rounded-lg shadow-md h-full">
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

        <div className="menu flex justify-between items-center mb-3">
          <h3>{activeTab}</h3>
          <div className="">
            {/* Search Bar and Appointment Time Slot */}
            <div className="flex items-center space-x-4">
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

              <Button
                variant="outlined"
                startIcon={<DateRange />}
                color="gray"
                onClick={() => setOpenCustomDateModal(true)}
              >
                {dateRange}
              </Button>

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
        <div className="flex-grow overflow-hidden">
          <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
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
                        className={`px-3 py-1 text-sm font-medium rounded-full w-[4rem] ${appointment.appointmentType === "Online"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                          }`}
                      >
                        {appointment.appointmentType}
                      </h3>
                    </td>
                    <td className="p-3 btn">
                      <IconButton
                        color="primary"
                        onClick={() => setOpenCancelAppointmentModal(true)}
                      >
                        <CalendarToday style={{ color: "#E11D29" }} />
                      </IconButton>

                      <IconButton
                        color="secondary"
                        onClick={() => navigate("/doctor/appointmentTimeSlot")}
                      >
                        <CalendarToday style={{ color: "#5678E9" }} />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CustomDateModal
          open={openCustomDateModal}
          setDateRange={setDateRange}
          onClose={() => setOpenCustomDateModal(false)}
        />
        <CancelAppointmentModal
          open={openCancelAppointmentModal}
          onClose={() => setOpenCancelAppointmentModal(false)}
        />
      </div>
    </div>
  );
}
