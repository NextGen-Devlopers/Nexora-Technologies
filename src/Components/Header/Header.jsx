import React from "react";
import "./Header.css";
import logo from "../../assets/logo-light.svg";

const Header = () => {
  return (
    <div>
      <header class="nav">
        <div class="container">
          <a class="logo" href="/">
            <img src={logo} alt="Company Logo" />
          </a>
          <ul>
            <li>
              <a class="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a class="" href="/Aboutus">
                About Us
              </a>
            </li>
            <li>
              <a class="" href="/Services">
                Services
              </a>
            </li>
            <li>
              <a class="" href="/Projects">
                Projects
              </a>
            </li>
            <li>
              <a class="" href="/Ourteam">
                Our Team
              </a>
            </li>
            <li>
              <a class="" href="/Contactus">
                Contact Us
              </a>
            </li>
          </ul>
          <a class="btn btn-primary btn-sm" href="/Signup">
            Let's Talk
          </a>
          <span class="menu">&#9776;</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
