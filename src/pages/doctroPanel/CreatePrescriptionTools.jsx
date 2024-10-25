import { useEffect } from "react";
import CreatePrescription from "../../component/PrescriptionTools/CreatePrescription";
import { useGlobal } from "../../hooks/useGlobal";

const CreatePrescriptionTools = () => {
  const { getAllTodayAppointments, allAppointments } = useGlobal();

  useEffect(() => {
    getAllTodayAppointments();
  }, []);

  // Format appointment time
  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Transform appointment data to match your component props
  const transformedAppointments = allAppointments?.map(appointment => ({
    id: appointment._id,
    name: `${appointment.patientId.firstName} ${appointment.patientId.lastName}`,
    age: appointment.patientId.age,
    gender: appointment.patientId.gender,
    appointmentType: appointment.type,
    time: formatTime(appointment.appointmentTime),
    isNew: !appointment.patientId.appointmentId || appointment.patientId.appointmentId.length <= 1,
    // Additional data that might be needed
    patientId: appointment.patientId?._id,
    doctorId: appointment.doctorId?._id,
    status: appointment.status
  })) || [];

  return (
    <div className="cp-tool p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Today Appointment</h1>
      <div className="cp-add grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {transformedAppointments.map((appointment) => (
          <CreatePrescription
            key={appointment.id}
            id={appointment.id}
            name={appointment.name}
            age={appointment.age}
            gender={appointment.gender}
            appointmentType={appointment.appointmentType}
            time={appointment.time}
            isNew={appointment.isNew}
            status={appointment.status} // Additional prop if needed in the card
          />
        ))}
      </div>
    </div>
  );
};

export default CreatePrescriptionTools;