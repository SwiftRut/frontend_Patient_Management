import React from "react";
import "../style.css";

const PersonalHealthRecord = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto">
        <div className="h-48 bg-white p-3 rounded-lg shadow-lg mt-3">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Patient Details</h2>
            <button className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              <i className="fas fa-edit mr-1"></i> {/* Icon */}
              Edit Profile
            </button>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-24 h-full flex items-center">
              <img
                src="./image/Ellipse 1101.png"
                alt="Patient"
                className="rounded-full object-cover h-full"
              />
            </div>
            <div className="w-full space-y-3">
              {/* Patient Details Section */}
              <div className="grid grid-cols-7 gap-2 text-xs">
                <div>
                  <span className="font-medium text-gray-400">Name:</span>
                  <p>Marcus Philips</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Number:</span>
                  <p>99130 44537</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Email:</span>
                  <p>John@gmail.com</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Gender:</span>
                  <p>Male</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">DOB:</span>
                  <p>2 Jan, 2022</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Age:</span>
                  <p>20 Years</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Blood Group:</span>
                  <p>B+</p>
                </div>
              </div>
              {/* Address Section */}
              <div className="grid grid-cols-7 gap-2 text-xs">
                <div>
                  <span className="font-medium text-gray-400">Address:</span>
                  <p>123 Main St</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">City:</span>
                  <p>Los Angeles</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">State:</span>
                  <p>California</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Zip Code:</span>
                  <p>90001</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Country:</span>
                  <p>USA</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Emergency Contact:</span>
                  <p>99130 44538</p>
                </div>
                <div>
                  <span className="font-medium text-gray-400">Relationship:</span>
                  <p>Brother</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mt-3">
          <div className="col-span-5 bg-white rounded-lg">
            <div className="flex justify-between items-center px-2 py-2">
              <h1 className="text-2xl font-bold text-gray-800">Medical History</h1>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">
                View All History
              </a>
            </div>
            <hr />

            <div className="overflow-x-auto">
              <div className="flex flex-col md:flex-row md:-mx-4">
                {/* Medical History Items */}
                {["Dulce Schleifer", "Dulce Schleifer", "Dulce Schleifer"].map((name, index) => (
                  <div className="md:w-96 px-4 mb-6 md:mb-0 rounded-lg" key={index}>
                    <div className="bg-white rounded-lg shadow-md h-42">
                      <div className="flex justify-between items-center mb-4 h-10 bg-gray-200 p-3 rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                        <span className="text-sm text-gray-500">2 Jan, 2022</span>
                      </div>
                      <span className="p-2">Patient Issue</span>
                      <p className="text-gray-700 p-2 text-sm">
                        The printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-3 bg-white rounded-lg">
            <div className="flex justify-between items-center px-2 py-2">
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
                    <th className="py-2 px-4 text-left">Hospital Name</th>
                    <th className="py-2 px-4 text-left">Date</th>
                    <th className="py-2 px-4 text-left">Disease Name</th>
                    <th className="py-2 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Prescription Rows */}
                  {[
                    { name: "Apollo Hospitals", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    { name: "Medanta The Medicity", date: "2 Jan, 2022", disease: "Allergies" },
                    { name: "Manipal Hospitals", date: "2 Jan, 2022", disease: "Diarrhea" },
                    { name: "Naravana Health", date: "2 Jan, 2022", disease: "Colds and Flu" },
                    // Add more rows if necessary
                  ].map((prescription, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4">{prescription.name}</td>
                      <td className="py-2 px-4">{prescription.date}</td>
                      <td className="py-2 px-4">{prescription.disease}</td>
                      <td className="py-2 px-4">
                        <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 12a9 9 0 100 18 9 9 0 000-18z"
                            />
                          </svg>
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
