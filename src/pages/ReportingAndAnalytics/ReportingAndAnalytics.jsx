import React from "react";
import './reportingAnalytics.css'
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

export default function ReportingAndAnalytics() {
  return <div>
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

            <div className="appointment-data">
              <div className="appointment-Statistics">
                <div className="appointment-content">
                  <div className="head flex">
                    <div className="title">
                      <p>Appointment Statistics</p>
                    </div>
                    <div className="menu">
                      <ul className="flex">
                        <li>
                          <a href="">Year</a>
                        </li>
                        <li>
                          <a href="">Month</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="graph">

                  </div>
                </div>
              </div>
            </div>

            <div className="Patients-summary">
              <div className="Patients-Statistics">
                <div className="patients-content">
                  <div className="head flex">
                    <div className="title">
                      <p>Patients Summary</p>
                    </div>
                    <div className="menu">
                      <ul className="flex">
                        <li>
                          <a href="">Year</a>
                        </li>
                        <li>
                          <a href="">Month</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="graph"></div>
                </div>
              </div>
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
                    {/* When there is no data */}

                    {/* <div className="img">
                      <img src="../img/patientCount.png" alt="" />
                    </div> */}

                    {/* When there is data */}

                    <div className="bill-table">
                      <table>
                        <thead>
                          <tr className="flex">
                            <th>Department Name</th>
                            <th>Patient Count </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>1050</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>450</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>350</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>260</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>1050</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>450</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>350</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>260</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>1050</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>450</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>350</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>260</span></p>
                            </td>
                          </tr>
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
                    {/* When there is no data */}

                    {/* <div className="img">
                      <img src="../img/doctorCount.png" alt="" />
                    </div> */}

                    {/* When there is data */}

                    <div className="bill-table">
                      <table>
                        <thead>
                          <tr className="flex">
                            <th>Department Name</th>
                            <th>Patient Count </th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>1050</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>450</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>350</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>260</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>1050</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>450</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>350</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>260</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>1050</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>450</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>350</span></p>
                            </td>
                          </tr>

                          <tr className="flex">
                            <td className="d-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">

                              <p> <FaUsers /><span>260</span></p>
                            </td>
                          </tr>
                        </tbody>

                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            <div className="PatientsAge-data">
              <div className="content">
                <div className="head">
                  <div className="title">
                    <p>Patients Age</p>
                  </div>
                </div>
                <div className="Summary-status">
                  <div className="Patients-data flex">
                    <div className="img">
                      <img src="../img/totalPatient.png" alt="" />
                    </div>
                    <div className="details">
                      <div className="content">
                        <ul>
                          <li className="new">
                            <FaDotCircle />
                            0-2 Years <span> 8%</span>
                          </li>
                          <li className="old">
                            <FaDotCircle />
                            3-12 Yeare <span>12%</span>
                          </li>
                          <li className="total">
                            <FaDotCircle />
                            13-19 Years <span>20%</span>
                          </li>
                          <li className="new">
                            <FaDotCircle />
                            20-39 Years <span> 18%</span>
                          </li>
                          <li className="old">
                            <FaDotCircle />
                            40-59 Years <span>8%</span>
                          </li>
                          <li className="total">
                            <FaDotCircle />
                            60 And Above <span>34%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>;
}
