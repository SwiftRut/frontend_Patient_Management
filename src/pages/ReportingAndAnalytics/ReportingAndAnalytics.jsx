
import { useEffect, useState } from "react";
import "./reportingAnalytics.css";
import { FaUsers, FaUser, FaFileAlt } from "react-icons/fa";
import AppointmentGraph from "../Reporting-Analysis/ApointmentGraph";
import PatientSummary from "../Reporting-Analysis/PatientSummary";
import PatientsAge from "../Reporting-Analysis/PatientsAge";
import apiService from "../../services/api.js";
import toast from "react-hot-toast";

export default function ReportingAndAnalytics() {
  const [doctorSpecialtyData, setDoctorSpecialtyData] = useState([]);
  const [patientsCountData, setPatientsCountData] = useState([]);
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    const fetchReportingAndAnalytics = async () => {
      try {
        const response = await apiService.GetReporingAndAnalytics();
        const data = response.data;
        setCardData(data);
        console.log(data,"<<<<<<<<<<<<<<<<<<<<data you are reporting");
      } catch (error) {
        console.error("Error fetching reporting and analytics:", error);
        toast.error("Error fetching reporting and analytics");
      }
    };
    const fetchPatients = async () => {
      try {
        const response = await apiService.GetAllPatients();
        const data = response.data.data;
        countPatientsByDisease(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
        toast.error("Error fetching patients");
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await apiService.GetAllDoctors();
        const doctors = response.data.data;

        const specialtyCountMap = {};
        doctors.forEach((doctor) => {
          const specialty = doctor.speciality;
          if (specialty) {
            if (!specialtyCountMap[specialty]) {
              specialtyCountMap[specialty] = { doctorCount: 0, patientCount: 0 };
            }
            specialtyCountMap[specialty].doctorCount += 1;
            specialtyCountMap[specialty].patientCount += doctor.patientsCount || 0;
          }
        });

        const specialtyDataArray = Object.keys(specialtyCountMap).map((specialty) => ({
          specialty,
          doctorCount: specialtyCountMap[specialty].doctorCount,
          patientCount: specialtyCountMap[specialty].patientCount,
        }));

        setDoctorSpecialtyData(specialtyDataArray);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast.error("Error fetching doctors")
      }
    };

    fetchDoctors();
    fetchPatients();
    fetchReportingAndAnalytics();
  }, []);

  const countPatientsByDisease = (patients) => {
    console.log("Patients data:", patients);

    const diseaseCountMap = {};

    patients.forEach((patient) => {
      patient.appointmentId.forEach((appointment) => {
        const disease = appointment.patient_issue;
        console.log("Processing appointment:", appointment);
        console.log("Disease found:", disease);

        if (disease) {
          if (!diseaseCountMap[disease]) {
            diseaseCountMap[disease] = 0;
          }
          diseaseCountMap[disease]++;
        }
      });
    });

    const countedData = Object.keys(diseaseCountMap).map((disease) => ({
      department: disease,
      count: diseaseCountMap[disease],
    }));

    console.log("Counted data:", countedData);
    setPatientsCountData(countedData);
  };

  return (
    <div>
      <div className="reportingAnalytics-section">
        <div className="row">
          <div className="main">
            <div className="total-data flex">
              <div className="total-Patients">
                <div className="content">
                  <div className="logo_details flex">
                    <div className="logo">
                      <FaUsers />
                    </div>
                    <div className="details">
                      <p>Total Patients</p>
                    </div>
                  </div>
                  <div className="count">
                    <span>{cardData.totalPatientCount}</span>
                  </div>
                </div>
              </div>

              <div className="total-Doctors">
                <div className="content">
                  <div className="logo_details flex dr-logo">
                    <div className="logo">
                      <FaUser />
                    </div>
                    <div className="details">
                      <p>Repeat Patient</p>
                    </div>
                  </div>
                  <div className="count">
                  <span>{cardData.repeatPatientCount}</span>
                  </div>
                </div>
              </div>

              <div className="total-Appointments">
                <div className="content">
                  <div className="logo_details flex appo-logo">
                    <div className="logo">
                      <FaFileAlt />
                    </div>
                    <div className="details">
                      {/* <p>Admitted Patient</p> */}
                      <p>Total Doctors</p>
                    </div>
                  </div>
                  <div className="count">
                  <span>{cardData.totalDoctorCount}</span>

                  </div>
                </div>
              </div>

              <div className="total-Appointments">
                <div className="content">
                  <div className="logo_details flex claim-logo">
                    <div className="logo">
                      <FaFileAlt />
                    </div>
                    <div className="details">
                      <p>Total Claim</p>
                    </div>
                  </div>
                  <div className="count">
                  <span>{cardData.insuranceClaimCount}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="top flex">
              <div className="w-1/2 p-3">
                <AppointmentGraph />
              </div>
              <div className="w-1/2 p-3">
                <PatientSummary />
              </div>
            </div>

            <div className="bottom flex">
              <div className="patient-count-data">
                <div className="content">
                  <div className="head">
                    <div className="title">
                      <p>Patients Count by Disease</p>
                    </div>
                  </div>
                  <div className="pending-bill">
                    <div className="pending-bill-data">
                      <div className="bill-table">
                        <table className="text-lg">
                          <thead>
                            <tr className="flex">
                              <th>Disease Name</th>
                              <th>Patient Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cardData?.patientCountByDisease?.length > 0 ? (
                              cardData?.patientCountByDisease?.map((patient) => (
                                <tr key={patient._id} className="flex">
                                  <td className="d-name">
                                    <p>{patient._id}</p>
                                  </td>
                                  <td className="status">
                                    <p>
                                      <FaUsers />
                                      <span>{patient.count}</span>
                                    </p>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="2" className="text-center">No data available</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doctor-count-data">
                <div className="content">
                  <div className="head">
                    <div className="title">
                      <p>Doctor Count by Department</p>
                    </div>
                  </div>
                  <div className="pending-bill">
                    <div className="pending-bill-data">
                      <div className="bill-table">
                        <table>
                          <thead>
                            <tr className="flex">
                              <th>Department Name</th>
                              <th>Doctor Count</th>
                            </tr>
                          </thead>
                          <tbody>
                            {doctorSpecialtyData.map((specialty) => (
                              <tr key={specialty.specialty} className="flex">
                                <td className="d-name">
                                  <p>{specialty.specialty}</p>
                                </td>
                                <td className="status">
                                  <p>
                                    <FaUsers />
                                    <span>{specialty.doctorCount}</span>
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <PatientsAge />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
