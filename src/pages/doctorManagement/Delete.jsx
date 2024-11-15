import { useState } from "react";
import "../doctorManagement/delete.css";
import { MdDeleteSweep } from "react-icons/md";
import apiService from "../../services/api";
import toast from "react-hot-toast";

export default function Delete({ deleteId, onClose, onDeleteSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        setLoading(true);
        await apiService.DeleteDoctor(deleteId);
        onDeleteSuccess(deleteId);
        onClose();
        toast.success("Doctor deleted successfully");
      } catch (error) {
        setError(
          "Error deleting doctor: " + (error.response ? error.response.data.message : error.message)
        );
        toast.error("Error deleting doctor: " + (error.response ? error.response.data.message : error.message));
        console.error("Error deleting doctor:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md">
        <div className="delete-section">
          <div className="row">
            <div className="box">
              <div className="note">
                <div className="icon">
                  <MdDeleteSweep />
                </div>
                <div className="text">
                  <h3>Delete Doctor Details?</h3>
                  <p>Are you sure you want to delete this doctor’s details?</p>
                  {error && <p className="error-message">{error}</p>}
                </div>
                <div className="btns flex">
                  <button className="no" onClick={onClose} disabled={loading}>
                    No
                  </button>
                  <button className="yes" onClick={handleDelete} disabled={loading}>
                    {loading ? "Deleting..." : "Yes"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
