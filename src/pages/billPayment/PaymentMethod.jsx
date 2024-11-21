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
      <div className="payment-section">
        <div className="row">
          <div className="main">
            <div className="top flex align-center">
              <div className="heading">
                <h3>Billing Details</h3>
              </div>
              <div className="search-btn flex">
                <div className="input flex align-center">
                  <div className="search">
                    <CiSearch />
                  </div>
                  {/* Input for search functionality */}
                  <input
                    type="text"
                    placeholder="Search Patient Name or Phone"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
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
                      Disease Name
                    </th>
                    <th className="p-3 text-left text-lg font-semibold">
                      Phone Number
                    </th>
                    <th className="p-3 text-left text-lg font-semibold">
                      Status
                    </th>
                    <th className="p-3 text-left text-lg font-semibold">
                      Date
                    </th>
                    <th className="p-3 text-left text-lg font-semibold">
                      Time
                    </th>
                    <th className="p-3 text-left text-lg font-semibold">
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
                      <tr key={index}>
                        <td className="p-3">{data.billNumber}</td>
                        <td className="p-3">
                          {data.patientId
                            ? `${data.patientId.firstName} ${data.patientId.lastName}`
                            : "N/A"}
                        </td>
                        <td className="p-3">{data.diseaseName}</td>
                        <td className="p-3">
                          {data.patientId ? data.patientId.phone : "N/A"}
                        </td>
                        <td
                          className={`p-3 ${
                            data.status === "Paid" ? "status" : "red"
                          }`}
                        >
                          <h3>{data.status}</h3>
                        </td>
                        <td className="p-3">
                          {data.date ? formatDate(data.date) : "N/A"}
                        </td>
                        <td className="p-3">{data.time}</td>
                        <td className="flex action p-3">
                          <div
                            className="edit"
                            onClick={() => navigate(`/editBill/${data._id}`)}
                          >
                            <FaEdit />
                          </div>
                          <div
                            className="view"
                            onClick={() => navigate(`/bill/${data._id}`)}
                          >
                            <FaEye />
                          </div>
                          <div
                            className="delete"
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
