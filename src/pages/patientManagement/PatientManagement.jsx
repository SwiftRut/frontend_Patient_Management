import "../patientManagement/PatientManagement.css";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export default function PatientManagement() {
  return (
    <>
      <div className="patient-section main-content">
        <div className="row">
          <div className="main">
            <div className="flex top-menu">
              <button>Today Appointment</button>
              <button>Upcoming Appointment</button>
              <button>Previous Appointment</button>
              <button>Cancel Appointment</button>
            </div>
            <div className="top flex align-center">
              <div className="heading">
                <h3>Today Appointment</h3>
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
            <div className="grid">
            <div className="table">
              <table>
                <thead>
                  <tr className="table-heading">
                    <th>Patient Name</th>
                    <th>Patient Issue</th>
                    <th>Doctor Name</th>
                    <th>Dieses Name</th>
                    <th>Appointment Time</th>
                    <th>Appointment Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
                    <td className="action">
                      <div className="view">
                        <FaEye />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Marcus Philips</h3>
                      </div>
                    </td>
                    <td>
                      <h3>Stomach Ache</h3>
                    </td>
                    <td>
                      <h3>Dr. Mathew Best</h3>
                    </td>
                    <td>
                      <h3>Viral Infection</h3>
                    </td>
                    <td className="time">
                      <h3>4:30 PM</h3>
                    </td>
                    <td className="time">
                      <h3>Online</h3>
                    </td>
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
