import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import classNames from "classnames";
import apiService from "../../services/api";

const AppointmentGraph = () => {
  const [activeTab, setActiveTab] = useState("Year");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const response = await apiService.GetAllPatients();
        setAppointments(response.data.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    getPatientData();
  }, []);

  const yearlyData = Array(12)
    .fill(0)
    .map((_, index) => ({
      month: new Date(0, index).toLocaleString("default", { month: "short" }),
      onlineConsultation: 0,
      otherAppointment: 0,
    }));

  const currentMonth = new Date().getMonth();
  const monthlyData = {
    month: new Date().toLocaleString("default", { month: "short" }),
    onlineConsultation: 0,
    otherAppointment: 0,
  };

  appointments.forEach((appointment) => {
    const appointmentDate = new Date(appointment.createdAt);
    const monthIndex = appointmentDate.getMonth();

    if (isNaN(appointmentDate.getTime())) {
      console.warn("Invalid appointment date:", appointment.createdAt);
      return;
    }

    if (monthIndex >= 0 && monthIndex < 12) {
      yearlyData[monthIndex].otherAppointment++;
    }

    if (appointmentDate.getMonth() === currentMonth) {
      monthlyData.otherAppointment++;
    }
  });

  const finalYearlyData = yearlyData;
  const finalMonthlyData = [monthlyData];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Appointment</h2>
        <div className="flex space-x-2">
          <button
            className={classNames(
              "px-4 py-2 rounded-lg",
              activeTab === "Year"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            )}
            onClick={() => handleTabChange("Year")}
          >
            Year
          </button>
          <button
            className={classNames(
              "px-4 py-2 rounded-lg",
              activeTab === "Month"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            )}
            onClick={() => handleTabChange("Month")}
          >
            Month
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={activeTab === "Year" ? finalYearlyData : finalMonthlyData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={activeTab === "Year" ? "month" : "month"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="onlineConsultation"
            fill="#1E90FF"
            name="Online Consultation"
          />
          <Bar
            dataKey="otherAppointment"
            fill="#00BFFF"
            name="Other Appointment"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentGraph;
