import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = false; // change to true to test

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
