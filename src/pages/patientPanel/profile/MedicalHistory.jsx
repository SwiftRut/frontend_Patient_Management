import React, { useState } from "react";
import "../style.css";

const MedicalHistory = () => {
  const medicalhistory = [
    {
      doctorName: "Dr. Smith",
      date: "2024-10-01",
      patientIssue:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-",
    },
    {
      doctorName: "Dr. Johnson",
      date: "2024-09-28",
      patientIssue:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-",
    },
    {
      doctorName: "Dr. Lee",
      date: "2024-10-03",
      patientIssue:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-",
    },
    {
      doctorName: "Dr. Brown",
      date: "2024-09-30",
      patientIssue:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-",
    },
    {
      doctorName: "Dr. White",
      date: "2024-10-02",
      patientIssue:
        " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg w-full h-auto p-4 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-3">
          <h1 className="text-xl font-semibold mb-2 md:mb-0">Medical History</h1>
        </div>

        <div className="overflow-y-auto" style={{ height: "550px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {medicalhistory.map((val, index) => (
              <div
                key={index}
                className="w-full rounded-lg bg-white border border-gray-200 shadow-md"
              >
                <div className="flex justify-between items-center py-2 bg-gray-100 px-3">
                  <h6 className="text-md font-semibold">{val.doctorName}</h6>
                  <button className="w-7 h-7 bg-white rounded-lg">
                    <i className="fa-solid fa-eye text-gray-500 hover:text-blue-500" />
                  </button>
                </div>
                <div className="flex justify-between items-center px-3">
                  <p className="font-normal">Date</p>
                  <span className="text-sm">{val.date}</span>
                </div>
                <div className="px-3">
                  <p className="font-normal">Patient Issue</p>
                  <span className="text-sm">{val.patientIssue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
