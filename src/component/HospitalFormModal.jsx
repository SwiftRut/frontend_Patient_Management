import { useState } from "react";
import "./modal.css"; // Adjust path as needed
import PropTypes from "propTypes";
const HospitalFormModal = ({ isOpen, onClose, addHospital }) => {
  const [hospitalData, setHospitalData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHospital(hospitalData);
    setHospitalData({ name: "", address: "", phone: "", email: "" }); // Reset form data
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add New Hospital</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label>
              Hospital Name
              <input
                type="text"
                name="name"
                value={hospitalData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="input-box">
            <label>
              Address
              <input
                type="text"
                name="address"
                value={hospitalData.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="input-box">
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={hospitalData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="input-box">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={hospitalData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Add Hospital</button>
        </form>
      </div>
    </div>
  );
};
HospitalFormModal.prototype = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  addHospital: PropTypes.func.isRequired,
}
export default HospitalFormModal;
