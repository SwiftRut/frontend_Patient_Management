import { lazyLoader } from "../utils/lazyLoader";

// Admin Components
export const Login = lazyLoader("pages/Login");
export const AdminRegistration = lazyLoader("pages/adminRegister/AdminRegistration");
export const AdminMobile = lazyLoader("pages/adminRegister/AdminMobile");
export const AdminOtp = lazyLoader("pages/adminRegister/AdminOtp");
export const AdminChangePassword = lazyLoader("pages/adminRegister/AdminChangePassword");
export const AdminPanel = lazyLoader("pages/AdminPanel");

// Invoice Components
export const Invoice = lazyLoader("pages/invoice/Invoice");
export const CreateBill = lazyLoader("pages/invoice/CreateBill");
export const EditBill = lazyLoader("pages/invoice/EditBill");

// Doctor Components
export const DoctorPanel = lazyLoader("pages/doctroPanel/DoctorPanel");
export const DoctorProfile = lazyLoader("pages/doctroPanel/profile/DoctorProfile");

// Patient Components
export const PatientRegistration = lazyLoader("pages/PatientRegistration");
export const PatientPanel = lazyLoader("pages/patientPanel/PatientPanel");
export const PersonalHealthRecord = lazyLoader("pages/patientPanel/profile/PersonalHealthRecord");
export const PatientDetails = lazyLoader("pages/patientManagement/PatientDetails");
export const PatientProfile = lazyLoader("pages/patientPanel/profile/PatientProfile.jsx");
export const Prescriptions = lazyLoader("pages/patientPanel/profile/Prescriptions");
export const TestReport = lazyLoader("pages/patientPanel/profile/TestReport");
export const MedicalHistory = lazyLoader("pages/patientPanel/profile/MedicalHistory");
export const AllAppointment = lazyLoader("pages/patientPanel/profile/Allappoiment");
export const Appointment = lazyLoader("pages/patientPanel/Appointment");
export const AppointmentBooking = lazyLoader("pages/patientPanel/AppointmentBooking");
export const ChatScreen1 = lazyLoader("pages/patientPanel/ChatScreen1");

// Extra Components
export const Scheduler = lazyLoader("component/Schedular");
export const Bill = lazyLoader("component/Bill");
export const Onsite = lazyLoader("pages/doctorManagement/Onsite");
export const CashPayment = lazyLoader("pages/billPayment/CashPayment");
export const Delete = lazyLoader("pages/doctorManagement/Delete");
export const Bill2 = lazyLoader("pages/invoice/Bill2");
export const EditDesignInvoice = lazyLoader("pages/billPayment/EditDesignInvoice");
export const Bill3 = lazyLoader("pages/invoice/Bill3");

// Charts, Chat, and Video Call
export const Chart = lazyLoader("pages/Chart");
export const Chat = lazyLoader("pages/Chat");
export const VideoCall = lazyLoader("VideoCall");

// Common Components (not lazy-loaded)
export { default as Loading } from "../component/common/Loading";
export { TailSpin } from "react-loader-spinner";
