import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-light.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/Aboutus", label: "About Us" },
  { to: "/Services", label: "Services" },
  { to: "/Projects", label: "Projects" },
  { to: "/Ourteam", label: "Our Team" },
  { to: "/Contactus", label: "Contact Us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container">
        <Link className="logo" to="/" onClick={close}>
          <img src={logo} alt="Company Logo" />
        </Link>

        <ul className={open ? "open" : ""}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={close}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link className="btn btn-primary btn-sm" to="/Signup" onClick={close}>
          Let's Talk
        </Link>

        <button
          className="menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
