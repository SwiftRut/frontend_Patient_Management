// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ element: Element, requiredRole, ...rest }) => {
    const { user } = useAuth();
    console.log(user, "<<<<<<<<<<<<<<<<< user from ProtectedRoute");
    const isAuthorized = user && user.role === requiredRole;

    return (
        <Route
            {...rest}
            element={isAuthorized ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
