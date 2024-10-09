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

function App() {
  return (
    <>
      {/* <div className="main-content"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* admin component */}
          <Route path="/adminRegistration" element={<AdminRegistration />} />
          <Route path="/AdminMobile" element={<AdminMobile />} />
          <Route path="/AdminOtp" element={<AdminOtp />} />
          <Route
            path="/AdminChangePassword"
            element={<AdminChangePassword />}
          />

          <Route path="/" element={<AdminPanel />}>
            <Route path="doctorManagement" />
            <Route path="profile/*" />
            <Route path="edit" />

            <Route path="patientManagement" />

            <Route path="monitorBilling" />
            <Route path="insuranceClaims" />
            <Route path="paymentMethod" />

            <Route path="reportingAndAnalytics" />
          </Route>

          {/* patient component */}
          <Route
            path="/patientRegistration"
            element={<PatientRegistration />}
          />

          {/* temp */}
          <Route path="/onsite" element={<Onsite />} />
          {/* <Route path="/bill" element={<Bill />} /> */}

          <Route path="/charts" element={<Chart />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </>
  );
}

export default App;
