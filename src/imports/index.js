// Admin Components
export { default as Login } from "../pages/Login.jsx";
export { default as AdminRegistration } from "../pages/adminRegister/AdminRegistration.jsx";
export { default as AdminMobile } from "../pages/adminRegister/AdminMobile.jsx";
export { default as AdminOtp } from "../pages/adminRegister/AdminOtp.jsx";
export { default as AdminChangePassword } from "../pages/adminRegister/AdminChangePassword.jsx";
export { default as AdminPanel } from "../pages/AdminPanel.jsx";

// Invoice Components
export { default as Invoice } from "../pages/invoice/Invoice.jsx";
export { default as CreateBill } from "../pages/invoice/CreateBill.jsx";
export { default as EditBill } from "../pages/invoice/EditBill.jsx";

// Doctor Components
export { default as DoctorPanel } from "../pages/doctroPanel/DoctorPanel.jsx";
export { default as DoctorProfile } from "../pages/doctroPanel/profile/DoctorProfile.jsx";

// Patient Components
export { default as PatientRegistration } from "../pages/PatientRegistration.jsx";
export { default as PatientPanel } from "../pages/patientPanel/PatientPanel.jsx";
export { default as PersonalHealthRecord } from "../pages/patientPanel/profile/PersonalHealthRecord.jsx";
export { default as PatientDetails } from "../pages/patientManagement/PatientDetails.jsx";
export { default as PatientProfile } from "../pages/patientPanel/profile/PatientProfile.jsx";
export { default as Prescriptions } from "../pages/patientPanel/profile/Prescriptions.jsx";
export { default as TestReport } from "../pages/patientPanel/profile/TestReport.jsx";
export { default as MedicalHistory } from "../pages/patientPanel/profile/MedicalHistory.jsx";
export { default as AllAppointment } from "../pages/patientPanel/profile/Allappoiment.jsx";
export { default as Appointment } from "../pages/patientPanel/Appointment.jsx";
export { default as AppointmentBooking } from "../pages/patientPanel/AppointmentBooking.jsx";
export { default as ChatScreen1 } from "../pages/patientPanel/ChatScreen1.jsx";

// Extra Components
export { default as Scheduler } from "../component/Schedular.jsx";
export { default as Bill } from "../pages/invoice/Bill.jsx";
export { default as Onsite } from "../pages/doctorManagement/Onsite.jsx";
export { default as CashPayment } from "../pages/billPayment/CashPayment.jsx";
export { default as Delete } from "../pages/doctorManagement/Delete.jsx";
export { default as Bill2 } from "../pages/invoice/Bill2.jsx";
export { default as EditDesignInvoice } from "../pages/billPayment/EditDesignInvoice.jsx";
export { default as Bill3 } from "../pages/invoice/Bill3.jsx";

// Charts, Chat, and Video Call
export { default as Chart } from "../pages/Chart.jsx";
export { default as Chat } from "../pages/Chat.jsx";
export { default as VideoCall } from "../VideoCall.jsx";

// Common Components (not lazy-loaded)
export { default as Loading } from "../component/common/Loading.jsx";
export { TailSpin } from "react-loader-spinner";