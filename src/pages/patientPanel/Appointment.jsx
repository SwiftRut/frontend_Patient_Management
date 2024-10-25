import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { CalendarToday, Search, DateRange } from "@mui/icons-material";
import { BiSolidCalendar } from "react-icons/bi";
import CustomDateModal from "../../component/modals/CustomDateModal";
import CancelAppointmentModal from "../../component/modals/CancelAppointmentModal";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [dateRange, setDateRange] = useState("Any Date");
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const [openCancelAppointmentModal, setOpenCancelAppointmentModal] = useState(false);

  const {
    allAppointments,
    getAppointmetnsForPatient,
    cancelAppointment,
    setAllAppointments,
  } = useGlobal();
  const { user } = useAuth();

  useEffect(() => {
    getAppointmetnsForPatient(user.id);
  }, [user.id]);

  useEffect(() => {
    filterAppointments();
  }, [activeTab, allAppointments, dateRange, searchTerm]);

  const filterAppointments = () => {
    const currentDate = moment();

    const filtered = allAppointments?.filter((appointment) => {
      const appointmentDate = moment(appointment.date);
      const lowerSearchTerm = searchTerm.toLowerCase();
      const [startDate, endDate] = dateRange.split(" - ").map(date => moment(date.trim()));

      const isWithinDateRange = dateRange === "Any Date" ||
        (appointmentDate.isSameOrAfter(startDate) && appointmentDate.isSameOrBefore(endDate));

      const matchesSearch = 
        appointment.doctorId?.name.toLowerCase().includes(lowerSearchTerm) ||
        appointment.type.toLowerCase().includes(lowerSearchTerm) ||
        appointment.patient_issue.toLowerCase().includes(lowerSearchTerm);

      switch (activeTab) {
        case "scheduled":
          return (
            appointmentDate.isAfter(currentDate) &&
            appointment.status !== "canceled" &&
            isWithinDateRange &&
            matchesSearch
          );
        case "previous":
          return (
            appointmentDate.isBefore(currentDate) &&
            appointment.status !== "canceled" &&
            isWithinDateRange &&
            matchesSearch
          );
        case "cancel":
          return (
            appointment.status === "canceled" &&
            isWithinDateRange &&
            matchesSearch
          );
        case "pending":
          return (
            appointment.status === "pending" &&
            isWithinDateRange &&
            matchesSearch
          );
        default:
          return false;
      }
    });
    setFilteredAppointments(filtered || []);
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const response = await cancelAppointment(appointmentId);
      await getAppointmetnsForPatient(user.id);

      if (response.status === 200) {
        const updatedAppointments = allAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status: "canceled" }
            : appointment
        );
        setAllAppointments(updatedAppointments);
        setActiveTab("cancel");
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="bg-white shadow-lg h-auto p-4 rounded-xl m-3">
          <ul className="overflow-x-auto flex border-b border-gray-300">
            {["scheduled", "previous", "cancel", "pending"].map((tab) => (
              <li key={tab} className="mr-4">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 font-semibold ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointment
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content mt-3">
            <div>
              <div className="w-full p-4">
                <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center justify-start">
                  <h1 className="sm:text-2xl font-semibold text-gray-900 text-md">
                    My Appointment
                  </h1>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <TextField
                      className="search outline-none"
                      variant="outlined"
                      placeholder="Search Appointment"
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

                    <Link to="/patient/appointmentBooking">
                      <button className="w-auto px-3 py-3 sm:px-4 sm:py-2 bg-sky-500 hover:bg-sky-600 transition-colors rounded-md text-white flex items-center justify-center">
                        <BiSolidCalendar className="h-5 w-5" />
                        <span className="hidden sm:inline-block sm:ml-2">
                          Book Appointment
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto" style={{ height: "550px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredAppointments?.length > 0 ? (
                    filteredAppointments?.map((appointment) => (
                      <div
                        key={appointment._id}
                        className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                      >
                        <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                          <h6 className="text-md font-semibold">
                            Dr. {appointment.doctorId?.name}
                          </h6>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">
                            Appointment type
                          </p>
                          <span className="text-sm text-orange-300">
                            {appointment.type}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">
                            Hospital Name
                          </p>
                          <span className="text-sm">
                            {appointment.hospitalName}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">
                            Appointment Date
                          </p>
                          <span className="text-sm">
                            {moment(appointment.appointmentDate).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">
                            Appointment time
                          </p>
                          <span className="text-sm">
                            {moment(appointment.appointmentTime).format(
                              "hh:mm A"
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">
                            Patient issue
                          </p>
                          <span className="text-sm">
                            {appointment.patient_issue}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <button
                            className="px-3 py-2 border-2 m-2"
                            onClick={() =>
                              handleCancelAppointment(appointment._id)
                            }
                          >
                            <i className="fa-solid fa-business-time text-gray-600"></i>{" "}
                            Cancel
                          </button>
                          <button className="px-3 py-2 rounded-lg m-2 bg-btn-bg text-white">
                            <i className="fa-solid fa-business-time"></i>{" "}
                            Reschedule
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-4 text-center">
                      No appointments found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default Appointment;
