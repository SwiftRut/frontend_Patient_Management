import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import { LuCalendarX2 } from "react-icons/lu";
import { LuCalendarClock } from "react-icons/lu";
import { IoEyeSharp } from "react-icons/io5";
import { Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";
import { CalendarToday, Search, DateRange } from "@mui/icons-material";
import { BiSolidCalendar } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import CustomDateModal from "../../component/modals/CustomDateModal";
import CancelAppointmentModal from "../../component/modals/CancelAppointmentModal";
import DoctorDetails from "./DoctorDetails";
import Onsite from "../doctorManagement/Onsite";
import toast from "react-hot-toast";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [dateRange, setDateRange] = useState([null, null]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [openCancelAppointmentModal, setOpenCancelAppointmentModal] =
    useState(false);

  const {
    allAppointments,
    getAppointmetnsForPatient,
    cancelAppointment,
    setAllAppointments,
    deleteAppointment,
  } = useGlobal();
  const { user } = useAuth();

  useEffect(() => {
    getAppointmetnsForPatient(user.id);
  }, [user.id,searchTerm,dateRange]);

  useEffect(() => {
    filterAppointments();
  }, [activeTab, allAppointments, dateRange, searchTerm]);

  const clearDateRange = (e) => {
    e.stopPropagation();
    setDateRange([null, null]);
  };
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await deleteAppointment(appointmentId);
      await getAppointmetnsForPatient(user.id); 
      if (response.status === 200) {
        const updatedAppointments = allAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status: "canceled" }
            : appointment
        );
        getAppointmetnsForPatient(user.id);
        setAllAppointments(updatedAppointments);
        setActiveTab("cancel");
      }
      toast.success("Appointment deleted successfully.");
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const filterAppointments = () => {
    const currentDate = moment();
    const [startDate, endDate] = dateRange;

    const filtered = allAppointments?.filter((appointment) => {
      const appointmentDate = moment(appointment.date);
      const lowerSearchTerm = searchTerm.toLowerCase();

      const isWithinDateRange =
        !startDate ||
        !endDate ||
        (appointmentDate.isSameOrAfter(moment(startDate)) &&
          appointmentDate.isSameOrBefore(moment(endDate)));

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
      console.log("response", response);

      if (response.status === 200) {
        console.log("response", response);
        const updatedAppointments = allAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status: "canceled" }
            : appointment
        );
        getAppointmetnsForPatient(user.id);
        setAllAppointments(updatedAppointments);
        setActiveTab("cancel");
      }
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModel(true);
  };

  return (
    <div>
      <div className="mt-3 mx-3">
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
                  <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-3">
                    {/* Search input */}
                    <div className="border px-3 rounded-md flex items-center">
                      <IoSearchSharp className="me-2 text-gray-500" />
                      <input
                        className="search outline-none"
                        placeholder="Search Appointment"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    {/* Date Range Selector */}
                    <div
                      className="flex items-center border rounded-md p-2 bg-white cursor-pointer"
                      onClick={() => setOpenCustomDateModal(true)}
                    >
                      <span className="pl-3 text-gray-500 me-1">
                        <FaCalendarAlt />
                      </span>
                      <input
                        type="text"
                        className="flex-1 focus:outline-none text-sm min-w-[189px] max-w-[300px] sm:min-w-[180px]"
                        value={
                          dateRange[0] && dateRange[1]
                            ? `${moment(dateRange[0]).format(
                                "MM/DD/YYYY"
                              )} - ${moment(dateRange[1]).format("MM/DD/YYYY")}`
                            : "Select Date Range"
                        }
                        readOnly
                      />
                      {dateRange[0] && dateRange[1] && (
                        <div
                          className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center cursor-pointer text-white"
                          onClick={(e) => clearDateRange(e)}
                        >
                          <IoCloseSharp />
                        </div>
                      )}
                    </div>

                    {/* Book Appointment Button */}
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
                        <div className="flex justify-between items-center py-2 bg-gray-100 px-3  flex items-center justify-between">
                          <h6 className="text-lg font-semibold">
                            Dr. {appointment.doctorId?.name}
                          </h6>
                          <div
                            onClick={() =>
                              handleViewDetails(appointment.doctorId)
                            }
                            className="bg-white rounded-lg border text-[#A7A7A7] hover:text-[#0EABEB] transition duration:300 p-2"
                          >
                            <IoEyeSharp />
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-3 pb-3">
                          <p className="font-normal text-gray-600">
                            Appointment type
                          </p>
                          <span className="text-sm text-orange-300">
                            {appointment.type}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3 pb-3">
                          <p className="font-normal text-gray-600">
                            Hospital Name
                          </p>
                          <span className="text-sm">
                            {appointment?.doctorId?.hospitalId?.address}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3 pb-3">
                          <p className="font-normal text-gray-600">
                            Appointment Date
                          </p>
                          <span className="text-sm">
                            {moment(appointment.appointmentDate).format(
                              "DD/MM/YYYY"
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3 pb-3">
                          <p className="font-normal text-gray-600">
                            Appointment time
                          </p>
                          <span className="text-sm">
                            {moment(appointment.appointmentTime).format(
                              "hh:mm A"
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between items-center px-3 pb-3">
                          <p className="font-normal text-gray-600">
                            Patient issue
                          </p>
                          <span className="text-sm">
                            {appointment.patient_issue}
                          </span>
                        </div>
                        <div>
                          {activeTab == "scheduled" ? (
                            <div className="flex justify-between items-center">
                              <button
                                className="px-3 py-2 border-2 m-2 w-[45%] rounded-lg flex items-center justify-center font-semibold text-[#4F4F4F]
"
                                onClick={() =>
                                  handleCancelAppointment(appointment._id)
                                }
                              >
                                <LuCalendarX2 className="me-2" />
                                Cancel
                              </button>
                              <button className="px-3 py-2 rounded-lg m-2 bg-[#F6F8FB] hover:bg-[#0EABEB] text-[#4F4F4F]  hover:text-[#FFFFFF] w-[45%] flex items-center justify-center transition  duration-200 font-semibold">
                                <LuCalendarClock className="me-2" />
                                Reschedule
                              </button>
                            </div>
                          ) : (
                            ""
                          )}

                          {activeTab == "cancel" ? (
                            <div className="flex justify-end  items-center">
                              <button
                                className="px-3 py-2 m-2 bg-red-500 text-white rounded-md w-full"
                                onClick={() =>
                                  handleDeleteAppointment(appointment._id)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
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

      {/* Modal for Onsite component */}
      {openModel && (
        <div className="onsite-modal">
          <div className="onsite-modal-content">
            <div className="onsite-modal-header">
              <h3>Doctor Details</h3>
              <button
                className="close-button"
                onClick={() => setOpenModel(false)}
              >
                &times;
              </button>
            </div>
            <Onsite
              selectedDoctor={selectedDoctor}
              setOpenModel={setOpenModel}
            />
          </div>
          <div
            className="onsite-modal-overlay"
            onClick={() => setOpenModel(false)}
          ></div>
        </div>
      )}

      <CustomDateModal
        open={openCustomDateModal}
        onClose={() => setOpenCustomDateModal(false)}
        onApply={(newRange) => {
          setDateRange(newRange);
          setOpenCustomDateModal(false);
        }}
      />

      <CancelAppointmentModal
        open={openCancelAppointmentModal}
        onClose={() => setOpenCancelAppointmentModal(false)}
      />
    </div>
  );
};

export default Appointment;
