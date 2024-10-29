import { useEffect, useState } from "react";
import {
  FaUsers,
  FaUser,
  FaFileAlt,
  FaAddressCard,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal.jsx";
import PatientsStatistics from "../../component/PatientComponents/PatientsStatistics.jsx";
import PatientsBreakdown from "../../component/PatientComponents/PatienBreakDown.jsx";
import apiService from "../../services/api.js";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);

  console.log("todaysAppointments", todaysAppointments);

  useEffect(() => {
    getBills();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.GetAllTodayAppointments();
        const data = response.data;
        setTotalAppointments(data.length);

        const today = new Date().toISOString().split("T")[0];

        const filteredAppointments = data.filter(
          (appointment) =>
            new Date(appointment.date).toISOString().split("T")[0] === today
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
                        <p>Total Doctors</p>
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
                    <button
                      className="flex"
                      onClick={() => navigate("/createbill")}
                    >
                      <FaAddressCard />
                      Create Bills
                    </button>
                  </div>
                </div>
                <div className="pending-bill">
                  <div className="bill-status">
                    <p>
                      Pending Bills : <span>{allBills.length}</span>
                    </p>
                  </div>

                  <div className="pending-bill-data">
                    {allBills.length === 0 ? (
                      <div className="img">
                        <img src="../img/FrameBill.png" alt="No Billing Data" />
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
                            {allBills.map((bill) => (
                              <tr key={bill.id}>
                                <td className="bill-num">
                                  <p>{bill.billNumber}</p>
                                </td>
                                <td className="patient-name">
                                  <p>{`${bill.patientId?.firstName} ${bill.patientId?.lastName}`}</p>
                                </td>
                                <td className="disease-name">
                                  <p>{bill.diseaseName}</p>
                                </td>
                                <td
                                  className={
                                    bill.status == "paid" ? "status" : "status1"
                                  }
                                >
                                  <p>{bill.status}</p>
                                </td>
                                <td className="action flex">
                                  <div
                                    className="box flex"
                                    onClick={() => navigate(`/bill/${bill.id}`)}
                                  >
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
                        <p>Todays Appointments List</p>
                        <span>View All</span>
                      </div>
                    </div>

                    {todaysAppointments.length === 0 ? (
                      <div className="img">
                        <img
                          src="../img/Frame1.png"
                          alt="No Appointments Data"
                        />
                      </div>
                    ) : (
                      <div className="appointments-list flex">
                        {todaysAppointments.map((appointment, index) => (
                          <div className="box" key={index}>
                            <div className="content">
                              <div className="heading flex">
                                <p className="text-[15px]">{appointment.patientId.firstName} {appointment.patientId.lastName}</p>
                                <span className="">{appointment.type}</span>
                              </div>
                              <div className="data">
                                <ul>
                                  <li>
                                    <p>Doctor Name</p>
                                    <span>Dr. {appointment?.doctorId?.name}</span>
                                  </li>
                                  <li>
                                    <p>Disease Name</p>
                                    <span>{appointment?.patient_issue}</span>
                                  </li>
                                  <li>
                                    <p>Appointment Time</p>
                                    <span>
                                      {appointment?.appointmentTime && 
                                        new Date(appointment.appointmentTime).toLocaleTimeString([], { 
                                          hour: '2-digit', 
                                          minute: '2-digit', 
                                          hour12: true 
                                        })
                                      }
                                    </span>
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
