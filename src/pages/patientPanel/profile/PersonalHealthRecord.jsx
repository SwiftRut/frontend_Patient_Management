import React from "react";
import "../style.css";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";

const PersonalHealthRecord = () => {
  return (
    <div className="p-4 bg-[#f6f8fb]">
      <div className="container mx-auto">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-[26px] text-[#030229] font-bold">Patient Details</h2>
            <NavLink
              to={"/patient/profile/profileEdit"}
              className=" text-white text-center text-[20px] font-semibold rounded-md bg-[#0EABEB] p-2 w-[160px] "
            >
              Edit Profile
            </NavLink>
          </div>

          <div className="flex justify-between align-center">
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
          <div className="col-span-5 bg-white rounded-lg p-3">
            <div className="flex justify-between items-center px-2 pb-2">
              <h1 className="text-2xl font-bold text-gray-800">Medical History</h1>
              <NavLink to={"/patient/medicalHistory"} className="text-blue-500 hover:text-blue-700 font-medium">
                View All History
              </NavLink>
            </div>

            <hr />

            <div className="overflow-x-auto pt-3 pb-3">
              <div className="flex flex-col md:flex-row md:-mx-4">
                {/* Medical History Items */}
                {["Dulce Schleifer", "Dulce Schleifer", "Dulce Schleifer"].map((name, index) => (
                  <div className="w-[33%] px-4 mb-6 md:mb-0 rounded-lg" key={index}>
                    <div className="bg-white rounded-lg shadow-md h-42">
                      <div className="flex justify-between items-center bg-[#F6F8FB] p-2 rounded-lg">
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
              <NavLink to={"/patient/prescriptions"} className="text-blue-500">
                View All Prescriptions
              </NavLink>
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
            <div className="bg-white rounded-lg border-b p-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Test Reports</h2>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  View All Reports
                </a>
              </div>
            </div>

            <div className="flex justify-between align-center p-3 overflow-y-scroll h-[220px]">
              <div className="w-[50%] p-1">
                <div className="box rounded-lg  border p-2">
                  <div className="top flex justify-between align-center">
                    <div className="left flex align-center gap-3">
                      <div className="img ">
                        <img src="/img/Avatar.png" alt="" />
                      </div>
                      <div className="details">
                        <p className="text-[15px] text-[#141414] font-semibold">Dr. Marcus Philips</p>
                        <span className="text-[15px] text-[#A7A7A7] font-medium	">2 Jan, 2022</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="icon">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="bottom flex justify-between align-center">
                    <div className="left">
                      <p className="text[#141414] text-[17px] font-semibold	">Dieses : <span className="text-[#818194] font-medium	">Viral Infection</span></p>
                    </div>
                    <div className="right">
                      <p className="text-[#39973D] text-[14px] font-medium">Pathology Test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] p-1">
                <div className="box rounded-lg  border p-2">
                  <div className="top flex justify-between align-center">
                    <div className="left flex align-center gap-3">
                      <div className="img ">
                        <img src="/img/Avatar.png" alt="" />
                      </div>
                      <div className="details">
                        <p className="text-[15px] text-[#141414] font-semibold">Dr. Marcus Philips</p>
                        <span className="text-[15px] text-[#A7A7A7] font-medium	">2 Jan, 2022</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="icon">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="bottom flex justify-between align-center">
                    <div className="left">
                      <p className="text[#141414] text-[17px] font-semibold	">Dieses : <span className="text-[#818194] font-medium	">Viral Infection</span></p>
                    </div>
                    <div className="right">
                      <p className="text-[#39973D] text-[14px] font-medium">Pathology Test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] p-1">
                <div className="box rounded-lg  border p-2">
                  <div className="top flex justify-between align-center">
                    <div className="left flex align-center gap-3">
                      <div className="img ">
                        <img src="/img/Avatar.png" alt="" />
                      </div>
                      <div className="details">
                        <p className="text-[15px] text-[#141414] font-semibold">Dr. Marcus Philips</p>
                        <span className="text-[15px] text-[#A7A7A7] font-medium	">2 Jan, 2022</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="icon">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="bottom flex justify-between align-center">
                    <div className="left">
                      <p className="text[#141414] text-[17px] font-semibold	">Dieses : <span className="text-[#818194] font-medium	">Viral Infection</span></p>
                    </div>
                    <div className="right">
                      <p className="text-[#39973D] text-[14px] font-medium">Pathology Test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] p-1">
                <div className="box rounded-lg  border p-2">
                  <div className="top flex justify-between align-center">
                    <div className="left flex align-center gap-3">
                      <div className="img ">
                        <img src="/img/Avatar.png" alt="" />
                      </div>
                      <div className="details">
                        <p className="text-[15px] text-[#141414] font-semibold">Dr. Marcus Philips</p>
                        <span className="text-[15px] text-[#A7A7A7] font-medium	">2 Jan, 2022</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="icon">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="bottom flex justify-between align-center">
                    <div className="left">
                      <p className="text[#141414] text-[17px] font-semibold	">Dieses : <span className="text-[#818194] font-medium	">Viral Infection</span></p>
                    </div>
                    <div className="right">
                      <p className="text-[#39973D] text-[14px] font-medium">Pathology Test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] p-1">
                <div className="box rounded-lg  border p-2">
                  <div className="top flex justify-between align-center">
                    <div className="left flex align-center gap-3">
                      <div className="img ">
                        <img src="/img/Avatar.png" alt="" />
                      </div>
                      <div className="details">
                        <p className="text-[15px] text-[#141414] font-semibold">Dr. Marcus Philips</p>
                        <span className="text-[15px] text-[#A7A7A7] font-medium	">2 Jan, 2022</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="icon">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="bottom flex justify-between align-center">
                    <div className="left">
                      <p className="text[#141414] text-[17px] font-semibold	">Dieses : <span className="text-[#818194] font-medium	">Viral Infection</span></p>
                    </div>
                    <div className="right">
                      <p className="text-[#39973D] text-[14px] font-medium">Pathology Test</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%] p-1">
                <div className="box rounded-lg  border p-2">
                  <div className="top flex justify-between align-center">
                    <div className="left flex align-center gap-3">
                      <div className="img ">
                        <img src="/img/Avatar.png" alt="" />
                      </div>
                      <div className="details">
                        <p className="text-[15px] text-[#141414] font-semibold">Dr. Marcus Philips</p>
                        <span className="text-[15px] text-[#A7A7A7] font-medium	">2 Jan, 2022</span>
                      </div>
                    </div>
                    <div className="right">
                      <div className="icon">
                        <span className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className="bottom flex justify-between align-center">
                    <div className="left">
                      <p className="text[#141414] text-[17px] font-semibold	">Dieses : <span className="text-[#818194] font-medium	">Viral Infection</span></p>
                    </div>
                    <div className="right">
                      <p className="text-[#39973D] text-[14px] font-medium">Pathology Test</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 bg-white rounded-lg p-3">
            <h2 className="text-[26px] text-[#030229] font-bold border-b">Patient Status</h2>

            <div className="all-box flex align-center">
              <div className="box w-[50%] flex align-center gap-3 p-2 pt-3">
                <div className="icon bg-[#E9F9FF] text-[#36AAD6] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">Shamuba Hospital</span>
                </div>
              </div>

              <div className="box w-[50%] flex align-center gap-3 p-2 pt-3">
                <div className="icon bg-[#c9fff6] text-[#3AB49B] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">Dr. Mathew Best</span>
                </div>
              </div>

              <div className="box w-[50%] flex align-center gap-3 p-2 pt-3">
                <div className="icon bg-[#deffad] text-[#8BD024] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">2 Jan, 2022</span>
                </div>
              </div>

              <div className="box w-[50%] flex align-center gap-3 p-2 pt-3">
                <div className="icon bg-[#e3c4ff] text-[#B269F5] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">Chance Carder</span>
                </div>
              </div>
            </div>

            <div className="box flex align-center justify-between p-2">
              <div className="w-[9%]">
                <div className="icon bg-[#E9F9FF] text-[#36AAD6] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
              </div>
              <div className="details w-[88%]">
                <p className="text-[17px] text-[#141414] font-normal	">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHealthRecord;
