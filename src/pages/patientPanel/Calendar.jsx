import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import AppointmentModal from "./AppointmentModal";
import RescheduleModal from "./RescheduleModal";

const localizer = momentLocalizer(moment);

const Calendar = ({ filterData }) => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { createAppointment, updateAppointment, deleteAppointment, allAppointements } = useGlobal();
  const { user } = useAuth();
  console.log("allAppointeme from patient", allAppointements);
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

  const handleSlotSelected = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setIsModalOpen(true);
  };

  const handleEventSelected = (event) => {
    setSelectedEvent(event);
    setIsRescheduleModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  const handleCloseRescheduleModal = () => {
    setIsRescheduleModalOpen(false);
    setSelectedEvent(null);
  };

  const handleBookAppointment = async (appointmentData) => {
    try {
      await createAppointment(user.id, appointmentData);
      setEvents([...events, appointmentData]);
      handleCloseModal();
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const handleRescheduleAppointment = async (updatedAppointment) => {
    console.log(updatedAppointment,"<<<<<<<<<<<<<<<<<<<<<<<<<")
    try {
      await updateAppointment(updatedAppointment._id, updatedAppointment);
      const updatedEvents = events.map(event => 
        event.id === updatedAppointment.id ? { ...event, ...updatedAppointment } : event
      );
      setEvents(updatedEvents);
      handleCloseRescheduleModal();
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await deleteAppointment(appointmentId);
      const updatedEvents = events.filter(event => event.id !== appointmentId);
      setEvents(updatedEvents);
      handleCloseRescheduleModal();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div id="Calendar" className="container mx-auto p-6">
      <BigCalendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day", "agenda"]}
        defaultView="week"
        defaultDate={new Date()}
        selectable
        onSelectSlot={handleSlotSelected}
        onSelectEvent={handleEventSelected}
        className="h-[75vh] bg-white shadow-md rounded-lg p-4"
      />
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookAppointment={handleBookAppointment}
        selectedSlot={selectedSlot}
        filterData={filterData}
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

export default Calendar;