import "../patientManagement/patientDetails.css";
import { MdCancel } from "react-icons/md";
import PropTypes from "prop-types";

export default function PatientDetails({ patient, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
        <div className="patientdetails-section">
          <div className="row">
            <div className="details">
              <div className="top flex">
                <h3>Patient Details</h3>
                <div className="icon" onClick={closeModal}>
                  <MdCancel />
                </div>
              </div>
              <div className="data">
                <ul>
                  <li className="flex">
                    <h3>Patient Name</h3>
                    <p>{`${patient.firstName} ${patient.lastName}`}</p>
                  </li>
                  <li className="flex">
                    <h3>Email</h3>
                    <p>{patient.email}</p>
                  </li>
                  <li className="flex">
                    <h3>Phone Number</h3>
                    <p>{patient.phone}</p>
                  </li>
                  <li className="flex">
                    <h3>Age</h3>
                    <p>{patient.age}</p>
                  </li>
                  <li className="flex">
                    <h3>Gender</h3>
                    <p>{patient.gender}</p>
                  </li>
                  <li className="flex">
                    <h3>Blood Group</h3>
                    <p>{patient.bloodGroup}</p>
                  </li>
                  <li className="flex">
                    <h3>Height (cm)</h3>
                    <p>{patient.height}</p>
                  </li>
                  <li className="flex">
                    <h3>Weight (kg)</h3>
                    <p>{patient.weight}</p>
                  </li>
                  <li className="flex">
                    <h3>Date of Birth</h3>
                    <p>{new Date(patient.dob).toLocaleDateString()}</p>
                  </li>
                  <li>
                    <h3 style={{ paddingBottom: "10px" }}>Address</h3>
                    <p>{`${patient.address}, ${patient.city}, ${patient.state}, ${patient.country}`}</p>
                  </li>
                  {patient.appointment && (
                    <>
                      <li className="flex">
                        <h3>Appointment Type</h3>
                        <p>{patient.appointment.type}</p>
                      </li>
                      <li className="flex">
                        <h3>Appointment Date</h3>
                        <p>{new Date(patient.appointment.date).toLocaleDateString()}</p>
                      </li>
                      <li className="flex">
                        <h3>Appointment Time</h3>
                        <p>{new Date(patient.appointment.appointmentTime).toLocaleTimeString()}</p>
                      </li>
                      <li className="flex">
                        <h3>Doctor Name</h3>
                        <p>{patient.appointment.doctorId.name}</p>
                      </li>
                      <li className="flex">
                        <h3>Patient Issue</h3>
                        <p>{patient.appointment.patient_issue}</p>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PatientDetails.propTypes = {
  patient: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    bloodGroup: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    dob: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    appointment: PropTypes.shape({
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      appointmentTime: PropTypes.string.isRequired,
      patient_issue: PropTypes.string.isRequired,
      doctorId: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
