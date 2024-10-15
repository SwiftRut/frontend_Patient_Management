import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(moment()); // Set as moment() instead of null
  const [end, setEnd] = useState(moment());     // Set as moment() instead of null
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
    setStart(moment(slotInfo.start)); // Ensure start is a moment object
    setEnd(moment(slotInfo.end));     // Ensure end is a moment object
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
    const appointment = { title, start, end, desc };
    setEvents([...events, appointment]);
    handleClose();
  };

  const updateEvent = () => {
    const updatedEvents = events.map((event) =>
      event === clickedEvent ? { ...event, title, desc, start, end } : event
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
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={deleteEvent} color="secondary">
        Delete
      </Button>
      <Button onClick={updateEvent} color="primary">
        Confirm Edit
      </Button>
    </>
  );

  const appointmentActions = (
    <>
      <Button onClick={handleClose} color="secondary">
        Cancel
      </Button>
      <Button onClick={setNewAppointment} color="primary">
        Submit
      </Button>
    </>
  );

  return (
    <div id="Calendar">
      <BigCalendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day", "agenda"]}
        timeslots={2}
        defaultView="month"
        defaultDate={new Date()}
        selectable={true}
        onSelectEvent={handleEventSelected}
        onSelectSlot={handleSlotSelected}
      />

      <Dialog open={openSlot} onClose={handleClose}>
        <DialogTitle>
          {`Book an appointment on ${moment(start).format("MMMM Do YYYY")}`}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            onChange={(e) => setDesc(e.target.value)}
            fullWidth
            margin="normal"
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Start Time"
              value={start}
              onChange={(newValue) => newValue && setStart(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
            <TimePicker
              label="End Time"
              value={end}
              onChange={(newValue) => newValue && setEnd(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>{appointmentActions}</DialogActions>
      </Dialog>

      <Dialog open={openEvent} onClose={handleClose}>
        <DialogTitle>
          {`View/Edit Appointment of ${moment(start).format("MMMM Do YYYY")}`}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            fullWidth
            multiline
            margin="normal"
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Start Time"
              value={start}
              onChange={(newValue) => newValue && setStart(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
            <TimePicker
              label="End Time"
              value={end}
              onChange={(newValue) => newValue && setEnd(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>{eventActions}</DialogActions>
      </Dialog>
    </div>
  );
};

export default Calendar;
