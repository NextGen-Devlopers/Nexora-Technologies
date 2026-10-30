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
                <li>
                  <Link to="/Aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/Ourteam">Our Team</Link>
                </li>
                <li>
                  <Link to="/Projects">Projects</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/Services">Software Development</Link>
                </li>
                <li>
                  <Link to="/Services">Web Design</Link>
                </li>
                <li>
                  <Link to="/Services">Cybersecurity</Link>
                </li>
                <li>
                  <Link to="/Services">IT Consulting</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:hello@nexora.tech">hello@nexora.tech</a>
                </li>
                <li>
                  <a href="tel:+2348000000000">+234 800 000 0000</a>
                </li>
                <li>Owerri, Imo State</li>
                <li>
                  <Link to="/Contactus">Contact form</Link>
                </li>
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
