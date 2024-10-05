import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ProfileData() {
  return (
    <div className="content">
      <div className="head flex">
        <div className="title">
          <p>Profile</p>
        </div>
        <div className="edit">
          <NavLink to={"/edit"}>
            <button className="flex">
              <FaEdit />
              <span>Edit Profile</span>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="form-box">
        <form action="" className="flex">
          <div className="input-box">
            <div className="label">
              First Name <span>*</span>
            </div>
            <input type="text" placeholder="Enter First Name" />
          </div>

          <div className="input-box">
            <div className="label">
              Last Name <span>*</span>
            </div>
            <input type="text" placeholder="Enter Last Name" />
          </div>

          <div className="input-box">
            <div className="label">
              Email Address <span>*</span>
            </div>
            <input type="text" placeholder=" Email Address" />
          </div>

          <div className="input-box">
            <div className="label">
              Phone Number* <span>*</span>
            </div>
            <input type="text" placeholder=" Phone Number*" />
          </div>

          <div className="input-box">
            <div className="label">
              Hospital Name <span>*</span>
            </div>
            <input type="text" placeholder=" Hospital Name" />
          </div>

          <div className="input-box">
            <div className="label">
              Gender <span>*</span>
            </div>
            <input type="text" placeholder=" Gender" />
          </div>

          <div className="input-box">
            <div className="label">
              City <span>*</span>
            </div>
            <input type="text" placeholder=" City" />
          </div>

          <div className="input-box">
            <div className="label">
              State <span>*</span>
            </div>
            <input type="text" placeholder=" State" />
          </div>

          <div className="input-box">
            <div className="label">
              Country <span>*</span>
            </div>
            <input type="text" placeholder=" Country" />
          </div>
        </form>
      </div>
    </div>
  );
}
