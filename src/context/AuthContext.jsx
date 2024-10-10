import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import apiService from '../services/api';
import PropTypes from 'prop-types';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || "");
  const [loading, setLoading] = useState(true);

  const PatientLogin = async (userData) => {
    console.log(userData);
    setLoading(true);
    try {
      const response = await apiService.PatientLogin(userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.patient));
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const PatientRegister = async (userData) => {
    console.log(userData);
    setLoading(true);
    try {
      const { data } = await apiService.PatientRegister(userData);
      localStorage.setItem('token', data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setUser(data.user);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const AdminLogin = async (userData) => {
    console.log(userData);
    setLoading(true);
    try {
      const response = await apiService.AdminLogin(userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.patient));
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const AdminRegister = async (userData) => {
    console.log(userData);
    setLoading(true);
    try {
      const { data } = await apiService.AdminRegister(userData);
      localStorage.setItem('token', data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setUser(data.user);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const DoctorLogin = async (userData) => {
    console.log(userData);
    setLoading(true);
    try {
      const response = await apiService.DoctorLogin(userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const UniversalLogin = async function (userData) {
    console.log(userData);
    setLoading(true);
    try {
      const response = await apiService.UniversalLogin(userData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setUser(response.data.user);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const logout = async () => {
    try {
      await apiService.UniversalLogout();
      
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      delete axios.defaults.headers.common['Authorization'];
      window.location.href = '/login';
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, PatientLogin, logout, PatientRegister, DoctorLogin, AdminLogin, AdminRegister, UniversalLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useAuth = () => useContext(AuthContext);