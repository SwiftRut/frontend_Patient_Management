import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import apiService from '../services/api';
export const PatientContext = createContext();
export const PatientProvider = ({ children }) => {
  const [allPatients, setAllPatients] = useState([]);
  const getAllPatients = async () => {
    try {
      const response = await apiService.GetAllPatients();
      setAllPatients(response.data.data[0]._id);
      console.log(response.data.data , "<<<<<<<<<<<<<<<<<<<< all Patients");
      return response.data.data[0]._id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return (
    <PatientContext.Provider value={{getAllPatients, allPatients}}>
      {children}
    </PatientContext.Provider>
  );
};
PatientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
