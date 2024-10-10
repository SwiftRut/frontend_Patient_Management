import DoctorProfile from "./profile/DoctorProfile.jsx";
import { Route, Routes } from "react-router-dom";
import "../doctroPanel/profile/doctorProfile.css";
import DoctorProfileEdit from "./profile/DoctorProfileEdit.jsx";
import AppointmentManagement from "./AppointmentManagement.jsx";
import PatientRecordAccesst from "./PatientRecordAccesst.jsx";
import CreatePrescriptionTools from "./CreatePrescriptionTools.jsx";
import ManagePrescriptionTools from "./ManagePrescriptionTools.jsx";
import TeleconsultationModule from "./TeleconsultationModule.jsx";
import ChatScreen from "./ChatScreen.jsx";
import AppointmentTimeSlot from "./AppointmentTimeSlot.jsx";
import PatientDetail from "./PatientDetail.jsx";
import PrescriptionView from "./PrescriptionView.jsx";
import DoctorHeader from "../../component/doctorComponents/DoctorHeader.jsx";
import DoctorAsidePanel from "../../component/doctorComponents/DoctorAsidePanel.jsx";

export default function DoctorPanel() {
  return (
    <>
      <DoctorHeader />
      <DoctorAsidePanel />

      <Routes>
        <Route path="profile/*" element={<DoctorProfile />} />
        <Route path="edit" element={<DoctorProfileEdit />} />
        <Route path="" element={<AppointmentManagement />} />
        <Route path="patientRecordAccesst" element={<PatientRecordAccesst />} />
        <Route path="createPrescriptionTools" element={<CreatePrescriptionTools />} />
        <Route path="managePrescriptionTools" element={<ManagePrescriptionTools />} />
        <Route path="teleconsultationModule" element={<TeleconsultationModule />} />
        <Route path="chatScreen" element={<ChatScreen />} />
        <Route path="appointmentTimeSlot" element={<AppointmentTimeSlot />} />
        <Route path="patientDetail/:id" element={<PatientDetail />} />
        <Route path="prescriptionView/:id" element={<PrescriptionView />} />
      </Routes>
    </>
  );
}
