import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./Calendar.css"; // Import react-big-calendar styles

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(moment());
  const [end, setEnd] = useState(moment());
  const [desc, setDesc] = useState("");
  const [openSlot, setOpenSlot] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({});

  const handleClose = () => {
    setOpenEvent(false);
    setOpenSlot(false);
  };

  const handleSlotSelected = (slotInfo) => {
    setTitle("");
    setDesc("");
    const startTime = moment(slotInfo.start);
    setStart(startTime);
    setEnd(startTime.clone().add(1, "hours")); // Set end time to one hour after start time
    setOpenSlot(true);
  };

  const handleEventSelected = (event) => {
    setOpenEvent(true);
    setClickedEvent(event);
    setStart(moment(event.start));
    setEnd(moment(event.end));
    setTitle(event.title);
    setDesc(event.desc);
  };

  const setNewAppointment = () => {
    const appointment = {
      title,
      start: start.toDate(),
      end: end.toDate(),
      desc
    };
    setEvents([...events, appointment]);
    handleClose();
  };

  const updateEvent = () => {
    const updatedEvents = events.map((event) =>
      event === clickedEvent 
        ? { ...event, title, desc, start: start.toDate(), end: end.toDate() } 
        : event
    );
    setEvents(updatedEvents);
    handleClose();
  };

  const deleteEvent = () => {
    const updatedEvents = events.filter(
      (event) => event.start !== clickedEvent.start
    );
    setEvents(updatedEvents);
    handleClose();
  };

  const eventActions = (
    <>
      <Button onClick={handleClose} className="text-gray-600 border border-gray-300 rounded px-4 py-2 mr-2">Cancel</Button>
      <Button onClick={deleteEvent} className="bg-red-500 text-white rounded px-4 py-2 mr-2">Delete</Button>
      <Button onClick={updateEvent} className="bg-blue-600 text-white rounded px-4 py-2">Save Changes</Button>
    </>
  );

  const appointmentActions = (
    <>
      <Button onClick={handleClose} className="text-gray-600 border border-gray-300 rounded px-4 py-2 mr-2">Cancel</Button>
      <Button onClick={setNewAppointment} className="bg-blue-600 text-white rounded px-4 py-2">Add Appointment</Button>
    </>
  );

  return (
    <div id="Calendar" className="container mx-auto p-6">
      <BigCalendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day", "agenda"]}
        defaultView="week"
        defaultDate={new Date()}
        selectable
        onSelectEvent={handleEventSelected}
        onSelectSlot={handleSlotSelected}
        className="h-[75vh] bg-white shadow-md rounded-lg p-4"
      />

      <Dialog open={openSlot} onClose={handleClose} className="dialog-box">
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {`Book an appointment on ${start.format("MMMM Do YYYY")}`}
          </h2>
          <div className="space-y-4">
            <TextField
              label="Title"
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
              InputProps={{
                className: "border border-gray-300 rounded-md p-2",
              }}
            />
            <TextField
              label="Description"
              onChange={(e) => setDesc(e.target.value)}
              fullWidth
              multiline
              rows={3}
              InputProps={{
                className: "border border-gray-300 rounded-md p-2",
              }}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                label="Start Time"
                value={start}
                onChange={(newValue) => newValue && setStart(newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth InputProps={{ className: "border border-gray-300 rounded-md p-2" }} />
                )}
              />
              <TimePicker
                label="End Time"
                value={end}
                onChange={(newValue) => newValue && setEnd(newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth InputProps={{ className: "border border-gray-300 rounded-md p-2" }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            {appointmentActions}
          </div>
        </div>
      </Dialog>

      <Dialog open={openEvent} onClose={handleClose} className="dialog-box">
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {`View/Edit Appointment of ${start.format("MMMM Do YYYY")}`}
          </h2>
          <div className="space-y-4">
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              InputProps={{
                className: "border border-gray-300 rounded-md p-2",
              }}
            />
            <TextField
              label="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              fullWidth
              multiline
              rows={3}
              InputProps={{
                className: "border border-gray-300 rounded-md p-2",
              }}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                label="Start Time"
                value={start}
                onChange={(newValue) => newValue && setStart(newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth InputProps={{ className: "border border-gray-300 rounded-md p-2" }} />
                )}
              />
              <TimePicker
                label="End Time"
                value={end}
                onChange={(newValue) => newValue && setEnd(newValue)}
                renderInput={(params) => (
                  <TextField {...params} fullWidth InputProps={{ className: "border border-gray-300 rounded-md p-2" }} />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            {eventActions}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Calendar;
