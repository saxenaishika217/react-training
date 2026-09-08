import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = { children: PropTypes.node.isRequired };

function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // change to true to test

  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
