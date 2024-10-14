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
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">HDFC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Maternity</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
                        <div className="view">
                          <FaEye />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="time p-3">
                        <h3>5654</h3>
                      </td>
                      <td className="align-center p-3" style={{ display: "flex" }}>
                        <div className="avatar">
                          <img src="/img/Avatar.png" />
                        </div>
                        <div className="name">
                          <h3>Dr. Marcus Philips</h3>
                        </div>
                      </td>
                      <td className="p-3">Internal Medicine</td>
                      <td className="p-3">Kadin Saris</td>
                      <td className="p-3">LIC Life Insurance</td>
                      <td className="time p-3">
                        <h3>Health</h3>
                      </td>
                      <td className="p-3">2 Jun, 2024</td>
                      <td className="action p-3">
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
