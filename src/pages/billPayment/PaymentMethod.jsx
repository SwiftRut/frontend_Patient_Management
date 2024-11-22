// import "../billPayment/paymentMethod.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobal } from "../../hooks/useGlobal"; // Ensure you import useGlobal here
import CashPayment from "./CashPayment";
import { FaWallet } from "react-icons/fa";

export default function PaymentMethod() {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPayment, setIsPayment] = useState(false);
  const [billData, setBillData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to open the payment modal
  const openModal = (data) => {
    setBillData(data);
    setIsPayment(true);
  };

  // Fetch bills when the component mounts
  useEffect(() => {
    const fetchBills = async () => {
      setLoading(true);
      await getBills();
      setLoading(false);
    };
    fetchBills();
  }, []);

  // Filter the fetched bills based on the search query
  const filteredData = allBills.filter((data) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      data.billNumber.toString().toLowerCase().includes(lowerCaseQuery) ||
      (data.patientId &&
        data.patientId.firstName.toLowerCase().includes(lowerCaseQuery)) ||
      (data.patientId &&
        data.patientId.phoneNumber.toLowerCase().includes(lowerCaseQuery)) ||
      data.diseaseName.toLowerCase().includes(lowerCaseQuery)
    );
  });

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="bg-[#F6F8FB] p-[20px]">
      <div className="main bg-white rounded-lg m-2h-full p-5">
        <div className="top flex items-center justify-between p-2 pb-5">
          <div className="heading font-bold text-2xl">Billing Details</div>
          <div className="search-btn flex items-center">
            <div className="input flex items-center py-2 px-3 bg-gray-100 border border-gray-300 rounded-full w-[350px] text-lg">
              <div className="search text-black text-xl">
                <CiSearch />
              </div>
              <input
                type="text"
                placeholder="Search Patient Name or Phone"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent pl-2 flex-1"
              />
            </div>
          </div>
        </div>
        <div
          className="pr-data overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
          style={{ maxHeight: "calc(100vh - 200px)" }}
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
                  Disease Name
                </th>
                <th className="p-3 text-center text-lg font-semibold">
                  Phone Number
                </th>
                <th className="p-3 text-center text-lg font-semibold">
                  Status
                </th>
                <th className="p-3 text-center text-lg font-semibold">Date</th>
                <th className="p-3 text-center text-lg font-semibold">Time</th>
                <th className="p-3 text-center text-lg font-semibold rounded-tr-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="p-3 text-center">
                    Loading...
                  </td>
                </tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((data, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="p-2 text-lg text-center flex justify-center">
                      <h3 className="p-2 bg-[#F6F8FB] rounded-full text-[#718EBF] font-semibold w-[50%]">
                        {data.billNumber}
                      </h3>
                    </td>
                    <td className="p-2 text-[#4F4F4F] text-lg font-semibold text-center">
                      {data.patientId
                        ? `${data.patientId.firstName} ${data.patientId.lastName}`
                        : "N/A"}
                    </td>
                    <td className="p-2 text-[#4F4F4F] text-lg font-semibold text-center">
                      {data.diseaseName}
                    </td>
                    <td className="p-2 text-[#4F4F4F] text-lg font-semibold text-center">
                      {data.patientId ? data.patientId.phone : "N/A"}
                    </td>
                    <td
                      className={`p-2 ${
                        data.status === "Paid"
                          ? "text-green-700 bg-green-100"
                          : "text-[#E11D29]"
                      } rounded-full px-2 py-1 text-center w-[120px] font-semibold`}
                    >
                      <h3 className="bg-red-100 p-2 rounded-full text-center text-lg font-semibold text-[#E11D29]">
                        {data.status}
                      </h3>
                    </td>
                    <td className="p-2 text-[#4F4F4F] text-lg font-semibold text-center">
                      {data.date ? formatDate(data.date) : "N/A"}
                    </td>
                    <td className="p-2 text-[#4F4F4F] text-lg font-semibold text-center">
                      {data.time}
                    </td>
                    <td className="flex items-center justify-center p-2 text-[#4F4F4F] text-lg font-semibold space-x-3 text-center">
                      <div
                        className="edit text-green-700 bg-gray-100 rounded-lg p-2 text-lg cursor-pointer"
                        onClick={() => navigate(`/editBill/${data._id}`)}
                      >
                        <FaEdit />
                      </div>
                      <div
                        className="view text-blue-500 bg-gray-100 rounded-lg p-2 text-lg cursor-pointer"
                        onClick={() => navigate(`/bill/${data._id}`)}
                      >
                        <FaEye />
                      </div>
                      <div
                        className="delete text-gray-800 bg-gray-100 rounded-lg p-2 text-lg cursor-pointer"
                        onClick={() => openModal(data)}
                      >
                        <FaWallet />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-3 text-center">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      </div>

      {isPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <CashPayment setIsPayment={setIsPayment} billData={billData} />
          </div>
        </div>
      )}
    </>
  );
}
