// import "../billPayment/insuranceCliams.css";
import "../billPayment/insuranceClaims.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function InsuranceClaims() {
  const navigate = useNavigate();

  return (
    <>
      <div className="insurance-section">
        <div className="row">
          <div className="main">
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
                    <tr>
                      <th>Bill Number</th>
                      <th>Doctor Name</th>
                      <th>Patient Name</th>
                      <th>Disease Name</th>
                      <th>Insurance Company</th>
                      <th>Insurance Plan</th>
                      <th>Bill Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>HDFC Life Insurance</td>
                      <td className="time">
                        <h3>Maternity</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td>Internal Medicine</td>
                      <td>Kadin Saris</td>
                      <td>LIC Life Insurance</td>
                      <td className="time">
                        <h3>Health</h3>
                      </td>
                      <td>2 Jun, 2024</td>
                      <td className="action">
                        <div className="view">
                          <FaEye />
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
