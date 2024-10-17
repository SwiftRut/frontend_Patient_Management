import { AddRounded } from "@mui/icons-material";
import {
  Login,
  AdminRegistration,
  AdminMobile,
  AdminOtp,
  AdminChangePassword,
  AdminPanel,
  Invoice,
  CreateBill,
  EditBill,
  DoctorPanel,
  DoctorProfile,
  PatientRegistration,
  PatientPanel,
  PatientDetails,
  Scheduler,
  Bill,
  Onsite,
  CashPayment,
  Delete,
  Bill2,
  EditDesignInvoice,
  Bill3,
  Chart,
  Chat,
  VideoCall,
} from "./imports";
import PatientRecordAccesst from "./pages/doctroPanel/PatientRecordAccesst";
import ProtectedRoute from "./routes/PrivateRoute";
import AddRecord from "./pages/doctroPanel/AddRecord";

//without protection
// const routesConfig = [
//   { path: "/login", element: <Login /> },
//   { path: "/AdminMobile", element: <AdminMobile /> },
//   { path: "/verifyOtp", element: <AdminOtp /> },
//   { path: "/resetPassword", element: <AdminChangePassword /> },

//   // Admin routes
//   { path: "/adminRegistration", element: <AdminRegistration /> },
//   {
//     path: "/",
//     element: <AdminPanel />,
//     children: [
//       { path: "", element: null },
//       { path: "profile/*", element: null },
//       { path: "edit", element: null },
//       { path: "doctorManagement/*", element: null },
//       { path: "doctorAdd", element: null },
//       { path: "doctorEdit/:doctorId", element: null },
//       { path: "patientManagement", element: null },
//       { path: "monitorBilling", element: null },
//       { path: "insuranceClaims", element: null },
//       { path: "paymentMethod", element: null },
//       { path: "reportingAndAnalytics", element: null },
//     ],
//   },

//   // Doctor routes
//   {
//     path: "/doctor",
//     element: <DoctorPanel />,
//     children: [
//       { path: "", element: null },
//       { path: "profile/*", element: <DoctorProfile /> },
//       { path: "edit", element: null },
//       { path: "patientRecordAccess", element: null },
//       { path: "createPrescriptionTools", element: null },
//       { path: "managePrescriptionTools", element: null },
//       { path: "teleconsultationModule", element: null },
//       { path: "chatScreen", element: null },
//       { path: "appointmentTimeSlot", element: null },
//       { path: "patientDetail/:id", element: null },
//       { path: "prescriptionView/:id", element: null },
//       { path: "createPrescriptionForm/:id", element: null },
//     ],
//   },

//   // Patient routes
//   { path: "/patientRegistration", element: <PatientRegistration /> },
//   {
//     path: "/patient",
//     element: <PatientPanel />,
//     children: [
//       { path: "profile/*", element: null },
//       { path: "profileEdit", element: null },
//       { path: "prescriptions", element: null },
//       { path: "testReport", element: null },
//       { path: "medicalHistory", element: null },
//       { path: "allAppointment", element: null },
//       { path: "appointment", element: null },
//       { path: "appointmentBooking", element: null },
//       { path: "chatScreen", element: null },
//     ],
//   },

//   // Extra routes
//   { path: "/invoice", element: <Invoice /> },
//   { path: "/createBill", element: <CreateBill /> },
//   { path: "/editBill/:id", element: <EditBill /> },
//   { path: "/schedular", element: <Scheduler /> },
//   { path: "/onsite", element: <Onsite /> },
//   { path: "/details", element: <PatientDetails /> },
//   { path: "/bill/:id", element: <Bill /> },
//   { path: "/bill2", element: <Bill2 /> },
//   { path: "/bill3", element: <Bill3 /> },
//   { path: "/cash", element: <CashPayment /> },
//   { path: "/delete", element: <Delete /> },
//   { path: "/editinvoice", element: <EditDesignInvoice /> },
//   { path: "/videocall", element: <VideoCall /> },
//   { path: "/charts", element: <Chart /> },
//   { path: "/chat", element: <Chat /> },
// ];
const user = JSON.parse(localStorage.getItem("user"));
const userRole = user?.role || "No Role";
console.log(userRole, "<<<<<<<<<<<<<< userfrom router config");

//with protection
const routesConfig = [
  { path: "/login", element: <Login />, allowedRoles: [] },
  { path: "/AdminMobile", element: <AdminMobile />, allowedRoles: [] },
  { path: "/verifyOtp", element: <AdminOtp />, allowedRoles: [] },
  { path: "/resetPassword", element: <AdminChangePassword />, allowedRoles: [] },

  // Admin routes
  {
    path: "/adminRegistration",
    element: (
      <ProtectedRoute
        element={<AdminRegistration />}
        allowedRoles={["admin"]}
        userRole={userRole}
      />
    ),
    allowedRoles: ["admin"],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute
        element={<AdminPanel />}
        allowedRoles={["admin", "doctor", "patient"]}
        userRole={userRole}
      />
    ),
    children: [
      { path: "", element: null, allowedRoles: ["admin"] },
      {
        path: "profile/*",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "edit",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "doctorManagement/*",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "doctorAdd",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "doctorEdit/:doctorId",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "patientManagement",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "monitorBilling",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "insuranceClaims",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "paymentMethod",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "reportingAndAnalytics",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
    ],
  },

  // Doctor routes
  {
    path: "/doctor",
    element: (
      <ProtectedRoute
        element={<DoctorPanel />}
        allowedRoles={["patient", "doctor", "admin"]}
        userRole={userRole}
      />
    ),
    children: [
      { path: "", element: null, allowedRoles: ["doctor"] },
      {
        path: "profile/*",
        element: (
          <ProtectedRoute
            element={<DoctorProfile />}
            allowedRoles={["doctor"]}
            userRole={userRole}
          />
        ),
      },
      {
        path: "edit",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
      // { path: "addRecord", element: <ProtectedRoute element={<AddRecord/>} allowedRoles={['doctor']} userRole={userRole} /> },
      {
        path: "patientRecordAccesst",
        element: (
          <ProtectedRoute
            element={<PatientRecordAccesst />}
            allowedRoles={["doctor"]}
            userRole={userRole}
          />
        ),
      },
      {
        path: "createPrescriptionTools",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
      {
        path: "managePrescriptionTools",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
      {
        path: "teleconsultationModule",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
      {
        path: "chatScreen",
        element: (
          <ProtectedRoute element={null} allowedRoles={["doctor", "patient"]} userRole={userRole} />
        ),
      },
      {
        path: "appointmentTimeSlot",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },

      {
        path: "patientDetail/:id",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
      {
        path: "allFiles",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },

      {
        path: "prescriptionView/:id",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
      {
        path: "createPrescriptionForm/:id",
        element: <ProtectedRoute element={null} allowedRoles={["doctor"]} userRole={userRole} />,
      },
    ],
  },

  // Patient routes
  {
    path: "/patientRegistration",
    element: <PatientRegistration />,
  },
  {
    path: "/patient",
    element: (
      <ProtectedRoute
        element={<PatientPanel />}
        allowedRoles={["patient", "doctor", "admin"]}
        userRole={userRole}
      />
    ),
    children: [
      {
        path: "profile/*",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "profileEdit",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "prescriptions",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "testReport",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "medicalHistory",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "allAppointment",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "appointment",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "appointmentBooking",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "priscriptionAccess",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "chatScreen",
        element: (
          <ProtectedRoute
            element={null}
            allowedRoles={["patient", "doctor", "admin"]}
            userRole={userRole}
          />
        ),
      },
    ],
  },

  // Extra routes
  {
    path: "/invoice",
    element: (
      <ProtectedRoute
        element={<Invoice />}
        allowedRoles={["admin", "doctor", "patient"]}
        userRole={userRole}
      />
    ),
    allowedRoles: ["admin", "doctor", "patient"],
  },
  {
    path: "/createBill",
    element: (
      <ProtectedRoute element={<CreateBill />} allowedRoles={["admin"]} userRole={userRole} />
    ),
    allowedRoles: ["admin"],
  },
  {
    path: "/editBill/:id",
    element: <ProtectedRoute element={<EditBill />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/schedular",
    element: (
      <ProtectedRoute element={<Scheduler />} allowedRoles={["admin"]} userRole={userRole} />
    ),
    allowedRoles: ["admin"],
  },
  {
    path: "/onsite",
    element: <ProtectedRoute element={<Onsite />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/details",
    element: (
      <ProtectedRoute element={<PatientDetails />} allowedRoles={["patient"]} userRole={userRole} />
    ),
    allowedRoles: ["patient"],
  },
  {
    path: "/bill/:id",
    element: <ProtectedRoute element={<Bill />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/bill2",
    element: <ProtectedRoute element={<Bill2 />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/bill3",
    element: <ProtectedRoute element={<Bill3 />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/cash",
    element: (
      <ProtectedRoute element={<CashPayment />} allowedRoles={["admin"]} userRole={userRole} />
    ),
    allowedRoles: ["admin"],
  },
  {
    path: "/delete",
    element: <ProtectedRoute element={<Delete />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/editinvoice/:id",
    element: (
      <ProtectedRoute
        element={<EditDesignInvoice />}
        allowedRoles={["admin"]}
        userRole={userRole}
      />
    ),
    allowedRoles: ["admin"],
  },
  {
    path: "/chart",
    element: <ProtectedRoute element={<Chart />} allowedRoles={["admin"]} userRole={userRole} />,
    allowedRoles: ["admin"],
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute
        element={<Chat />}
        allowedRoles={["admin", "doctor", "patient"]}
        userRole={userRole}
      />
    ),
    allowedRoles: ["admin", "doctor", "patient"],
  },
  {
    path: "/video-call",
    element: (
      <ProtectedRoute
        element={<VideoCall />}
        allowedRoles={["admin", "doctor", "patient"]}
        userRole={userRole}
      />
    ),
    allowedRoles: ["admin", "doctor", "patient"],
  },
];

export default routesConfig;
