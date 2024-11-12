import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useGlobal } from './useGlobal';

export const useEdit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { editAdminProfile, userData, editDoctorProfile } = useGlobal();
  const [profile, setProfile] = useState({
    ...userData,
    hospitalName: user.role === 'admin' ? userData?.hospitalId?.name : userData?.hospitalName,
  });
  const [imageBlob, setImageBlob] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      // if(user.role === 'doctor' && name === 'hospitalName'){
        
      // }
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
      if (user.role === 'doctor') {
        await editDoctorProfile(user.id, formData);
        navigate('/doctor/profile');
        return;
      }else if(user.role === 'admin'){
        await editAdminProfile(user.id, formData);
        navigate('/profile');
        return;
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return { profile, setProfile, handleInputChange, handleImageChange, handleFormSubmit };
};
