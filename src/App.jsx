import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { TailSpin } from "react-loader-spinner";
import "./component/sidebar.css";
import "./pages/pages.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy-loaded admin components
const Login = lazy(() => import("./pages/Login"));
const AdminRegistration = lazy(() => import("./pages/adminRegester/AdminRegistration.jsx"));
const AdminMobile = lazy(() => import("./pages/adminRegester/AdminMobile.jsx"));
const AdminOtp = lazy(() => import("./pages/adminRegester/AdminOtp.jsx"));
const AdminChangePassword = lazy(() => import("./pages/adminRegester/AdminChangePassword.jsx"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));

// Lazy-loaded invoice components
const Invoice = lazy(() => import("./pages/invoice/Invoice.jsx"));
const EditBill = lazy(() => import("./pages/invoice/EditBill.jsx"));

// Lazy-loaded doctor components
const DoctorPanel = lazy(() => import("./pages/doctroPanel/DoctorPanel.jsx"));
const DoctorProfile = lazy(() => import("./pages/doctroPanel/profile/DoctorProfile.jsx"));

// Lazy-loaded patient components
const PatientRegistration = lazy(() => import("./pages/PatientRegistration.jsx"));
const PatientPanel = lazy(() => import("./pages/patientPanel/PatientPanel.jsx"));
const PatientDetails = lazy(() => import("./pages/patientManagement/PatientDetails.jsx"));

// Lazy-loaded extra components
const Scheduler = lazy(() => import("./component/Schedular.jsx"));
const Bill = lazy(() => import("./component/Bill.jsx"));
const Onsite = lazy(() => import("./pages/doctorManagement/Onsite.jsx"));
const CashPayment = lazy(() => import("./pages/billPayment/CashPayment.jsx"));
const Delete = lazy(() => import("./pages/doctorManagement/Delete.jsx"));
const Bill2 = lazy(() => import("./pages/invoice/Bill2.jsx"));
const EditDesignInvoice = lazy(() => import("./pages/billPayment/EditDesignInvoice.jsx"));
const Bill3 = lazy(() => import("./pages/invoice/Bill3.jsx"));

// Lazy-loaded charts, chat, and video call components
const Chart = lazy(() => import("./pages/Chart.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const VideoCall = lazy(() => import("./VideoCall.jsx"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<TailSpin height="80" width="80" color="blue" ariaLabel="loading" />}>
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

              <Route path="createBill" />

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
              <Route path="createPrescriptionForm/:id" />
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
            <Route path="/videocall" element={<VideoCall />} />
            {/* manashvi temp end*/}

            <Route path="/charts" element={<Chart />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
          <ToastContainer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
