import React, { useState } from "react";
import "../style.css";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaHospital } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import signature from "../../../assets/signature.svg"

const PersonalHealthRecord = () => {

  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const handleShowModal = (prescription) => {
    setSelectedPrescription(prescription);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPrescription(null);
  };

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

          <div className="flex justify-between items-center">
            <div className="w-[100%] sm:w-[10%] pt-[30px] sm:pt-[0px] h-full flex justify-center">
              <img
                src="./image/Ellipse 1101.png"
                alt="Patient"
                className="rounded-full object-cover h-full"
              />
            </div>
            <div className="w-[100%] sm:w-[90%] pt-[30px] sm:pt-[0px] space-y-5 ps-5">
              {/* Patient Details Section */}
              <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 text-xs">
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
          <div className="col-span-5 sm:col-span-5 bg-white rounded-lg p-3">
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
                  <div className="w-[100%] sm:w-[33%] px-4 mb-6 md:mb-0 rounded-lg" key={index}>
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

          <div className="col-span-5 sm:col-span-3 bg-white rounded-lg p-3">
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
                        <span onClick={() => handleShowModal(prescription)} className="bg-[#F6F8FB] text-[#0EABEB] rounded-[5px] w-6 h-6 flex items-center justify-center">
                          <FaEye />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-5 sm:col-span-5 bg-white rounded-lg">
            <div className="bg-white rounded-lg border-b p-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Test Reports</h2>
                <NavLink to={"/patient/testReport"} className="text-blue-500 font-medium hover:underline">
                  View All Reports
                </NavLink>
              </div>
            </div>

            <div className="flex justify-between align-center p-3 overflow-y-scroll h-[220px]">
              <div className="w-[100%] sm:w-[50%] p-1">
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
                        <span onClick={() => handleShowModal(prescription)} className="bg-[#F6F8FB] text-[#0EABEB] text-[15px] rounded-[5px] w-6 h-6 flex items-center justify-center">
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

              <div className="w-[100%] sm:w-[50%] p-1">
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

              <div className="w-[100%] sm:w-[50%] p-1">
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

              <div className="w-[100%] sm:w-[50%] p-1">
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

              <div className="w-[100%] sm:w-[50%] p-1">
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

              <div className="w-[100%] sm:w-[50%] p-1">
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

          <div className="col-span-5 sm:col-span-3 bg-white rounded-lg p-3">
            <h2 className="text-[26px] text-[#030229] font-bold border-b">Patient Status</h2>

            <div className="all-box flex items-center">
              <div className="box w-[100%] sm:w-[50%] flex items-center gap-3 p-2 pt-3">
                <div className="icon bg-[#E9F9FF] text-[#36AAD6] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">Shamuba Hospital</span>
                </div>
              </div>

              <div className="box w-[100%] sm:w-[50%] flex items-center gap-3 p-2 pt-3">
                <div className="icon bg-[#c9fff6] text-[#3AB49B] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">Dr. Mathew Best</span>
                </div>
              </div>

              <div className="box w-[100%] sm:w-[50%] flex items-center gap-3 p-2 pt-3">
                <div className="icon bg-[#deffad] text-[#8BD024] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">2 Jan, 2022</span>
                </div>
              </div>

              <div className="box w-[100%] sm:w-[50%] flex items-center gap-3 p-2 pt-3">
                <div className="icon bg-[#e3c4ff] text-[#B269F5] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
                <div className="details">
                  <span className="text-[17px] text-[#141414] font-normal	">Chance Carder</span>
                </div>
              </div>
            </div>

            <div className="box flex items-center justify-between p-2">
              <div className="w-[13%] sm:w-[9%]">
                <div className="icon bg-[#E9F9FF] text-[#36AAD6] text-[24px] p-3 rounded-full">
                  <FaHospital />
                </div>
              </div>
              <div className="details w-[86%] sm:w-[88%]">
                <p className="text-[17px] text-[#141414] font-normal	">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* prescription model  */}

      {showModal && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">

            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md md:max-w-xl relative">
                {" "}
                {/* Responsive width */}
                <div className="modal-header p-4">
                  <h5 className="modal-title text-[24px] text-[#030229] font-bold	">Prescription</h5>
                  <button
                    type="button"
                    className="absolute top-3 right-3 text-xl text-white rounded-full bg-red-600 w-6 h-6 flex items-center justify-center"
                    onClick={handleCloseModal}
                  >
                    <MdCancel />
                  </button>
                </div>

                <div className="modal-body p-4 pt-0">
                  <div className="max-w-xl mx-auto bg-bg-color rounded-lg p-4 border border-gray-200">
                    <div className="top bg-gray-100 rounded p-4">
                      <div className="head flex justify-between align-center ">
                        <div className="logo w-[140px] sm:w-[238px]">
                          <img src="/image/bill-logo.png" alt="" />
                        </div>
                        <div className="name ">
                          <p className="text-[18px] sm:text-[24px] text-[#0EABEB] font-bold">Dr. Bharat Patel</p>
                          <span className="text-[10px] sm:text-[14px] text-[#818194] font-semibold	">Obstetrics and Gynecology</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="details text-sm">
                          <div className="flex align-center justify-between pb-2">
                            <p className="text-[16px] text-[#141414] font-semibold">Patient Name: <span className="text-[14px] text-[#818194] font-semibold">patientName</span></p>
                            <p className="text-[16px] text-[#141414] font-semibold">Prescription Date: <span className="text-[14px] text-[#818194] font-semibold">prescriptionDate</span></p>
                          </div>
                          <div className="flex align-center justify-between pb-2">
                            <p className="text-[16px] text-[#141414] font-semibold">Gender: <span className="text-[14px] text-[#818194] font-semibold">gender</span></p>
                            <p className="w-[50%] text-[16px] text-[#141414] font-semibold">Age: <span className="text-[14px] text-[#818194] font-semibold">age</span></p>
                          </div>
                          <p className="text-[16px] text-[#141414] font-semibold">Address: <span className="text-[14px] text-[#818194] font-semibold">addresssdkjdj Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, laudantium?</span></p>
                        </div>
                      </div>
                    </div>

                    <table className="w-[100%] mt-4 table-data">
                      <thead className="bg-gray-100">
                        <tr className="text-center">
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Medicine Name</th>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Strength</th>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Dose</th>
                          <th className="text-[#030229] text-[14px] hidden sm:inline-block font-semibold	p-3">Duration</th>
                          <th className="text-[#030229] text-[14px] hidden sm:inline-block font-semibold	p-3">When to Take</th>
                        </tr>
                      </thead>
                      <tbody className="overflow-scroll	">
                        <tr className="text-center">
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Medicine Name</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Strength</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Dose</td>
                          <td className='duration text-[#141414] text-[16px] font-semibold	py-3 border-b hidden sm:inline-block me-3'><span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">Duration</span></td>
                          <td className='take text-[#718EBF] text-[16px] font-semibold	py-3 border-b hidden sm:inline-block'><span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">When to Take</span></td>
                        </tr>
                        <tr className="text-center">
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Medicine Name</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Strength</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Dose</td>
                          <td className='duration text-[#141414] text-[16px] font-semibold	py-3 border-b hidden sm:inline-block me-3'><span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">Duration</span></td>
                          <td className='take text-[#718EBF] text-[16px] font-semibold	py-3 border-b hidden sm:inline-block'><span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">When to Take</span></td>
                        </tr>
                        <tr className="text-center">
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Medicine Name</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Strength</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Dose</td>
                          <td className='duration text-[#141414] text-[16px] font-semibold	py-3 border-b hidden sm:inline-block me-3'><span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">Duration</span></td>
                          <td className='take text-[#718EBF] text-[16px] font-semibold	py-3 border-b hidden sm:inline-block'><span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">When to Take</span></td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="mt-4 pt-3">
                      <h3 className="font-bold">Additional Note:</h3>
                      <p>prescriptionData.additionalNote</p>
                    </div>

                    <div className="mt-4 flex justify-between align-center">

                      <div className="sign border-b pb-2">
                        <div className=" w-32 mt-4">
                          <img src={signature} alt="Signature" />
                        </div>
                        <p>Doctor Signature</p>
                      </div>

                      <div className="download">
                        <button className="text-[white] text-[18px] bg-[#0EABEB] font-semibold py-[8px] px-[20px] rounded-xl">Download</button>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}


    </div>
  );
};

export default PersonalHealthRecord;
