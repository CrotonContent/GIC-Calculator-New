import React from 'react';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  // Redirect to the CMS admin page
  return <Navigate to="/admin" replace />;
};

export default Login;