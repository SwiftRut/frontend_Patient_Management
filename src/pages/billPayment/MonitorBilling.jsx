import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useGlobal } from "../../hooks/useGlobal";
import "../billPayment/monitorBilling.css";

export default function MonitorBilling() {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBills = async () => {
      setLoading(true);
      await getBills();
      setLoading(false);
    };
    fetchBills();
  }, []);

  const filteredBills = allBills.filter(
    (bill) =>
      bill.billNumber.toString().includes(searchQuery.toLowerCase()) ||
      (bill.patientId &&
        bill.patientId.firstName &&
        bill.patientId.firstName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) ||
      (bill.doctorId &&
        bill.doctorId.firstName &&
        bill.doctorId.firstName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()))
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
                <input
                  type="text"
                  placeholder="Search Bill Number, Patient or Doctor"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="edit-btn flex align-center"
                onClick={() => navigate("/editinvoice")}
              >
                <div className="icon">
                  <RiEditBoxFill />
                </div>
                <div className="text" onClick={() => navigate("/editinvoice")}>
                  <h3>Edit Design Invoice</h3>
                </div>
              </button>
              <button
                className="btn flex align-center"
                onClick={() => navigate("/invoice")}
              >
                <div className="icon">
                  <MdAdd />
                </div>
                <div className="text">
                  <h3>Create Bills</h3>
                </div>
              </button>
            </div>
          </div>
          <div
            className="pr-data h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
            style={{ maxHeight: "calc(100vh - 260px)" }}
          >
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr>
                  <th className="p-3 text-left text-lg font-semibold">
                    Bill Number
                  </th>
                  <th className="p-3 text-left text-lg font-semibold">
                    Patient Name
                  </th>
                  <th className="p-3 text-left text-lg font-semibold">
                    Doctor Name
                  </th>
                  <th className="p-3 text-left text-lg font-semibold">
                    Description
                  </th>
                  <th className="py-3 px-7 text-left text-lg font-semibold">
                    Status
                  </th>
                  <th className="p-3 text-left text-lg font-semibold">Date</th>
                  <th className="p-3 text-left text-lg font-semibold">Time</th>
                  <th className="p-3 text-left text-lg font-semibold">
                    Total Amount
                  </th>
                  <th className="p-3 text-left text-lg font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="9" className="p-3 text-center">
                      Loading...
                    </td>
                  </tr>
                ) : filteredBills.length > 0 ? (
                  filteredBills.map((bill) => (
                    <tr key={bill._id} className="border-t">
                      <td className="p-3">{bill.billNumber}</td>
                      <td className="p-3">
                        {bill.patientId
                          ? bill.patientId.firstName +
                            " " +
                            bill.patientId.lastName
                          : "N/A"}
                      </td>
                      <td className="p-3">
                        {bill.doctorId ? bill.doctorId.name : "N/A"}
                      </td>
                      <td className="p-3">{bill.description}</td>
                      <td
                        className={`p-3 ${
                          bill.status === "Paid" ? "status" : "red"
                        }`}
                      >
                        <h3>{bill.status}</h3>
                      </td>
                      <td className="p-3">{formatDate(bill.date)}</td>
                      <td className="p-3">{bill.time}</td>
                      <td className="p-3">${bill.totalAmount.toFixed(2)}</td>
                      <td className="action p-3">
                        <div
                          className="view"
                          onClick={() => navigate(`/bill/${bill._id}`)}
                        >
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="p-3 text-center">
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
