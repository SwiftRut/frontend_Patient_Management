import "../patientManagement/patientDetails.css";
import { MdCancel } from "react-icons/md";
import PropTypes from "prop-types"; // Import PropTypes

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
                    <h3>Appointment Type</h3>
                    <p className="online">{patient.type}</p>
                  </li>
                  <li className="flex">
                    <h3>Appointment Date</h3>
                    <p>{patient.date}</p>
                  </li>
                  <li className="flex">
                    <h3>Appointment Time</h3>
                    <p>{patient.time}</p>
                  </li>
                  <li className="flex">
                    <h3>Patient Name</h3>
                    <p>{patient.name}</p>
                  </li>
                  <li className="flex">
                    <h3>Patient Phone Number</h3>
                    <p>{patient.phone}</p>
                  </li>
                  <li className="flex">
                    <h3>Patient Age</h3>
                    <p>{patient.age}</p>
                  </li>
                  <li className="flex">
                    <h3>Patient Gender</h3>
                    <p>{patient.gender}</p>
                  </li>
                  <li className="flex">
                    <h3>Patient Issue</h3>
                    <p>{patient.issue}</p>
                  </li>
                  <li className="flex">
                    <h3>Disease Name</h3>
                    <p>{patient.disease}</p>
                  </li>
                  <li className="flex">
                    <h3>Doctor Name</h3>
                    <p>{patient.doctor}</p>
                  </li>
                  <li>
                    <h3 style={{ paddingBottom: "10px" }}>Patient Address</h3>
                    <p>{patient.address}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types
PatientDetails.propTypes = {
  patient: PropTypes.shape({
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    issue: PropTypes.string.isRequired,
    disease: PropTypes.string.isRequired,
    doctor: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
