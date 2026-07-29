import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";


function Home() {

  const users = [
  {
    id: 1,
    name: "Neal",
    role: "Frontend Developer",
    experience: "1 Year",
  },
  {
    id: 2,
    name: "John",
    role: "Backend Developer",
    experience: "3 Years",
  },
  {
    id: 3,
    name: "Emily",
    role: "QA Engineer",
    experience: "2 Years",
  },
];

const navigate = useNavigate();

 return (
  <div className="home-container">
    <h1>Employee Portal</h1>

    <p className="home-subtitle">
      Manage your employees efficiently.
    </p>

    <button
      className="dashboard-btn"
      onClick={() => navigate("/dashboard")}
    >
      View Dashboard
    </button>

    <h2 className="employee-heading">
      Employee List
    </h2>

    {users.map((user) => (
      <UserCard
        key={user.id}
        name={user.name}
        role={user.role}
        experience={user.experience}
      />
    ))}
  </div>
);

}

export default Home;
