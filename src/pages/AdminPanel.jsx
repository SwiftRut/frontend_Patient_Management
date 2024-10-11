import { Route, Routes } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "./dashboard/Dashboard";
import DoctorManagement from "./doctorManagement/DoctorManagement";
import Profile from "./profile/Profile";
import { Edit } from "./profile/Edit";
import PatientManagement from "./patientManagement/PatientManagement";
import ReportingAndAnalytics from "./ReportingAndAnalytics/ReportingAndAnalytics";
import MonitorBilling from "./billPayment/MonitorBilling";
import InsuranceClaims from "./billPayment/InsuranceClaims";
import PaymentMethod from "./billPayment/PaymentMethod";
import DoctorAdd from "./adminPanel/DoctorAdd";
import DoctorEdit from "./adminPanel/DoctorEdit";

export default function AdminPanel() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="edit" element={<Edit />} />

          <Route path="doctorManagement" element={<DoctorManagement />} />
          <Route path="doctorAdd" element={<DoctorAdd />} />
          <Route path="doctorEdit/:doctorId" element={<DoctorEdit />} />

          <Route path="patientManagement" element={<PatientManagement />} />

          <Route path="monitorBilling" element={<MonitorBilling />} />
          <Route path="insuranceClaims" element={<InsuranceClaims />} />
          <Route path="paymentMethod" element={<PaymentMethod />} />

          <Route path="reportingAndAnalytics" element={<ReportingAndAnalytics />} />
        </Routes>
      </div>
    </>
  );
}
