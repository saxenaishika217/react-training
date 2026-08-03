import PropTypes from 'prop-types';

function UserCard({ name, role, experience }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Experience: {experience}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
};

export default UserCard;
