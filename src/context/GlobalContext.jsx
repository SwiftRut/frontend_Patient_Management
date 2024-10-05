import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import apiService from '../services/api';
import PropTypes from 'prop-types';
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [allHospitals, setAllHospitals] = useState([]);

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

  return (
    <GlobalContext.Provider value={{
        allHospitals,
        setAllHospitals,
        getAllHospitals,
     }}>
      {children}
    </GlobalContext.Provider>
  );
};
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useGlobal = () => useContext(GlobalContext);