import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

function UserCard({ id, name, role, experience, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="user-card" data-employee-id={id}>
      
      <button onClick={() => onDelete(id)}>Delete</button>

      <button onClick={() => navigate(`/edit-employee/${id}`)}>Edit</button>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  onDelete: PropTypes.string.isRequired,
};

export default UserCard;
