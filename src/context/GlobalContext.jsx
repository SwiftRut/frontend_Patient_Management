import { createContext, useState, useEffect } from "react";
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
  const [allAppointements, setAllAppointements] = useState([]);
  useEffect(() => { }, []);
  const getAllHospitals = async () => {
    try {
      const response = await apiService.GetAllHospitals();
      setAllHospitals(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const createHospital = async (userData) => {
    try {
      const response = await apiService.CreateHospital(userData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  const getAdminProfile = async (id) => {
    try {
      const response = await apiService.GetAdminProfile(id);
      setUserData(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const editAdminProfile = async (id, userData) => {
    try {
      const response = await apiService.EditAdminProfile(id, userData);
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const editPatientProfile = async (id, userData) => {
    try {
      const response = await apiService.EditPatientProfile(id, userData);
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getPatientProfile = async (id) => {
    try {
      const response = await apiService.GetPatientProfile(id);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const editDoctorProfile = async (id, userData) => {
    console.log("inside eding doctor profile", userData);
    try {
      const response = await apiService.EditDoctor(id, userData);
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getDoctorProfile = async (id) => {
    try {
      const response = await apiService.GetDoctorById(id);
      setUserData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const createBill = async (userData) => {
    console.log(userData);
    try {
      const response = await apiService.CreateBill(userData);
      console.log(response);
      setBill(response.data.data);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  const updateBill = async (userData, id) => {
    console.log(userData);
    try {
      const response = await apiService.EditBill(id, userData);
      console.log(response);
      setBill(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getBills = async () => {
    try {
      const response = await apiService.GetBills();
      setAllBills(response.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const getBillById = async (id) => {
    try {
      const response = await apiService.GetBillById(id);
      console.log(response);
      setBill(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const deleteBill = async (id) => {
    console.log(id);
    try {
      const response = await apiService.DeleteBill(id);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const getAllAppointments = async () => {
    try {
      const response = await apiService.GetAllAppointments();
      console.log(response.data, "response");
      setAllAppointements(response.data)
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const getAppointmentById = async (id) => {
    try {
      const response = await apiService.GetAppointmentById(id);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const editAppointment = async (id, userData) => {
    try {
      const response = await apiService.EditAppointment(id, userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const getChatHistory = async (doctorId, patientId) => {
    try {
      const response = await apiService.GetChatHistory(doctorId, patientId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  const getDoctorContacts = async (patientId) => {
    try {
      const response = await apiService.GetDoctorContacts(
        patientId);
      console.log(response.data, "<< doctor contats");
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  const getPatientContacts = async (doctorId) => {
    try {
      const response = await apiService.GetPatientContacts(
        doctorId);
      console.log(response.data, "<< patient contats");
      return response.data;
    } catch (error) {
      console.log(error);
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
      setAllAppointements(response.data.data);
    }catch (error) {
      console.log(error);
      throw error;
    }
  }    
  const getAppointmetnsForPatient = async(patientId) =>{
      try {
        const response = await apiService.GetAppointsForPatient(patientId);
        setAllAppointements(response.data.data);
        console.log(response.data.data);
        return response.data.data;
      }catch(error){
        console.log(error);
      }
  };
  return (
    <GlobalContext.Provider
      value={{
        allHospitals,
        updateAppointment,
        getAppointmetnsForDoctor,
        deleteAppointment,
        allAppointements,
        userData,
        createAppointment,
        setUserData,
        setAllHospitals,
        getAllHospitals,
        createHospital,
        getAdminProfile,
        editAdminProfile,
        getPatientProfile,
        editPatientProfile,
        getDoctorProfile,
        editDoctorProfile,
        updateBill,
        createBill,
        getDoctorContacts,
        getPatientContacts,
        bill,
        setBill,
        allBills,
        getBills,
        getBillById,
        deleteBill,
        setAllAppointements,
        getAllAppointments,
        getAppointmentById,
        editAppointment,
        getChatHistory,
        getAppointmetnsForPatient,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
