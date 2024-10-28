import { lazyLoader } from "../utils/lazyLoader";

// Admin Components
export const Login = lazyLoader("pages/Login.jsx");
export const AdminRegistration = lazyLoader("pages/adminRegister/AdminRegistration.jsx");
export const AdminMobile = lazyLoader("pages/adminRegister/AdminMobile.jsx");
export const AdminOtp = lazyLoader("pages/adminRegister/AdminOtp.jsx");
export const AdminChangePassword = lazyLoader("pages/adminRegister/AdminChangePassword.jsx");
export const AdminPanel = lazyLoader("pages/AdminPanel.jsx");

// Invoice Components
export const Invoice = lazyLoader("pages/invoice/Invoice.jsx");
export const CreateBill = lazyLoader("pages/invoice/CreateBill.jsx");
export const EditBill = lazyLoader("pages/invoice/EditBill.jsx");

// Doctor Components
export const DoctorPanel = lazyLoader("pages/doctroPanel/DoctorPanel.jsx");
export const DoctorProfile = lazyLoader("pages/doctroPanel/profile/DoctorProfile.jsx");

// Patient Components
export const PatientRegistration = lazyLoader("pages/PatientRegistration.jsx");
export const PatientPanel = lazyLoader("pages/patientPanel/PatientPanel.jsx");
export const PersonalHealthRecord = lazyLoader("pages/patientPanel/profile/PersonalHealthRecord.jsx");
export const PatientDetails = lazyLoader("pages/patientManagement/PatientDetails.jsx");
export const PatientProfile = lazyLoader("pages/patientPanel/profile/PatientProfile.jsx");
export const Prescriptions = lazyLoader("pages/patientPanel/profile/Prescriptions.jsx");
export const TestReport = lazyLoader("pages/patientPanel/profile/TestReport.jsx");
export const MedicalHistory = lazyLoader("pages/patientPanel/profile/MedicalHistory.jsx");
export const AllAppointment = lazyLoader("pages/patientPanel/profile/Allappoiment.jsx");
export const Appointment = lazyLoader("pages/patientPanel/Appointment.jsx");
export const AppointmentBooking = lazyLoader("pages/patientPanel/AppointmentBooking.jsx");
export const ChatScreen1 = lazyLoader("pages/patientPanel/ChatScreen1.jsx");

// Extra Components
export const Scheduler = lazyLoader("component/Schedular.jsx");
export const Bill = lazyLoader("component/Bill.jsx");
export const Onsite = lazyLoader("pages/doctorManagement/Onsite.jsx");
export const CashPayment = lazyLoader("pages/billPayment/CashPayment.jsx");
export const Delete = lazyLoader("pages/doctorManagement/Delete.jsx");
export const Bill2 = lazyLoader("pages/invoice/Bill2.jsx");
export const EditDesignInvoice = lazyLoader("pages/billPayment/EditDesignInvoice.jsx");
export const Bill3 = lazyLoader("pages/invoice/Bill3.jsx");

// Charts, Chat, and Video Call
export const Chart = lazyLoader("pages/Chart.jsx");
export const Chat = lazyLoader("pages/Chat.jsx");
export const VideoCall = lazyLoader("VideoCall.jsx");

// Common Components (not lazy-loaded)
export { default as Loading } from "../component/common/Loading.jsx";
export { TailSpin } from "react-loader-spinner";
