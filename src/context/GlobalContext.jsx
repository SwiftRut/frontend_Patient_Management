import { createContext, useState, useEffect } from 'react';
import apiService from '../services/api';
import PropTypes from 'prop-types';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [allHospitals, setAllHospitals] = useState([]);
    const [userData, setUserData] = useState({});

    useEffect(()=>{
    },[])
    const getAllHospitals = async () => {
        try{
        const response = await apiService.GetAllHospitals();
        setAllHospitals(response.data.data);
        }catch(error){
        console.log(error);
        throw error
        }
    }

    const createHospital = async(userData)=>{
        try {
            const response = await apiService.CreateHospital(userData);
            console.log(response);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    const getAdminProfile = async (id) => {
      try{
      const response = await apiService.GetAdminProfile(id);
      setUserData(response.data);
      }catch(error){
      console.log(error);
      throw error
      }
  }
  const editAdminProfile = async (id, userData) => {
    try{
    const response = await apiService.EditAdminProfile(id, userData);
    setUserData(response.data.data);
    }catch(error){
    console.log(error);
    throw error
    }
  }
  const editPatientProfile = async (id, userData) => {
    try{
    const response = await apiService.EditPatientProfile(id, userData);
    setUserData(response.data.data);
    }catch(error){
    console.log(error);
    throw error
    }
  }
  
  const getPatientProfile= async (id) => {
    try{
      const response = await apiService.GetPatientProfile(id);
      setUserData(response.data);
      }catch(error){
      console.log(error);
      throw error
      }
  }

  const editDoctorProfile = async (id, userData) => {
    try{
    const response = await apiService.EditDoctor(id, userData);
    setUserData(response.data.data);
    }catch(error){
    console.log(error);
    throw error
    }
  }
  
  const getDoctorProfile= async (id) => {
    try{
      const response = await apiService.GetDoctorById(id);
      setUserData(response.data.data);
      }catch(error){
      console.log(error);
      throw error
      }
  }
  
  return (
    <GlobalContext.Provider value={{
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
        editDoctorProfile
     }}>
      {children}
    </GlobalContext.Provider>
  );
};
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};