import { FaDotCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import apiService from "../../services/api"; // Adjust path if necessary

const PatientsAge = () => {
  const [data, setData] = useState([]); // Start with an empty array
  const [totalPatients, setTotalPatients] = useState(0);

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const response = await apiService.GetAllPatients();
        // console.log("API Response Patients:", response.data.data); // Log the entire response

        // Check if the patients array exists in the response
        const patientData = response.data.data; // Adjust based on actual response structure

        // Check if patientData is an array
        if (!Array.isArray(patientData)) {
          throw new Error("Expected patientData to be an array");
        }

        // Initialize age groups
        const ageGroups = {
          "0-2 Years": 0,
          "3-12 Years": 0,
          "13-19 Years": 0,
          "20-39 Years": 0,
          "40-59 Years": 0,
          "60 And Above": 0,
        };

        // Process each patient to categorize by age group
        patientData.forEach((patient) => {
          const age = patient.age; // Assuming age is a property in the patient object
          if (age <= 2) ageGroups["0-2 Years"]++;
          else if (age <= 12) ageGroups["3-12 Years"]++;
          else if (age <= 19) ageGroups["13-19 Years"]++;
          else if (age <= 39) ageGroups["20-39 Years"]++;
          else if (age <= 59) ageGroups["40-59 Years"]++;
          else ageGroups["60 And Above"]++;
        });

        // Convert ageGroups object to array format for the chart
        const formattedData = Object.keys(ageGroups).map((key, index) => ({
          name: key,
          value: ageGroups[key],
          color: index < 6 ? ["#F65D79", "#506EF2", "#51D2A6", "#F6A52D", "#FACF2E", "#9253E1"][index] : "#8884d8", // Default color if not provided
        }));

        // console.log("Formatted Data for Chart:", formattedData); // Log formatted data

        setData(formattedData);

        // Calculate total patients
        const total = formattedData.reduce((acc, cur) => acc + cur.value, 0);
        setTotalPatients(total);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    getPatientData();
  }, []);

  // console.log("Current Data State:", data); // Log current data state

  return (
    <div className="PatientsAge-data">
      <div className="content">
        <div className="head">
          <div className="title">
            <p>Patients Age</p>
          </div>
        </div>
        <div className="Summary-status flex">
          <div className="Patients-data flex w-1/2">
            {/* Render the PieChart with dynamic data */}
            {data.length > 0 ? ( // Check if data is not empty
              <ResponsiveContainer height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={5}
                    cornerRadius={10}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={index === 1 ? "#FFFF" : "none"}
                        strokeWidth={index === 1 ? 3 : 0}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div>No data available</div> // Placeholder if no data
            )}
          </div>
          <div className="details w-1/2">
            <div className="content mt-3">
              <ul>
                {data.map((item, index) => (
                  <li key={index} className="age-group flex my-2">
                    <FaDotCircle color={item.color} />
                    <span className="mx-4">{item.name}</span>
                    <span>
                      {totalPatients > 0
                        ? ((item.value / totalPatients) * 100).toFixed(1)
                        : 0}
                      %
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsAge;
