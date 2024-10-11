import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./component/sidebar.css";
import "./pages/pages.css";
import {
  Login, AdminRegistration, AdminMobile, AdminOtp, AdminChangePassword, AdminPanel,
  Invoice, CreateBill, EditBill,
  DoctorPanel, DoctorProfile,
  PatientRegistration, PatientPanel, PatientDetails,
  Scheduler, Bill, Onsite, CashPayment, Delete, Bill2, EditDesignInvoice, Bill3,
  Chart, Chat, VideoCall,
  Loading
} from "./imports";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route path="/AdminMobile" element={<AdminMobile />} />
              <Route path="/verifyOtp" element={<AdminOtp />} />
              <Route path="/resetPassword" element={<AdminChangePassword />} />

              {/* admin routers */}
              <Route
                path="/adminRegistration"
                element={<AdminRegistration />}
              />

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
                <Route path="createPrescriptionForm/:id" />
              </Route>

              {/* patient routers */}
              <Route
                path="/patientRegistration"
                element={<PatientRegistration />}
              />

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
              <Route path="/videocall" element={<VideoCall />} />
              {/* manashvi temp end*/}

              <Route path="/charts" element={<Chart />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
