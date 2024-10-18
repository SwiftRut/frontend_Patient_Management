import React, { useState } from "react";
import "../style.css";

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
          <h1 className="text-xl font-semibold mb-2 md:mb-0">Prescriptions</h1>
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              className={`bg-gray-100 px-5 py-2 rounded-3xl pl-10 w-full ${
                isSearchVisible ? "" : "hidden md:block"
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

        <div className="overflow-y-auto" style={{ height: "550px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prescriptionData.map((val, index) => (
              <div
                key={index}
                className="w-full rounded-lg bg-white border border-gray-200 shadow-md"
              >
                <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                  <h6 className="text-md font-semibold">{val.doctorName}</h6>
                  <button
                    onClick={() => handleShowModal(val)}
                    className="w-7 h-7 bg-white rounded-lg"
                  >
                    <i className="fa-solid fa-eye text-gray-500 hover:text-blue-500" />
                  </button>
                </div>
                <div className="flex justify-between items-center px-3">
                  <p className="font-semibold">Hospital Name</p>
                  <span className="text-sm">{val.hospitalName}</span>
                </div>
                <div className="flex justify-between items-center px-3">
                  <p className="font-semibold">Disease Name</p>
                  <span className="text-sm">{val.diseaseName}</span>
                </div>
                <div className="flex justify-between items-center px-3">
                  <p className="font-semibold">Date</p>
                  <span className="text-sm">{val.createdDate}</span>
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
                <div className="modal-header p-4 border-b">
                  <h5 className="modal-title text-lg font-bold">Prescription</h5>
                  <button
                    type="button"
                    className="absolute top-3 right-3 text-xl text-white rounded-full bg-red-600 w-6 h-6 flex items-center justify-center"
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body p-3 mx-3 mb-3">
                  <div className="max-w-xl mx-auto bg-bg-color rounded-lg p-3 border border-gray-200">
                    <div className="flex justify-between items-center border-b border-dashed">
                      <div>
                        <div className="flex items-center space-x-2">
                          <img src="./image/Group 1000005871.png" alt="" className="w-32 md:w-40" />{" "}
                          {/* Responsive image size */}
                        </div>
                      </div>
                      <div className="text-right">
                        <h2 className="text-xl font-bold text-text-color">Dr. Bharat Patel</h2>
                        <p className="text-gray-600 text-sm">Obstetrics and Gynecology</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                      {" "}
                      {/* Responsive grid layout */}
                      <div>
                        <p>
                          <span className="font-semibold">Hospital Name</span> : Medical Center
                        </p>
                        <p>
                          <span className="font-semibold">Patient Name</span> : Alabtrao Bhajirao
                        </p>
                        <p>
                          <span className="font-semibold">Gender</span> : Male
                        </p>
                      </div>
                      <div className="border-l border-dashed pl-4">
                        <p>
                          <span className="font-semibold">Prescription Date</span> : 2 Jan, 2022
                        </p>
                        <p>
                          <span className="font-semibold">Age</span> : 36 Years
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">
                      Address:{" "}
                      <span className="text-sm font-normal">
                        B-105 Virat Bungalows, Punagam Motavarocha Jamnagar.
                      </span>
                    </p>
                  </div>
                  <table className="table mt-3 rounded-lg w-full">
                    {" "}
                    {/* Full-width table */}
                    <thead className="table-light bg-gray-100">
                      <tr>
                        <th>Medicine Name</th>
                        <th>Strength</th>
                        <th>Dose</th>
                        <th>Duration</th>
                        <th>When to Take</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prescriptionData.map((val, index) => (
                        <tr key={index}>
                          <td>{val.medicineName}</td>
                          <td>{val.strength}</td>
                          <td>{val.dose}</td>
                          <td>
                            <button className="px-2 py-1 bg-button-bg rounded-full text-green-700">
                              {val.duration}
                            </button>
                          </td>
                          <td>
                            <button className="px-2 py-1 bg-btn-color rounded-full text-blue-950">
                              {val.whenToTake}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div>
                    <h6>Additional Note</h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <img src="./image/Rectangle 20611.png" alt="" className="w-16" />{" "}
                      {/* Responsive image size */}
                      <h6 className="text-gray-400 font-medium">Doctor Signature</h6>
                      <hr />
                    </div>
                    <button className="px-4 py-2 bg-btn-bg rounded-md text-white">
                      <i className="fa-solid fa-file-arrow-down pe-1"></i> Download
                    </button>
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
