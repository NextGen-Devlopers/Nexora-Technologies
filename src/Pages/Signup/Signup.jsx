import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./Signup.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import illustration from "../../assets/auth-illustration.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  // Create individual state variables for each input field (PAYLOAD)
  // individual state for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  // message state for success or error messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // loading state for form submission
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // handle form submission
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    // validation: no loading state here
    if (!firstName.trim()) return setError("First name is required.");
    if (!lastName.trim()) return setError("Last name is required.");
    if (!email.trim()) return setError("Email is required.");
    if (!password.trim()) return setError("Password is required.");
    if (!phoneNumber.trim()) return setError("Phone number is required.");
    if (!address.trim()) return setError("Address is required.");

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
      phoneNumber: phoneNumber.trim(),
      address: address.trim(),
    };

    try {
      setLoading(true); // only starts once validation has passed
      await axios.post(
        "https://students-learning-api.onrender.com/api/auth",
        payload,
      );
      setMessage("Registration successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.log("Status:", err.response?.status);
      console.log("Server said:", err.response?.data);
      const data = err.response?.data;
      setError(
        data?.message ||
          data?.error ||
          (typeof data === "string" ? data : null) ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false); // always runs, success or failure
    }
  };

  return (
    <div>
      <Header />
      <section className="auth">
        <div className="side">
          <h2>Start your project with Nexora</h2>
          <p>
            Create a free account to request consultations and follow every
            stage of your project.
          </p>
          <img
            src={illustration}
            alt=""
            style={{
              "max-width": "420px",
              "margin-top": "34px",
              "border-radius": "24px",
            }}
          />
        </div>
        <div className="main">
          <form onSubmit={handleLoginSubmit}>
            <h1>Create your account</h1>
            <p className="sub">It takes less than a minute.</p>

            {message && (
              <Typography variant="body2" color="success.main" sx={{ mb: 2 }}>
                {message}
              </Typography>
            )}
            {error && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                {error}
              </Typography>
            )}

            <div className="two">
              <div className="field">
                <label>First name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className="field">
                <label>Last name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label>Email address</label>
              <input
                className="input"
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                className="input"
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input
                className="input"
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
            <div className="field">
              <label>Address</label>
              <input
                className="input"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="row">
              <label>
                <input type="checkbox" /> I agree to the Terms and Privacy
                Policy
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary custom-submit-btn"
              style={{ display: "block", textAlign: "center" }}
            >
              {loading ? (
                <span className="btn-loading">
                  <span className="spinner"></span>
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </button>
            <div className="or" style={{ marginTop: "22px" }}>
              or continue with
            </div>
            <div className="sso" style={{ marginTop: "0" }}>
              <span className="btn btn-sm">Google</span>
              <span className="btn btn-sm">GitHub</span>
            </div>
            <p className="sw">
              Already have an account? <Link to="/Signin">Sign in</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
