import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import AddEmployee from '../pages/AddEmployee';
import EditEmployee from '../pages/EditEmployee';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/edit-employee/:id" element={<EditEmployee />} />
    </Routes>
  );
}

export default AppRoutes;
