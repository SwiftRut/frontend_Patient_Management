import "./pages/pages.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./component/sidebar.css";
import AdminPanel from "./pages/AdminPanel";
import { Chart } from "chart.js";
import AdminRegistration from "./pages/AdminRegistration";
import ChatApp from "./pages/Chat";

function App() {
  return (
    <>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-registeration" element={<AdminRegistration />} />
            <Route path="/charts" element={<Chart />} />
            <Route path="/chat" element={<ChatApp />} />
            <Route path="/" element={<AdminPanel />}>
              <Route path="doctorManagement" />
              <Route path="profile/*" />
              <Route path="edit" />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
