import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./component/sidebar.css";
import "./pages/pages.css";

import PatientRegistration from "./pages/PatientRegistration.jsx";
import AdminPanel from "./pages/AdminPanel";
import { Chart } from "chart.js";

import Chat from "./pages/Chat.jsx";
import AdminRegistration from "./pages/adminRegester/AdminRegistration.jsx";
import AdminMobile from "./pages/adminRegester/AdminMobile.jsx";
import AdminOtp from "./pages/adminRegester/AdminOtp.jsx";
import AdminChangePassword from "./pages/adminRegester/AdminChangePassword.jsx";

import Bill from "./component/Bill.jsx";
import Onsite from "./pages/doctorManagement/Onsite.jsx";
import Invoice from "./pages/invoice/Invoice.jsx";
import DoctorPanel from "./pages/doctroPanel/DoctorPanel.jsx";
import DoctorProfile from "./pages/doctroPanel/profile/DoctorProfile.jsx";
import DoctorProfileEdit from "./pages/doctroPanel/profile/DoctorProfileEdit.jsx";
import CreateBill from "./pages/invoice/CreateBill.jsx";

function App() {
  return (
    <>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* admin component */}

            <Route path="/adminRegistration" element={<AdminRegistration />} />
            <Route path="/AdminMobile" element={<AdminMobile />} />
            <Route path="/AdminOtp" element={<AdminOtp />} />
            <Route path="/AdminChangePassword" element={<AdminChangePassword />} />

            <Route path="/onsite" element={<Onsite />} />
            {/* <Route path="/bill" element={<Bill />} /> */}

            <Route path="/login" element={<Login />} />

            <Route path="/charts" element={<Chart />} />
            <Route path="/chat" element={<Chat />} />

            {/* AdminPanel routs  */}

            <Route path="/" element={<AdminPanel />}>
              <Route path="profile/*" />
              <Route path="edit" />

              <Route path="doctorManagement/*" />
              <Route path="doctorAdd" />

              <Route path="patientManagement" />

              <Route path="monitorBilling" />
              <Route path="insuranceClaims" />
              <Route path="paymentMethod" />

              <Route path="reportingAndAnalytics" />
            </Route>

            {/* patient component */}
            <Route path="/patientRegistration" element={<PatientRegistration />} />

            {/* invoice component  */}
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/CreateBill" element={<CreateBill />} />

            {/* doctor routers */}
            <Route path="/doctor" element={<DoctorPanel />}>
              <Route path="profile/*" element={<DoctorProfile />} />
              <Route path="edit" />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
