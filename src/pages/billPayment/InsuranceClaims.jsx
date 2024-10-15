import "../billPayment/insuranceClaims.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function InsuranceClaims() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const claimsData = [
    {
      billNumber: "5654",
      doctorName: "Dr. Marcus Philips",
      patientName: "Kadin Saris",
      diseaseName: "Internal Medicine",
      insuranceCompany: "HDFC Life Insurance",
      insurancePlan: "Maternity",
      billDate: "2 Jun, 2024",
    },
    {
      billNumber: "5655",
      doctorName: "Dr. Sarah Johnson",
      patientName: "Liam Brown",
      diseaseName: "Pediatrics",
      insuranceCompany: "ICICI Lombard",
      insurancePlan: "Child Health",
      billDate: "15 Jun, 2024",
    },
    {
      billNumber: "5656",
      doctorName: "Dr. Emily Davis",
      patientName: "Ava Wilson",
      diseaseName: "Orthopedics",
      insuranceCompany: "Max Bupa",
      insurancePlan: "Accident Care",
      billDate: "22 Jun, 2024",
    },
    {
      billNumber: "5657",
      doctorName: "Dr. Robert Smith",
      patientName: "James Taylor",
      diseaseName: "Cardiology",
      insuranceCompany: "HDFC Ergo",
      insurancePlan: "Heart Care",
      billDate: "30 Jun, 2024"
    },
    {
      billNumber: "5658",
      doctorName: "Dr. Jessica Lee",
      patientName: "Isabella Martinez",
      diseaseName: "Dermatology",
      insuranceCompany: "Bajaj Allianz",
      insurancePlan: "Skin Health",
      billDate: "10 Jul, 2024"
    },
    {
      billNumber: "5659",
      doctorName: "Dr. William Garcia",
      patientName: "Noah Hernandez",
      diseaseName: "Gastroenterology",
      insuranceCompany: "Aditya Birla",
      insurancePlan: "Digestive Care",
      billDate: "15 Jul, 2024"
    },
    {
      billNumber: "5660",
      doctorName: "Dr. Olivia Wilson",
      patientName: "Sophia Anderson",
      diseaseName: "Neurology",
      insuranceCompany: "Star Health",
      insurancePlan: "Brain Health",
      billDate: "20 Jul, 2024"
    },
    {
      billNumber: "5661",
      doctorName: "Dr. Henry Taylor",
      patientName: "Lucas Thomas",
      diseaseName: "Ophthalmology",
      insuranceCompany: "Future Generali",
      insurancePlan: "Vision Care",
      billDate: "25 Jul, 2024"
    },
    {
      billNumber: "5662",
      doctorName: "Dr. Mia Robinson",
      patientName: "Ethan White",
      diseaseName: "Endocrinology",
      insuranceCompany: "New India Assurance",
      insurancePlan: "Hormonal Health",
      billDate: "30 Jul, 2024"
    },
    {
      billNumber: "5663",
      doctorName: "Dr. Charles Young",
      patientName: "Amelia Martin",
      diseaseName: "Psychiatry",
      insuranceCompany: "SBI Health",
      insurancePlan: "Mental Health",
      billDate: "5 Aug, 2024"
    },
    {
      billNumber: "5664",
      doctorName: "Dr. Ava Thompson",
      patientName: "Mason Harris",
      diseaseName: "Rheumatology",
      insuranceCompany: "Kotak General Insurance",
      insurancePlan: "Joint Health",
      billDate: "10 Aug, 2024"
    },
    {
      billNumber: "5665",
      doctorName: "Dr. Samuel Clark",
      patientName: "Charlotte Lee",
      diseaseName: "Oncology",
      insuranceCompany: "ManipalCigna",
      insurancePlan: "Cancer Care",
      billDate: "15 Aug, 2024"
    },
    {
      billNumber: "5666",
      doctorName: "Dr. Benjamin Hall",
      patientName: "Evelyn Walker",
      diseaseName: "Pulmonology",
      insuranceCompany: "Reliance Health",
      insurancePlan: "Lung Health",
      billDate: "20 Aug, 2024"
    },
    {
      billNumber: "5667",
      doctorName: "Dr. Grace Lee",
      patientName: "Ella Allen",
      diseaseName: "Urology",
      insuranceCompany: "Bharati AXA",
      insurancePlan: "Kidney Health",
      billDate: "25 Aug, 2024"
    }
  ];

  // Filter claims based on search query
  const filteredClaims = claimsData.filter((claim) =>
    claim.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    claim.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    claim.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    claim.insuranceCompany.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="insurance-section">
        <div className="row">
          <div className="main">
            <div className="top flex align-center">
              <div className="heading">
                <h3>Insurance Claims</h3>
              </div>
              <div className="search-btn flex">
                <div className="input flex align-center">
                  <div className="search">
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Patient, Doctor, Disease, or Insurance"
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
                    <th className="p-3 text-left text-lg font-semibold">Doctor Name</th>
                    <th className="p-3 text-left text-lg font-semibold">Patient Name</th>
                    <th className="p-3 text-left text-lg font-semibold">Disease Name</th>
                    <th className="p-3 text-left text-lg font-semibold">Insurance Company</th>
                    <th className="p-3 text-left text-lg font-semibold">Insurance Plan</th>
                    <th className="p-3 text-left text-lg font-semibold">Bill Date</th>
                    <th className="p-3 text-left text-lg font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClaims.map((claim, index) => (
                    <tr key={index}>
                      <td className="time p-3">
                        <h3>{claim.billNumber}</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" alt="Avatar" />
                        </div>
                        <div className="name">
                          <h3>{claim.doctorName}</h3>
                        </div>
                      </td>
                      <td className="p-3">{claim.patientName}</td>
                      <td className="p-3">{claim.diseaseName}</td>
                      <td className="p-3">{claim.insuranceCompany}</td>
                      <td className="time p-3">
                        <h3>{claim.insurancePlan}</h3>
                      </td>
                      <td className="p-3">{claim.billDate}</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredClaims.length === 0 && (
                    <tr>
                      <td colSpan="8" className="text-center p-3">
                        No claims found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
