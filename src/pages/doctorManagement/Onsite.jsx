import React, { useEffect, useState } from "react";
import "../doctorManagement/Onsite.css";
import apiService from "../../services/api.js";
import { IoIosArrowBack } from "react-icons/io";
import { TbBuildingHospital } from "react-icons/tb";
import { IoLinkSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import toast from "react-hot-toast";
import { CiMapPin } from "react-icons/ci";

const Onsite = ({ selectedDoctor, setOpenModel }) => {
  const [doctor, setDoctor] = useState({});
  const [error, setError] = useState(null);

  console.log(doctor);
  

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await apiService.GetDoctorById(selectedDoctor._id);
        setDoctor(response.data.data);
      } catch (error) {
        setError(
          "Error fetching doctor details: " +
            (error.response ? error.response.data.message : error.message)
        );
        toast.error("Error fetching doctor details");
      } finally {
      }
    };
    fetchDoctorDetails();
  }, []);

  const handleBack = () => {
    setOpenModel(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-2/6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 h-5/6 m-3">
        <div className="onsite-section">
          <div className="row">
            <div className="main">
              <div className="top flex align-center">
                <div className="icon" onClick={() => handleBack()}>
                  <IoIosArrowBack />
                </div>
                <h3>Doctor Management</h3>
              </div>
              <div className="box">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="image" >
                    <img src={doctor.avatar} />
                    </div>
                    <div className="info">
                      <h4>Dr. {doctor.name}</h4>
                      <p className="flex align-center">
                      <CiMapPin />
                        <span>{doctor.gender}</span>
                      </p>
                    </div>
                  </div>
                  <div className="btn">
                    <button>Onsite</button>
                  </div>
                </div>
              </div>
              <div className="deatils">
                <div className="table">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h3>Doctor Qualification</h3>
                          <p>{doctor.qualification}</p>
                        </td>
                        <td>
                          <h3>Years Of Experience</h3>
                          <p>{doctor.experience}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Specialty Type</h3>
                          <p>{doctor.speciality}</p>
                        </td>
                        <td>
                          <h3>Working Time</h3>
                          <p>{doctor.workingTime}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Patient Check Up Time</h3>
                          <p>{doctor.patientCheckupTime}</p>
                        </td>
                        <td>
                          <h3>Break Time</h3>
                          <p>{doctor.breakTime}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h3>Description</h3>
                          <p>{doctor.description}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h3>Signature</h3>
                          <img src={doctor.signatureUpload} width="100%" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="table" style={{ marginTop: "20px" }}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h3>Age</h3>
                          <p>{doctor.age}</p>
                        </td>
                        <td>
                          <h3>Email</h3>
                          <p>{doctor.email}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Phone</h3>
                          <p>{doctor.phone}</p>
                        </td>
                        <td>
                          <h3>Online Consultation Rate</h3>
                          <p>{doctor.onlineConsultationRate}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Country</h3>
                          <p>{doctor.country}</p>
                        </td>
                        <td>
                          <h3>State</h3>
                          <p>{doctor.state}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Zip Code</h3>
                          <p>{doctor.zipCode}</p>
                        </td>
                        <td>
                          <h3>City</h3>
                          <p>{doctor.city}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <h3>Address</h3>
                          <p>{doctor.address}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* online */}
              <div className="working-details mt-5">
                <div className="title flex">
                  <h3>Working On Online</h3>
                  <p className="font-semibold">{doctor.workingOn}</p>
                </div>
                <ul>
                  <li className="hospital-data flex align-center">
                    <div className="icon">
                      <TbBuildingHospital />
                    </div>
                    <div className="text">
                      <h2>Hospital Name</h2>
                      <p>{doctor.hospitalName}</p>
                    </div>
                  </li>
                  <li className="hospital-data flex align-center">
                    <div className="icon">
                      <IoLinkSharp />
                    </div>
                    <div className="text">
                      <h2>Hospital Website Link</h2>
                      <p>{doctor.worksiteLink}</p>
                    </div>
                  </li>
                  <li className="hospital-data flex align-center">
                    <div className="icon">
                      <BiSolidPhoneCall />
                    </div>
                    <div className="text">
                      <h2>Emergency Contact Number</h2>
                      <p>{doctor.emergencyContactNo}</p>
                    </div>
                  </li>
                  <li className="hospital-data flex align-center">
                    <div className="icon">
                      <IoLocation />
                    </div>
                    <div className="text">
                      <h2>Hospital Address</h2>
                      <p>{doctor?.hospitalId?.address}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onsite;
