import "../doctorManagement/delete.css";
import { MdDeleteSweep } from "react-icons/md";

export default function Delete() {
  return (
    <>
      <div className="delete-section">
        <div className="row">
          <div className="box">
            <div className="note">
              <div className="icon">
                <MdDeleteSweep />
              </div>
              <div className="text">
                <h3>Delete Doctor Details ?</h3>
                <p>Are you sure you want to delete this doctor details?</p>
              </div>
              <div className="btns flex">
                <button className="no">No</button>
                <button className="yes">Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
