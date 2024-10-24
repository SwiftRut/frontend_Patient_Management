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

const user = JSON.parse(localStorage.getItem("user"));
const userRole = user?.role || "No Role";
// console.log(userRole, "<<<<<<<<<<<<<< userfrom router config");

//with protection
const routesConfig = [
  { path: "/login", element: <Login />, allowedRoles: [] },
  { path: "/adminRegistration", element: <AdminRegistration />, allowedRoles: [] },
  { path: "/AdminMobile", element: <AdminMobile />, allowedRoles: [] },
  { path: "/verifyOtp", element: <AdminOtp />, allowedRoles: [] },
  {
    path: "/resetPassword",
    element: <AdminChangePassword />,
    allowedRoles: [],
  },

  // Admin routes
  {
    path: "/",
    element: (
      <ProtectedRoute element={<AdminPanel />} allowedRoles={["admin"]} userRole={userRole} />
    ),
    children: [
      { path: "/", element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />},
      {
        path: "profile/*",
        element: <ProtectedRoute element={null} allowedRoles={["admin"]} userRole={userRole} />,
      },
      {
        path: "/createBill",
        element: (
          <ProtectedRoute element={<CreateBill />} allowedRoles={["admin"]} userRole={userRole} />
        ),
        allowedRoles: ["admin"],
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
        path: "teleconsultation",
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
        path: "teleconsultation",
        element: <ProtectedRoute element={null} allowedRoles={["patient"]} userRole={userRole} />,
      },
      {
        path: "bills",
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
