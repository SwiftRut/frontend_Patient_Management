import { createContext, useState } from "react";
import apiService from "../services/api";
import PropTypes from "prop-types";

export const GlobalContext = createContext();
import { useQuery } from "@tanstack/react-query";
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "");

  const [allHospitals, setAllHospitals] = useState([]);
  const [userData, setUserData] = useState({});
  const [bill, setBill] = useState({});
  const [allBills, setAllBills] = useState([]);
  const [allAppointments, setAllAppointments] = useState([]);
  
  // Hospital Management
  const getAllHospitals = async () => {
    try {
      const response = await apiService.GetAllHospitals();
      setAllHospitals(response.data.data);
    } catch (error) {
      console.log("Error fetching hospitals:", error);
      throw error;
    }
  };

  const createHospital = async (userData) => {
    try {
      const response = await apiService.CreateHospital(userData);
      console.log("Hospital created:", response);
    } catch (error) {
      console.error("Error creating hospital:", error);
      throw error;
    }
  };

  // Admin Profile Management
  const getAdminProfile = async (id) => {
    try {
      const response = await apiService.GetAdminProfile(id);
      setUserData(response.data);
    } catch (error) {
      console.log("Error fetching admin profile:", error);
      throw error;
    }
  };

  const editAdminProfile = async (id, userData) => {
    try {
      const response = await apiService.EditAdminProfile(id, userData);
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error editing admin profile:", error);
      throw error;
    }
  };

  // Patient Profile Management
  const getPatientProfile = async (id) => {
    try {
      const response = await apiService.GetPatientProfile(id);
      console.log(response.data,"<<<<<<<<<<<<<<<<<<<<<<<<<<<")
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error fetching patient profile:", error);
      throw error;
    }
  };

  const editPatientProfile = async (id, userData) => {
    try {
      const response = await apiService.EditPatientProfile(id, userData);
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error editing patient profile:", error);
      throw error;
    }
  };

  // Doctor Profile Management
  const getDoctorProfile = async (id) => {
    try {
      const response = await apiService.GetDoctorById(id);
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error fetching doctor profile:", error);
      throw error;
    }
  };

  const editDoctorProfile = async (id, userData) => {
    try {
      const response = await apiService.EditDoctor(id, userData);
      setUserData(response.data.data);
    } catch (error) {
      console.log("Error editing doctor profile:", error);
      throw error;
    }
  };

  // Bill Management
  const createBill = async (userData) => {
    try {
      const response = await apiService.CreateBill(userData);
      setBill(response.data.data);
    } catch (error) {
      console.error("Error creating bill:", error);
      throw error;
    }
  };

  const updateBill = async (userData, id) => {
    try {
      const response = await apiService.EditBill(id, userData);
      setBill(response.data.data);
    } catch (error) {
      console.log("Error updating bill:", error);
      throw error;
    }
  };

  const getBills = async () => {
    try {
      const response = await apiService.GetBills();
      setAllBills(response.data.data);      
    } catch (error) {
      console.log("Error fetching bills:", error);
      throw error;
    }
  };

  const getBillById = async (id) => {
    try {
      const response = await apiService.GetBillById(id);
      console.log(response.data.data)
      setBill(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log("Error fetching bill by ID:", error);
      throw error;
    }
  };

  const deleteBill = async (id) => {
    try {
      await apiService.DeleteBill(id);
    } catch (error) {
      console.log("Error deleting bill:", error);
      throw error;
    }
  };

  // Appointment Management
  const getAllAppointments = async () => {
    try {
      const response = await apiService.GetAllAppointments();
      setAllAppointments(response.data.data);

    } catch (error) {
      console.log("Error fetching appointments:", error);
      throw error;
    }
  };  const getAllTodayAppointments = async () => {
    try {
      const response = await apiService.GetAllTodayAppointments();
      setAllAppointments(response.data.data);

    } catch (error) {
      console.log("Error fetching appointments:", error);
      throw error;
    }
  };

  const getAppointmentById = async (id) => {
    try {
      const response = await apiService.GetAppointmentById(id);
      console.log("Fetched appointment:", response);
    } catch (error) {
      console.log("Error fetching appointment by ID:", error);
      throw error;
    }
  };

  const editAppointment = async (id, userData) => {
    try {
      await apiService.EditAppointment(id, userData);
    } catch (error) {
      console.log("Error editing appointment:", error);
      throw error;
    }
  };

  // Chat Management
  const getChatHistory = async (doctorId, patientId) => {
    try {
      const response = await apiService.GetChatHistory(doctorId, patientId);
      return response.data;
    } catch (error) {
      console.log("Error fetching chat history:", error);
      throw error;
    }
  };

  const getDoctorContacts = async (patientId) => {
    try {
      const response = await apiService.GetDoctorContacts(patientId);
      return response.data;
    } catch (error) {
      console.log("Error fetching doctor contacts:", error);
      throw error;
    }
  };

  const getPatientContacts = async (doctorId) => {
    try {
      const response = await apiService.GetPatientContacts(doctorId);
      return response.data;
    } catch (error) {
      console.log("Error fetching patient contacts:", error);
      throw error;
    }
  }
  const createAppointment = async (patientId, userData) => {
    try {
      console.log("creating appointment......" , userData);
    const response = await apiService.createAppointment(patientId ,userData);
    if(user.role === "patient"){
      getAppointmetnsForPatient(user.id);
    }else if(user.role === "doctor"){
      getAppointmetnsForDoctor(user.id);
    }
    console.log(response.data);
    } catch (error) { 
      console.log(error);
      throw error;
    }
  }
  const updateAppointment = async (id ,userData) => {
    try {
      console.log("updating appointment......" , userData);
      const response = await apiService.EditAppointment(id ,userData);
      console.log(response.data);
      if(user.role === "patient"){
        getAppointmetnsForPatient(user.id);
      }else if(user.role === "doctor"){
        getAppointmetnsForDoctor(user.id);
      }
    console.log(response.data);
    } catch (error) { 
      console.log(error);
      throw error;
    }
  }
  const deleteAppointment = async(id)=>{
    try{
      console.log("delteing appointment......");
      const response = await apiService.DeleteAppointment(id);
      if(user.role === "patient"){
        getAppointmetnsForPatient(user.id);
      }else if(user.role === "doctor"){
        getAppointmetnsForDoctor(user.id);
      }
      console.log(response.data);
    }catch (error) {
      console.log(error);
      throw error;
    }
  }
  const getAppointmetnsForDoctor = async(doctorId)=>{
    console.log(doctorId,"<<<<<<<<<<<<<<<<<<<<< this doctorId")
    try{
      console.log("getting for doctor appointment......");
      const response = await apiService.GetAppointsForDoctor(doctorId);
      console.log(response.data.data);
      setAllAppointments(response.data.data);
    }catch (error) {
      console.log(error);
      throw error;
    }
  }    
  const getAppointmetnsForPatient = async(patientId) =>{
      try {
        const response = await apiService.GetAppointsForPatient(patientId);
        setAllAppointments(response.data.data);
        console.log(response.data.data);
        return response.data.data;
      }catch(error){
        console.log(error);
      }
  };

  const [prescription, setPrescription] = useState({});
  const createPrescription = async (prescriptionData) => {
    try {
      const response = await apiService.CreatePrescription(prescriptionData);
      console.log("Prescription created:", response);
      setPrescription(response.data.data);
    } catch (error) {
      console.error("Error creating prescription:", error);
      throw error;
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        createPrescription,
        prescription,
        setPrescription,

        // Hospital
        allHospitals,
        updateAppointment,
        getAppointmetnsForDoctor,
        deleteAppointment,
        createAppointment,

        setAllHospitals,
        getAllHospitals,
        createHospital,

        // User Data
        userData,
        setUserData,

        // Admin
        getAdminProfile,
        editAdminProfile,

        // Patient
        getPatientProfile,
        editPatientProfile,

        // Doctor
        getDoctorProfile,
        editDoctorProfile,

        // Bill
        bill,
        setBill,
        allBills,
        getBills,
        getBillById,
        createBill,
        updateBill,
        deleteBill,

        // Appointment
        allAppointments,
        setAllAppointments,
        getAllAppointments,
        getAppointmentById,
        editAppointment,
        getAllTodayAppointments,

        getAppointmetnsForPatient,


        // Chat
        getChatHistory,
        getDoctorContacts,
        getPatientContacts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
