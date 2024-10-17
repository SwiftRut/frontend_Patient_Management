import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import AppointmentModal from "./AppointmentModal";

const localizer = momentLocalizer(moment);

const Calendar = ({ filterData }) => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const { createAppointment, allAppointements } = useGlobal();
  const { user } = useAuth();

  useEffect(() => {
    // Map appointments to the required format for react-big-calendar
    const mappedEvents = allAppointements.map((appointment) => ({
      title: `${appointment.patientId.firstName} with Dr. ${appointment.doctorId.name}`,
      start: new Date(appointment.date),
      end: new Date(appointment.appointmentTime),
      allDay: false, // Customize as needed
      id: appointment._id
    }));
    setEvents(mappedEvents);
  }, [allAppointements]);

  const handleSlotSelected = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
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
        className="h-[75vh] bg-white shadow-md rounded-lg p-4"
      />

      <AppointmentModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookAppointment={handleBookAppointment}
        selectedSlot={selectedSlot}
        filterData={filterData}
      />
    </div>
  );
};

export default Calendar;
  