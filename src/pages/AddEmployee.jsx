import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        role,
        experience,
      }),
    });

    if (response.ok) {
      navigate('/');
    }
  };

  return (
    <div className="add-employee-container">
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />

        <input
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
