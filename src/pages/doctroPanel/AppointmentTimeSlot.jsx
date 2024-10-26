import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import RescheduleModal from "./RescheduleModal";

const localizer = momentLocalizer(moment);

const AppointmentTimeSlot = () => {
  const [events, setEvents] = useState([]);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { allAppointments, getAppointmetnsForDoctor, updateAppointment, deleteAppointment } = useGlobal();
  const { user } = useAuth();

  useEffect(() => {
    // Fetch all appointments for the doctor
    getAppointmetnsForDoctor(user.id);
  }, []);

  useEffect(() => {
    // Map appointments to the required format for react-big-calendar
    const mappedEvents = allAppointments?.map((appointment) => ({
      title: `${appointment.patientId.firstName} with Dr. ${appointment.doctorId.name}`,
      start: new Date(appointment.date),
      end: new Date(appointment.appointmentTime),
      allDay: false,
      id: appointment._id,
      appointment: appointment, // Store the full appointment data
    }));
    setEvents(mappedEvents);
  }, [allAppointments]);

  // Handle event click to reschedule
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsRescheduleModalOpen(true);
  };

  // Handle closing of the reschedule modal
  const handleCloseRescheduleModal = () => {
    setIsRescheduleModalOpen(false);
    setSelectedEvent(null);
  };

  // Handle the rescheduling of an appointment
  const handleRescheduleAppointment = async (updatedAppointment) => {
    try {
      await updateAppointment(updatedAppointment._id, updatedAppointment);
      // Update the events state with the rescheduled data
      const updatedEvents = events.map((event) =>
        event.id === updatedAppointment._id
          ? {
              ...event,
              start: new Date(updatedAppointment.date),
              end: new Date(updatedAppointment.appointmentTime),
            }
          : event
      );
      setEvents(updatedEvents);
      handleCloseRescheduleModal();
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
    }
  };

  // Handle the deletion of an appointment
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await deleteAppointment(appointmentId);
      // Remove the event from the events state
      const updatedEvents = events.filter((event) => event.id !== appointmentId);
      setEvents(updatedEvents);
      handleCloseRescheduleModal();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className="AppointmentTimeSlot p-6 bg-white rounded-lg shadow-md m-6">
      <h3 className="text-lg font-semibold mb-4">Appointment Time Slot (Doctor)</h3>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={["week", "day"]}
        defaultView="week"
        popup
        eventPropGetter={(event) => {
          const backgroundColor = event.resource === "Dr. Andrew" ? "#3174ad" : "#3a87ad";
          return { style: { backgroundColor } };
        }}
        onSelectEvent={handleSelectEvent}
      />
      <RescheduleModal
        isOpen={isRescheduleModalOpen}
        onClose={handleCloseRescheduleModal}
        onReschedule={handleRescheduleAppointment}
        onDelete={handleDeleteAppointment}
        selectedEvent={selectedEvent}
      />
    </div>
  );
};

export default AppointmentTimeSlot;
