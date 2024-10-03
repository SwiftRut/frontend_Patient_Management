import { Route, Routes } from "react-router-dom";

import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "./dashboard/Dashboard";
import DoctorManagement from "./doctorManagement/DoctorManagement";
import Profile from "./profile/Profile";
import { Edit } from "./profile/Edit";

export default function AdminPanel() {
  return (
    <>
      <Header />
      
      <Sidebar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/doctorManagement" element={<DoctorManagement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}
