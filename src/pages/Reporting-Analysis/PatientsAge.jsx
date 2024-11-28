import { FaDotCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useGlobal } from "../../hooks/useGlobal.jsx";

const PatientsAge = () => {
  const { cardData } = useGlobal();
  return (
    <div className="PatientsAge-data w-1/3 h-[350px] p-[10px]">
      <div className="content bg-white p-5 rounded-lg ">
        <div className="head">
          <div className="title">
            <p className="text-[24px] font-bold text-[#030229] border-b border-[#F4F4F4] pb-3">
              Patients Age
            </p>
          </div>
        </div>
        <div className="Summary-status flex pt-2">
          <div className="Patients-data flex w-1/2 bg-[#F6F8FB] rounded-2xl items-center px-5 justify-between">
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
              <div className="text-gray-500">No data available</div> // Placeholder if no data
            )}
          </div>
          <div className="details w-1/2 mt-3">
            <div className="content bg-white rounded-2xl p-2">
              <ul>
                {cardData?.ageRangePercentage?.map((item, index) => (
                  <li
                    key={index}
                    className="age-group flex items-center gap-4 pb-3 text-[15px] font-semibold text-[#4F4F4F]"
                  >
                    <FaDotCircle color={item.color} />
                    <span className="mx-4">{item.name}</span>
                    <span>
                      {cardData?.totalPatientCount > 0
                        ? (
                            (item.value / cardData?.totalPatientCount) *
                            100
                          ).toFixed(1)
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
