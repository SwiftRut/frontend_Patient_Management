import "../billPayment/monitorBilling.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MonitorBilling() {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  // Example array of billing records with 20 records
  const billingRecords = [
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
      billNumber: "5656",
      patientName: "John Doe",
      diseaseName: "Headache",
      phoneNumber: "12345 67890",
      status: "Paid",
      date: "4 Jan, 2022",
      time: "3:00 PM",
    },
    {
      billNumber: "5657",
      patientName: "Jane Smith",
      diseaseName: "Back Pain",
      phoneNumber: "23456 78901",
      status: "Unpaid",
      date: "5 Jan, 2022",
      time: "1:30 PM",
    },
    {
      billNumber: "5658",
      patientName: "Sam Wilson",
      diseaseName: "Flu",
      phoneNumber: "34567 89012",
      status: "Paid",
      date: "6 Jan, 2022",
      time: "2:00 PM",
    },
    {
      billNumber: "5659",
      patientName: "Sara Connor",
      diseaseName: "Allergy",
      phoneNumber: "45678 90123",
      status: "Unpaid",
      date: "7 Jan, 2022",
      time: "11:00 AM",
    },
    {
      billNumber: "5660",
      patientName: "Tony Stark",
      diseaseName: "Chest Pain",
      phoneNumber: "56789 01234",
      status: "Paid",
      date: "8 Jan, 2022",
      time: "9:30 AM",
    },
    {
      billNumber: "5661",
      patientName: "Bruce Wayne",
      diseaseName: "Insomnia",
      phoneNumber: "67890 12345",
      status: "Unpaid",
      date: "9 Jan, 2022",
      time: "6:00 PM",
    },
    {
      billNumber: "5662",
      patientName: "Clark Kent",
      diseaseName: "Stress",
      phoneNumber: "78901 23456",
      status: "Paid",
      date: "10 Jan, 2022",
      time: "8:00 AM",
    },
    {
      billNumber: "5663",
      patientName: "Diana Prince",
      diseaseName: "Flu",
      phoneNumber: "89012 34567",
      status: "Unpaid",
      date: "11 Jan, 2022",
      time: "10:15 AM",
    },
    {
      billNumber: "5664",
      patientName: "Peter Parker",
      diseaseName: "Spider Bites",
      phoneNumber: "90123 45678",
      status: "Paid",
      date: "12 Jan, 2022",
      time: "12:00 PM",
    },
    {
      billNumber: "5665",
      patientName: "Wade Wilson",
      diseaseName: "Broken Arm",
      phoneNumber: "01234 56789",
      status: "Unpaid",
      date: "13 Jan, 2022",
      time: "2:30 PM",
    },
    {
      billNumber: "5666",
      patientName: "Natasha Romanoff",
      diseaseName: "Cold",
      phoneNumber: "12345 67890",
      status: "Paid",
      date: "14 Jan, 2022",
      time: "4:00 PM",
    },
    {
      billNumber: "5667",
      patientName: "Steve Rogers",
      diseaseName: "Physical Exam",
      phoneNumber: "23456 78901",
      status: "Unpaid",
      date: "15 Jan, 2022",
      time: "9:00 AM",
    },
    {
      billNumber: "5668",
      patientName: "Carol Danvers",
      diseaseName: "Nausea",
      phoneNumber: "34567 89012",
      status: "Paid",
      date: "16 Jan, 2022",
      time: "1:45 PM",
    },
    {
      billNumber: "5669",
      patientName: "Thor Odinson",
      diseaseName: "Head Injury",
      phoneNumber: "45678 90123",
      status: "Unpaid",
      date: "17 Jan, 2022",
      time: "3:30 PM",
    },
    {
      billNumber: "5670",
      patientName: "Bruce Banner",
      diseaseName: "Stomach Flu",
      phoneNumber: "56789 01234",
      status: "Paid",
      date: "18 Jan, 2022",
      time: "10:00 AM",
    },
    {
      billNumber: "5671",
      patientName: "Loki Laufeyson",
      diseaseName: "Pneumonia",
      phoneNumber: "67890 12345",
      status: "Unpaid",
      date: "19 Jan, 2022",
      time: "11:30 AM",
    },
    {
      billNumber: "5672",
      patientName: "Bucky Barnes",
      diseaseName: "Anxiety",
      phoneNumber: "78901 23456",
      status: "Paid",
      date: "20 Jan, 2022",
      time: "12:45 PM",
    },
    {
      billNumber: "5673",
      patientName: "Doctor Strange",
      diseaseName: "Migraine",
      phoneNumber: "89012 34567",
      status: "Unpaid",
      date: "21 Jan, 2022",
      time: "8:15 AM",
    },
    {
      billNumber: "5673",
      patientName: "Doctor Strange",
      diseaseName: "Migraine",
      phoneNumber: "89012 34567",
      status: "Unpaid",
      date: "21 Jan, 2022",
      time: "8:15 AM",
    },
  ];

  // Fetch bills when the component mounts
  useEffect(() => {
    getBills();
  }, []);

  // Filter records based on the search query
  const filteredRecords = billingRecords.filter(
    (record) =>
      record.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.billNumber.includes(searchQuery)
  );

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
                  placeholder="Search Patient"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="edit-btn flex align-center">
                <div className="icon">
                  <RiEditBoxFill />
                </div>
                <div className="text" onClick={() => navigate("/editinvoice")}>
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
                  <th className="py-3 px-7 text-left text-lg font-semibold">Status</th>
                  <th className="p-3 text-left text-lg font-semibold">Date</th>
                  <th className="p-3 text-left text-lg font-semibold">Time</th>
                  <th className="p-3 text-left text-lg font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Map over filtered billing records to create table rows */}
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record, index) => (
                    <tr key={index} className="border-t">
                      <td className="time p-3">
                        <h3>{record.billNumber}</h3>
                      </td>
                      <td className="p-3">{record.patientName}</td>
                      <td className="p-3">{record.diseaseName}</td>
                      <td className="p-3">{record.phoneNumber}</td>
                      <td className={record.status === "Paid" ? "status" : "red"}>
                        <h3>{record.status}</h3>
                      </td>
                      <td className="p-3">{record.date}</td>
                      <td className="time p-3">
                        <h3>{record.time}</h3>
                      </td>
                      <td className="action p-3">
                        <div
                          className="view"
                          onClick={() => navigate(`/bill/${record.billNumber}`)}
                        >
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-3 text-center">
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
