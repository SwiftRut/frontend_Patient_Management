import DoctorAsidePanel from "../../component/DoctorComponent/DoctorAsidePanel";
import Header from "../../component/Header";
import DoctorProfile from "./profile/DoctorProfile";
import { Route, Routes } from "react-router-dom";

export default function DoctorPanel() {
  return (
    <>
      <Header />
      <DoctorAsidePanel />

      <Routes>
        <Route path="profile/*" element={<DoctorProfile />} />
      </Routes>
    </>
  );
}
