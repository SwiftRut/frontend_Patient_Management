import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./component/sidebar.css";
import "./pages/pages.css";
import routesConfig from "./routesConfig.jsx";
import { Loading } from "./imports/index.js";
import AddRecord from "./pages/doctroPanel/AddRecord.jsx";
import AllFiles from "./pages/doctroPanel/AllFiles.jsx";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route  path="/doctor/addRecord" element= {<AddRecord/>} />
          <Route  path="/doctor/patientDetail/allFiles" element= {<AllFiles/>} />

          {routesConfig.map((route, index) => {
            if (route.children) {
              return (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children.map((child, childIndex) => (
                    <Route key={childIndex} path={child.path} element={child.element} />
                  ))}
                </Route>
              );
            }
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
