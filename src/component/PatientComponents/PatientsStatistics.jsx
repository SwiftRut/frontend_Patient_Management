import { useState, useEffect } from 'react'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
import apiService from '../../services/api'; 

const PatientsStatistics = () => {
  const [timePeriod, setTimePeriod] = useState('Year'); 
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 

  // Function to fetch all patients data
  const fetchAllPatients = async () => {
    try {
      const response = await apiService.GetAllPatients();
      console.log("Fetched patient data:", response.data.data); 

      // Initialize an array to hold counts for each month (1-12)
      const monthlyCounts = Array(12).fill(0);

      // Iterate through the patients and count them by month
      response.data.data.forEach(patient => {
        const month = new Date(patient.createdAt).getMonth(); // Get the month (0-11)
        monthlyCounts[month] += 1; // Increment the count for the corresponding month
      });

      // Prepare the processed data for the chart
      const processedData = monthlyCounts.map((count, index) => ({
        month: index + 1, // Month number (1-12)
        patients: count, // Count of patients for that month
      }));

      console.log("Processed Data:", processedData);

      setData(processedData);
      setError(null); 
    } catch (error) {
      console.error("Failed to fetch patient data", error);
      setError('Failed to fetch patient data.'); 
    }
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
    fetchAllPatients(); 
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAllPatients(); 
  }, []);

  // Array of month names
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="bg-white p-4 rounded-lg" style={{ width: "100%", marginTop: "0px", height: "350px" }}>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <div><h2 className="text-xl pb-2 fw-bold font-semibold">Patients Statistics</h2></div>
        <div className="button-group d-flex mb-2 shadow-sm rounded text-gray-500" style={{ position: 'relative', backgroundColor: 'transparent' }}>
          <button className=" mx-2 px-2 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Year')}>Year</button>
          <button className=" btn-white px-2 py-2 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Month')}>Month</button>
          <button className=" mx-2 px-2 me-3 hover:bg-[#0EABEB] hover:text-white" onClick={() => handleTimePeriodChange('Week')}>Week</button>
        </div>
      </div>
      {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} stroke="#ccc" /> {/* Show only horizontal lines */}
          <XAxis 
            dataKey="month" 
            ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} // Set X-axis ticks to months 1-12
            tickFormatter={(month) => monthNames[month - 1]} // Format the tick labels to month names
          />
          <YAxis 
            domain={[0, 'dataMax + 5']} // Set the domain to start from 0 and extend a bit above the max value
            ticks={[0, 5, 10, 15, 20, 25, 30]} // Customize ticks based on expected patient counts
          />
          <Tooltip content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div className='grid px-2' style={{ backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px' }}>
                  <span>Patients</span> <span>{payload[0].value}</span> {/* Show only the number of patients */}
                </div>
              );
            }
            return null;
          }} />
          <Legend />
          <Line type="monotone" dataKey="patients" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientsStatistics;
