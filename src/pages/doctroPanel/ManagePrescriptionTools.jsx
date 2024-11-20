import React, { useEffect, useState } from 'react';
import { Tabs, Tab, TextField, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Badge } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PrescriptionModal from '../../component/modals/PrescriptionModal.jsx';
import { useGlobal } from '../../hooks/useGlobal.jsx';

const ManagePrescriptionTools = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const { getAllPrescriptions, allPrescriptions } = useGlobal();

  useEffect(() => {
    getAllPrescriptions();
  }, []);

  const handleModalOpen = (prescription) => {
    setSelectedPrescription(prescription);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedPrescription(null);
  };

  // Separate prescriptions into today's and older ones
  const today = new Date().toISOString().split('T')[0];
  const todayPrescriptions = allPrescriptions?.filter(
    prescription => prescription.date.split('T')[0] === today
  ) || [];
  const olderPrescriptions = allPrescriptions?.filter(
    prescription => prescription.date.split('T')[0] !== today
  ) || [];

  // Choose the appropriate data based on the active tab
  const currentPrescriptions = activeTab === 0 ? todayPrescriptions : olderPrescriptions;
  const currentTabName = activeTab === 0 ? 'Today Prescriptions' : "Older Prescriptions";

  // Filtering the prescriptions based on search input
  const filteredPrescriptions = currentPrescriptions.filter(
    (prescription) => {
      const searchString = searchTerm.toLowerCase();
      const patientName = `${prescription.patientId.firstName} ${prescription.patientId.lastName}`.toLowerCase();
      const phone = prescription.patientId.phone;
      const age = prescription.patientId.age?.toString() || '';

      return patientName.includes(searchString) ||
        phone.includes(searchString) ||
        age.includes(searchString);
    }
  );

  // Format prescription data for the modal
  const formatPrescriptionForModal = (prescription) => ({
    patientName: `${prescription.patientId.firstName} ${prescription.patientId.lastName}`,
    prescriptionDate: new Date(prescription.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }),
    gender: prescription.patientId.gender,
    age: `${prescription.patientId.age} Years`,
    address: prescription.patientId.address,
    medicines: prescription.medications || [],
    additionalNote: prescription.instructions
  });

  return (
    <div className="manage-p p-8 bg-white min-h-screen shadow-lg rounded-lg">
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
        <Tab label="Today Prescription" className="today" />
        <Tab label="Older Prescription" className="older" />
      </Tabs>

      <div className="head flex justify-between">
        <div className="tital">
          <p>{currentTabName}</p>
        </div>

        <div className="mt-4 mb-6 mp-tool">
          <TextField
            label="Search Patient"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Patient Number</TableCell>
            <TableCell>Appointment Status</TableCell>
            <TableCell>Prescription Date</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPrescriptions.map((prescription) => (
            <TableRow key={prescription._id}>
              <TableCell>
                {`${prescription.patientId.firstName} ${prescription.patientId.lastName}`}
              </TableCell>
              <TableCell>{prescription.patientId.phone}</TableCell>
              <TableCell className="type">
                <Badge
                  badgeContent={prescription.status}
                  color={prescription.status === 'Active' ? 'primary' : 'warning'}
                />
              </TableCell>
              <TableCell>
                {/* here we have to change the date format */}
                {new Date(prescription.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </TableCell>
              <TableCell>{`${prescription.patientId.age} Years`}</TableCell>
              <TableCell>
                {prescription.patientId.gender === 'male' ? (
                  <MaleIcon style={{ color: 'blue' }} />
                ) : (
                  <FemaleIcon style={{ color: 'red' }} />
                )}
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleModalOpen(prescription)}>
                  <Visibility style={{ color: '#0EABEB' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedPrescription && (
        <PrescriptionModal
          open={modalOpen}
          handleClose={handleModalClose}
          prescriptionData={formatPrescriptionForModal(selectedPrescription)}
        />
      )}
    </div>
  );
};

export default ManagePrescriptionTools;