import { useState, useEffect } from 'react';
import "./dashboard.css";
import { FaUsers, FaUser, FaFileAlt, FaAddressCard, FaEye } from 'react-icons/fa';
import PatientsStatistics from '../../component/PatientComponents/PatientsStatistics.jsx';
import PatientsBreakdown from '../../component/PatientComponents/PatienBreakDown.jsx';
import { useNavigate } from 'react-router-dom';
import apiService from '../../services/api.js';

const Dashboard = () => {
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.GetAllAppointments();
        const data = response.data;
        console.log("appointments>>>", data)
        setTotalAppointments(data.length)
        const today = new Date().toISOString().split('T')[0];
        const filteredAppointments = data.filter(
          (appointment) => appointment.appointmentDate === today
        );
        setTodaysAppointments(filteredAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    const fetchPatients = async () => {
      try {
        const response = await apiService.GetAllPatients();
        const data = response.data.data;
        setTotalPatients(data.length);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await apiService.GetAllDoctors();
        const data = response.data.data;
        setTotalDoctors(data.length);
      } catch (error) {
        console.error('Error fetching doctors:', error);
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
                    <p>Pending Bills : <span>00</span></p>
                  </div>

                  <div className="pending-bill-data">
                    {todaysAppointments.length === 0 ? (
                      <div className="img">
                        <img src="../img/FrameBill.png" alt="No bills available" />
                      </div>
                    ) : (
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
                            {todaysAppointments.map((appointment) => (
                              <tr key={appointment.id}>
                                <td className="bill-num">
                                  <p>{appointment.billNumber}</p>
                                </td>
                                <td className="patient-name">
                                  <p>{appointment.patientId ? appointment.patientId.name : 'Unknown'}</p>
                                </td>
                                <td className="disease-name">
                                  <p>{appointment.description}</p>
                                </td>
                                <td className="status">
                                  <p>{appointment.status}</p>
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
                    )}
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
                        <p>Today`s Appointments List</p>
                        <span>View All</span>
                      </div>
                    </div>

                    {/* If there are no appointments for today, show an image */}
                    {todaysAppointments.length === 0 ? (
                      <div className="img">
                        <img src="../img/Frame1.png" alt="No appointments available" />
                      </div>
                    ) : (
                      <div className="appointments-list flex">
                        {/* Map today's appointments */}
                        {todaysAppointments.map((appointment) => (
                          <div className="box" key={appointment._id}>
                            <div className="content">
                              <div className="heading flex">
                                <p>{appointment.patientName}</p> {/* Assuming patientName exists */}
                                <span>{appointment.type}</span>
                              </div>
                              <div className="data">
                                <ul>
                                  <li>
                                    <p>Doctor Name</p>
                                    <span>{appointment.doctorName}</span> {/* Assuming doctorName exists */}
                                  </li>
                                  <li>
                                    <p>Disease Name</p>
                                    <span>{appointment.diseaseName}</span> {/* Assuming diseaseName exists */}
                                  </li>
                                  <li>
                                    <p>Appointment Time</p>
                                    <span>{appointment.appointmentTime}</span> {/* Assuming appointmentTime exists */}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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
