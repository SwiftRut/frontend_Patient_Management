import React from "react";
import { useEffect, useState } from "react";
import { Country, City, State } from "country-state-city";
import {
  bloodGroups,
  genders,
  PatientFormData,
  PatientRegistrationFormFields,
} from "./constant.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PatientRegistrationForm = ({
  handleSubmit,
  formData,
  setFormData,
  handleChange,
  countries,
  states,
  cities,
  showPassword,
  setShowPassword,
}) => {
console.log(states)


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-[100%] relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            First Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="input-box relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            Last Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="input-box relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="input-box relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="input-box relative">
          <div className="label text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            Gender <span>*</span>
          </div>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Gender</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        <div className="input-box relative">
          <div className="label text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            Blood Group <span>*</span>
          </div>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="input-box relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            Country <span className="text-red-600">*</span>
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            // disabled={!formData.country}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-box relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            State <span className="text-red-600">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            disabled={!formData.country}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-box relative">
          <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
            City <span className="text-red-600">*</span>
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            disabled={!formData.state}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full input-box relative">
        <div className="text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
          Address <span>*</span>
        </div>
        <div className="password-input-container">
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="w-full relative">
        <label className="text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
          Password <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div
            className="absolute top-3 right-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <label className="block text-sm font-medium absolute top-[-0.75rem] left-4 bg-white z-10">
          Confirm Password <span className="text-red-600">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="condition">
        <div className="flex items-center">
          <input type="checkbox" required className="mr-2" />
          <p>
            I agree to all the <span className="text-blue-600">T&C</span> and{" "}
            <span className="text-blue-600">Privacy Policies.</span>
          </p>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </div>
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default PatientRegistrationForm;
