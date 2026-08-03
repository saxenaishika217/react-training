import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // change to true to test

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
