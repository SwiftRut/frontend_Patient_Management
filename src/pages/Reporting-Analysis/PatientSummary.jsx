import { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import classNames from 'classnames';
import apiService from '../../services/api'; // Adjust the path to your API service
import toast from 'react-hot-toast';

const PatientSummary = () => {
  const [activeTab, setActiveTab] = useState('Week');
  const [weeklyData, setWeeklyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await apiService.GetAllPatients(); // Fetch all patients
        const patients = response.data.data; // Assuming the response structure is correct

        // Initialize data structures for weekly and daily data
        const weeklyPatients = Array(7).fill(0).map((_, index) => ({
          day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index],
          newPatient: 0,
          oldPatient: 0,
        }));

        const dailyPatients = Array(24).fill(0).map((_, index) => ({
          hour: `${index} ${index < 12 ? 'AM' : 'PM'}`,
          newPatient: 0,
          oldPatient: 0,
        }));

        const currentDate = new Date();

        // Process each patient to categorize by day and hour
        patients.forEach(patient => {
          const registrationDate = new Date(patient.createdAt);
          const dayOfWeek = registrationDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
          const hourOfDay = registrationDate.getHours();

          if (registrationDate > currentDate) {
            // New patient
            if (dayOfWeek > 0) {
              weeklyPatients[dayOfWeek - 1].newPatient++;
            }
            if (hourOfDay >= 0) {
              dailyPatients[hourOfDay].newPatient++;
            }
          } else {
            // Old patient
            if (dayOfWeek > 0) {
              weeklyPatients[dayOfWeek - 1].oldPatient++;
            }
            if (hourOfDay >= 0) {
              dailyPatients[hourOfDay].oldPatient++;
            }
          }
        });

        setWeeklyData(weeklyPatients);
        setDailyData(dailyPatients);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        toast.error("Error fetching patient data");
      }
    };

    fetchPatientData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const chartData = activeTab === 'Week' ? weeklyData : dailyData;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Patients Summary</h2>
        <div className="flex space-x-2">
          <button
            className={classNames(
              'px-4 py-2 rounded-lg',
              activeTab === 'Week' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleTabChange('Week')}
          >
            Week
          </button>
          <button
            className={classNames(
              'px-4 py-2 rounded-lg',
              activeTab === 'Day' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleTabChange('Day')}
          >
            Day
          </button>
        </div>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={activeTab === 'Week' ? 'day' : 'hour'} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="newPatient" stroke="#FFA500" activeDot={{ r: 8 }} name="New Patient" />
          <Line type="monotone" dataKey="oldPatient" stroke="#1E90FF" name="Old Patient" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientSummary;
