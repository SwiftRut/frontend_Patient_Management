import { Modal, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { LuCalendarX2 } from "react-icons/lu";

const CancelAppointmentModal = ({ open, onClose }) => {

  const handleCancel = () => {
    // Handle appointment cancellation logic
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded-lg shadow-lg">

      <div className="bg-card rounded-lg shadow-lg px-6 py-3 max-w-sm mx-auto w-full border-t-[6px] border-red-600">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-500 rounded-full p-3 text-white text-lg">
            <LuCalendarX2 />
          </div>
        </div>
        <h2 className="text-[24px] text-[#030229] font-bold text-center">
          Cancel Online Appointment ?
        </h2>
        <p className="text-[#4F4F4F] text-sm font-normal text-center mb-6 mt-3">
          If you cancel appointment you have to return payment.
        </p>
        <div className="flex justify-between space-x-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md w-[47%]">
            No
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md w-[47%]">
            Payment Return
          </button>
        </div>
      </div>


        {/* <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-red-500">Cancel Online Appointment?</h2>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        <p className="mb-4 text-center">
          If you cancel the appointment, you will need to return the payment.
        </p>
        <div className="flex justify-between">
          <Button variant="outlined" onClick={onClose}>No</Button>
          <Button variant="contained" color="primary" onClick={handleCancel}>Payment Return</Button>
        </div> */}
      </div>
    </Modal>
  );
};

export default CancelAppointmentModal;
