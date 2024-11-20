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
import toast from "react-hot-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todaysAppointments, setTodaysAppointments] = useState([]);
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const response = await apiService.GetallAppointmentsForCount();
        if (response && response.data && Array.isArray(response.data)) {
          const data = response.data;
          setTotalAppointments(data.length);
        } else {
          console.error("Unexpected response structure:", response);
          setTotalAppointments(0);
        }
      } catch (error) {
        console.error("Error fetching all appointments:", error);
        toast.error("Error fetching all appointments");
        setTotalAppointments(0);
      }
    };

    const fetchTodaysAppointments = async () => {
      try {
        const response = await apiService.GetAllTodayAppointments();
        const data = response.data;

        const today = new Date().toISOString().split("T")[0];

        const filteredAppointments = data.filter(
          (appointment) =>
            new Date(appointment.date).toISOString().split("T")[0] === today
        );
        setTodaysAppointments(filteredAppointments);
      } catch (error) {
        console.error("Error fetching today's appointments:", error);
        toast.error("Error fetching today's appointments");
      }
    };

    const fetchPatients = async () => {
      try {
        const response = await apiService.GetAllPatients();
        const data = response.data.data;
        setTotalPatients(data.length);
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Error fetching patients")
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await apiService.GetAllDoctors();
        const data = response.data.data;
        setTotalDoctors(data.length);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast.error("Error fetching doctors");
      }
    };

    fetchAllAppointments();
    fetchTodaysAppointments();
    fetchPatients();
    fetchDoctors();
    getBills();
  }, []);

  return (
    <>
      <div className="deshbord-section">
        <div className="row">
          <div className="main">
            <div class="top flex px-5 pt-5 pb-2">
              <div class="Patients-data w-[58%] px-4">
                <div class="total-data flex justify-between items-center mb-4">
                  <div class="total-Patients w-[32%] bg-white rounded-lg p-4">
                    <div class="content flex items-center">
                      <div class="logo w-12 h-12 rounded-full bg-[#2e779326] flex justify-center items-center">
                        <FaUsers class="text-[#2e7793] w-7" />
                      </div>
                      <div class="details pl-4">
                        <p class="text-gray-400 text-sm font-normal">Total Patients</p>
                        <span class="block text-[#030229] text-2xl font-extrabold">{totalPatients}</span>
                      </div>
                    </div>
                  </div>
                  <div class="total-Docters w-[32%] bg-white rounded-lg p-4">
                    <div class="content flex items-center">
                      <div class="logo dr-logo w-12 h-12 rounded-full bg-[#5e5e9e26] flex justify-center items-center">
                        <FaUser class="text-[#5e5e9e] w-7" />
                      </div>
                      <div class="details pl-4">
                        <p class="text-gray-400 text-sm font-normal">Total Doctors</p>
                        <span class="block text-[#030229] text-2xl font-extrabold">{totalDoctors}</span>
                      </div>
                    </div>
                  </div>
                  <div class="total-Appointments w-[32%] bg-white rounded-lg p-4">
                    <div class="content flex items-center">
                      <div class="logo appo-logo w-12 h-12 rounded-full bg-[#41b16126] flex justify-center items-center">
                        <FaFileAlt class="text-[#41b161] w-7" />
                      </div>
                      <div class="details pl-4">
                        <p class="text-gray-400 text-sm font-normal">Total Appointments</p>
                        <span class="block text-[#030229] text-2xl font-extrabold">{totalAppointments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <PatientsStatistics />
              </div>

              <div class="Billing-data w-[42%] bg-white rounded-lg p-4">
                <div class="head flex justify-between items-center mb-4">
                  <div class="title">
                    <p class="text-[#030229] text-xl font-bold">Billing & Payments</p>
                  </div>
                  <div class="btn">
                    <button
                      class="flex items-center justify-center text-white text-lg font-semibold px-3 py-2 rounded-md bg-[#0eabeb] gap-2"
                      onClick={() => navigate("/createbill")}
                    >
                      <FaAddressCard class="text-white" />
                      Create Bills
                    </button>
                  </div>
                </div>
                <div class="pending-bill h-[85%]">
                  <div class="bill-status pt-2">
                    <p class="text-[#030229] text-base font-semibold">
                      Pending Bills: <span>{allBills.length}</span>
                    </p>
                  </div>
                  <div class="pending-bill-data pt-10 h-[90%]">
                    {allBills.length === 0 ? (
                      <div class="img">
                        <img src="../img/FrameBill.png" alt="No Billing Data" class="mx-auto" />
                      </div>
                    ) : (
                      <div class="bill-table h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#030229] scrollbar-track-gray-200">
                        <table class="w-full px-2">
                          <thead>
                            <tr class="bg-gray-100">
                              <th class="text-[#030229] text-sm font-semibold px-4 py-3">Bill No</th>
                              <th class="text-[#030229] text-sm font-semibold px-4 py-3">Patient Name</th>
                              <th class="text-[#030229] text-sm font-semibold px-4 py-3">Disease Name</th>
                              <th class="text-[#030229] text-sm font-semibold px-4 py-3">Status</th>
                              <th class="text-[#030229] text-sm font-semibold px-4 py-3">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {allBills.map((bill) => (
                              <tr key={bill.id}>
                                <td class="bill-num px-2 py-1">
                                  <p class="text-[#718ebf] bg-gray-100 rounded-full text-center px-4 py-1">{bill.billNumber}</p>
                                </td>
                                <td class="patient-name px-2 py-1">
                                  <p class="text-gray-700 text-xs font-medium">{`${bill.patientId?.firstName} ${bill.patientId?.lastName}`}</p>
                                </td>
                                <td class="disease-name px-2 py-1">
                                  <p class="text-gray-700 text-xs font-medium">{bill.diseaseName}</p>
                                </td>
                                <td class={`${bill.status === "paid" ? "status" : "status1"} px-2 py-1`}>
                                  <p class={`${bill.status === "paid" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"} text-sm font-semibold px-5 py-1 rounded-full`}>
                                    {bill.status}
                                  </p>
                                </td>
                                <td class="action flex justify-center items-center px-2 py-1">
                                  <div
                                    class="box w-7 h-7 bg-gray-100 flex items-center justify-center rounded-md cursor-pointer"
                                    onClick={() => navigate(`/bill/${bill.id}`)}
                                  >
                                    <FaEye class="text-[#0eabeb]" />
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
            <div className="bottom flex px-[20px] py-[10px] pb-[30px]">
              <div class="appointments-data w-[58%] px-[15px]">
                <div class="today-appointments">
                  <div class="appointments-content bg-white p-5 rounded-lg h-[330px]">
                    <div class="head">
                      <div class="title flex justify-between items-center">
                        <p class="text-xl font-semibold">Today's Appointments List</p>
                        <span class="text-blue-500 cursor-pointer">View All</span>
                      </div>
                    </div>

                    {todaysAppointments.length === 0 ? (
                      <div className="img h-[85%] pt-5">
                        <img
                          src="../img/Frame1.png"
                          alt="No Appointments Data"
                          className="object-cover mx-auto h-full w-[217px]"
                        />
                      </div>
                    ) : (
                      <div class="appointments-list h-[80%] flex overflow-y-scroll scrollbar-thin scrollbar-thumb-[#030229] scrollbar-track-[#f4f4f4]">
                        {todaysAppointments.map((appointment, index) => (
                          <div class="box w-1/3 p-2" key={index}>
                            <div class="content">
                              <div class="heading flex justify-between items-center bg-[#f6f8fb] p-3 rounded-t-lg">
                                <p class="text-sm font-semibold">{appointment.patientId.firstName} {appointment.patientId.lastName}</p>
                                <span>{appointment.type}</span>
                              </div>
                              <div class="data border border-[#f4f4f4] p-3">
                                <ul>
                                  <li>
                                    <p class="text-sm text-[#818194]">Doctor Name</p>
                                    <span class="text-sm font-semibold text-[#4f4f4f]">Dr. {appointment?.doctorId?.name}</span>
                                  </li>
                                  <li>
                                    <p class="text-sm text-[#818194]">Disease Name</p>
                                    <span class="text-sm font-semibold text-[#4f4f4f]">{appointment?.patient_issue}</span>
                                  </li>
                                  <li>
                                    <p class="text-sm text-[#818194]">Appointment Time</p>
                                    <span class="text-sm font-semibold text-[#4f4f4f]">
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
