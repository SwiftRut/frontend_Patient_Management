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
                </div>
              </div>
              <div
                className="pr-data h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
                style={{ maxHeight: "calc(100vh - 260px)" }}
              >
                {" "}
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="status p-3">
                        <h3>Paid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="p-3">Alfredo Vaccaro</td>
                      <td className="p-3">Colds and Flu</td>
                      <td className="p-3">89564 25462</td>
                      <td className="red p-3">
                        <h3>Unpaid</h3>
                      </td>
                      <td className="p-3">2 Jan, 2022</td>
                      <td className="time p-3">
                        <h3>4:30 PM</h3>
                      </td>
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
