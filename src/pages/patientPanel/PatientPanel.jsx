import { Route, Routes } from "react-router-dom";

import PatientProfile from "./profile/PatientProfile";
import PersonalHealthRecord from "./profile/PersonalHealthRecord";
import Prescriptions from "./profile/Prescriptions";
import TestReport from "./profile/TestReport";
import MedicalHistory from "./profile/MedicalHistory";
import AllAppointment from "./profile/Allappoiment";
import Appointment from "./Appointment";
import AppointmentBooking from "./AppointmentBooking";
import ChatScreen1 from "./ChatScreen1";
import PatientAsidePanel from "../../component/PatientComponents/PatientAsidePanel";
import PatientHeader from "../../component/PatientComponents/PatientHeader";
import PriscriptionAccess from "./PriscriptionAccess";

export default function PatientPanel() {
  return (
    <>
      <PatientAsidePanel />
      <div className="main-content h-screen overflow-y-hidden">
        <PatientHeader />
        <Routes>
          <Route path="" element={<PersonalHealthRecord />} />
          <Route path="profile/*" element={<PatientProfile />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/testReport" element={<TestReport />} />
          <Route path="/medicalHistory" element={<MedicalHistory />} />
          <Route path="/allAppointment" element={<AllAppointment />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointmentBooking" element={<AppointmentBooking />} />

          <Route path="/priscriptionAccess" element={<PriscriptionAccess />} />
          <Route path="/chatScreen" element={<ChatScreen1 />} />
        </Routes>
      </div>
    </>
  );
}
