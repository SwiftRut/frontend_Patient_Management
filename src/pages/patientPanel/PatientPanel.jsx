import React from "react";
import PatientProfile from "./profile/PatientProfile";
import Header from "../../component/Header";
import DoctorAsidePanel from "../../component/DoctorComponent/DoctorAsidePanel";
import { Route, Routes } from "react-router-dom";
import PersonalHealthRecord from "./profile/PersonalHealthRecord";
import Prescriptions from "./profile/Prescriptions";
import TestReport from "./profile/TestReport";
import MedicalHistory from "./profile/MedicalHistory";
import AllAppointment from "./profile/Allappoiment";
import Appointment from "./Appointment";
import AppointmentBooking from "./AppointmentBooking";
import AppointmentTimeSlot1 from "./AppointmentTimeSlot1";
import ChatScreen1 from "./ChatScreen1";

export default function PatientPanel() {
  return (
    <>
      <Header />
      <DoctorAsidePanel />

      <Routes>
        <Route path="" element={<PersonalHealthRecord />} />
        <Route path="profile/*" element={<PatientProfile />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/testReport" element={<TestReport />} />
        <Route path="/medicalHistory" element={<MedicalHistory />} />
        <Route path="/allAppointment" element={<AllAppointment />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentBooking" element={<AppointmentBooking />} />
        <Route path="/chatScreen" element={<ChatScreen1 />} />
      </Routes>
    </>
  );
}
