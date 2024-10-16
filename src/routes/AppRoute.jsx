import { Navigate, Route, Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routesConfig from "../routesConfig";

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          {routesConfig.map((route, index) => {
            if (route.allowedRoles && route.allowedRoles.length > 0) {
              return (
                <PrivateRoute
                  key={index}
                  path={route.path}
                  element={route.element}
                  allowedRoles={route.allowedRoles}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              );
            }
          })}
          {/* Add a catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  };

  export default AppRoutes;