import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import apiService from "../services/api";
export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [allDoctors, setAllDoctors] = useState([]);
  const getAllDoctors = async () => {
    try {
      const response = await apiService.GetAllDoctors();
      setAllDoctors(response.data.data);
      console.log(response.data.data , "<<<<<<<<<<<<<<<<<<<< all doctors");
      return response.data.data[0]._id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return (
    <DoctorContext.Provider value={{getAllDoctors, allDoctors}}>
      {children}
    </DoctorContext.Provider>
  );
};
DoctorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};