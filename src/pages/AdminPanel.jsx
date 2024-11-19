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
import CreateBill from "./invoice/CreateBill";
import EditBill from "./invoice/EditBill";
import EditDesignInvoice from "./billPayment/EditDesignInvoice";
import MainBill from "./patientPanel/MainBill";
import { useGlobal } from "../hooks/useGlobal";
import { SearchResult } from "./SearchResult";

export default function AdminPanel() {
  const { searchTerm, setSearchTerm } = useGlobal();
  const { selectedOption, setSelectedOption } = useGlobal();

  console.log(selectedOption, "<<<<<<<<<<<<<<<<<<<<<<<<<<< selectedOption");
  console.log(searchTerm, "<<<<<<<<<<<<<<<<<<<<<<<<<<< searchTerm");

  return (
    <>
      <Sidebar />
      <div className="content w-[85%] ml-[15%] h-screen overflow-y-scroll">
        <Header />
        {searchTerm === "" ? (
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="profile/*" element={<Profile />} />
            <Route path="edit" element={<Edit />} />
            <Route path="/createBill" element={<CreateBill />} />
            <Route path="/editBill/:id" element={<EditBill />} />
            <Route path="/bill/:id" element={<MainBill />} />
            <Route path="/editinvoice" element={<EditDesignInvoice />} />
            <Route path="doctorManagement" element={<DoctorManagement />} />
            <Route path="doctorAdd" element={<DoctorAdd />} />
            <Route path="doctorEdit/:doctorId" element={<DoctorEdit />} />
            <Route path="patientManagement" element={<PatientManagement />} />
            <Route path="monitorBilling" element={<MonitorBilling />} />
            <Route path="insuranceClaims" element={<InsuranceClaims />} />
            <Route path="paymentMethod" element={<PaymentMethod />} />
            <Route
              path="reportingAndAnalytics"
              element={<ReportingAndAnalytics />}
            />
          </Routes>
        ) : (
          <SearchResult />
        )}
      </div>
    </>
  );
}
