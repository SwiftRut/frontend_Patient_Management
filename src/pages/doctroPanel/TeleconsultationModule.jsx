import { useEffect, useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import TeleConsultationCard from "../../component/PrescriptionTools/TeleConsultationCard";
import CustomDateModal from "../../component/modals/CustomDateModal";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";

export default function TeleconsultationModule() {
  const { getAppointmetnsForDoctor, allAppointments, cancelAppointment } =
    useGlobal();
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
          (!startDate ||
            !endDate ||
            (aptDate >= startDate && aptDate <= endDate))
        );
      }),
      upcoming: appointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        return (
          aptDate.getTime() > today.getTime() &&
          apt.status !== "canceled" &&
          (!startDate ||
            !endDate ||
            (aptDate >= startDate && aptDate <= endDate))
        );
      }),
      previous: appointments.filter((apt) => {
        const aptDate = new Date(apt.date);
        return (
          aptDate.getTime() < today.getTime() &&
          apt.status !== "canceled" &&
          (!startDate ||
            !endDate ||
            (aptDate >= startDate && aptDate <= endDate))
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

  const renderAppointmentTable = (appointments) => {
    return (
      <div className="bg-white p-2 rounded-lg">
        <div
          className="pr-data overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
          style={{ height: "calc(100vh - 280px)" }}
        >
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="p-3 text-left text-md font-semibold text-[#030229] rounded-tl-lg">
                  Patient Name
                </th>
                <th className="p-3 text-left text-md font-semibold text-[#030229]">
                  Patient Issue
                </th>
                <th className="p-3 text-left text-md font-semibold text-[#030229]">
                  Diseases Name
                </th>
                <th className="p-3 text-left text-md font-semibold text-[#030229]">
                  Appointment Time
                </th>
                <th className="p-3 text-left text-md font-semibold text-[#030229]">
                  Status
                </th>
                <th className="p-3 text-left text-md font-semibold text-[#030229] rounded-tr-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((patient) => (
                  <tr key={patient.id} className="border-b">
                    <td className="flex items-center p-3">
                      <div className="avatar w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={patient.avatar || "/img/Avatar.png"}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-md font-semibold text-[#4F4F4F]">
                          {patient.name}
                        </h3>
                      </div>
                    </td>
                    <td className="p-3">
                      <h3 className="text-md font-semibold text-[#4F4F4F]">
                        {patient.issue}
                      </h3>
                    </td>
                    <td className="p-3">
                      <h3 className="text-md font-semibold text-[#4F4F4F]">
                        {patient.disease}
                      </h3>
                    </td>
                    <td className="p-3">
                      <p className="text-[#718EBF] rounded-full bg-[#F6F8FB] py-2 text-center">
                        {`${patient.date} ${patient.time}`}
                      </p>
                    </td>
                    <td className="p-3">
                      <h3 className="bg-[#eef1fd] text-[#5678E9] rounded-full px-4 py-2 text-center text-lg font-semibold">
                        {patient.status}
                      </h3>
                    </td>
                    <td className="p-3">
                      <div className="p-2 rounded cursor-pointer bg-[#F6F8FB] w-[40%]">
                        <FaEye className="text-[#0EABEB]" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-3 text-center text-gray-500">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const tabName = getCurrentName();
  const currentAppointments = getCurrentAppointments().map(
    formatAppointmentForDisplay,
  );

  return (
    <>
      <div className="bg-[#F6F8FB] p-3 h-[92.5%]">
        <div className="teli-module p-6 bg-white rounded-lg">
          <Tabs
            className="teli-btn border-b"
            value={activeTab}
            onChange={(elem, newValue) => setActiveTab(newValue)}
          >
            <Tab label="Today Appointment" />
            <Tab label="Upcoming Appointment" />
            <Tab label="Previous Appointment" />
            <Tab label="Cancel Appointment" />
          </Tabs>

          <div className="head mt-4 mb-6 flex justify-between items-center">
            <h2 className="text-[26px] font-bold text-[#030229]">{tabName}</h2>
            <Button
              variant="outlined"
              startIcon={<DateRange />}
              color="gray"
              onClick={() => setOpenCustomDateModal(true)}
            >
              {dateRange[0] && dateRange[1]
                ? `${moment(dateRange[0]).format("MM/DD/YYYY")} - ${moment(
                    dateRange[1],
                  ).format("MM/DD/YYYY")}`
                : "Select Date Range"}
            </Button>
          </div>

          {activeTab === 0 ? (
            <div className="box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[calc(100vh-280px)] overflow-y-auto">
              {currentAppointments.map((patient) => (
                <TeleConsultationCard key={patient.id} patient={patient} />
              ))}
            </div>
          ) : (
            renderAppointmentTable(currentAppointments)
          )}
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
