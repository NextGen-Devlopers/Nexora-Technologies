import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../api";
import Icon from "../../Components/Icon";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("User not found");
        setUser(await res.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  const handleEdit = () => navigate(`/users/${id}/edit`);

  // TO Delete .
  const handleDelete = async () => {
    setDeleting(true);
    setDeleteError("");
    try {
      const res = await fetch(`${API_URL}/delete/${id}`, { method: "DELETE" });
      if (!res.ok)
        throw new Error("Could not delete this user. Please try again.");
      navigate("/users"); // go back to the list after deleting
    } catch (err) {
      setDeleteError(err.message);
      setConfirmDelete(false); // close the popup so the error is visible
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <p className="ud-msg">Loading profile...</p>;
  if (error) return <p className="ud-msg">{error}</p>;

  const fields = [
    { label: "First Name", value: user.firstName, icon: "user" },
    { label: "Last Name", value: user.lastName, icon: "id" },
    {
      label: "Phone Number",
      value: user.phoneNumber || "Not provided",
      icon: "phone",
    },
    { label: "Email Address", value: user.email, icon: "mail" },
    { label: "Address", value: user.address || "Not provided", icon: "home" },
  ];

  return (
    <div className="page-user-details">
      <div className="ud-wrap">
        <Link to="/users" className="ud-back">
          <Icon name="back" size={16} /> Back to Users
        </Link>

        <div className="ud-card">
          <div className="ud-header">
            <div className="ud-avatar">
              {user.firstName?.[0]?.toUpperCase()}
            </div>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <span className="ud-tag">User Profile</span>
          </div>

          <div className="ud-body">
            <h2>Personal Information</h2>
            <p className="ud-sub">View the user's registered information.</p>

            <div className="ud-list">
              {fields.map((f) => (
                <div className="ud-row" key={f.label}>
                  <div className="ud-icon">
                    <Icon name={f.icon} />
                  </div>
                  <div>
                    <span>{f.label}</span>
                    <b>{f.value}</b>
                  </div>
                </div>
              ))}
            </div>

            <div className="ud-actions">
              <button className="ud-btn ud-edit" onClick={handleEdit}>
                <Icon name="edit" size={18} /> Edit User
              </button>
              <button
                className="ud-btn ud-delete"
                onClick={() => setConfirmDelete(true)}
              >
                <Icon name="trash" size={18} /> Delete User
              </button>
            </div>
          </div>
        </div>
      </div>

      {confirmDelete && (
        <div className="ud-modal-bg" onClick={() => setConfirmDelete(false)}>
          <div
            className="ud-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ud-modal-icon">
              <Icon name="trash" size={26} />
            </div>
            <h3>Delete this user?</h3>
            <p>
              {user.firstName} {user.lastName} will be removed. This cannot be
              undone.
            </p>
            <div className="ud-modal-actions">
              <button
                className="ud-btn ud-cancel"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
              <button
                className="ud-btn ud-danger"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Yes, delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
