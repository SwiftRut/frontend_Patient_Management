import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useGlobal } from "../../hooks/useGlobal";
import { useAuth } from "../../hooks/useAuth";
import RescheduleModal from "./RescheduleModal";
import AppointmentModal from "./AppointmentModal";
import apiService from "../../services/api";

const localizer = momentLocalizer(moment);

const AppointmentTimeSlot = () => {
  const [events, setEvents] = useState([]);
  const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const { allAppointments, getAppointmetnsForDoctor, updateAppointment, deleteAppointment, createAppointment } = useGlobal();
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

  useEffect(() => {
    const fetchUnavailableTimes = async () => {
      try {
        const response = await apiService.GetUnavailableTimes(user.id);
        setUnavailableTimes(response.data);
      } catch (error) {
        console.error("Error fetching unavailable times:", error);
      }
    };

    fetchUnavailableTimes();
  }, [user.id]);

  // Handle event click to reschedule
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsRescheduleModalOpen(true);
  };

  // Handle slot click to create a new appointment
  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setIsAppointmentModalOpen(true);
  };

  // Handle closing of the reschedule modal
  const handleCloseRescheduleModal = () => {
    setIsRescheduleModalOpen(false);
    setSelectedEvent(null);
  };

  // Handle closing of the appointment modal
  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedSlot(null);
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

  // Handle the creation of a new appointment
  const handleCreateAppointment = async (appointmentData) => {
    try {
      await createAppointment(appointmentData);
      console.log(appointmentData);
      // Add the new appointment to the events state
      const newEvent = {
        title: `${appointmentData.patientId.firstName} with Dr. ${appointmentData.doctorId.name}`,
        start: new Date(appointmentData.date),
        end: new Date(appointmentData.appointmentTime),
        allDay: false,
        id: appointmentData._id,
        appointment: appointmentData,
      };
      setEvents([...events, newEvent]);
      handleCloseAppointmentModal();
    } catch (error) {
      console.error("Error creating appointment:", error);
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
        selectable
        eventPropGetter={(event) => {
          const backgroundColor = event.resource === "Dr. Andrew" ? "#3174ad" : "#3a87ad";
          return { style: { backgroundColor } };
        }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={(slotInfo) => {
          const isUnavailable = unavailableTimes.some((unavailable) => {
            const start = new Date(unavailable.date + ' ' + unavailable.timeRange.start);
            const end = new Date(unavailable.date + ' ' + unavailable.timeRange.end);
            return slotInfo.start >= start && slotInfo.end <= end;
          });

          if (!isUnavailable) {
            handleSelectSlot(slotInfo);
          } else {
            alert("This time slot is unavailable.");
          }
        }}
      />
      <RescheduleModal
        isOpen={isRescheduleModalOpen}
        onClose={handleCloseRescheduleModal}
        onReschedule={handleRescheduleAppointment}
        onDelete={handleDeleteAppointment}
        selectedEvent={selectedEvent}
      />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
        onBookAppointment={handleCreateAppointment}
        selectedSlot={selectedSlot}
      />
    </div>
  );
};

export default AppointmentTimeSlot;