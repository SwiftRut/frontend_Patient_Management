import { FaDotCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useGlobal } from "../../hooks/useGlobal.jsx";

const PatientsAge = () => {
  const { cardData } = useGlobal();
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
            {cardData?.ageRangePercentage?.length > 0 ? ( // Check if data is not empty
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={cardData?.ageRangePercentage}
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
                    {cardData?.ageRangePercentage?.map((entry, index) => (
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
                {cardData?.ageRangePercentage?.map((item, index) => (
                  <li key={index} className="age-group flex my-2">
                    <FaDotCircle color={item.color} />
                    <span className="mx-4">{item.name}</span>
                    <span>
                      {cardData?.totalPatientCount > 0
                        ? ((item.value / cardData?.totalPatientCount) * 100).toFixed(1)
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
