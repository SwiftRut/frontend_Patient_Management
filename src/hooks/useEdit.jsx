import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useGlobal } from "./useGlobal";

export const useEdit = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { editAdminProfile, userData, editDoctorProfile } = useGlobal();

  // Initialize state based on user role
  const [profile, setProfile] = useState(
    user.role === "admin"
      ? {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          gender: "",
          country: "",
          state: "",
          city: "",
          hospitalName: "",
          avatar: "",
        }
      : {
          name: "",
          email: "",
          phone: "",
          gender: "",
          country: "",
          state: "",
          city: "",
          hospitalName: "",
          avatar: "",
        }
  );

  const [imageBlob, setImageBlob] = useState(null);

  // Update profile when userData changes
  useEffect(() => {
    if (userData) {
      if (user.role === "admin") {
        setProfile({
          ...userData,
          hospitalName: userData?.hospitalId?.name,
        });
      } else {
        setProfile({
          ...userData,
          hospitalName: userData?.hospitalName,
        });
      }
    }
  }, [userData, user.role]);

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
          avatar: e.target.result, // Changed from profilePic to avatar to match state
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(profile).forEach((key) => {
        if (profile[key]) {
          // Only append if value exists
          formData.append(key, profile[key]);
        }
      });

      if (imageBlob) {
        formData.append("avatar", imageBlob, "profile.jpg"); // Changed from profilePic to avatar
      }

      if (user.role === "doctor") {
        await editDoctorProfile(user.id, formData);
        navigate("/doctor/profile");
      } else if (user.role === "admin") {
        await editAdminProfile(user.id, formData);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  return {
    profile,
    setProfile,
    handleInputChange,
    handleImageChange,
    handleFormSubmit,
    isAdmin: user.role === "admin", // Added to help components determine which fields to show
  };
};
