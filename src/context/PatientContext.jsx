import { createContext } from 'react';
import PropTypes from 'prop-types';
export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {

  return (
    <PatientContext.Provider value={{}}>
      {children}
    </PatientContext.Provider>
  );
};
PatientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
