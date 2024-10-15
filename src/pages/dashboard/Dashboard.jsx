import { useEffect, useState } from "react";
import "./dashboard.css";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaBox } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal.jsx";
import PatientsStatistics from "../../component/PatientComponents/PatientsStatistics.jsx";
import PatientsBreakdown from "../../component/PatientComponents/PatienBreakDown.jsx";
import apiService from "../../services/api.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Dashboard = () => {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todaysAppointments, setTodaysAppointments] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);

  useEffect(() => {
    getBills();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.GetAllAppointments();
        const data = response.data;
        console.log("appointments>>>", data);
        setTotalAppointments(data.length);
        const today = new Date().toISOString().split("T")[0];
        const filteredAppointments = data.filter(
          (appointment) => appointment.appointmentDate === today
        );
        setTodaysAppointments(filteredAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    const fetchPatients = async () => {
      try {
        const response = await apiService.GetAllPatients();
        const data = response.data.data;
        setTotalPatients(data.length);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await apiService.GetAllDoctors();
        const data = response.data.data;
        setTotalDoctors(data.length);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchAppointments();
    fetchPatients();
    fetchDoctors();
  }, []);

  return (
    <>
      <div className="deshbord-section">
        <div className="row">
          <div className="main">
            <div className="top flex">
              <div className="Patients-data">
                <div className="total-data flex mb-4">
                  <div className="total-Patients">
                    <div className="content">
                      <div className="logo">
                        <FaUsers />
                      </div>
                      <div className="details">
                        <p>Total Patients</p>
                        <span>{totalPatients}</span>
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
                        <span>{totalDoctors}</span>
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
                        <span>{totalAppointments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <PatientsStatistics />
              </div>
              <div className="Billing-data">
                <div className="head flex">
                  <div className="title">
                    <p>Billing & Payments</p>
                  </div>
                  <div className="btn">
                    <button className="flex" onClick={() => navigate("/createbill")}>
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
                            <th>Patient Name</th>
                            <th>Disease Name</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {allBills.map((bill) => (
                            <tr key={bill.id}>
                              <td className="bill-num">
                                <p>{bill.billNumber}</p>
                              </td>

                              <td className="patient-name">
                                <p>{bill.patientId ? bill.patientName : "Unknown"}</p>
                              </td>

                              <td className="disease-name">
                                <p>{bill.description}</p>
                              </td>

                              <td className="status">
                                <p>{bill.status}</p>
                              </td>

                              <td className="action flex">
                                <div className="box flex">
                                  <FaEye />
                                </div>
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
              <PatientsBreakdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
