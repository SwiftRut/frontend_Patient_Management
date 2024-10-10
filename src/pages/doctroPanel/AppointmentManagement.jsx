import { useState, useEffect } from 'react';
import { Button, IconButton, TextField, InputAdornment } from '@mui/material';
import { CalendarToday, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomDateModal from '../../component/modals/CustomDateModal.jsx';
import CancelAppointmentModal from '../../component/modals/CancelAppointmentModal.jsx';
import apiService from '../../services/api.js';

export default function AppointmentManagement() {

  // Initialize with static data
  const [appointments, setAppointments] = useState({
    today: [
      {
        patientName: 'Marcus Philips',
        diseaseName: 'Viral Infection',
        patientIssue: 'Stomach Ache',
        appointmentDate: '2024-10-10',
        appointmentTime: '4:30 PM',
        appointmentType: 'Online',
      },
      {
        patientName: 'Julianna Warren',
        diseaseName: 'Diabetes',
        patientIssue: 'High Blood Sugar',
        appointmentDate: '2024-10-10',
        appointmentTime: '2:40 PM',
        appointmentType: 'Onsite',
      },
    ],
    upcoming: [
      {
        patientName: 'London Shaffer',
        diseaseName: 'Viral Infection',
        patientIssue: 'Feeling Tired',
        appointmentDate: '2024-10-12',
        appointmentTime: '5:35 PM',
        appointmentType: 'Onsite',
      },
    ],
    previous: [
      {
        patientName: 'Leslie Mccray',
        diseaseName: 'Blood Pressure',
        patientIssue: 'Headache',
        appointmentDate: '2024-10-08',
        appointmentTime: '9:30 AM',
        appointmentType: 'Online',
      },
    ],
    canceled: [
      {
        patientName: 'Marcus Philips',
        diseaseName: 'Viral Infection',
        patientIssue: 'Stomach Ache',
        appointmentDate: '2024-10-07',
        appointmentTime: '4:30 PM',
        appointmentType: 'Onsite',
      },
    ],
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Today Appointment');
  const [openCustomDateModal, setOpenCustomDateModal] = useState(false);
  const [openCancelAppointmentModal, setOpenCancelAppointmentModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await apiService.AllAppointments();
        const appointmentData = response.data;

        setAppointments({
          today: appointmentData.today || [],
          upcoming: appointmentData.upcoming || [],
          previous: appointmentData.previous || [],
          canceled: appointmentData.canceled || [],
        });
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Get appointments based on active tab
  const getAppointments = () => {
    switch (activeTab) {
      case 'Today Appointment':
        return appointments.today;
      case 'Upcoming Appointment':
        return appointments.upcoming;
      case 'Previous Appointment':
        return appointments.previous;
      case 'Cancel Appointment':
        return appointments.canceled;
      default:
        return [];
    }
  };

  const filteredAppointments = getAppointments().filter((appointment) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      appointment.patientName.toLowerCase().includes(lowerSearchTerm) ||
      appointment.diseaseName.toLowerCase().includes(lowerSearchTerm) ||
      appointment.patientIssue.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md m-6">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-8 text-sm font-semibold text-gray-500">
          {['Today Appointment', 'Upcoming Appointment', 'Previous Appointment', 'Cancel Appointment'].map((tab) => (
            <Button
              key={tab}
              className={activeTab === tab ? '!text-blue-600 !border-b-2 !border-blue-600' : 'text-gray-400'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Search Bar and Appointment Time Slot */}
        <div className="flex items-center space-x-4">
          {/* Search Field */}
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
          {/* Appointment Time Slot Button */}
          <Button variant="contained" color="primary" className="!text-sm" onClick={() => navigate('/appointment-time-slot')}>
            Appointment Time Slot
          </Button>
        </div>
      </div>

      {/* Table of Appointments */}
      <div className="max-h-[600px] overflow-y-auto">
        <table className="min-w-full table-auto">
          <thead className="sticky top-0 bg-gray-100 z-10">
            <tr>
              <th className="p-3 text-left text-sm font-semibold">Patient Name</th>
              <th className="p-3 text-left text-sm font-semibold">Disease Name</th>
              <th className="p-3 text-left text-sm font-semibold">Patient Issue</th>
              <th className="p-3 text-left text-sm font-semibold">Appointment Date</th>
              <th className="p-3 text-left text-sm font-semibold">Appointment Time</th>
              <th className="p-3 text-left text-sm font-semibold">Appointment Type</th>
              <th className="p-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{appointment.patientName}</td>
                <td className="p-3">{appointment.diseaseName}</td>
                <td className="p-3">{appointment.patientIssue}</td>
                <td className="p-3">{appointment.appointmentDate}</td>
                <td className="p-3 text-blue-600">{appointment.appointmentTime}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${appointment.appointmentType === 'Online' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
                    {appointment.appointmentType}
                  </span>
                </td>
                <td className="p-3">
                  <IconButton color="primary" onClick={() => setOpenCustomDateModal(true)}>
                    <CalendarToday style={{ color: 'purple' }} />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => setOpenCancelAppointmentModal(true)}>
                    <CalendarToday style={{ color: 'red' }} />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CustomDateModal open={openCustomDateModal} onClose={() => setOpenCustomDateModal(false)} />
      <CancelAppointmentModal open={openCancelAppointmentModal} onClose={() => setOpenCancelAppointmentModal(false)} />
    </div>
  );
}
