import React, { useState } from "react";
import "../style.css";
import { FaEye } from "react-icons/fa";
import signature from "../../../assets/signature.svg"
import { MdCancel } from "react-icons/md";

const Prescriptions = () => {
  // Sample data for prescriptions
  const prescriptionData = [
    {
      hospitalName: "City Hospital",
      doctorName: "Dr. Smith",
      diseaseName: "Flu",
      createdDate: "2024-10-01",
      medicineName: "Paracetamol",
      strength: "500mg",
      dose: "2 tablets",
      duration: "5 days",
      whenToTake: "After meals",
      gender: "Male",
      patientName: "John Doe",
      address: "123 Main St, Springfield",
      age: 35,
    },
    {
      hospitalName: "General Hospital",
      doctorName: "Dr. Johnson",
      diseaseName: "Cold",
      createdDate: "2024-09-28",
      medicineName: "Cough Syrup",
      strength: "100ml",
      dose: "10ml",
      duration: "7 days",
      whenToTake: "bedtime",
      gender: "Female",
      patientName: "Jane Smith",
      address: "456 Elm St, Springfield",
      age: 28,
    },
    {
      hospitalName: "Health Center",
      doctorName: "Dr. Lee",
      diseaseName: "Allergy",
      createdDate: "2024-09-25",
      medicineName: "Cetirizine",
      strength: "10mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Once daily",
      gender: "Male",
      patientName: "Michael Brown",
      address: "789 Oak St, Springfield",
      age: 42,
    },
    {
      hospitalName: "Community Hospital",
      doctorName: "Dr. Brown",
      diseaseName: "Headache",
      createdDate: "2024-09-20",
      medicineName: "Ibuprofen",
      strength: "400mg",
      dose: "1 tablet",
      duration: "3 days",
      whenToTake: "After meals",
      gender: "Female",
      patientName: "Emily Davis",
      address: "101 Pine St, Springfield",
      age: 30,
    },
    {
      hospitalName: "Regional Hospital",
      doctorName: "Dr. White",
      diseaseName: "Back Pain",
      createdDate: "2024-09-18",
      medicineName: "Diclofenac",
      strength: "50mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Twice daily",
      gender: "Male",
      patientName: "David Wilson",
      address: "202 Cedar St, Springfield",
      age: 50,
    },
    {
      hospitalName: "City Hospital",
      doctorName: "Dr. Smith",
      diseaseName: "Flu",
      createdDate: "2024-10-01",
      medicineName: "Paracetamol",
      strength: "500mg",
      dose: "2 tablets",
      duration: "5 days",
      whenToTake: "After meals",
      gender: "Male",
      patientName: "John Doe",
      address: "123 Main St, Springfield",
      age: 35,
    },
    {
      hospitalName: "General Hospital",
      doctorName: "Dr. Johnson",
      diseaseName: "Cold",
      createdDate: "2024-09-28",
      medicineName: "Cough Syrup",
      strength: "100ml",
      dose: "10ml",
      duration: "7 days",
      whenToTake: "bedtime",
      gender: "Female",
      patientName: "Jane Smith",
      address: "456 Elm St, Springfield",
      age: 28,
    },
    {
      hospitalName: "Health Center",
      doctorName: "Dr. Lee",
      diseaseName: "Allergy",
      createdDate: "2024-09-25",
      medicineName: "Cetirizine",
      strength: "10mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Once daily",
      gender: "Male",
      patientName: "Michael Brown",
      address: "789 Oak St, Springfield",
      age: 42,
    },
    {
      hospitalName: "Community Hospital",
      doctorName: "Dr. Brown",
      diseaseName: "Headache",
      createdDate: "2024-09-20",
      medicineName: "Ibuprofen",
      strength: "400mg",
      dose: "1 tablet",
      duration: "3 days",
      whenToTake: "After meals",
      gender: "Female",
      patientName: "Emily Davis",
      address: "101 Pine St, Springfield",
      age: 30,
    },
    {
      hospitalName: "Regional Hospital",
      doctorName: "Dr. White",
      diseaseName: "Back Pain",
      createdDate: "2024-09-18",
      medicineName: "Diclofenac",
      strength: "50mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Twice daily",
      gender: "Male",
      patientName: "David Wilson",
      address: "202 Cedar St, Springfield",
      age: 50,
    },
    {
      hospitalName: "City Hospital",
      doctorName: "Dr. Smith",
      diseaseName: "Flu",
      createdDate: "2024-10-01",
      medicineName: "Paracetamol",
      strength: "500mg",
      dose: "2 tablets",
      duration: "5 days",
      whenToTake: "After meals",
      gender: "Male",
      patientName: "John Doe",
      address: "123 Main St, Springfield",
      age: 35,
    },
    {
      hospitalName: "General Hospital",
      doctorName: "Dr. Johnson",
      diseaseName: "Cold",
      createdDate: "2024-09-28",
      medicineName: "Cough Syrup",
      strength: "100ml",
      dose: "10ml",
      duration: "7 days",
      whenToTake: "bedtime",
      gender: "Female",
      patientName: "Jane Smith",
      address: "456 Elm St, Springfield",
      age: 28,
    },
    {
      hospitalName: "Health Center",
      doctorName: "Dr. Lee",
      diseaseName: "Allergy",
      createdDate: "2024-09-25",
      medicineName: "Cetirizine",
      strength: "10mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Once daily",
      gender: "Male",
      patientName: "Michael Brown",
      address: "789 Oak St, Springfield",
      age: 42,
    },
    {
      hospitalName: "Community Hospital",
      doctorName: "Dr. Brown",
      diseaseName: "Headache",
      createdDate: "2024-09-20",
      medicineName: "Ibuprofen",
      strength: "400mg",
      dose: "1 tablet",
      duration: "3 days",
      whenToTake: "After meals",
      gender: "Female",
      patientName: "Emily Davis",
      address: "101 Pine St, Springfield",
      age: 30,
    },
    {
      hospitalName: "Regional Hospital",
      doctorName: "Dr. White",
      diseaseName: "Back Pain",
      createdDate: "2024-09-18",
      medicineName: "Diclofenac",
      strength: "50mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Twice daily",
      gender: "Male",
      patientName: "David Wilson",
      address: "202 Cedar St, Springfield",
      age: 50,
    },
    {
      hospitalName: "City Hospital",
      doctorName: "Dr. Smith",
      diseaseName: "Flu",
      createdDate: "2024-10-01",
      medicineName: "Paracetamol",
      strength: "500mg",
      dose: "2 tablets",
      duration: "5 days",
      whenToTake: "After meals",
      gender: "Male",
      patientName: "John Doe",
      address: "123 Main St, Springfield",
      age: 35,
    },
    {
      hospitalName: "General Hospital",
      doctorName: "Dr. Johnson",
      diseaseName: "Cold",
      createdDate: "2024-09-28",
      medicineName: "Cough Syrup",
      strength: "100ml",
      dose: "10ml",
      duration: "7 days",
      whenToTake: "bedtime",
      gender: "Female",
      patientName: "Jane Smith",
      address: "456 Elm St, Springfield",
      age: 28,
    },
    {
      hospitalName: "Health Center",
      doctorName: "Dr. Lee",
      diseaseName: "Allergy",
      createdDate: "2024-09-25",
      medicineName: "Cetirizine",
      strength: "10mg",
      dose: "1 tablet",
      duration: "5 days",
      whenToTake: "Once daily",
      gender: "Male",
      patientName: "Michael Brown",
      address: "789 Oak St, Springfield",
      age: 42,
    },
  ];

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to toggle search input visibility
  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleShowModal = (prescription) => {
    setSelectedPrescription(prescription);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPrescription(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg w-full h-auto p-4 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-3">
          <h1 className="text-[26px] font-bold text-[font-bold] mb-2 md:mb-0">Prescriptions</h1>
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              className={`bg-gray-100 px-5 py-2 rounded-3xl pl-10 w-full ${isSearchVisible ? "" : "hidden md:block"
                }`}
              placeholder="Search Here"
              onBlur={() => setSearchVisible(false)} // Hide input on blur
            />
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              onClick={toggleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                width="20"
                height="20"
                className="text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto pt-4" style={{ height: "720px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {prescriptionData.map((val, index) => (
              <div
                key={index}
                className="w-full rounded-lg bg-white border border-gray-200 shadow-md"
              >
                <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                  <h6 className="text-[#030229] text-[18px] font-semibold	 font-semibold">{val.doctorName}</h6>
                  <button
                    onClick={() => handleShowModal(val)}
                    className="w-7 h-7 flex items-center justify-center bg-white text-[#0EABEB] rounded-lg"
                  >
                    <FaEye />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-center ">
                    <p className="text-[#818194] text-[16px] font-normal">Hospital Name</p>
                    <span className="text-[#4F4F4F] text-[16px] font-bold">{val.hospitalName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#818194] text-[16px] font-normal">Disease Name</p>
                    <span className="text-[#4F4F4F] text-[16px] font-bold">{val.diseaseName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#818194] text-[16px] font-normal">Date</p>
                    <span className="text-[#4F4F4F] text-[16px] font-bold">{val.createdDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Modal with Tailwind CSS */}
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
                        <div className="logo">
                          <img src="/image/bill-logo.png" alt="" />
                        </div>
                        <div className="name">
                          <p className="text-[24px] text-[#0EABEB] font-bold">Dr. Bharat Patel</p>
                          <span className="text-[14px] text-[#818194] font-semibold	">Obstetrics and Gynecology</span>
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
                        <tr>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Medicine Name</th>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Strength</th>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Dose</th>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">Duration</th>
                          <th className="text-[#030229] text-[14px] font-semibold	p-3">When to Take</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Medicine Name</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Strength</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Dose</td>
                          <td className='duration text-[#141414] text-[16px] font-semibold	py-3 border-b'><span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">Duration</span></td>
                          <td className='take text-[#718EBF] text-[16px] font-semibold	py-3 border-b'><span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">When to Take</span></td>
                        </tr>

                        <tr className="text-center">
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Medicine Name</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Strength</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Dose</td>
                          <td className='duration text-[#141414] text-[16px] font-semibold	py-3 border-b'><span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">Duration</span></td>
                          <td className='take text-[#718EBF] text-[16px] font-semibold	py-3 border-b'><span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">When to Take</span></td>
                        </tr>

                        <tr className="text-center">
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Medicine Name</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Strength</td>
                          <td className=" text-[#141414] text-[16px] font-semibold	py-3 border-b">Dose</td>
                          <td className='duration text-[#141414] text-[16px] font-semibold	py-3 border-b'><span className="bg-[#39973D1A] text-[#39973D] text-[14px] font-semibold p-2 rounded-full">Duration</span></td>
                          <td className='take text-[#718EBF] text-[16px] font-semibold	py-3 border-b'><span className="bg-[#5678E91A] text-[718EBF] text-[14px] font-semibold p-2 rounded-full">When to Take</span></td>
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

export default Prescriptions;
