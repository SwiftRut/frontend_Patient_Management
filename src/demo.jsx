import "../billPayment/paymentMethod.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  const navigate = useNavigate();
  return (
    <>
      <div className="payment-section">
        <div className="row">
          <div className="main">
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
                    <input type="text" placeholder="Search Patient" />
                  </div>
                  <button className="edit-btn flex align-center">
                    <div className="icon">
                      <RiEditBoxFill />
                    </div>
                    <div className="text" onClick={() => navigate("/invoice")} >
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
                    <tr>
                      <th>Bill Number</th>
                      <th>Patient Name</th>
                      <th>Disease Name</th>
                      <th>Phone Number</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr> <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="status">
                        <h3>Paid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td>Alfredo Vaccaro</td>
                      <td>Colds and Flu</td>
                      <td>89564 25462</td>
                      <td className="red">
                        <h3>Unpaid</h3>
                      </td>
                      <td>2 Jan, 2022</td>
                      <td className="time">
                        <h3>4:30 PM</h3>
                      </td>
                      <td className="flex action">
                        <div className="edit">
                          <FaEdit />
                        </div>
                        <div className="view">
                          <FaEye />
                        </div>
                        <div className="delete">
                          <img
                            src="/img/BillingAndPayments.png"/>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
