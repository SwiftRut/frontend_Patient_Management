import "../doctorManagement/doctorManagement.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsGenderFemale } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function DoctorManagement() {
  return <>
    <div>
      <div className="dr-managment-section">
        <div className="row">
          {/* without data */}
          {/* <div className="main">
              <div className="top flex align-center">
                <div className="heading">
                  <h3>Doctor Managment</h3>
                </div>
                <div className="search-btn flex">
                  <div className="input flex align-center">
                    <div className="search">
                    <CiSearch />
                    </div>
                  <input type="text" placeholder="Search Patient"/>
                  </div>
                  <button className="btn flex align-center">
                    <div className="icon">
                    <MdAdd />
                    </div>
                    <div className="text">
                      <h3>Add New Doctor</h3>
                    </div>
                  </button>
                </div>
              </div>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                    <th>Doctor Name</th>
                        <th>Gender</th>
                        <th>Qualification</th>
                        <th>Specialty</th>
                        <th>Working Time</th>
                        <th>Patient Check Up Time</th>
                        <th>Break Time</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="image">
                <div>
                <img src="/img/Invoice.png"/>
                <h1>No Doctor Found</h1>
                </div>
              </div>
          </div> */}

          {/* with data */}

          <div className="main">
            <div className="top flex align-center">
              <div className="heading">
                <h3>Doctor Managment</h3>
              </div>
              <div className="search-btn flex">
                <div className="input flex align-center">
                  <div className="search">
                    <CiSearch />
                  </div>
                  <input type="text" placeholder="Search Patient" />
                </div>
                <button className="btn flex align-center">
                  <div className="icon">
                    <MdAdd />
                  </div>
                  <div className="text">
                    <h3>Add New Doctor</h3>
                  </div>
                </button>
              </div>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr className="table-heading">
                    <th>Doctor Name</th>
                    <th>Gender</th>
                    <th>Qualification</th>
                    <th>Specialty</th>
                    <th>Working Time</th>
                    <th>Patient Check Up Time</th>
                    <th>Break Time</th>
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
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex align-center">
                      <div className="avatar">
                        <img src="/img/Avatar.png" />
                      </div>
                      <div className="name">
                        <h3>Dr. Marcus Philips</h3>
                      </div>
                    </td>
                    <td><BsGenderFemale className="gender" /></td>
                    <td>MBBS</td>
                    <td>Internal Medicine</td>
                    <td className="time">
                      <h3>6 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>4 Hour</h3>
                    </td>
                    <td className="time">
                      <h3>1 Hour</h3>
                    </td>
                    <td className="flex action">
                      <div className="edit">
                        <FaEdit />
                      </div>
                      <div className="view">
                        <FaEye />
                      </div>
                      <div className="delete">
                        <MdDelete />
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
  </>;
}
