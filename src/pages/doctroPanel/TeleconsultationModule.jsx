import { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import TeleConsultationCard from "../../component/PrescriptionTools/TeleConsultationCard";
import CustomDateModal from "../../component/modals/CustomDateModal";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment"; // Import moment for date handling

export default function TeleconsultationModule() {
  const { getAppointmetnsForDoctor, allAppointments, cancelAppointment } = useGlobal();
  const [activeTab, setActiveTab] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]); // State for date range
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    getAppointmetnsForDoctor(user.id);
  }, [user.id]);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId); // API call to cancel
      getAppointmetnsForDoctor(user.id); // Refresh the list
    } catch (error) {
      console.error("Failed to cancel appointment", error);
    }
  };

  const filterAppointments = (appointments) => {
    const [startDate, endDate] = dateRange;

    return appointments.filter((apt) => {
      const aptDate = moment(apt.date);
      const isWithinDateRange =
        (!startDate || !endDate) ||
        (aptDate.isSameOrAfter(moment(startDate)) && aptDate.isSameOrBefore(moment(endDate)));

      return isWithinDateRange && apt.status !== "canceled"; // Filter out canceled appointments
    });
  };

  const getCurrentAppointments = () => {
    const filteredAppointments = filterAppointments(allAppointments || []);

    switch (activeTab) {
      case 0:
        return filteredAppointments.filter((apt) => moment(apt.date).isSame(new Date(), 'day')); // Today's appointments
      case 1:
        return filteredAppointments.filter((apt) => moment(apt.date).isAfter(new Date())); // Upcoming appointments
      case 2:
        return filteredAppointments.filter((apt) => moment(apt.date).isBefore(new Date())); // Previous appointments
      case 3:
        return filteredAppointments.filter((apt) => apt.status === "canceled"); // Canceled appointments
      default:
        return filteredAppointments;
    }
  };

  const handleDateSelection = (newRange) => {
    setDateRange(newRange); // Update the date range
    setOpenCustomDateModal(false); // Close the modal
  };

  const currentAppointments = getCurrentAppointments();

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
          <h2 className="text-xl font-semibold">Appointments</h2>
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
        onApply={handleDateSelection} // Pass the date selection handler
      />
    </>
  );
}
