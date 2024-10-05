import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ProfileData() {
  const { user } = useAuth();
  const {getAdminProfile, adminData } = useGlobal();
  useEffect(() => {
    const fetchData = async () => {
      try {
          await getAdminProfile(user.id);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])
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
            <input disabled type="text" placeholder="Enter First Name" value={adminData?.firstName}/>
          </div>

          <div className="input-box">
            <div className="label">
              Last Name <span>*</span>
            </div>
            <input disabled type="text" placeholder="Enter Last Name" value={adminData?.lastName}/>
          </div>

          <div className="input-box">
            <div className="label">
              Email Address <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Email Address" value={adminData?.email} />
          </div>

          <div className="input-box">
            <div className="label">
              Phone Number* <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Phone Number*" value={adminData?.phone} />
          </div>

          <div className="input-box">
            <div className="label">
              Hospital Name <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Hospital Name" value={adminData?.hospital}/>
          </div>

          <div className="input-box">
            <div className="label">
              Gender <span>*</span>
            </div>
            <input disabled type="text" placeholder="Gender" value={adminData?.gender} />
          </div>

          <div className="input-box">
            <div className="label">
              City <span>*</span>
            </div>
            <input disabled type="text" placeholder=" City" value={adminData?.city}/>
          </div>

          <div className="input-box">
            <div className="label">
              State <span>*</span>
            </div>
            <input disabled type="text" placeholder=" State" value={adminData?.state}/>
          </div>

          <div className="input-box">
            <div className="label">
              Country <span>*</span>
            </div>
            <input disabled type="text" placeholder=" Country" value={adminData?.country}/>
          </div>
        </form>
      </div>
    </div>
  );
}
