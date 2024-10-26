import { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import TeleConsultationCard from "../../component/PrescriptionTools/TeleConsultationCard";
import CustomDateModal from "../../component/modals/CustomDateModal";
import TeleConsultationTable from "../../component/PrescriptionTools/TeleConsultationTable";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";

export default function TeleconsultationModule() {
  const { getAppointmetnsForDoctor, allAppointments } = useGlobal();
  const [activeTab, setActiveTab] = useState(0);
  const [dateRange, setDateRange] = useState("Any Date");
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    getAppointmetnsForDoctor(user.id);
  }, []);
  console.log(allAppointments  , "appointments")
  // Function to filter appointments based on status and date
  const filterAppointments = (appointments) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return {
      today: appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate.getTime() === today.getTime() && apt.status !== "canceled";
      }),
      upcoming: appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate.getTime() > today.getTime() && apt.status !== "canceled";
      }),
      previous: appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate.getTime() < today.getTime() && apt.status !== "canceled";
      }),
      canceled: appointments.filter(apt => apt.status === "canceled")
    };
  };

  // Function to get data based on active tab
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

  // Format appointment data for display
  const formatAppointmentForDisplay = (appointment) => {
    return {
      id: appointment._id,
      patientId: appointment.patientId._id,
      name: `${appointment.patientId.firstName} ${appointment.patientId.lastName}`,
      issue: appointment.patient_issue,
      disease: appointment.patient_issue, // You might want to add a disease field to your data model
      date: new Date(appointment.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      time: new Date(appointment.appointmentTime).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      age: appointment.patientId.age,
      gender: appointment.patientId.gender,
      avatar: appointment.patientId.avatar,
      status: appointment.status
    };
  };

  const tabName = getCurrentName();
  const currentAppointments = getCurrentAppointments().map(formatAppointmentForDisplay);
  console.log(currentAppointments, "currentAppointments")
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
            {dateRange}
          </Button>
        </div>

        {tabName === "Today Appointment" ? (
          <div className="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentAppointments.map((patient) => (
              <TeleConsultationCard key={patient.id} patient={patient} />
            ))}
          </div>
        ) : (
          <div className="pr-data max-h-[600px] overflow-y-auto">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr>
                  <th className="p-3 text-left text-sm font-semibold">Patient Name</th>
                  <th className="p-3 text-left text-sm font-semibold">Disease Name</th>
                  <th className="p-3 text-left text-sm font-semibold">Patient Issue</th>
                  <th className="p-3 text-left text-sm font-semibold">Last Appointment Date</th>
                  <th className="p-3 text-left text-sm font-semibold">Last Appointment Time</th>
                  <th className="p-3 text-left text-sm font-semibold">Age</th>
                  <th className="p-3 text-left text-sm font-semibold">Gender</th>
                  <th className="p-3 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentAppointments.map((patient) => (
                  <TeleConsultationTable key={patient.id} patient={patient} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <CustomDateModal
        open={openCustomDateModal}
        onClose={() => setOpenCustomDateModal(false)}
        setDateRange={setDateRange}
      />
    </>
  );
}