import React from "react";
import "../style.css";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const PersonalHealthRecord = () => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="w-[98%] mx-auto">
        <div className=" bg-white p-3 rounded-lg shadow-lg mt-3">
          <div className="flex justify-between items-center mb-3 p-2">
            <h2 className="text-[26px] text-[#030229] font-bold font-semibold">Patient Details</h2>
            <NavLink
              to={"/patient/profile/profileEdit"}
              className=" text-white text-center text-[20px] font-semibold rounded-md bg-[#0EABEB] p-2 w-[160px] "
            >
              Edit Profile
            </NavLink>
          </div>

          <div className="flex justify-between align-center p-2">
            <div className="w-[10%] h-full flex justify-center">
              <img
                src="./image/Ellipse 1101.png"
                alt="Patient"
                className="rounded-full object-cover h-full"
              />
            </div>
            <div className="w-[90%] space-y-5 ps-5">
              {/* Patient Details Section */}
              <div className="grid grid-cols-7 gap-4 text-xs">
                <div>
                  <span className="font-medium text-gray-400 text-[17px]">Name:</span>
                  <p className="text-[#141414] text-[15px] font-normal">Marcus Philips</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px]">Number:</span>
                  <p className="text-[#141414] text-[15px] font-normal">99130 44537</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px]">Email:</span>
                  <p className="text-[#141414] text-[15px] font-normal">John@gmail.com</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px]">Gender:</span>
                  <p className="text-[#141414] text-[15px] font-normal">Male</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px]">DOB:</span>
                  <p className="text-[#141414] text-[15px] font-normal">2 Jan, 2022</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px]">Age:</span>
                  <p className="text-[#141414] text-[15px] font-normal">20 Years</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[15px]">Blood Group:</span>
                  <p className="text-[#141414] text-[15px] font-normal">B+</p>
                </div>
              </div>
              {/* Address Section */}
              <div className="grid grid-cols-7 gap-4 text-xs">
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">
                    Address:
                  </span>
                  <p className="text-[#141414] text-[15px] font-normal">123 Main St</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">City:</span>
                  <p className="text-[#141414] text-[15px] font-normal">Los Angeles</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">State:</span>
                  <p className="text-[#141414] text-[15px] font-normal">California</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">
                    Zip Code:
                  </span>
                  <p className="text-[#141414] text-[15px] font-normal">90001</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">
                    Country:
                  </span>
                  <p className="text-[#141414] text-[15px] font-normal">USA</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">
                    Emergency Contact:
                  </span>
                  <p className="text-[#141414] text-[15px] font-normal">99130 44538</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400 text-[17px] font-medium">
                    Relationship:
                  </span>
                  <p className="text-[#141414] text-[15px] font-normal">Brother</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mt-3">
          <div className="col-span-5 bg-white rounded-lg p-4">
            <div className="flex justify-between items-center px-2 py-2">
              <h1 className="text-2xl font-bold text-gray-800">Medical History</h1>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">
                View All History
              </a>
            </div>

            <hr />

            <div className="overflow-x-auto pt-4 pb-4">
              <div className="flex flex-col md:flex-row md:-mx-4">
                {/* Medical History Items */}
                {["Dulce Schleifer", "Dulce Schleifer", "Dulce Schleifer"].map((name, index) => (
                  <div className="w-[33%] px-4 mb-6 md:mb-0 rounded-lg" key={index}>
                    <div className="bg-white rounded-lg shadow-md h-42">
                      <div className="flex justify-between items-center bg-[#F6F8FB] p-3 rounded-lg">
                        <h2 className="text-[18px] font-semibold text-gray-800">{name}</h2>
                        <span className="text-[13px] text-[#4F4F4F] font-semibold">
                          2 Jan, 2022
                        </span>
                      </div>

                      <div className="pt-3">
                        <span className="p-2 text-[#4F4F4F] text-[15px] font-bold">
                          Patient Issue
                        </span>
                        <p className="text-[#4F4F4F] p-2 text-[15px] font-normal">
                          The printing and typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy text ever since the 1500s, when an unknown printer took.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-3 bg-white rounded-lg p-3">
            <div className="flex justify-between items-center pb-5">
              <h1 className="text-2xl font-bold">Prescriptions</h1>
              <a href="#" className="text-blue-500">
                View All Prescriptions
              </a>
            </div>
            <hr />

            {/* Scrollable container for the table */}
            <div className="overflow-y-auto h-60">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left text-[13px] font-semibold">Hospital Name</th>
                    <th className="py-2 px-4 text-left text-[13px] font-semibold">Date</th>
                    <th className="py-2 px-4 text-left text-[13px] font-semibold">Disease Name</th>
                    <th className="py-2 px-4 text-left text-[13px] font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Prescription Rows */}
                  {[
                    { name: "Apollo Hospitals", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    { name: "Medanta The Medicity", date: "2 Jan, 2022", disease: "Allergies" },
                    { name: "Manipal Hospitals", date: "2 Jan, 2022", disease: "Diarrhea" },
                    { name: "Naravana Health", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    { name: "Naravana Health", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    { name: "Naravana Health", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    { name: "Naravana Health", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    // Add more rows if necessary
                  ].map((prescription, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 text-[11] text-[#4F4F4F] font-medium">
                        {prescription.name}
                      </td>
                      <td className="py-2 px-4 text-[11] text-[#4F4F4F] font-medium">
                        {prescription.date}
                      </td>
                      <td className="py-2 px-4 text-[11] text-[#4F4F4F] font-medium">
                        {prescription.disease}
                      </td>
                      <td className="py-2 px-4">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-5 bg-white rounded-lg">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Test Reports</h2>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  View All Reports
                </a>
              </div>
            </div>

            <div className="grid">
              <div className="col-span-6">
                <div className="box h-28 w-full rounded-lg bottom-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHealthRecord;
