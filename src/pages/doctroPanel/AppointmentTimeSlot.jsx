import React, { useState, useEffect } from "react";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobal } from "../../hooks/useGlobal";
import Calendar from "./Calendar";
const localizer = momentLocalizer(moment);

const AppointmentTimeSlot = () => {
  const [events, setEvents] = useState([
    {
      title: "Skin Treatment",
      start: new Date(2022, 5, 18, 15, 0), // 3:00 PM on June 18th, 2022
      end: new Date(2022, 5, 18, 16, 0), // 4:00 PM
      resource: "Dr. Andrew",
    },
    {
      title: "Hair Treatment",
      start: new Date(2022, 5, 18, 19, 0), // 7:00 PM
      end: new Date(2022, 5, 18, 20, 0), // 8:00 PM
      resource: "Dr. Andrew",
    },
    {
      title: "Brain Tumor",
      start: new Date(2022, 5, 23, 18, 0), // 6:00 PM on June 23rd, 2022
      end: new Date(2022, 5, 23, 19, 0), // 7:00 PM
      resource: "Dr. Andrew",
    },
  ]);
  const { allAppointements, getAllAppointments, getAppointmetnsForDoctor } = useGlobal();
  useEffect(() => {
    // getAllAppointments();
    //swaped with getAppointmetnsForPatient
    getAppointmetnsForDoctor('6707ec1893d5090ffcdb86c6');
  },[]);
  useEffect(() => {
    // Map appointments to the required format for react-big-calendar
    const mappedEvents = allAppointements?.map((appointment) => ({
      title: `${appointment.patientId.firstName} with Dr. ${appointment.doctorId.name}`,
      start: new Date(appointment.date),
      end: new Date(appointment.appointmentTime),
      allDay: false,
      id: appointment._id,
      appointment: appointment // Store the full appointment data
    }));
    setEvents(mappedEvents);
  }, [allAppointements]);
  const handleSelectEvent = (event) => {
    console.log(`Selected event: ${event.title} at ${event.start}`);
  };

  return (
    <div className="AppointmentTimeSlot p-6 bg-white rounded-lg shadow-md m-6">
      <h3 className="text-lg font-semibold mb-4">Appointment Time Slot doctor</h3>
      <Calendar/>
    </div>
  );
};

export default AppointmentTimeSlot;
