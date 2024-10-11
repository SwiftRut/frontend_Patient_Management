import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./component/sidebar.css";
import "./pages/pages.css";

// admin
import AdminRegistration from "./pages/adminRegester/AdminRegistration.jsx";
import AdminMobile from "./pages/adminRegester/AdminMobile.jsx";
import AdminOtp from "./pages/adminRegester/AdminOtp.jsx";
import AdminChangePassword from "./pages/adminRegester/AdminChangePassword.jsx";

import AdminPanel from "./pages/AdminPanel";

import Invoice from "./pages/invoice/Invoice.jsx";
import CreateBill from "./pages/invoice/CreateBill.jsx";
import EditBill from "./pages/invoice/EditBill.jsx";

// doctor
import DoctorPanel from "./pages/doctroPanel/DoctorPanel.jsx";
import DoctorProfile from "./pages/doctroPanel/profile/DoctorProfile.jsx";
import DoctorProfileEdit from "./pages/doctroPanel/profile/DoctorProfileEdit.jsx";

// patient
import PatientRegistration from "./pages/PatientRegistration.jsx";

import PatientPanel from "./pages/patientPanel/PatientPanel.jsx";
import PatientDetails from "./pages/patientManagement/PatientDetails.jsx";

// extra
import Scheduler from "./component/Schedular.jsx";
import Bill from "./component/Bill.jsx";
import Onsite from "./pages/doctorManagement/Onsite.jsx";
import CashPayment from "./pages/billPayment/CashPayment.jsx";
import Delete from "./pages/doctorManagement/Delete.jsx";
import Bill2 from "./pages/invoice/Bill2.jsx";
import EditDesignInvoice from "./pages/billPayment/EditDesignInvoice.jsx";
import Bill3 from "./pages/invoice/Bill3.jsx";

import Chart from "./pages/Chart.jsx";
import Chat from "./pages/Chat.jsx";

function App() {
  return (
    <>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/AdminMobile" element={<AdminMobile />} />
            <Route path="/verifyOtp" element={<AdminOtp />} />
            <Route path="/resetPassword" element={<AdminChangePassword />} />

            {/* admin routers */}
            <Route path="/adminRegistration" element={<AdminRegistration />} />

            <Route path="/" element={<AdminPanel />}>
              <Route path="" />
              <Route path="profile/*" />
              <Route path="edit" />

              <Route path="doctorManagement/*" />
              <Route path="doctorAdd" />
              <Route path="doctorEdit/:doctorId" />

              <Route path="patientManagement" />

              <Route path="monitorBilling" />
              <Route path="insuranceClaims" />
              <Route path="paymentMethod" />

              <Route path="reportingAndAnalytics" />
            </Route>

            {/* doctor routers */}
            <Route path="/doctor" element={<DoctorPanel />}>
              <Route path="" />
              <Route path="profile/*" element={<DoctorProfile />} />
              <Route path="edit" />

              <Route path="patientRecordAccesst" />
              <Route path="createPrescriptionTools" />
              <Route path="managePrescriptionTools" />
              <Route path="teleconsultationModule" />
              <Route path="chatScreen" />
              <Route path="appointmentTimeSlot" />
              <Route path="patientDetail/:id" />
              <Route path="prescriptionView/:id" />
            </Route>

            {/* patient routers */}
            <Route path="/patientRegistration" element={<PatientRegistration />} />

            <Route path="/patient" element={<PatientPanel />}>
              <Route path="profile/*" />
              <Route path="profileEdit" />
              <Route path="prescriptions" />
              <Route path="testReport" />
              <Route path="medicalHistory" />
              <Route path="allAppointment" />
              <Route path="appointment" />
              <Route path="appointmentBooking" />
              <Route path="chatScreen" />
            </Route>

            {/* extra routes */}
            {/* <Route path="/abc" element={<PatientsStatistics />} /> */}

            {/* invoice component  */}
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/createBill" element={<CreateBill />} />
            <Route path="/editBill/:id" element={<EditBill />} />

            <Route path="/schedular" element={<Scheduler />} />

            {/* manashvi temp start*/}
            {/* <Route path="/addnewfield" element={<AddNewField />} /> */}
            <Route path="/onsite" element={<Onsite />} />
            <Route path="/details" element={<PatientDetails />} />
            {/* <Route path="/onsite/:id" element={<Onsite />} /> */}

            <Route path="/bill/:id" element={<Bill />} />
            <Route path="/bill2" element={<Bill2 />} />
            <Route path="/bill3" element={<Bill3 />} />

            <Route path="/cash" element={<CashPayment />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/editinvoice" element={<EditDesignInvoice />} />
            {/* manashvi temp end*/}

            <Route path="/charts" element={<Chart />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
