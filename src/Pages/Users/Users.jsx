import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../api";
import "./Users.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Could not load users");
        setUsers(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="page-users">
      <Header />
      <section className="hero hero-sm">
        <div className="container">
          <span className="badge">Users</span>
          <h1>Registered users</h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Everyone who has signed up to Nexora. Select a user to see their
            details.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {loading && <p className="users-msg">Loading users...</p>}
          {error && <p className="users-msg">{error}</p>}
          <div className="grid-3">
            {users.map((user) => (
              <div className="u-card" key={user._id}>
                <div className="u-avatar">
                  {user.firstName?.[0]?.toUpperCase()}
                </div>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p>{user.email}</p>
                <p>{user.address || "Address not provided"}</p>
                <Link
                  to={`/users/${user._id}`}
                  className="btn btn-primary u-btn"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Users;
