import React from "react";
import Modal from "react-modal";

const AppointmentModal = ({ modalData, onClose }) => {
  const { day, time } = modalData;

  return (
    <Modal isOpen={!!modalData} onRequestClose={onClose} contentLabel="Appointment Details">
      <h3>Appointment Details</h3>
      <p>
        <strong>Day:</strong> {day}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button onClick={onClose} className="button close">Close</button>
      <button className="button edit">Edit</button>
      <button className="button delete">Delete</button>
    </Modal>
  );
};

export default AppointmentModal;
