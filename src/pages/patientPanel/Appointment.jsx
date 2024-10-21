import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import moment from 'moment';

import { FaCalendarAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const { allAppointements, getAppointmetnsForPatient } = useGlobal();
  const { user } = useAuth();

  useEffect(() => {
    getAppointmetnsForPatient(user.id);
  }, [user.id]);

  useEffect(() => {
    filterAppointments();
  }, [activeTab, allAppointements]);

  const filterAppointments = () => {
    let filtered = [];
    const currentDate = moment().startOf('day'); // Start of the current day for accurate comparisons

    if (activeTab === "scheduled") {
      filtered = allAppointements?.filter(appointment =>
        moment(appointment.appointmentTime).isAfter(currentDate)
      );
    } else if (activeTab === "previous") {
      filtered = allAppointements?.filter(appointment =>
        moment(appointment.appointmentTime).isBefore(currentDate)
      );
    } else if (activeTab === "cancel") {
      filtered = allAppointements?.filter(appointment => appointment.status === "canceled");
    } else if (activeTab === "pending") {
      filtered = allAppointements?.filter(appointment => appointment.status === "pending");
    }
    console.log(filtered);
    // Set the filtered appointments
    setFilteredAppointments(filtered);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="bg-white shadow-lg h-auto p-4 rounded-xl">
          <ul className="overflow-x-auto flex border-b border-gray-300">
            {["scheduled", "previous", "cancel", "pending"].map(tab => (
              <li key={tab} className="mr-4">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 font-semibold ${
                    activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                  }`}

                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointment
                </button>
              </li>
            ))}
          </ul>

          {/* Tab content */}
          <div className="tab-content mt-3">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-3">
                <h1 className="text-xl font-semibold mb-2 md:mb-0">My Appointment</h1>

                <div className="flex items-center space-x-3">
                  <div className="relative w-72">
                    <span className="absolute inset-y-0  pl-3 flex items-center text-gray-500">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>

                    <input
                      type="text"
                      className="form-control "
                      style={{ width: "270px" }}
                      value="2 Jan, 2022 - 13 Jan, 2022"
                      readOnly
                    />

                    <span className="absolute inset-y-0 right-5  flex items-center w-6 h-6 bg-red-700 rounded-full my-auto justify-center">
                      <i className="fa-solid fa-xmark text-white"></i>
                    </span>
                  </div>

                  <Link to={"/patient/appointmentBooking"}>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white flex items-center space-x-2 ">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span>Book Appointment</span>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="overflow-y-auto" style={{ height: "550px" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredAppointments?.length > 0 ? (
                    filteredAppointments?.map((appointment, index) => (
                      <div
                        key={index}
                        className="w-full rounded-lg bg-white border border-gray-200 shadow-md h-70"
                      >
                        <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                          <h6 className="text-md font-semibold">{appointment.doctorId.name}</h6>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">Appointment type</p>
                          <span className="text-sm text-orange-300">{appointment.type}</span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">Hospital Name</p>
                          <span className="text-sm">{appointment.hospitalName}</span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">Appointment Date</p>
                          <span className="text-sm">{moment(appointment.appointmentTime).format('DD/MM/YYYY')}</span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">Appointment time</p>
                          <span className="text-sm">{moment(appointment.appointmentTime).format('hh:mm A')}</span>
                        </div>
                        <div className="flex justify-between items-center px-3">
                          <p className="font-light text-gray-600">Patient issue</p>
                          <span className="text-sm">{appointment.patient_issue}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <button className="px-3 py-2 border-2 m-2">
                            <i className="fa-solid fa-business-time text-gray-600"></i> Cancel
                          </button>
                          <button className="px-3 py-2 rounded-lg m-2 bg-btn-bg text-white">
                            <i className="fa-solid fa-business-time"></i> Reschedule
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-4 text-center">No appointments found.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
