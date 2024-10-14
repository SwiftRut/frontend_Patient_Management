import "../billPayment/paymentMethod.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentMethod() {
  const navigate = useNavigate();

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Array with 20 data objects
  const billingData = [
    {
      billNumber: "5654",
      patientName: "Alfredo Vaccaro",
      diseaseName: "Colds and Flu",
      phoneNumber: "89564 25462",
      status: "Paid",
      date: "2 Jan, 2022",
      time: "4:30 PM",
    },
    {
      billNumber: "5655",
      patientName: "John Doe",
      diseaseName: "Hypertension",
      phoneNumber: "86564 25612",
      status: "Unpaid",
      date: "3 Jan, 2022",
      time: "10:15 AM",
    },
    {
      billNumber: "5656",
      patientName: "Jane Smith",
      diseaseName: "Diabetes",
      phoneNumber: "96564 25341",
      status: "Paid",
      date: "5 Jan, 2022",
      time: "2:45 PM",
    },
    {
      billNumber: "5657",
      patientName: "Mark Johnson",
      diseaseName: "Allergies",
      phoneNumber: "78564 25987",
      status: "Unpaid",
      date: "7 Jan, 2022",
      time: "1:30 PM",
    },
    {
      billNumber: "5658",
      patientName: "Emily Clark",
      diseaseName: "Asthma",
      phoneNumber: "69564 25789",
      status: "Paid",
      date: "9 Jan, 2022",
      time: "9:00 AM",
    },
    {
      billNumber: "5659",
      patientName: "Carlos Ramos",
      diseaseName: "Heart Disease",
      phoneNumber: "76564 25123",
      status: "Unpaid",
      date: "11 Jan, 2022",
      time: "11:30 AM",
    },
    {
      billNumber: "5660",
      patientName: "Lisa Brown",
      diseaseName: "Cold",
      phoneNumber: "89564 25477",
      status: "Paid",
      date: "13 Jan, 2022",
      time: "5:00 PM",
    },
    {
      billNumber: "5661",
      patientName: "Michael White",
      diseaseName: "Fever",
      phoneNumber: "78564 25999",
      status: "Unpaid",
      date: "14 Jan, 2022",
      time: "12:00 PM",
    },
    {
      billNumber: "5662",
      patientName: "Sandra Green",
      diseaseName: "Kidney Stones",
      phoneNumber: "86564 25888",
      status: "Paid",
      date: "15 Jan, 2022",
      time: "6:00 PM",
    },
    {
      billNumber: "5663",
      patientName: "Robert Adams",
      diseaseName: "COVID-19",
      phoneNumber: "91564 25234",
      status: "Unpaid",
      date: "16 Jan, 2022",
      time: "3:00 PM",
    },
    {
      billNumber: "5664",
      patientName: "Nancy Thomas",
      diseaseName: "Pneumonia",
      phoneNumber: "70564 25122",
      status: "Paid",
      date: "18 Jan, 2022",
      time: "8:30 AM",
    },
    {
      billNumber: "5665",
      patientName: "George Martin",
      diseaseName: "Bronchitis",
      phoneNumber: "79564 25644",
      status: "Unpaid",
      date: "19 Jan, 2022",
      time: "10:00 AM",
    },
    {
      billNumber: "5666",
      patientName: "Emma Davis",
      diseaseName: "Migraines",
      phoneNumber: "61564 25413",
      status: "Paid",
      date: "20 Jan, 2022",
      time: "4:00 PM",
    },
    {
      billNumber: "5667",
      patientName: "Chris Brown",
      diseaseName: "Diabetes",
      phoneNumber: "78564 25899",
      status: "Unpaid",
      date: "21 Jan, 2022",
      time: "7:15 AM",
    },
    {
      billNumber: "5668",
      patientName: "Debra Allen",
      diseaseName: "Stroke",
      phoneNumber: "82564 25100",
      status: "Paid",
      date: "23 Jan, 2022",
      time: "5:30 PM",
    },
    {
      billNumber: "5669",
      patientName: "Alice Wilson",
      diseaseName: "Heart Attack",
      phoneNumber: "92564 25763",
      status: "Unpaid",
      date: "25 Jan, 2022",
      time: "9:45 AM",
    },
    {
      billNumber: "5670",
      patientName: "Jack Miller",
      diseaseName: "Pneumonia",
      phoneNumber: "91564 25611",
      status: "Paid",
      date: "26 Jan, 2022",
      time: "3:45 PM",
    },
    {
      billNumber: "5671",
      patientName: "Olivia Harris",
      diseaseName: "Arthritis",
      phoneNumber: "85564 25457",
      status: "Unpaid",
      date: "27 Jan, 2022",
      time: "11:15 AM",
    },
    {
      billNumber: "5672",
      patientName: "Daniel Scott",
      diseaseName: "Flu",
      phoneNumber: "70564 25523",
      status: "Paid",
      date: "29 Jan, 2022",
      time: "6:45 PM",
    },
    {
      billNumber: "5673",
      patientName: "Patricia Roberts",
      diseaseName: "Hypertension",
      phoneNumber: "77564 25156",
      status: "Unpaid",
      date: "31 Jan, 2022",
      time: "1:00 PM",
    },
  ];

  // Filter the data based on the search query
  const filteredData = billingData.filter((data) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      data.billNumber.toLowerCase().includes(lowerCaseQuery) ||
      data.patientName.toLowerCase().includes(lowerCaseQuery) ||
      data.diseaseName.toLowerCase().includes(lowerCaseQuery) ||
      data.phoneNumber.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
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
                  placeholder="Search Patient"
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
                  <th className="p-3 text-left text-lg font-semibold">Bill Number</th>
                  <th className="p-3 text-left text-lg font-semibold">Patient Name</th>
                  <th className="p-3 text-left text-lg font-semibold">Disease Name</th>
                  <th className="p-3 text-left text-lg font-semibold">Phone Number</th>
                  <th className="p-3 text-left text-lg font-semibold">Status</th>
                  <th className="p-3 text-left text-lg font-semibold">Date</th>
                  <th className="p-3 text-left text-lg font-semibold">Time</th>
                  <th className="p-3 text-left text-lg font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((data, index) => (
                    <tr key={index}>
                      <td className="p-3">{data.billNumber}</td>
                      <td className="p-3">{data.patientName}</td>
                      <td className="p-3">{data.diseaseName}</td>
                      <td className="p-3">{data.phoneNumber}</td>
                      <td className={`p-3 ${data.status === "Paid" ? "status" : "red"}`}>
                        <h3>{data.status}</h3>
                      </td>
                      <td className="p-3">{data.date}</td>
                      <td className="p-3">{data.time}</td>
                      <td className="flex action p-3">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img src="/img/BillingAndPayments.png" />
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
  );
}
