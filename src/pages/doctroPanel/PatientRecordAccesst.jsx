import { useState } from 'react';
import { IconButton, TextField, InputAdornment, MenuItem, Select } from '@mui/material';
import { Search, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function PatientRecordAccesst() {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('Month');
  const navigate = useNavigate();

  const patients = [
    { patientName: 'Marcus Philips', diseaseName: 'Viral Infection', patientIssue: 'Feeling Tired', lastAppointmentDate: '10 oct, 2024', lastAppointmentTime: '4:30 PM', age: '22 Years', gender: 'Male' },
    { patientName: 'London Shaffer', diseaseName: 'Diabetes', patientIssue: 'Stomach Ache', lastAppointmentDate: '16 oct, 2024', lastAppointmentTime: '5:00 PM', age: '45 Years', gender: 'Female' },
    // Add more data...
  ];

  // Function to filter patients based on time filter
  const filterByTime = (patients, timeFilter) => {
    const now = new Date();
    return patients.filter((patient) => {
      const appointmentDate = new Date(patient.lastAppointmentDate);
      const diffTime = now - appointmentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

      if (timeFilter === 'Month') {
        return diffDays <= 30; // Last 30 days
      } else if (timeFilter === 'Week') {
        return diffDays <= 7; // Last 7 days
      } else if (timeFilter === 'Day') {
        return diffDays <= 1; // Last 1 day
      }
      return true; // Default case, return all
    });
  };

  // Filter patients based on search term and time filter
  const filteredPatients = filterByTime(patients, timeFilter).filter((patient) =>
    patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.diseaseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.patientIssue.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bg-[#e4e3e3] p-6 h-full">

      <div className="patioentRecord p-6 bg-white rounded-lg shadow-md">

        {/* Search and Filter Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="left">
            <h2 className="text-lg font-semibold mb-4">Patient Record Access</h2>
          </div>

          <div className="right flex justify-between items-center mb-4">
            <div className="pr-search">
              <TextField
                variant="outlined"
                placeholder="Search Patient"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="pr-select">
              <Select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="Month">Month</MenuItem>
                <MenuItem value="Week">Week</MenuItem>
                <MenuItem value="Day">Day</MenuItem>
              </Select>
            </div>
          </div>

        </div>

        {/* Table of Patient Records */}
        <div className="pr-data max-h-[600px] overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr>
                <th className="p-3 text-left text-sm font-semibold">Patient Name</th>
                <th className="p-3 text-left text-sm font-semibold">Disease Name</th>
                <th className="p-3 text-left text-sm font-semibold">Patient Issue</th>
                <th className="p-3 text-left text-sm font-semibold">Last Appointment Date</th>
                <th className="p-3 text-left text-sm font-semibold">Last Appointment Time</th>
                <th className="p-3 text-left text-sm font-semibold">Age</th>
                <th className="p-3 text-left text-sm font-semibold">Gender</th>
                <th className="p-3 text-left text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{patient.patientName}</td>
                  <td className="p-3">{patient.diseaseName}</td>
                  <td className="p-3">{patient.patientIssue}</td>
                  <td className="p-3">{patient.lastAppointmentDate}</td>
                  <td className="p-3 text-blue-600">{patient.lastAppointmentTime}</td>
                  <td className="p-3">{patient.age}</td>
                  <td className="p-3 gender">
                    <span className={patient.gender === 'Male' ? 'text-blue-500' : 'text-pink-500'}>
                      {patient.gender === 'Male' ? '♂' : '♀'}
                    </span>
                  </td>
                  <td className="p-3">
                    <IconButton color="primary">
                      <Visibility onClick={() => navigate(`/doctor/patientDetail/${patient.id}`)} />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
