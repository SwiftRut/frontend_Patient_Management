import { createContext, useState, useEffect } from "react";
import apiService from "../services/api";
import PropTypes from "prop-types";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allHospitals, setAllHospitals] = useState([]);
  const [userData, setUserData] = useState({});
  const [bill, setBill] = useState({});
  const [allBills, setAllBills] = useState([]);
  const [allAppointements, setAllAppointements] = useState([]);
  useEffect(() => {}, []);
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
  }

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
  const getAllAppointments= async () => {
    try {
      const response = await apiService.GetAllAppointments();
      console.log(response, "response");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  const getAppointmentById = async (id) => {
    try{
      const response = await apiService.GetAppointmentById();
      console.log(response);
    }catch (error) {
      console.log(error);
      throw error;
    }
  }
  const editAppointment = async (id, userData) => {
    try{
      const response = await apiService.EditAppointment(id,userData);
      console.log(response);
    }catch (error) {
    
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        allHospitals,
        userData,
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
        allAppointements,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
