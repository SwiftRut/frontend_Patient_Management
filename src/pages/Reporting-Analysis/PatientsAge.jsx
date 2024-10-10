import { FaDotCircle } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const PatientsAge = () => {
  const data = [
    { name: "0-2 Years", value: 8, color: "#F65D79" },
    { name: "3-12 Years", value: 12, color: "#506EF2" },
    { name: "13-19 Years", value: 20, color: "#51D2A6" },
    { name: "20-39 Years", value: 18, color: "#F6A52D" },
    { name: "40-59 Years", value: 8, color: "#FACF2E" },
    { name: "60 And Above", value: 34, color: "#9253E1" },
  ];

  const totalPatients = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="PatientsAge-data">
      <div className="content">
        <div className="head">
          <div className="title">
            <p>Patients Age</p>
          </div>
        </div>
        <div className="Summary-status">
          <div className="Patients-data flex">
            <div className="img">
              <img src="../img/totalPatient.png" alt="" />
            </div>
            <div className="details">
              <div className="content">
                <ul>
                  <li className="new">
                    <FaDotCircle />
                    0-2 Years <span> 8%</span>
                  </li>
                  <li className="old">
                    <FaDotCircle />
                    3-12 Yeare <span>12%</span>
                  </li>
                  <li className="total">
                    <FaDotCircle />
                    13-19 Years <span>20%</span>
                  </li>
                  <li className="new">
                    <FaDotCircle />
                    20-39 Years <span> 18%</span>
                  </li>
                  <li className="old">
                    <FaDotCircle />
                    40-59 Years <span>8%</span>
                  </li>
                  <li className="total">
                    <FaDotCircle />
                    60 And Above <span>34%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsAge;
