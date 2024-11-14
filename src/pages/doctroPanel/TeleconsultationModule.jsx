import { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import TeleConsultationCard from "../../component/PrescriptionTools/TeleConsultationCard";
import CustomDateModal from "../../component/modals/CustomDateModal";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import toast from "react-hot-toast";

export default function TeleconsultationModule() {
  const { getAppointmetnsForDoctor, allAppointments, cancelAppointment } = useGlobal();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);

  useEffect(() => {
    getAppointmetnsForDoctor(user.id);
  }, [user.id]);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId);
      getAppointmetnsForDoctor(user.id);
      toast.success("Appointment canceled successfully.");
    } catch (error) {
      console.error("Failed to cancel appointment", error);
      toast.error("Failed to cancel appointment.");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  };

  const filterAppointments = (appointments) => {
    const [startDate, endDate] = dateRange;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return {
      today: appointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return (
          aptDate.getTime() === today.getTime() &&
          apt.status !== "canceled" &&
          (!startDate || !endDate || (aptDate >= startDate && aptDate <= endDate))
        );
      }),
      upcoming: appointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        return (
          aptDate.getTime() > today.getTime() &&
          apt.status !== "canceled" &&
          (!startDate || !endDate || (aptDate >= startDate && aptDate <= endDate))
        );
      }),
      previous: appointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        return (
          aptDate.getTime() < today.getTime() &&
          apt.status !== "canceled" &&
          (!startDate || !endDate || (aptDate >= startDate && aptDate <= endDate))
        );
      }),
      canceled: appointments.filter((apt) => apt.status === "canceled"),
    };
  };

  const getCurrentAppointments = () => {
    const filteredAppointments = filterAppointments(allAppointments || []);
    switch (activeTab) {
      case 0:
        return filteredAppointments.today;
      case 1:
        return filteredAppointments.upcoming;
      case 2:
        return filteredAppointments.previous;
      case 3:
        return filteredAppointments.canceled;
      default:
        return filteredAppointments.today;
    }
  };

  const getCurrentName = () => {
    switch (activeTab) {
      case 0:
        return "Today Appointment";
      case 1:
        return "Upcoming Appointment";
      case 2:
        return "Previous Appointment";
      case 3:
        return "Cancel Appointment";
      default:
        return "Today Appointment";
    }
  };

  const formatAppointmentForDisplay = (appointment) => ({
    id: appointment._id,
    patientId: appointment.patientId._id,
    name: `${appointment.patientId.firstName} ${appointment.patientId.lastName}`,
    issue: appointment.patient_issue,
    disease: appointment.patient_issue,
    date: formatDate(appointment.date),
    time: formatTime(appointment.appointmentTime),
    age: appointment.patientId.age,
    gender: appointment.patientId.gender,
    avatar: appointment.patientId.avatar,
    status: appointment.status,
  });

  const handleDateSelection = (newRange) => {
    setDateRange(newRange);
    setOpenCustomDateModal(false);
  };

  const tabName = getCurrentName();
  const currentAppointments = getCurrentAppointments().map(formatAppointmentForDisplay);

  return (
    <>
      <div className="teli-module p-8 bg-gray-100 min-h-screen">
        <Tabs
          className="teli-btn"
          value={activeTab}
          onChange={(elem, newValue) => setActiveTab(newValue)}
        >
          <Tab label="Today Appointment" />
          <Tab label="Upcoming Appointment" />
          <Tab label="Previous Appointment" />
          <Tab label="Cancel Appointment" />
        </Tabs>

        <div className="head mt-4 mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{tabName}</h2>
          <Button
            variant="outlined"
            startIcon={<DateRange />}
            color="gray"
            onClick={() => setOpenCustomDateModal(true)}
          >
            {dateRange[0] && dateRange[1]
              ? `${moment(dateRange[0]).format("MM/DD/YYYY")} - ${moment(dateRange[1]).format("MM/DD/YYYY")}`
              : "Select Date Range"}
          </Button>
        </div>

        <div className="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentAppointments.map((patient) => (
            <TeleConsultationCard key={patient.id} patient={patient} />
          ))}
        </div>
      </div>

      <CustomDateModal
        open={openCustomDateModal}
        onClose={() => setOpenCustomDateModal(false)}
        onApply={handleDateSelection}
      />
    </>
  );
}
