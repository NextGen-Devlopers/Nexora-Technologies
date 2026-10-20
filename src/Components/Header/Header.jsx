import React from "react";
import "./Header.css";
import logo from "../../assets/logo-light.svg";

const Header = () => {
  return (
    <div>
      <header className="nav">
        <div className="container">
          <a className="logo" href="/Home">
            <img src={logo} alt="Company Logo" />
          </a>
          <ul>
            <li>
              <a className="" href="/Home">
                Home
              </a>
            </li>
            <li>
              <a className="" href="/Aboutus">
                About Us
              </a>
            </li>
            <li>
              <a className="" href="/Services">
                Services
              </a>
            </li>
            <li>
              <a className="" href="/Projects">
                Projects
              </a>
            </li>
            <li>
              <a className="" href="/Ourteam">
                Our Team
              </a>
            </li>
            <li>
              <a className="" href="/Contactus">
                Contact Us
              </a>
            </li>
          </ul>
          <a className="btn btn-primary btn-sm" href="/">
            Let's Talk
          </a>
          <span className="menu">&#9776;</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
