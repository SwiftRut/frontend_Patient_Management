
import { useEffect, useState } from "react";
import { FaUsers, FaUser, FaFileAlt } from "react-icons/fa";
import AppointmentGraph from "../Reporting-Analysis/ApointmentGraph";
import PatientSummary from "../Reporting-Analysis/PatientSummary";
import PatientsAge from "../Reporting-Analysis/PatientsAge";
import { useGlobal } from "../../hooks/useGlobal.jsx";
export default function ReportingAndAnalytics() {
  const { fetchReportingAndAnalytics, cardData } = useGlobal();
  useEffect(() => {
    fetchReportingAndAnalytics();
  }, []);
  return (
    <div>

      <div className="reportingAnalytics-section">
        <div className="row">
          <div className="main bg-[#F6F8FB]">

            <div class="total-data flex justify-between items-center p-2.5">
              <div class="total-Patients w-1/4 px-3 pt-3.5">
                <div class="content flex justify-between items-center bg-white rounded-lg p-3.5">
                  <div class="logo_details flex items-center">
                    <div class="logo w-12 h-12 rounded-full bg-[#2E779326] flex justify-center items-center">
                      <FaUsers class="w-7 text-[#2E7793]" />
                    </div>
                    <div class="details pl-5">
                      <p class="text-[#030229] font-semibold text-lg">Total Patients</p>
                    </div>
                  </div>
                  <div class="count">
                    <span class="text-[#030229] text-2xl font-extrabold">{cardData.totalPatientCount}</span>
                  </div>
                </div>
              </div>

              <div class="total-Doctors w-1/4 px-3 pt-3.5">
                <div class="content flex justify-between items-center bg-white rounded-lg p-3.5">
                  <div class="logo_details flex items-center">
                    <div class="logo w-12 h-12 rounded-full bg-[#5E5E9E26] flex justify-center items-center">
                      <FaUser class="w-7 text-[#5E5E9E]" />
                    </div>
                    <div class="details pl-5">
                      <p class="text-[#030229] font-semibold text-lg">Repeat Patient</p>
                    </div>
                  </div>
                  <div class="count">
                    <span class="text-[#030229] text-2xl font-extrabold">{cardData.repeatPatientCount}</span>
                  </div>
                </div>
              </div>

              <div class="total-Appointments w-1/4 px-3 pt-3.5">
                <div class="content flex justify-between items-center bg-white rounded-lg p-3.5">
                  <div class="logo_details flex items-center">
                    <div class="logo w-12 h-12 rounded-full bg-[#41B16126] flex justify-center items-center">
                      <FaFileAlt class="w-7 text-[#41B161]" />
                    </div>
                    <div class="details pl-5">
                      <p class="text-[#030229] font-semibold text-lg">Total Doctors</p>
                    </div>
                  </div>
                  <div class="count">
                    <span class="text-[#030229] text-2xl font-extrabold">{cardData.totalDoctorCount}</span>
                  </div>
                </div>
              </div>

              <div class="total-Appointments w-1/4 px-3 pt-3.5">
                <div class="content flex justify-between items-center bg-white rounded-lg p-3.5">
                  <div class="logo_details flex items-center">
                    <div class="logo w-12 h-12 rounded-full bg-[#2E779326] flex justify-center items-center">
                      <FaFileAlt class="w-7 text-[#9A5BD4]" />
                    </div>
                    <div class="details pl-5">
                      <p class="text-[#030229] font-semibold text-lg">Total Claim</p>
                    </div>
                  </div>
                  <div class="count">
                    <span class="text-[#030229] text-2xl font-extrabold">{cardData.insuranceClaimCount}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="top flex p-2.5">
              <div className="w-1/2 p-3">
                <AppointmentGraph />
              </div>
              <div className="w-1/2 p-3">
                <PatientSummary />
              </div>
            </div>

            <div className="bottom flex justify-between py-5 px-3">

              <div class="patient-count-data w-[32.5%] p-[10px]">
                <div class="content h-[330px] bg-white p-5 rounded-lg">
                  <div class="head">
                    <div class="title">
                      <p class="text-[24px] font-bold text-[#030229]">Patients Count by Disease</p>
                    </div>
                  </div>
                  <div class="pending-bill h-[85%]">
                    <div class="pending-bill-data pt-2.5 h-[90%]">
                      <div class="bill-table h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#030229] scrollbar-track-[#F4F4F4]">
                        <table class="w-full px-2.5 text-lg">
                          <thead>
                            <tr class="flex bg-[#f6f8fb] justify-between items-center">
                              <th class="w-[40%] text-[#030229] text-[16px] font-semibold py-3.5 px-3.5">Disease Name</th>
                              <th class="w-[40%] text-[#030229] text-[16px] font-semibold py-3.5 px-3.5">Patient Count</th>
                            </tr>
                          </thead>
                          <tbody class="w-full">
                            {cardData?.patientCountByDisease?.length > 0 ? (
                              cardData?.patientCountByDisease?.map((patient) => (
                                <tr key={patient._id} class="flex justify-between items-center border-b border-[#F6F8FB] py-1 px-3.5">
                                  <td class="d-name text-center w-[20%]">
                                    <p class="text-[#4F4F4F] text-[15px] font-medium">{patient._id || 'N/A'}</p>
                                  </td>
                                  <td class="status pr-3.5 text-center w-[20%]">
                                    <p class="bg-[#39973D1A] text-[#39973D] rounded-full flex justify-center items-center">
                                      <FaUsers />
                                      <span class="text-[13px] font-semibold py-1 px-2.5">{patient.count}</span>
                                    </p>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="2" class="text-center">No data available</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="doctor-count-data w-[32.5%] p-[10px]">
                <div class="content h-[330px] bg-white p-5 rounded-lg">
                  <div class="head">
                    <div class="title">
                      <p class="text-[24px] font-bold text-[#030229]">Doctor Count by Department</p>
                    </div>
                  </div>
                  <div class="pending-bill h-[85%]">
                    <div class="pending-bill-data pt-2.5 h-[90%]">
                      <div class="bill-table h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#030229] scrollbar-track-[#F4F4F4]">
                        <table class="w-full px-2.5">
                          <thead>
                            <tr class="flex bg-[#f6f8fb] justify-between items-center">
                              <th class="w-[40%] text-[#030229] text-[16px] font-semibold py-3.5 px-3.5">Department Name</th>
                              <th class="w-[40%] text-[#030229] text-[16px] font-semibold py-3.5 px-3.5">Doctor Count</th>
                            </tr>
                          </thead>
                          <tbody class="w-full">
                            {cardData?.doctorCountByDepartment?.map((specialty) => (
                              <tr key={specialty._id} class="flex justify-between items-center border-b border-[#F6F8FB] py-1 px-3.5">
                                <td class="d-name text-center w-[20%]">
                                  <p class="text-[#4F4F4F] text-[15px] font-medium">{specialty._id || 'N/A'}</p>
                                </td>
                                <td class="status pr-3.5 text-center w-[20%]">
                                  <p class="bg-[#39973D1A] text-[#39973D] rounded-full flex justify-center items-center">
                                    <FaUsers />
                                    <span class="text-[13px] font-semibold py-1 px-2.5">{specialty.count}</span>
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
