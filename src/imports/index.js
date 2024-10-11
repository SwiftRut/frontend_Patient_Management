// imports/index.js
import { lazy } from "react";

// Admin Components
export const Login = lazy(() => import("../pages/Login"));
export const AdminRegistration = lazy(() => import("../pages/adminRegester/AdminRegistration"));
export const AdminMobile = lazy(() => import("../pages/adminRegester/AdminMobile"));
export const AdminOtp = lazy(() => import("../pages/adminRegester/AdminOtp"));
export const AdminChangePassword = lazy(() => import("../pages/adminRegester/AdminChangePassword"));
export const AdminPanel = lazy(() => import("../pages/AdminPanel"));

// Invoice Components
export const Invoice = lazy(() => import("../pages/invoice/Invoice"));
export const CreateBill = lazy(() => import("../pages/invoice/CreateBill"));
export const EditBill = lazy(() => import("../pages/invoice/EditBill"));

// Doctor Components
export const DoctorPanel = lazy(() => import("../pages/doctroPanel/DoctorPanel"));
export const DoctorProfile = lazy(() => import("../pages/doctroPanel/profile/DoctorProfile"));

// Patient Components
export const PatientRegistration = lazy(() => import("../pages/PatientRegistration"));
export const PatientPanel = lazy(() => import("../pages/patientPanel/PatientPanel"));
export const PatientDetails = lazy(() => import("../pages/patientManagement/PatientDetails"));

// Extra Components
export const Scheduler = lazy(() => import("../component/Schedular"));
export const Bill = lazy(() => import("../component/Bill"));
export const Onsite = lazy(() => import("../pages/doctorManagement/Onsite"));
export const CashPayment = lazy(() => import("../pages/billPayment/CashPayment"));
export const Delete = lazy(() => import("../pages/doctorManagement/Delete"));
export const Bill2 = lazy(() => import("../pages/invoice/Bill2"));
export const EditDesignInvoice = lazy(() => import("../pages/billPayment/EditDesignInvoice"));
export const Bill3 = lazy(() => import("../pages/invoice/Bill3"));

// Charts, Chat, and Video Call
export const Chart = lazy(() => import("../pages/Chart"));
export const Chat = lazy(() => import("../pages/Chat"));
export const VideoCall = lazy(() => import("../VideoCall"));

// Common Components (not lazy-loaded)
export { default as Loading } from "../component/common/Loading";
export { TailSpin } from "react-loader-spinner";
