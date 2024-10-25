import React, { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../../hooks/useGlobal";
import { useAuth } from "../../../hooks/useAuth";

const ProfileSetting = () => {
  const { userData, editPatientProfile } = useGlobal();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    age: "",
    height: "",
    weight: "",
    bloodGroup: "",
    country: "",
    state: "",
    city: "",
    address: "",
    profilePic: null // for profile picture upload
  });

  // Prefill form with userData when component mounts
  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phone: userData.phone || "",
        gender: userData.gender || "",
        dob: userData.dob ? new Date(userData.dob).toISOString().substring(0, 10) : "",
        age: userData.age || "",
        height: userData.height || "",
        weight: userData.weight || "",
        bloodGroup: userData.bloodGroup || "",
        country: userData.country || "",
        state: userData.state || "",
        city: userData.city || "",
        address: userData.address || "",
        profilePic: null // Keep null initially unless there's a file
      });
    }
  }, [userData]);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, files } = e.target;
    // If there's a file input (profilePic), update formData accordingly
    if (id === "profilePic") {
      setFormData((prevData) => ({
        ...prevData,
        profilePic: files[0] || null // Handle single file input
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formToSubmit = new FormData(); // Use FormData to handle file uploads
    // Append all form data fields
    for (const key in formData) {
      formToSubmit.append(key, formData[key]);
    }

    // Submit form data with the profile picture
    await editPatientProfile(user?.id, formToSubmit);

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-gray-100 w-full h-[100vh]">
      <div className="py-5 bg-[#4C49ED] text-[44px] h-[296px] font-bold ">
        <div className="container mx-auto w-[90%] 2xl:w-[100%]">
          <h1 className="text-white font-bold text-black mb-3 pt-5">Profile Setting</h1>
        </div>
      </div>

      <div className="mt-[-40%] sm:mt-[-10%] container mx-auto py-5 bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-[90%] 2xl:w-[100%]">
        {/* Section 1 */}
        <div className="w-full md:w-[20%] p-10 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center">
          <img
            src={userData?.avatar || "/image/Ellipse 1101.png"}
            alt="Profile"
            className="rounded-full object-cover w-[214px] h-[214px]"
          />
          <label htmlFor="profilePic" className="cursor-pointer flex items-center px-3 py-2 bg-slate-100 rounded-lg text-gray-600 mt-4">
            <UserIcon className="h-5 w-5 mr-2" />
            Change Profile
          </label>
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
        </div>

        {/* Section 2 */}
        <div className="w-full md:w-[80%] p-6">
          <h2 className="text-lg font-bold pb-6 text-[34px]">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
              {/* Name */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="firstName" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
              </div>

              {/* Phone */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="phone" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="email" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Gender */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="gender" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  Gender
                </label>
                <select
                  id="gender"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* DOB */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="dob" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  DOB
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              {/* Age */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="age" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  Age
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  id="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter Age"
                />
              </div>

              {/* Additional fields (height, weight, blood group, country, state, city, address) */}
              {/* Use similar pattern as above for these fields */}
              {/* Example for Blood Group */}
              <div className="col-span-3 sm:col-span-1 relative">
                <label htmlFor="bloodGroup" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                  Blood Group
                </label>
                <select
                  id="bloodGroup"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              {/* Add other fields similarly */}
            </div>

            {/* Buttons */}
            <div className="flex justify-center sm:justify-end gap-4">
              <NavLink to={'/patient'}>
                <button className="w-[130px] sm:w-[160px] h-[48px] text-black text-[20px] rounded-md border-2">
                  Cancel
                </button>
              </NavLink>
              <button
                type="submit"
                className="bg-blue-600 w-[130px] sm:w-[160px] h-[48px] text-white text-[20px] rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
