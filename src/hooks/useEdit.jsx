import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from './useGlobal';
import { useAuth } from './useAuth';

export const useEdit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { editAdminProfile, adminData } = useGlobal();
  const [profile, setProfile] = useState({
    ...adminData,
    hospitalName: adminData?.hospital?.name,
  });
  const [imageBlob, setImageBlob] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const blob = new Blob([file], { type: file.type });
      setImageBlob(blob);

      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePic: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(profile).forEach((key) => formData.append(key, profile[key]));
      if (imageBlob) formData.append('profilePic', imageBlob, 'profile.jpg');
      await editAdminProfile(user.id, formData);
      navigate('/profile');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return { profile, setProfile, handleInputChange, handleImageChange, handleFormSubmit };
};
