import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useGlobal } from "../../hooks/useGlobal";
// import "../billPayment/monitorBilling.css";

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
    <div className="monitor-section bg-gray-100 p-2">
      <div className="row">
        <div className="main bg-white rounded-lg p-3 h-full">
          {/* Top Section */}
          <div className="top flex justify-between items-center pb-5">
            <div className="heading font-bold text-2xl">
              <h3>Monitor Billing</h3>
            </div>
            <div className="search-btn flex items-center">
              {/* Search Input */}
              <div className="search-btn flex">
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
                  <div className="text-xl text-gray-700">
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Doctor"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent pl-2 text-lg outline-none"
                  />
                </div>
              </div>
              {/* Edit Button */}
              <button
                className="edit-btn flex items-center bg-transparent border border-[#0EABEB] rounded-lg px-3 py-2 ml-3"
                onClick={() => navigate("/editinvoice")}
              >
                <div className="icon bg-white text-[#0EABEB] rounded-sm px-1 text-xl mr-2">
                  <RiEditBoxFill />
                </div>
                <div className="text text-[#0EABEB] font-semibold text-lg">
                  Edit Design Invoice
                </div>
              </button>
              {/* Add Button */}
              <button
                className="btn flex items-center bg-[#0EABEB] rounded-lg px-4 py-2 ml-3"
                onClick={() => navigate("/createbill")}
              >
                <div className="icon bg-white text-blue-400 rounded-sm w-5 h-5 text-xl mr-2">
                  <MdAdd />
                </div>
                <div className="text text-white font-semibold text-lg">
                  Create Bills
                </div>
              </button>
            </div>
          </div>
          {/* Data Table */}
          <div
            className="pr-data h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
            style={{ maxHeight: "calc(100vh - 170px)" }}
          >
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 bg-gray-100 z-10">
                <tr>
                  <th className="p-3 text-center text-lg font-semibold rounded-tl-lg">
                    Bill Number
                  </th>
                  <th className="p-3 text-center text-lg font-semibold">
                    Patient Name
                  </th>
                  <th className="p-3 text-center text-lg font-semibold">
                    Doctor Name
                  </th>
                  <th className="p-3 text-center text-lg font-semibold">
                    Description
                  </th>
                  <th className="py-3 px-7 text-center text-lg font-semibold">
                    Status
                  </th>
                  <th className="p-3 text-center text-lg font-semibold">
                    Date
                  </th>
                  <th className="p-3 text-center text-lg font-semibold">
                    Time
                  </th>
                  <th className="p-3 text-center text-lg font-semibold">
                    Total Amount
                  </th>
                  <th className="p-3 text-center text-lg font-semibold rounded-tr-lg">
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
                    <tr key={bill._id} className="border-b">
                      <td className="text-center p-3 flex justify-center">
                        <h3 className="p-2 bg-[#F6F8FB] rounded-full text-[#718EBF] font-semibold w-[50%]">
                          {bill.billNumber}
                        </h3>
                      </td>
                      <td className="p-2 text-center text-[#4F4F4F] text-lg font-semibold">
                        {bill.patientId
                          ? bill.patientId.firstName +
                            " " +
                            bill.patientId.lastName
                          : "N/A"}
                      </td>
                      <td className="p-2 text-center text-[#4F4F4F] text-lg font-semibold">
                        {bill.doctorId ? bill.doctorId.name : "N/A"}
                      </td>
                      <td className="p-2 text-center text-[#4F4F4F] text-lg font-semibold">
                        {bill.description}
                      </td>
                      <td
                        className={`p-2 ${
                          bill.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : "text-[#E11D29]"
                        } rounded-full text-center font-semibold m-3 `}
                      >
                        <h3 className="bg-red-100 p-2 rounded-full text-center text-lg font-semibold">
                          {bill.status}
                        </h3>
                      </td>
                      <td className="p-2 text-center text-[#4F4F4F] text-lg font-semibold">
                        {formatDate(bill.date)}
                      </td>
                      <td className="p-2 text-center text-[#4F4F4F] text-lg font-semibold">
                        <h3 className="p-2 bg-[#F6F8FB] rounded-full text-[#718EBF] font-semibold w-[90%] text-center">
                          {bill.time}
                        </h3>
                      </td>
                      <td className="p-2 text-center text-[#4F4F4F] text-lg font-semibold">
                        <h3 className="p-2 bg-[#F6F8FB] rounded-full text-[#718EBF] font-semibold w-[90%] text-center">
                          ${bill.totalAmount.toFixed(2)}
                        </h3>
                      </td>
                      <td className="action p-2 flex justify-center">
                        <div
                          className="view text-blue-400 bg-gray-100 rounded-lg p-2 text-center cursor-pointer w-[40%] flex items-center justify-center text-[#4F4F4F] text-lg font-semiboldf"
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
