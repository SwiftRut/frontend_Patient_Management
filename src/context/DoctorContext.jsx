import { createContext } from 'react';
import PropTypes from 'prop-types';
export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {

  return (
    <DoctorContext.Provider value={{}}>
      {children}
    </DoctorContext.Provider>
  );
};
DoctorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};