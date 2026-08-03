import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Employee Portal</h2>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>

        <Link
          to="/dashboard"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Dashboard
        </Link>

        <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
