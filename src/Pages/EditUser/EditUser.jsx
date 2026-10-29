import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../api";
import Icon from "../../Components/Icon";
import "../UserDetails/UserDetails.css"; // reuse the profile card + header styles
import "./EditUser.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fields = [
  { name: "firstName", label: "First Name", required: true },
  { name: "lastName", label: "Last Name", required: true },
  { name: "email", label: "Email Address", required: true, type: "email" },
  { name: "address", label: "Address", textarea: true },
];

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null); // { type: "success" | "error", text }

  // 1. Load the user and fill the form with their current details
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
        setForm({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          address: data.address || "",
        });
      } catch (err) {
        setLoadError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setMessage(null);
  };

  const validate = () => {
    const found = {};
    if (!form.firstName.trim()) found.firstName = "First name is required.";
    if (!form.lastName.trim()) found.lastName = "Last name is required.";
    if (!form.email.trim()) found.email = "Email address is required.";
    else if (!emailPattern.test(form.email))
      found.email = "Enter a valid email address.";
    return found;
  };

  // 2. Send the changes to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setSaving(true);
    setMessage(null);
    try {
      //Edit the user.
      const res = await fetch(`${API_URL}/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
        }),
      });
      if (!res.ok)
        throw new Error("Could not save your changes. Please try again.");
      setMessage({
        type: "success",
        text: "Changes saved. Taking you back to the profile...",
      });
      setTimeout(() => navigate(`/users/${id}`), 1200);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="ud-msg">Loading profile...</p>;
  if (loadError) return <p className="ud-msg">{loadError}</p>;

  return (
    <div className="page-user-details page-edit-user">
      <div className="ud-wrap">
        <Link to={`/users/${id}`} className="ud-back">
          <Icon name="back" size={16} /> Back to Profile
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

          <form className="ud-body" onSubmit={handleSubmit} noValidate>
            <h2>Edit User Information</h2>
            <p className="ud-sub">
              Update the user's details using the form below.
            </p>

            {message && (
              <div className={`ef-msg ${message.type}`} role="status">
                {message.text}
              </div>
            )}

            <div className="ud-form">
              {fields.map((f) => {
                const Tag = f.textarea ? "textarea" : "input";
                return (
                  <div className="ef" key={f.name}>
                    <label htmlFor={f.name}>
                      {f.label}
                      {f.required && <i> *</i>}
                    </label>
                    <Tag
                      id={f.name}
                      name={f.name}
                      type={f.textarea ? undefined : f.type || "text"}
                      rows={f.textarea ? 3 : undefined}
                      className={errors[f.name] ? "bad" : ""}
                      value={form[f.name]}
                      onChange={handleChange}
                    />
                    {errors[f.name] && (
                      <div className="ef-err">{errors[f.name]}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="ef-actions">
              <button
                type="submit"
                className="ud-btn ud-edit"
                disabled={saving}
              >
                <Icon name="save" size={18} />{" "}
                {saving ? "Saving..." : "Save Changes"}
              </button>
              <Link to={`/users/${id}`} className="ud-btn ud-cancel">
                <Icon name="cancel" size={18} /> Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
