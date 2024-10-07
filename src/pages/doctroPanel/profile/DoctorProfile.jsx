import { DoctorAside } from "./DoctorAside";
import DoctorProfileData from "./DoctorProfileData";
import { Route, Routes } from "react-router-dom";
import DoctorProfileChangePassord from "./DoctorProfileChangePassord";
import DoctorProfileTermsCondition from "./DoctorProfileTermsCondition";
import DoctorProfilePrivacyPolicy from "./DoctorProfilePrivacyPolicy";
import '../profile/doctorProfile.css'

export default function DoctorProfile() {

  return (
    <div>
      <div className="doctor-profile-section">
        <div className="row">
          <div className="main">
            <div className="top"></div>
            <div className="profile-setting">
              <div className="head">
                <p>Profile Setting</p>
              </div>
              <div className="content flex">
                <DoctorAside />

                <div className="right">
                  <Routes>
                    <Route path="" element={<DoctorProfileData />} />
                    <Route path="changePassword" element={<DoctorProfileChangePassord />} />
                    <Route path="termsCondition" element={<DoctorProfileTermsCondition />} />
                    <Route path="privacyPolicy" element={<DoctorProfilePrivacyPolicy />} />
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
