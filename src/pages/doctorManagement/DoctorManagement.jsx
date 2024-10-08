import React, { useEffect, useState } from "react";
import "../doctorManagement/doctorManagement.css";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import apiService from '../../services/api.js';
import { useNavigate } from "react-router-dom";
import Onsite from './Onsite'; // Import the Onsite component

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Store selected doctor details
  const [showOnsite, setShowOnsite] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await apiService.GetAllDoctors({});
        setDoctors(response.data.data);
      } catch (error) {
        setError("Error fetching doctors: " + (error.response ? error.response.data.message : error.message));
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, [navigate]);

  const handleAddDoctor = () => {
    navigate("/doctorAdd");
  };

  const handleEditDoctor = (doctorId) => {
    navigate(`/doctorEdit/${doctorId}`);
  };

  const handleDeleteDoctor = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        setLoading(true);
        await apiService.DeleteDoctor(id);
        setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== id));
      } catch (error) {
        setError("Error deleting doctor: " + (error.response ? error.response.data.message : error.message));
      } finally {
        setLoading(false);
      }
    }
  };

  const handleViewDoctorDetails = (doctor) => {
    setSelectedDoctor(doctor); // Set the selected doctor details
    setShowOnsite(true); // Show the Onsite modal
    navigate(`/onsite/${doctor._id}`);
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDoctorsTable = () => {
    return (
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
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td className="flex align-center">
                    <div className="avatar">
                      <img src="/img/Avatar.png" alt={doctor.name} />
                    </div>
                    <div className="name">
                      <h3>{doctor.name}</h3>
                    </div>
                  </td>
                  <td>
                    {doctor.gender === "female" ? (
                      <BsGenderFemale className="gender" />
                    ) : (
                      <BsGenderMale className="gender" />
                    )}
                  </td>
                  <td>{doctor.qualification}</td>
                  <td>{doctor.speciality}</td>
                  <td className="time">
                    <h3>{doctor.workingOn}</h3>
                  </td>
                  <td className="time">
                    <h3>{doctor.patientCheckupTime}</h3>
                  </td>
                  <td className="time">
                    <h3>{doctor.breakTime}</h3>
                  </td>
                  <td className="flex action">
                    <div className="edit" onClick={() => handleEditDoctor(doctor._id)}>
                      <FaEdit />
                    </div>
                    <div className="view" onClick={() => handleViewDoctorDetails(doctor)}>
                      <FaEye />
                    </div>
                    <div className="delete" onClick={() => handleDeleteDoctor(doctor._id)}>
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
      <div className="dr-managment-section">
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
                <button className="btn flex align-center" onClick={handleAddDoctor}>
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
      {showOnsite && (
        <div className="onsite-modal">
          <div className="onsite-modal-content">
            <div className="onsite-modal-header">
              <h3>Doctor Details</h3>
              <button className="close-button" onClick={() => setShowOnsite(false)}>
                &times;
              </button>
            </div>
            <Onsite selectedDoctor={selectedDoctor} /> {/* Pass selected doctor to Onsite */}
          </div>
          <div className="onsite-modal-overlay" onClick={() => setShowOnsite(false)}></div>
        </div>
      )}
    </div>
  );
}
