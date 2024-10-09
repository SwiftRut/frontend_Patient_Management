import "../billPayment/monitorBilling.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MonitorBilling() {
  const navigate = useNavigate();
  const { getBills, allBills, deleteBill } = useGlobal();
  console.log(allBills)
  useEffect(() => {
    getBills();
  }, []);
  const handleDelete = async (id) => {
     await deleteBill(id);
     await getBills();
  }
  return (
    <div className="monitor-section">
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
          <div className="table">
            <table>
              <thead>
                <tr className="table-heading">
                  <th>Bill Number</th>
                  <th>Description</th>
                  <th>Payment Type</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allBills && allBills.length > 0 ? (
                  allBills.map((bill) => (
                    <tr key={bill._id}>
                      <td className="time">
                        <h3>{bill.billNumber}</h3>
                      </td>
                      <td>{bill.description}</td>
                      <td>{bill.paymentType}</td>
                      <td className={`status ${bill.status === "Unpaid" ? "red" : ""}`}>
        <h3>{bill.status}</h3>
      </td>
                      <td>{new Date(bill.date).toLocaleDateString()}</td>
                      <td className="time">
                        <h3>{bill.time}</h3>
                      </td>
                      <td className="flex space-x-2 justify-center items-center action">
  <div className="view hover:text-blue-500 cursor-pointer">
    <FaEye onClick={() => navigate(`/bill/${bill._id}`)}/>
  </div>
  <div className="edit hover:text-yellow-500 cursor-pointer">
    <RiEditBoxFill  onClick={() => navigate(`/editBill/${bill._id}`)} />
  </div>
  <div className="delete hover:text-red-500 cursor-pointer">
    <MdDelete onClick={() => handleDelete(bill._id)}/>
  </div>
</td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No billing data available</td>
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
