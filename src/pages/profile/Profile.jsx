import AsideProfile from "../../component/AdminProfile/AsideProfile";
import ProfileData from "../../component/AdminProfile/ProfileData";
import { Route, Routes } from "react-router-dom";
import ProfileChangePassword from "../../component/AdminProfile/ProfileChangePassword";
import ProfileTermsCondition from "../../component/AdminProfile/ProfileTermsCondition";
import ProfilePrivacyPolicy from "../../component/AdminProfile/ProfilePrivacyPolicy";

export default function Profile() {
  return (
    <div className="profile-section">
      <div className="row">
        <div className="main">
          <div className="h-[296px] bg-gradient-to-r from-[#4c49ed] to-[#020067]"></div>
          <div className="w-[80%] m-auto mt-[-15%]">
            <div className="pb-[15px]">
              <p className="text-[44px] font-bold text-white">
                Profile Setting{" "}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow flex">
              <AsideProfile />

              <div className="w-[77%] ps-5">
                <Routes>
                  <Route path="/" element={<ProfileData />} />
                  <Route
                    path="changePassword"
                    element={<ProfileChangePassword />}
                  />
                  <Route
                    path="termsCondition"
                    element={<ProfileTermsCondition />}
                  />
                  <Route
                    path="privacyPolicy"
                    element={<ProfilePrivacyPolicy />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
