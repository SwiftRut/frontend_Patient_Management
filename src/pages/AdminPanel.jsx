import { Route, Routes } from "react-router-dom";

import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Dashboard from "./dashboard/Dashboard";
import DoctorManagement from "./doctorManagement/DoctorManagement";
import Profile from "./profile/Profile";
import { Edit } from "./profile/Edit";
import PatientManagement from "./patientManagement/PatientManagement";
import InvoiceManagement from "./billPayment/InvoiceManagement";
import PaymentMethod from "./billPayment/PaymentMethod";
import ReportingAndAnalytics from "./ReportingAndAnalytics/ReportingAndAnalytics";

export default function AdminPanel() {
  return (
    <>
      <Header />

      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="doctorManagement" element={<DoctorManagement />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="edit" element={<Edit />} />

        <Route path="patientManagement" element={<PatientManagement />} />

        <Route path="invoiceManagement" element={<InvoiceManagement />} />
        <Route path="paymentHistory" element={<PatientManagement />} />
        <Route path="paymentMethod" element={<PaymentMethod />} />

        <Route path="reportingAndAnalytics" element={<ReportingAndAnalytics />} />
      </Routes>
    </>
  );
}
