import "../profile/profile.css";

import AsideProfile from "../../component/AdminProfile/AsideProfile";
import ProfileData from "../../component/AdminProfile/ProfileData";
import { Route, Routes } from "react-router-dom";
import ProfileChangePassword from "../../component/AdminProfile/ProfileChangePassword";
import ProfileTermsCondition from "../../component/AdminProfile/ProfileTermsCondition";
import ProfilePrivacyPolicy from "../../component/AdminProfile/ProfilePrivacyPolicy";

export default function Profile() {
  return (
    <div>
      <div className="profile-section">
        <div className="row">
          <div className="main">
            <div className="top"></div>
            <div className="profile-setting">
              <div className="head">
                <p>Profile Setting</p>
              </div>
              <div className="content flex">
                <AsideProfile />

                <div className="right">
                  <Routes>
                    <Route path="/" element={<ProfileData />} />
                    <Route path="changePassword" element={<ProfileChangePassword />} />
                    <Route path="termsCondition" element={<ProfileTermsCondition />} />
                    <Route path="privacyPolicy" element={<ProfilePrivacyPolicy />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
