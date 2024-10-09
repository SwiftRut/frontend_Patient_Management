import DoctorAsidePanel from "../../component/DoctorComponent/DoctorAsidePanel";
import Header from "../../component/Header";
import DoctorProfile from "./profile/DoctorProfile";
import { Route, Routes } from "react-router-dom";
import '../doctroPanel/profile/doctorProfile.css'
import DoctorProfileEdit from "./profile/DoctorProfileEdit";
import AppointmentManagement from "./AppointmentManagement";
import PatientRecordAccesst from "./PatientRecordAccesst";
import CreatePrescriptionTools from "./CreatePrescriptionTools";
import ManagePrescriptionTools from "./ManagePrescriptionTools";
import TeleconsultationModule from "./TeleconsultationModule";
import ChatScreen from "./ChatScreen";

export default function DoctorPanel() {
  return (
    <>
      <Header />
      <DoctorAsidePanel />

      <Routes>
        <Route path="profile/*" element={<DoctorProfile />} />
        <Route path="edit" element={<DoctorProfileEdit />} />
        <Route path="appointmentManagement" element={<AppointmentManagement />} />
        <Route path="patientRecordAccesst" element={<PatientRecordAccesst />} />
        <Route path="createPrescriptionTools" element={<CreatePrescriptionTools />} />
        <Route path="managePrescriptionTools" element={<ManagePrescriptionTools />} />
        <Route path="teleconsultationModule" element={<TeleconsultationModule />} />
        <Route path="chatScreen" element={<ChatScreen />} />
      </Routes>
    </>
  );
}
