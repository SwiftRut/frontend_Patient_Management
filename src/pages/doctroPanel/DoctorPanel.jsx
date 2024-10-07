import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import DoctorProfile from "./profile/DoctorProfile";
import { Route, Routes } from "react-router-dom";

export default function DoctorPanel() {
  return (
    <>
      <Header />
      <Sidebar />

      <Routes>
        <Route path="profile/*" element={<DoctorProfile />} />
      </Routes>
    </>
  );
}
