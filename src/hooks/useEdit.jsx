import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useGlobal } from "../context/GlobalContext";
import { useLocationData } from "../hooks/useLocationData";

const useEdit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { editAdminProfile, adminData } = useGlobal();
  const [profile, setProfile] = useState({ ...adminData, hospitalName: adminData?.hospital?.name });
  const [imageBlob, setImageBlob] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const {
    countries,
    states,
    cities,
    setSelectedCountry,
    setSelectedState
  } = useLocationData();

  useEffect(() => {
    setSelectedCountry(profile.country);
  }, [profile.country, setSelectedCountry]);

  useEffect(() => {
    setSelectedState(profile.state);
  }, [profile.state, setSelectedState]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  }, []);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File size should be less than 5MB.');
        return;
      }
      const blob = new Blob([file], { type: file.type });
      setImageBlob(blob);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePic: e.target.result
        }));
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        setError('Error reading file.');
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSuccess(null);
      const formData = new FormData();
      Object.keys(profile).forEach(key => {
        formData.append(key, profile[key]);
      });
      if (imageBlob) {
        formData.append('profilePic', imageBlob, 'profile.jpg');
      }
      await editAdminProfile(user.id, formData);
      setSuccess('Profile updated successfully!');
      navigate('/profile');
    } catch (error) {
      console.error('Error saving profile:', error);
      setError('Error saving profile. Please try again.');
    }
  }, [profile, imageBlob, editAdminProfile, user.id, navigate]);

  return {
    profile,
    setProfile,
    countries,
    states,
    cities,
    imageBlob,
    setImageBlob,
    handleInputChange,
    handleImageChange,
    handleFormSubmit,
    error,
    success
  };
};

export default useEdit;
