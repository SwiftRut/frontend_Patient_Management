import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EventIcon from '@mui/icons-material/Event';

// PatientCard component
const TeleConsultationCard = ({ patient }) => {
  return (
    <div className="p-0 bg-white rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{patient.name}</h3>
        <p>
          <strong>Patient Issue: </strong>
          {patient.issue}
        </p>
        <p>
          <strong>Disease Name: </strong>
          {patient.disease}
        </p>
        <p>
          <strong>Appointment Date: </strong>
          {patient.date}
        </p>
        <p>
          <strong>Appointment Time: </strong>
          {patient.time}
        </p>
      </div>
      <div className="p-4 flex justify-between gap-4">
        <Button
          variant="contained"
          color="success"
          startIcon={<CallIcon />}
          className="join hover:bg-green-700"
        >
          Join Call
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EventIcon />}
          className="reschedule hover:bg-blue-700"
        >
          Reschedule
        </Button>
      </div>
    </div>
  );
};

export default TeleConsultationCard;
