import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import DoctorProfile from "./profile/DoctorProfile";
import { Route, Routes } from "react-router-dom";
import '../doctroPanel/profile/doctorProfile.css'
import DoctorProfileEdit from "./profile/DoctorProfileEdit";

export default function DoctorPanel() {
  return (
    <>
      <Header />
      <Sidebar />

      <Routes>
        <Route path="profile/*" element={<DoctorProfile />} />
        <Route path="edit" element={<DoctorProfileEdit />} />
      </Routes>
    </>
  );
}
