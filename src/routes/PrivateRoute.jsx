import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element, allowedRoles, userRole }) => {
  if (!userRole || userRole === "No Role") {
    return <Navigate to="/login" />;
  }
  const isAuthorized = allowedRoles.includes(userRole);

  return isAuthorized ? element : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  allowedRoles: PropTypes.bool.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default ProtectedRoute;
