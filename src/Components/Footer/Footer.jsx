import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-light.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="cols">
            <div>
              <Link className="logo" to="/">
                <img src={logo} alt="Nexora" />
              </Link>
              <p>
                Building the Digital Future. Software, security and digital
                innovation for businesses and individuals.
              </p>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Projects</li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>Software Development</li>
                <li>Web Design</li>
                <li>Cybersecurity</li>
                <li>IT Consulting</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>hello@nexora.tech</li>
                <li>+234 800 000 0000</li>
                <li>Owerri, Imo State</li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <span>
              &copy; 2026 Nexora Technologies. A fictional company for a class
              project.
            </span>
            <span>Privacy &middot; Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
