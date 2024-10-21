import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import apiService from '../services/api';

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [allPatients, setAllPatients] = useState([]);

  const getAllPatients = async () => {
    try {
      const response = await apiService.GetAllPatients();
      // Assuming `response.data.data` is an array of patient objects
      setAllPatients(response.data.data); // Save the entire list of patients
      console.log(response.data.data, "<<<<<<<<<<<<<<<<<<<< all Patients");
      return response.data.data; // Return the list of patients
    } catch (error) {
      console.error("Error fetching patients:", error);
      throw error;
    }
  };

  return (
    <PatientContext.Provider value={{ getAllPatients, allPatients }}>
      {children}
    </PatientContext.Provider>
  );
};

PatientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
