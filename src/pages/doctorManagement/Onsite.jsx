import React, { useEffect, useState } from "react";
import "../doctorManagement/Onsite.css";
import { IoIosArrowBack } from "react-icons/io";
import apiService from '../../services/api.js';
import { useParams, useNavigate } from "react-router-dom";

const Onsite = () => {
  const { id } = useParams(); // Get the doctor ID from route parameters
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        setLoading(true);
        const response = await apiService.GetDoctorById(id); // Fetch doctor details using the API
        setDoctor(response.data.data); // Adjust based on your API response structure
      } catch (error) {
        setError("Error fetching doctor details: " + (error.response ? error.response.data.message : error.message));
      } finally {
        setLoading(false);
      }
    };
    fetchDoctorDetails();
  }, [id]);

  const handleBack = () => {
    navigate("/doctorManagement");
  };

  return (
    <div className="onsite-section">
      <div className="row">
        <div className="main">
          <div className="top flex align-center">
            <div className="icon" onClick={handleBack}>
              <IoIosArrowBack />
            </div>
            <h3>Doctor Management</h3>
          </div>
          <div className="box">
            <img src="/img/box.png" width="100%" />
          </div>
          <div className="details">
            {loading && <h3>Loading...</h3>}
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            {doctor && (
              <div className="table">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h3>Doctor Qualification</h3>
                        <p>{doctor.qualification}</p> {/* Display qualification */}
                      </td>
                      <td>
                        <h3>Years Of Experience</h3>
                        <p>{doctor.experience || 'N/A'}</p> {/* Display experience */}
                      </td>
                    </tr>
                    {/* Add more doctor details as needed */}
                    <tr>
                      <td>
                        <h3>Specialty</h3>
                        <p>{doctor.speciality}</p> {/* Example field */}
                      </td>
                      <td>
                        <h3>Working Time</h3>
                        <p>{doctor.workingTime}</p> {/* Example field */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onsite;
