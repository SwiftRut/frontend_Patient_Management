import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CreateHospitalForm from '../forms/CreateHospitalForm';

const CreateHospitalModal = ({ openCreateHospital, handleClose }) => {

  return (
    <Dialog open={openCreateHospital} onClose={handleClose}>
      <DialogTitle>Create a New Hospital</DialogTitle>
      <DialogContent>
        <CreateHospitalForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateHospitalModal;
