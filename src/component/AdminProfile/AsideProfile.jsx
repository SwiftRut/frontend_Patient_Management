import { CgProfile } from "react-icons/cg";
import { FaLock } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { useGlobal } from "../../hooks/useGlobal";

export default function AsideProfile() {
  const {userData} = useGlobal();
  return (
    <div className="left">
      <div className="img-box">
        <div className="img">
          <img src={userData?.avatar || "../img/profile.png"} alt="" className='rounded-full' />
        </div>
        <p>{userData ? `${userData?.firstName} ${userData?.lastName}` : 'Lincoln Philips'}</p>
      </div>
      <div className="menu">
        <p>Menu</p>

        <ul>
          <li>
            <NavLink to={""}>
              <CgProfile /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"changePassword"}>
              <FaLock /> <span>Change Password</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'termsCondition'}>
              <FaStickyNote /> <span>Terms & Condition</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'privacyPolicy'}>
              <SiSpringsecurity /> <span>Privacy Policy</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
