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
            <Route path="/charts" element={<Chart />} />
            <Route path="/chat" element={<Chat />} />

            <Route path="/" element={<AdminPanel />}>
              <Route path="doctorManagement" />
              <Route path="profile/*" />
              <Route path="edit" />
            </Route>

            {/* patient component */}
            <Route path="/patientRegistration" element={<PatientRegistration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
