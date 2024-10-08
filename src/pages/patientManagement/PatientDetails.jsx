import "../patientManagement/patientDetails.css";
import { MdCancel } from "react-icons/md";

export default function PatientDetails() {
  return (
    <>
      <div className="patientdetails-section">
        <div className="row">
          <div className="details">
            <div className="top flex">
              <h3>Patient Details</h3>
              <div className="icon">
                <MdCancel />
              </div>
            </div>
            <div className="data">
              <ul>
                <li className="flex">
                  <h3>Appointment Type</h3>
                  <p className="online">Online</p>
                </li>
                <li className="flex">
                  <h3>Appointment Date</h3>
                  <p>2 Jan, 2022</p>
                </li>
                <li className="flex">
                  <h3>Appointment Time</h3>
                  <p>4:30 PM</p>
                </li>
                <li className="flex">
                  <h3>Patient Name</h3>
                  <p>Marcus Phillips</p>
                </li>
                <li className="flex">
                  <h3>Patient Phone Number</h3>
                  <p>92584 58475</p>
                </li>
                <li className="flex">
                  <h3>Patient Age</h3>
                  <p>27 Years</p>
                </li>
                <li className="flex">
                  <h3>Patient Gender</h3>
                  <p>Male</p>
                </li>
                <li className="flex">
                  <h3>Patient Issue</h3>
                  <p>Stomach ache</p>
                </li>
                <li className="flex">
                  <h3>Disease Name</h3>
                  <p>Viral Infection</p>
                </li>
                <li className="flex">
                  <h3>Doctor Name</h3>
                  <p>Dr. Mathew Best</p>
                </li>
                <li >
                  <h3 style={{paddingBottom:"10px"}}>Patient Address</h3>
                  <p>
                    B-408 Swastik society, Shivaji marg mota varacha rajkot.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
