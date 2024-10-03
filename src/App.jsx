import "./pages/pages.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./component/sidebar.css";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AdminPanel />}>
              <Route path="/" />
              <Route path="doctorManagement" />
              <Route path="profile" />
              <Route path="edit" />
            </Route>
            <Route />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
