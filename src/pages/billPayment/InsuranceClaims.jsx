import "../billPayment/insuranceClaims.css";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";
import toast from "react-hot-toast";

export default function InsuranceClaims() {
  const navigate = useNavigate();
  const { getBills, allBills } = useGlobal();
  const [searchQuery, setSearchQuery] = useState("");
  const [claimsData, setClaimsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        setLoading(true);
        await getBills();
      } catch (err) {
        setError("Failed to fetch claims data");
        toast.error("Failed to fetch claims data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []); 

  useEffect(() => {
    
    const insuranceClaims = allBills.filter(bill => bill.paymentType === "Insurance");
    setClaimsData(insuranceClaims);
  }, [allBills]); 

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const filteredClaims = claimsData.filter(
    (claim) =>
      (claim.patientId?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.doctorId?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      claim.diseaseName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (claim.insuranceId?.insuranceCompany?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (claim.insuranceId?.insurancePlan?.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
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
            {loading ? (
              <div className="loading text-center">Loading claims...</div>
            ) : error ? (
              <div className="error text-center">{error}</div>
            ) : (
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
                  {filteredClaims.length > 0 ? (
                    filteredClaims.map((claim, index) => (
                      <tr key={index}>
                        <td className="time p-3">
                          <h3>{claim.billNumber}</h3>
                        </td>
                        <td className="align-center p-3" style={{ display: "flex" }}>
                          <div className="avatar">
                            <img src={claim?.doctorId?.avatar || "/img/Avatar.png"} alt="Avatar" className="rounded-full"/>
                          </div>
                          <div className="name">
                            <h3>{claim.doctorId?.name || 'N/A'}</h3>
                          </div>
                        </td>
                        <td className="p-3">{claim.patientId ? `${claim.patientId.firstName} ${claim.patientId.lastName}` : 'N/A'}</td>
                        <td className="p-3">{claim.diseaseName || 'N/A'}</td>
                        <td className="p-3">{claim.insuranceId?.insuranceCompany || 'N/A'}</td>
                        <td className="time p-3">
                          <h3>{claim.insuranceId?.insurancePlan || 'N/A'}</h3>
                        </td>
                        <td className="p-3">{formatDate(claim.date)}</td>
                        <td className="action p-3">
                          <div className="view" onClick={() => navigate(`/bill/${claim._id}`)}>
                            <FaEye />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center p-3">
                        No claims found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
