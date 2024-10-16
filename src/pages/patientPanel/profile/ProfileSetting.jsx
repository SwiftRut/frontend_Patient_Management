import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";

const ProfileSetting = () => {
  return (
    <div className="bg-gray-100 w-full h-[100vh]">
      <div className="py-5 bg-[#4C49ED] text-[44px] h-[296px] font-bold">
        <div className="container mx-auto">
          <h1 className="text-white font-bold text-black mb-3 pt-5">Profile Setting</h1>
        </div>

      </div>

      <div className="w-full mt-[-10%] container mx-auto py-5 bg-white shadow-lg rounded-lg flex flex-col md:flex-row ">
        {/* Section 1 */}
        <div className="w-full md:w-[20%] p-10 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center">
          <img
            src="/image/Ellipse 1101.png"
            alt="Profile"
            className="rounded-full object-cover w-[214px] h-[214px]"
          />

          <button className="flex items-center px-3 py-2 bg-slate-100 rounded-lg text-gray-600 mt-4">
            <UserIcon className="h-5 w-5 mr-2" />
            Change Profile
          </button>
        </div>

        {/* Section 2 */}
        <div className="w-full md:w-[80%] p-6 ">
          <h2 className="text-lg font-bold pb-6 text-[34px]">Edit Profile</h2>

          {/* Grid for inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
            <div className="col-span-1 relative">
              <label htmlFor="firstName" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="firstName"
              />
            </div>

            <div className="col-span-1 relative">
              <label htmlFor="lastName" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="lastName"
              />
            </div>

            <div className="col-span-1 relative">
              <label htmlFor="email" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
            <div className="col-span-1 relative">
              <label htmlFor="gender" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Gender
              </label>
              <select
                id="gender"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-span-1 relative">
              <label htmlFor="dob" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                DOB
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="dob"
              />
            </div>

            <div className="col-span-1 relative">
              <label htmlFor="age" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Age
              </label>
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="age"
                placeholder="Enter Age"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
            <div className="col-span-1 relative">
              <label htmlFor="bloodGroup" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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

            <div className="col-span-1 relative">
              <label htmlFor="height" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Height (cm)
              </label>
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="height"
                placeholder="Enter Height"
              />
            </div>

            <div className="col-span-1 relative">
              <label htmlFor="weight" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Weight (kg)
              </label>
              <input
                type="number"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="weight"
                placeholder="Enter Weight"
              />
            </div>
          </div>

          {/* Rest of the inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            <div className="w-full col-span-2 sm:col-span-1 relative">
              <label htmlFor="country" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                Country
              </label>
              <select
                id="country"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
              </select>
            </div>

            <div className="w-full col-span-2 sm:col-span-1 relative">
              <label htmlFor="state" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                State
              </label>
              <select
                id="state"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select State</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="california">California</option>
                <option value="london">London</option>
              </select>
            </div>

            <div className="w-full col-span-2 sm:col-span-1 relative">
              <label htmlFor="city" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
                City
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                id="city"
                placeholder="Enter City"
              />
            </div>
          </div>

          <div className="mb-6 relative">
            <label htmlFor="address" className="block text-sm font-medium absolute top-[-6px] left-[15px] bg-white">
              Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              id="address"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 text-black rounded-md hover:bg-gray-400 font-semibold border-2">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
