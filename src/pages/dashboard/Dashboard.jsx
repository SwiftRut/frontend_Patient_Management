import React, { useEffect, useState } from 'react'
import '../dashboard/dashboard.css'
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
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState('Week');
  const pieData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Product Distribution',
        data: [40, 30, 30],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Product Distribution' },
    },
  };
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Patients',
      data: [],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });

  useEffect(() => {
    updateChartData();
  }, [timePeriod]);

  const updateChartData = () => {
    let labels, data;
    switch (timePeriod) {
      case 'Year':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        data = [1000, 1500, 2000, 1800, 2200, 2600, 2400, 2800, 3000, 3200, 3400, 3600];
        break;
      case 'Month':
        labels = [...Array(30)].map((_, i) => i + 1);
        data = [...Array(30)].map(() => Math.floor(Math.random() * 100) + 50);
        break;
      default: // Week
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        data = [20, 28, 18, 34, 18, 28, 36];
    }

    setChartData({
      labels,
      datasets: [
        {
          label: 'Patients',
          data: data,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patient Statistics',
      },
    },
  };
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 190, 300, 500, 200],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Monthly Sales Data' },
    },
  };

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
                    <div className="graph">
                    <Line data={lineData} options={lineOptions} />
                    </div>
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
                      {/* <img src="../img/Group.png" alt="" /> */}
                      <Pie data={pieData} options={pieOptions} />
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
