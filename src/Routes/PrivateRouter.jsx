import React from 'react';
import { Navigate } from 'react-router-dom';
import { RutasPrivadas } from './RutasPrivadas';
export const PrivateRoute = ({ isAuthenticated, children }) => {

    console.log("valor",isAuthenticated)
    return isAuthenticated ? <Navigate to="/" /> : children;
};