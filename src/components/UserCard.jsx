function UserCard({ name, role, experience }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
      <p>Experience: {experience}</p>
    </div>
  );
}

export default UserCard;
