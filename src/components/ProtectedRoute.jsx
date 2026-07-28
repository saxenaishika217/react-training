import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const {isLoggedIn }= useContext(AuthContext); // change to true to test

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
