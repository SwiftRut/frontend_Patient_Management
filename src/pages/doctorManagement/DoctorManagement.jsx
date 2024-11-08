import { useEffect, useState } from "react";
import "./doctorManagement.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// import apiService from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import Onsite from "./Onsite"; // Import the Onsite component
import Delete from "./Delete.jsx";
import { useDoctor } from "../../hooks/useDoctor.jsx";
export default function DoctorManagement() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [openModel, setOpenModel] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const navigate = useNavigate();
  const { getAllDoctors, allDoctors } = useDoctor();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        await getAllDoctors();
      } catch (error) {
        setError(
          "Error fetching doctors: " +
            (error.response ? error.response.data.message : error.message)
        );
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleDeleteSuccess = (deletedId) => {
    setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== deletedId));
    setSelectedDoctorId(null);
  };

  const handleViewDoctorDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setOpenModel(true);
  };

  const filteredDoctors = allDoctors.filter((doctor) =>
    doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDoctorsTable = () => {
    return (
      <div
        className="pr-data h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        style={{ maxHeight: "calc(100vh - 260px)" }}
      >
        <table className="min-w-full table-auto">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="p-3 text-left text-lg font-semibold">Doctor Name</th>
              <th className="p-3 text-left text-lg font-semibold">Gender</th>
              <th className="p-3 text-left text-lg font-semibold">Qualification</th>
              <th className="p-3 text-left text-lg font-semibold">Specialty</th>
              <th className="p-3 text-left text-lg font-semibold">Working Time</th>
              <th className="p-3 text-left text-lg font-semibold">Patient Check Up Time</th>
              <th className="p-3 text-left text-lg font-semibold">Break Time</th>
              <th className="p-3 text-left text-lg font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <tr key={doctor._id} className="border-t">
                  <td className="flex align-center p-3">
                    <div className="avatar">
                      <img src={doctor.avatar} alt={doctor.name} />
                    </div>
                    <div className="name">
                      <h3>{doctor.name}</h3>
                    </div>
                  </td>
                  <td className="p-3">
                    {doctor.gender === "female" ? (
                      <BsGenderFemale className="gender" />
                    ) : (
                      <BsGenderMale className="gender" />
                    )}
                  </td>
                  <td className="p-3">{doctor.qualification}</td>
                  <td className="p-3">{doctor.speciality}</td>
                  <td className="time p-3">
                    <h3>{doctor.workingOn}</h3>
                  </td>
                  <td className="time p-3">
                    <h3>{doctor.patientCheckupTime}</h3>
                  </td>
                  <td className="time p-3">
                    <h3>{doctor.breakTime}</h3>
                  </td>
                  <td className="flex action p-3">
                    <div className="edit" onClick={() =>  navigate(`/doctorEdit/${doctor._id}`)}>
                      <FaEdit />
                    </div>
                    <div className="view" onClick={() => handleViewDoctorDetails(doctor._id)}>
                      <FaEye />
                    </div>
                    <div className="delete" onClick={() => setSelectedDoctorId(doctor._id)}>
                      <MdDelete />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  <div className="image">
                    <img src="/img/no_doctors.png" alt="No data" />
                    <h1>No Doctor Found</h1>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="dr-managment-section bg-gray">
        <div className="row">
          <div className="main">
            <div className="top flex align-center">
              <div className="heading">
                <h3>Doctor Management</h3>
              </div>
              <div className="search-btn flex">
                <div className="input flex align-center">
                  <div className="search">
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Search Doctor"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="btn flex align-center" onClick={()=>navigate("/doctorAdd")}>
                  <div className="icon">
                    <MdAdd />
                  </div>
                  <div className="text">
                    <h3>Add New Doctor</h3>
                  </div>
                </button>
              </div>
            </div>
            {loading && <h3>Loading...</h3>}
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            {!loading && !error && renderDoctorsTable()}
          </div>
        </div>
      </div>

      {/* Modal for Onsite component */}
      {openModel && (
        <div className="onsite-modal">
          <div className="onsite-modal-content">
            <div className="onsite-modal-header">
              <h3>Doctor Details</h3>
              <button className="close-button" onClick={() => setOpenModel(false)}>
                &times;
              </button>
            </div>
            <Onsite selectedDoctor={selectedDoctor} setOpenModel={setOpenModel}  />
          </div>
          <div className="onsite-modal-overlay" onClick={() => setOpenModel(false)}></div>
        </div>
      )}

      {/* Modal for Delete doctor */}
      {selectedDoctorId && (
        <Delete
          deleteId={selectedDoctorId}
          onClose={setSelectedDoctorId(null)}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    </div>
  );
}
