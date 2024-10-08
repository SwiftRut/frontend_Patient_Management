/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../doctorManagement/doctorManagement.css"; // Make sure the path is correct
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import apiService from '../../services/api.js'; // Adjust the import path as necessary

export default function DoctorManagement() {
  const [doctors, setDoctors] = useState([]); // State to hold doctor data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State for error handling
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all doctors when the component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true); // Set loading to true before the API call
        const response = await apiService.GetAllDoctors({});
        console.log(response.data.data); // Add this line to check the actual doctor data structure
        setDoctors(response.data.data); // Assuming response.data contains the list of doctors
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        setError("Error fetching doctors: " + (error.response ? error.response.data.message : error.message));
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Function to handle deleting a doctor
  const handleDeleteDoctor = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) { // Confirmation dialog
      try {
        setLoading(true);
        await apiService.DeleteDoctor(id);
        // After successful deletion, fetch the updated doctor list
        setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor._id !== id));
      } catch (error) {
        console.error("Error deleting doctor:", error);
        setError("Error deleting doctor: " + (error.response ? error.response.data.message : error.message));
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to render the doctors' table
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
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <tr key={doctor._id}> {/* Update the key to doctor._id */}
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
                    <div className="edit">
                      <FaEdit />
                    </div>
                    <div className="view">
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
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                  />
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
            {loading && <h3>Loading...</h3>} {/* Show loading message */}
            {error && <h3 style={{ color: "red" }}>{error}</h3>} {/* Show error message */}
            {!loading && !error && renderDoctorsTable()} {/* Only render table if not loading and no error */}
          </div>
        </div>
      </div>
    </div>
  );
}
