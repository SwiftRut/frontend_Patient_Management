import "./pages/pages.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Dashboard from "./pages/Dashboard";
import "./component/sidebar.css"

function App() {
  return (
    <>
      <Sidebar />
      <Header />

      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
