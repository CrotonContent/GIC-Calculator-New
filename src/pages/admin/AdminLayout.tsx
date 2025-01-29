import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  // For now, we'll redirect to the CMS admin page
  return <Navigate to="/admin" replace />;
};

export default AdminLayout;