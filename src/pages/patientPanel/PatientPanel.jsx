import React from "react";
import PatientProfile from "./profile/PatientProfile";
import Header from "../../component/Header";
import DoctorAsidePanel from "../../component/DoctorComponent/DoctorAsidePanel";
import { Route, Routes } from "react-router-dom";
import PersonalHealthRecord from "./profile/PersonalHealthRecord";

export default function PatientPanel() {
  return (
    <>
      <Header />
      <DoctorAsidePanel />

      <Routes>
        <Route path="" element={<PersonalHealthRecord />} />
        <Route path="profile/*" element={<PatientProfile />} />
        {/* <Route path="edit" element={<DoctorProfileEdit />} /> */}
        {/* <Route path="" element={<AppointmentManagement />} /> */}
        {/* <Route path="patientRecordAccesst" element={<PatientRecordAccesst />} /> */}
        {/* <Route path="createPrescriptionTools" element={<CreatePrescriptionTools />} /> */}
        {/* <Route path="managePrescriptionTools" element={<ManagePrescriptionTools />} /> */}
        {/* <Route path="teleconsultationModule" element={<TeleconsultationModule />} /> */}
        {/* <Route path="chatScreen" element={<ChatScreen />} /> */}
      </Routes>
    </>
  );
}
