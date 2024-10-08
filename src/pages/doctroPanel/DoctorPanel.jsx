import DoctorAsidePanel from "../../component/DoctorComponent/DoctorAsidePanel";
import Header from "../../component/Header";
import DoctorProfile from "./profile/DoctorProfile";
import { Route, Routes } from "react-router-dom";
import '../doctroPanel/profile/doctorProfile.css'
import DoctorProfileEdit from "./profile/DoctorProfileEdit";

export default function DoctorPanel() {
  return (
    <>
      <Header />
      <DoctorAsidePanel />

      <Routes>
        <Route path="profile/*" element={<DoctorProfile />} />
        <Route path="edit" element={<DoctorProfileEdit />} />
      </Routes>
    </>
  );
}
