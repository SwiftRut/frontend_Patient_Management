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
      <div className="deshbord-section main-content">
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
                    {/* <div className="img">
                      <img src="../img/FrameBill.png" alt="" />
                    </div> */}

                    <div className="bill-table">
                      <div className="table">
                        <table>
                          <thead>
                            <tr className="table-heading">
                              <th>Doctor Name</th>
                              <th>Gender</th>
                              <th>Qualification</th>
                              <th>Specialty</th>
                              <th>Working Time</th>
                              <th>Patient Check Up Time</th>
                              <th>Break Time</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="flex align-center">
                                <div className="avatar">
                                  <img src="/img/Avatar.png" />
                                </div>
                                <div className="name">
                                  <h3>Dr. Marcus Philips</h3>
                                </div>
                              </td>
                              <td>
                                <BsGenderFemale className="gender" />
                              </td>
                              <td>MBBS</td>
                              <td>Internal Medicine</td>
                              <td className="time">
                                <h3>6 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>4 Hour</h3>
                              </td>
                              <td className="time">
                                <h3>1 Hour</h3>
                              </td>
                              <td className="flex action">
                                <div className="edit">
                                  <FaEdit />
                                </div>
                                <div className="view">
                                  <FaEye />
                                </div>
                                <div className="delete">
                                  <MdDelete />
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
            </div>

            <div className="bottom flex">
              <div className="appointments-data">
                <div className="today-appointments">
                  <div className="appointments-content">
                    <div className="head">
                      <div className="title">
                        <p>Todays Appointments List</p>
                      </div>
                    </div>
                    <div className="img">
                      <img src="../img/Frame1.png" alt="" />
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
