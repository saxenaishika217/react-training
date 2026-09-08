import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Employee Dashboard';
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome, Admin!</h1>
        <p>Manage your employees from here.</p>

        <button
          id="add-employee"
          onClick={() => navigate('/add-employee')}
        >
          Add Employee
        </button>

        <button onClick={() => navigate('/')}>View Employees</button>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
