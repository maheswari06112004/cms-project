import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const location = useLocation();
  // Replace this with your actual authentication logic
  const isAuthenticated = false; // This should come from your auth context/state
  
  if (!isAuthenticated) {
    // Redirect to sign-in page with return url
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  
  return children;
}

export default PrivateRoute;