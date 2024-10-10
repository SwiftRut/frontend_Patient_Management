import React from "react";
import "./reportingAnalytics.css";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsGenderFemale } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import AppointmentGraph from "../Reporting-Analysis/ApointmentGraph";
import PatientSummary from "../Reporting-Analysis/PatientSummary";
import PatientsAge from "../Reporting-Analysis/PatientsAge";

export default function ReportingAndAnalytics() {
  const statsData = [
    { id: 1, label: "Total Patients", count: 1500, icon: <FaUsers /> },
    { id: 2, label: "Repeat Patient", count: 500, icon: <FaUser /> },
    { id: 3, label: "Admitted Patient", count: 1000, icon: <FaFileAlt /> },
    { id: 4, label: "Total Claim", count: 250, icon: <FaFileAlt /> },
  ];

  const patientsCountData = [
    { id: 1, department: "Colds and Flu", count: 1050 },
    { id: 2, department: "Colds and Flu", count: 450 },
    { id: 3, department: "Colds and Flu", count: 350 },
    { id: 4, department: "Colds and Flu", count: 260 },
  ];
  return (
    <div>
      <div className="reportingAnalytics-section">
        <div className="row">
          <div className="main">
            <div className="total-data flex">
              <div className="total-Patients">
                <div className="content">
                  <div className="logo_details flex">
                    <div className="logo">
                      <FaUsers />
                    </div>
                    <div className="details">
                      <p>Total Patients</p>
                    </div>
                  </div>

                  <div className="count">
                    <span>1500</span>
                  </div>
                </div>
              </div>

              <div className="total-Docters">
                <div className="content">
                  <div className="logo_details flex dr-logo">
                    <div className="logo">
                      <FaUser />
                    </div>
                    <div className="details">
                      <p>Repeat Patient</p>
                    </div>
                  </div>
                  <div className="count">
                    <span>500</span>
                  </div>
                </div>
              </div>

              <div className="total-Appointments">
                <div className="content">
                  <div className="logo_details flex appo-logo">
                    <div className="logo">
                      <FaFileAlt />
                    </div>
                    <div className="details">
                      <p>Admitted Patient</p>
                    </div>
                  </div>
                  <div className="count">
                    <span>1000</span>
                  </div>
                </div>
              </div>

              <div className="total-Appointments">
                <div className="content">
                  <div className="logo_details flex claim-logo">
                    <div className="logo">
                      <FaFileAlt />
                    </div>
                    <div className="details">
                      <p>Total Claim</p>
                    </div>
                  </div>
                  <div className="count">
                    <span>250</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="top flex">
              <div className="w-1/2 p-4">
                <AppointmentGraph />
              </div>
              <div className="w-1/2 p-4">
                <PatientSummary />
              </div>
            </div>

            <div className="bottom flex">
              <div className="patient-count-data">
                <div className="content">
                  <div className="head">
                    <div className="title">
                      <p>Patients Count Department</p>
                    </div>
                  </div>
                  <div className="pending-bill">
                    <div className="pending-bill-data">
                      <div className="bill-table">
                        <table>
                          <thead>
                            <tr className="flex">
                              <th>Department Name</th>
                              <th>Patient Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            {patientsCountData.map((patient) => (
                              <tr key={patient.id} className="flex">
                                <td className="d-name">
                                  <p>{patient.department}</p>
                                </td>
                                <td className="status">
                                  <p>
                                    <FaUsers />
                                    <span>{patient.count}</span>
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doctor-count-data">
                <div className="content">
                  <div className="head">
                    <div className="title">
                      <p>Doctor Count Department</p>
                    </div>
                  </div>
                  <div className="pending-bill">
                    <div className="pending-bill-data">
                      <div className="bill-table">
                        <table>
                          <thead>
                            <tr className="flex">
                              <th>Department Name</th>
                              <th>Patient Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            {patientsCountData.map((doctor) => (
                              <tr key={doctor.id} className="flex">
                                <td className="d-name">
                                  <p>{doctor.department}</p>
                                </td>
                                <td className="status">
                                  <p>
                                    <FaUsers />
                                    <span>{doctor.count}</span>
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <PatientsAge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
