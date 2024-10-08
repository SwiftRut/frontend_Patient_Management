import React from "react";
import "../dashboard/dashboard.css";
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

const Dashboard = () => {
  return (
    <>
      <div className="deshbord-section">
        <div className="row">
          <div className="main">
            <div className="top flex">
              <div className="Patients-data">
                <div className="total-data flex">
                  <div className="total-Patients">
                    <div className="content">
                      <div className="logo">
                        <FaUsers />
                      </div>
                      <div className="details">
                        <p>Total Patients</p>
                        <span>00</span>
                      </div>
                    </div>
                  </div>
                  <div className="total-Docters">
                    <div className="content">
                      <div className="logo dr-logo">
                        <FaUser />
                      </div>
                      <div className="details">
                        <p>Total Docters</p>
                        <span>00</span>
                      </div>
                    </div>
                  </div>
                  <div className="total-Appointments">
                    <div className="content">
                      <div className="logo appo-logo">
                        <FaFileAlt />
                      </div>
                      <div className="details">
                        <p>Total Appointments</p>
                        <span>00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Patients-Statistics">
                  <div className="patients-content">
                    <div className="head flex">
                      <div className="title">
                        <p>Patients Statistics</p>
                      </div>
                      <div className="menu">
                        <ul className="flex">
                          <li>
                            {" "}
                            <a href="">Year</a>
                          </li>
                          <li>
                            <a href="">Month</a>
                          </li>
                          <li>
                            <a href="">Week</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="graph"></div>
                  </div>
                </div>
              </div>
              <div className="Billing-data">
                <div className="head flex">
                  <div className="title">
                    <p>Billing & Payments</p>
                  </div>
                  <div className="btn">
                    <button className="flex">
                      <FaAddressCard />
                      Create Bills
                    </button>
                  </div>
                </div>
                <div className="pending-bill">
                  <div className="bill-status">
                    <p>
                      Pending Bills : <span>00</span>
                    </p>
                  </div>

                  <div className="pending-bill-data">
                    {/* When there is no data */}

                    {/* <div className="img">
                      <img src="../img/FrameBill.png" alt="" />
                    </div> */}

                    {/* When there is data */}

                    <div className="bill-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Bill No</th>
                            <th>Patient Name </th>
                            <th>Disease Name</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>{" "}
                          <tr>
                            <td className="bill-num">
                              <p>5654</p>
                            </td>

                            <td className="patient-name">
                              <p>Charlie Vaccaro</p>
                            </td>

                            <td className="disease-name">
                              <p>Colds and Flu</p>
                            </td>

                            <td className="status">
                              <p>Paid</p>
                            </td>

                            <td className="action flex">
                              <div className="box flex">
                                <FaEye />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom flex">
              <div className="appointments-data">
                <div className="today-appointments">
                  <div className="appointments-content">
                    <div className="head">
                      <div className="title flex">
                        <p>Todays Appointments List</p>
                        <span>View All</span>
                      </div>
                    </div>
                    {/* When there is no data */}

                    {/* <div className="img">
                      <img src="../img/Frame1.png" alt="" />
                    </div> */}

                    {/* When there is data */}

                    <div className="appointments-list flex">
                      <div className="box">
                        <div className="content">
                          <div className="heading flex">
                            <p>Roger Lubin</p>
                            <span>Onsite</span>
                          </div>
                          <div className="data">
                            <ul>
                              <li>
                                <p>Doctor Name</p>
                                <span>Leo Geidt</span>
                              </li>
                              <li>
                                <p>Disease Name</p>
                                <span>Meningococcal Disease</span>
                              </li>
                              <li>
                                <p>Appointment Time</p>
                                <span>10:00 AM</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="heading flex">
                            <p>Roger Lubin</p>
                            <span>Onsite</span>
                          </div>
                          <div className="data">
                            <ul>
                              <li>
                                <p>Doctor Name</p>
                                <span>Leo Geidt</span>
                              </li>
                              <li>
                                <p>Disease Name</p>
                                <span>Meningococcal Disease</span>
                              </li>
                              <li>
                                <p>Appointment Time</p>
                                <span>10:00 AM</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="heading flex">
                            <p>Roger Lubin</p>
                            <span>Onsite</span>
                          </div>
                          <div className="data">
                            <ul>
                              <li>
                                <p>Doctor Name</p>
                                <span>Leo Geidt</span>
                              </li>
                              <li>
                                <p>Disease Name</p>
                                <span>Meningococcal Disease</span>
                              </li>
                              <li>
                                <p>Appointment Time</p>
                                <span>10:00 AM</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="box">
                        <div className="content">
                          <div className="heading flex">
                            <p>Roger Lubin</p>
                            <span>Onsite</span>
                          </div>
                          <div className="data">
                            <ul>
                              <li>
                                <p>Doctor Name</p>
                                <span>Leo Geidt</span>
                              </li>
                              <li>
                                <p>Disease Name</p>
                                <span>Meningococcal Disease</span>
                              </li>
                              <li>
                                <p>Appointment Time</p>
                                <span>10:00 AM</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="Summary-data">
                <div className="head">
                  <div className="title">
                    <p>Patients Summary</p>
                  </div>
                </div>
                <div className="Summary-status">
                  <div className="Patients-data flex">
                    <div className="img">
                      <img src="../img/Group.png" alt="" />
                    </div>
                    <div className="details">
                      <div className="content">
                        <ul>
                          <li className="new">
                            <FaBox />
                            New Patients <span>0</span>
                          </li>
                          <li className="old">
                            <FaBox />
                            Old Patients <span>0</span>
                          </li>
                          <li className="total">
                            <FaBox />
                            Total Patients <span>0</span>
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
    </>
  );
};

export default Dashboard;
