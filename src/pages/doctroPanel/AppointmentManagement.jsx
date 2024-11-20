import { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { TbCalendarX } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { Search, DateRange } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomDateModal from "../../component/modals/CustomDateModal.jsx";
import CancelAppointmentModal from "../../component/modals/CancelAppointmentModal.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useGlobal } from "../../hooks/useGlobal.jsx";

export default function AppointmentManagement() {
  const { allAppointments, getAppointmetnsForDoctor, cancelAppointment } =
    useGlobal();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [dateRange, setDateRange] = useState("Any Date");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Today Appointment");
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const [openCancelAppointmentModal, setOpenCancelAppointmentModal] =
    useState(false);
  const [timeFilter, setTimeFilter] = useState("All");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    getAppointmetnsForDoctor(user.id);
  }, [user.id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const categorizeAppointments = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return {
      today: allAppointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate.getTime() === today.getTime();
      }),
      upcoming: allAppointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate > today;
      }),
      previous: allAppointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate < today;
      }),
      canceled: allAppointments.filter((apt) => apt.status === "cancelled"),
    };
  };

  const getAppointments = () => {
    const categorized = categorizeAppointments();
    switch (activeTab) {
      case "Today Appointment":
        return categorized.today;
      case "Upcoming Appointment":
        return categorized.upcoming;
      case "Previous Appointment":
        return categorized.previous;
      case "Cancel Appointment":
        return categorized.canceled;
      default:
        return [];
    }
  };

  const filterAppointmentsByTime = (appointments) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set to start of today

    return appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      appointmentDate.setHours(0, 0, 0, 0); // Set to start of appointment day

      switch (timeFilter) {
        case "Day":
          return appointmentDate.getTime() === now.getTime();
        case "Week":
          const weekStart = new Date(now);
          weekStart.setDate(now.getDate() - now.getDay());
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6);
          return appointmentDate >= weekStart && appointmentDate <= weekEnd;
        case "Month":
          return (
            appointmentDate.getMonth() === now.getMonth() &&
            appointmentDate.getFullYear() === now.getFullYear()
          );
        default:
          return true;
      }
    });
  };

  const filteredAppointments = getAppointments().filter((appointment) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      appointment.patientId.firstName.toLowerCase().includes(lowerSearchTerm) ||
      appointment.patient_issue.toLowerCase().includes(lowerSearchTerm)
    );
  });

  const timeFilteredAppointments =
    filterAppointmentsByTime(filteredAppointments);

  return (
    <div className="bg-[#e4e3e3] p-6 h-full">
      <div className="p-6 bg-white rounded-lg shadow-md h-full">
        <div className="flex justify-between items-center mb-4  border-b  ">
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
                    ? "!text-[#0EABEB] !border-b-2 !border-b-[#0EABEB]"
                    : "text-gray-400"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        <div className="menu flex justify-between items-center mb-3">
          <h3>{activeTab}</h3>
          <div className="">
            <div className="flex items-center space-x-4">
              <TextField
                className="search outline-none"
                variant="outlined"
                placeholder="Search Patient"
                value={searchTerm || ""}
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
                <MenuItem value="All">All Time</MenuItem>
                <MenuItem value="Day">Today</MenuItem>
                <MenuItem value="Week">Week</MenuItem>
                <MenuItem value="Month">Month</MenuItem>
              </Select>

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

        <div className="flex-grow overflow-hidden">
          <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr>
                  <th className="p-3 text-left text-sm font-semibold rounded-tl-lg">
                    Patient Name
                  </th>
                  <th className="p-3 text-left text-sm font-semibold">
                    Patient Issue
                  </th>
                  <th className="p-3 text-left text-sm font-semibold">
                    Appointment Date
                  </th>
                  <th className="p-3 text-left text-sm font-semibold">
                    Appointment Time
                  </th>
                  <th className="p-3 text-left text-sm font-semibold">
                    Appointment Type
                  </th>
                  <th className="p-3 text-left text-sm font-semibold rounded-tr-lg">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {timeFilteredAppointments.map((appointment) => (
                  <tr key={appointment._id} className="border-t">
                    <td className="p-3">
                      {`${appointment.patientId.firstName} ${appointment.patientId.lastName}`}
                    </td>
                    <td className="p-3">{appointment.patient_issue}</td>
                    <td className="p-3">{formatDate(appointment.date)}</td>
                    <td className="p-3 text-blue-600">
                      <span className="a-time">
                        {formatTime(appointment.appointmentTime)}
                      </span>
                    </td>
                    <td className="p-3">
                      <h3
                        className={`px-3 py-1 text-sm font-medium rounded-full w-[60%] text-center ${
                          appointment.type === "online"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {appointment.type}
                      </h3>
                    </td>
                    <td className="p-3 btn">
                      <IconButton
                        color=" w-10 h-10 rounded-full bg-[#F6F8FB]"
                        onClick={() => setOpenCancelAppointmentModal(true)}
                      >
                        <TbCalendarX
                          style={{ color: "#E11D29" }}

                        />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => navigate("/doctor/appointmentTimeSlot")}
                      >
                        <TbCalendarTime style={{ color: "#5678E9" }} />
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
          onClose={() => setOpenCustomDateModal(false)}
          onApply={(dateRange) => {
            setDateRange(`${dateRange[0]} - ${dateRange[1]}`);
            setOpenCustomDateModal(false);
          }}
        />
        <CancelAppointmentModal
          open={openCancelAppointmentModal}
          onClose={() => setOpenCancelAppointmentModal(false)}
        />
      </div>
    </div>
  );
}
