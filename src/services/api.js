import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const apiService = {
  // Patient
  PatientLogin: (userData) => api.post("/patient/login", userData),
  PatientRegister: (userData) => api.post("/patient/register", userData),

  // Admin
  AdminLogin: (userData) => api.post("/admin/login", userData),
  AdminRegister: (userData) => api.post("/admin/register", userData),

  // Doctor
  DoctorLogin: (userData) => api.post("/doctor/login", userData),
  DoctorRegister: (userData) => api.post("/doctor/register", userData),

  // Universal Login
  UniversalLogin: (userData) => api.post("/login", userData),

  //Hospital
  CreateHospital: (userData) => api.post("/hospital/create-hospital", userData),
  GetAllHospital: (userData) =>
    api.post("/hospital/get-all-hospitals", userData),

  ForgetPassword: (userData) => api.post("/forgetPassword", userData),
  VerifyOtp: (userData) => api.post("/verifyOtp", userData),
  ResetPassword: (userData) => api.post("/resetPassword", userData),
};

export default apiService;
