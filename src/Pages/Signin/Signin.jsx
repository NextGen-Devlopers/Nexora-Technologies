import React, { useState } from "react";
import "./Signin.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import logo from "../../assets/logo-light.svg";
import illustration from "../../assets/auth-illustration.svg";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  // handle form submission
  const handleLoginSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      // clear previous messages
      setMessage("");
      setError("");
      // front-end validation
      if (!email || !password) {
        setError("ALL FIELDS ARE REQUIRED.");
        setLoading(false);
        return;
      }
      // payload for login request
      const payload = {
        email: email,
        password: password,
      };
      // send login request to the backend API
      const response = await axios.post(
        "https://students-learning-api.onrender.com/api/auth/login",
        payload,
      );
      setLoading(false);
      // handle successful login
      setMessage("LOGIN SUCCESSFUL!");
      navigate("/");
      console.log(response);
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };
  return (
    <div>
      <Header />

      <section className="auth">
        <div className="side">
          <h2>Welcome back to Nexora</h2>

          <p>
            Sign in to track your projects, view invoices and message your team.
          </p>

          <img
            src={illustration}
            alt="Sign in illustration"
            style={{
              maxWidth: "420px",
              width: "100%",
              marginTop: "34px",
              borderRadius: "24px",
            }}
          />
        </div>

        <div className="main">
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>

            <p className="sub">Enter your details to continue.</p>

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

            <div className="field">
              <label htmlFor="email">Email address</label>

              <input
                className="input"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>

              <input
                className="input"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="row">
              <label>
                <input type="checkbox" name="rememberMe" defaultChecked />
                Keep me signed in
              </label>

              <Link to="/Signup">Forgot password?</Link>
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
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>

            <div className="or" style={{ marginTop: "22px" }}>
              or continue with
            </div>

            <div className="sso" style={{ marginTop: "0" }}>
              <button type="button" className="btn btn-sm">
                Google
              </button>

              <button type="button" className="btn btn-sm">
                GitHub
              </button>
            </div>

            <p className="sw">
              New to Nexora? <Link to="/Signup">Create an account</Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signin;
