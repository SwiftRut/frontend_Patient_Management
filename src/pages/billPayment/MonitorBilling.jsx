import "../billPayment/monitorBilling.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MonitorBilling() {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  console.log(allBills);
  useEffect(() => {
    getBills();
  }, []);

  return (
    <div className="monitor-section bg-gray">
      <div className="row">
        <div className="main">
          <div className="top flex align-center">
            <div className="heading">
              <h3>Monitor Billing</h3>
            </div>
            <div className="search-btn flex">
              <div className="input flex align-center">
                <div className="search">
                  <CiSearch />
                </div>
                <input type="text" placeholder="Search Patient" />
              </div>
              <button className="edit-btn flex align-center">
                <div className="icon">
                  <RiEditBoxFill />
                </div>
                <div className="text" onClick={() => navigate("/invoice")}>
                  <h3>Edit Design Invoice</h3>
                </div>
              </button>
              <button className="btn flex align-center">
                <div className="icon">
                  <MdAdd />
                </div>
                <div className="text" onClick={() => navigate("/createbill")}>
                  <h3>Create Bills</h3>
                </div>
              </button>
            </div>
          </div>
          <div className="pr-data max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr>
                  <th className="p-3 text-left text-lg font-semibold">Bill Number</th>
                  <th className="p-3 text-left text-lg font-semibold">Patient Name</th>
                  <th className="p-3 text-left text-lg font-semibold">Disease Name</th>
                  <th className="p-3 text-left text-lg font-semibold">Phone Number</th>
                  <th className="py-3 px-7 text-left text-lg font-semibold">Status</th>
                  <th className="p-3 text-left text-lg font-semibold">Date</th>
                  <th className="p-3 text-left text-lg font-semibold">Time</th>
                  <th className="p-3 text-left text-lg font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="time p-3">
                    <h3>5654</h3>
                  </td>
                  <td className="p-3">Alfredo Vaccaro</td>
                  <td className="p-3">Colds and Flu</td>
                  <td className="p-3">89564 25462</td>
                  <td className="status">
                    <h3>Paid</h3>
                  </td>
                  <td className="p-3">2 Jan, 2022</td>
                  <td className="time p-3">
                    <h3>4:30 PM</h3>
                  </td>
                  <td className="action p-3">
                    <div className="view">
                      <FaEye />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="time p-3">
                    <h3>5654</h3>
                  </td>
                  <td className="p-3">Alfredo Vaccaro</td>
                  <td className="p-3">Colds and Flu</td>
                  <td className="p-3">89564 25462</td>
                  <td className="red">
                    <h3>Unpaid</h3>
                  </td>
                  <td className="p-3">2 Jan, 2022</td>
                  <td className="time p-3">
                    <h3>4:30 PM</h3>
                  </td>
                  <td className="action p-3">
                    <div className="view">
                      <FaEye />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
