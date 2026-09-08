import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/employees/${id}`)
      .then((response) => response.json())
      .then((employee) => {
        setName(employee.name);
        setRole(employee.role);
        setExperience(employee.experience);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:3000/api/employees/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          role,
          experience,
        }),
      }
    );

    if (response.ok) {
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Edit Employee</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />

        <input
          value={role}
          onChange={(event) => setRole(event.target.value)}
          placeholder="Role"
        />

        <input
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          placeholder="Experience"
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEmployee;
