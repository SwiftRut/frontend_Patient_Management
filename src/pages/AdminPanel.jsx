import { Route, Routes } from "react-router-dom";

import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "./dashboard/Dashboard";
import DoctorManagement from "./doctorManagement/DoctorManagement";
import Profile from "./profile/Profile";

export default function AdminPanel() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/doctorManagement" element={<DoctorManagement />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}
