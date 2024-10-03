import "./pages/pages.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AsiteAdmin from "./component/AsiteAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/asiteAdmin" element={<AsiteAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
