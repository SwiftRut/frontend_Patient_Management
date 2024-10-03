import { Route, Routes } from "react-router-dom";

import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "./Dashboard";
import DoctorManagement from "./DoctorManagement";

export default function AdminPanel() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctorManagement" element={<DoctorManagement />} />
      </Routes>
    </>
  );
}
