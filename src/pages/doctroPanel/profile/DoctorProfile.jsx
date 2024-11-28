import { DoctorAside } from "./DoctorAside";
import DoctorProfileData from "./DoctorProfileData";
import { Route, Routes } from "react-router-dom";
import DoctorProfileChangePassord from "./DoctorProfileChangePassord";
import DoctorProfileTermsCondition from "./DoctorProfileTermsCondition";
import DoctorProfilePrivacyPolicy from "./DoctorProfilePrivacyPolicy";

export default function DoctorProfile() {
  return (
    <div>
      <div className="doctor-profile-section">
        <div className="row">
          <div className="main bg-[#e5e7eb]">
            <div className="top h-[296px] bg-gradient-to-r from-[#4c49ed] to-[#020067]"></div>
            <div className="profile-setting new-xxl:w-[80%] new-xl:w-[85%] new-lg:w-[90%] m-auto mt-[-12%]">
              <div className="head pb-[15px]">
                <p className="text-[44px] font-bold text-white">
                  Profile Setting
                </p>
              </div>
              <div className="content flex bg-white rounded-[15px] p-[20px] shadow-2xl ">
                <DoctorAside />

                <div className="right w-[77%] ps-[20px]">
                  <Routes>
                    <Route path="" element={<DoctorProfileData />} />
                    <Route
                      path="changePassword"
                      element={<DoctorProfileChangePassord />}
                    />
                    <Route
                      path="termsCondition"
                      element={<DoctorProfileTermsCondition />}
                    />
                    <Route
                      path="privacyPolicy"
                      element={<DoctorProfilePrivacyPolicy />}
                    />
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
