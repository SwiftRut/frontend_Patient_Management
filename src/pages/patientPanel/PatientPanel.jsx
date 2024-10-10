import React from "react";
import PatientProfile from "./profile/PatientProfile";
import { Route, Routes } from "react-router-dom";
import PersonalHealthRecord from "./profile/PersonalHealthRecord";
import PatientHeader from "../../component/DoctorComponent/PatientHeader";
import PatientAsidePanel from "../../component/DoctorComponent/PatientAsidePanel";

export default function PatientPanel() {
  return (
    <>
      <PatientHeader />
      <PatientAsidePanel />

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
