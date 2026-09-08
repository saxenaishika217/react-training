import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/UserCard';

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/employees')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/employees/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
    }
  };

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Employee Portal</h1>

      <p className="home-subtitle">Manage your employees efficiently.</p>

      <button className="dashboard-btn" onClick={() => navigate('/dashboard')}>
        View Dashboard
      </button>

      <h2 className="employee-heading">Employee List</h2>

      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          role={user.role}
          experience={user.experience}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Home;
