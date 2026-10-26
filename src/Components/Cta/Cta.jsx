import React from "react";
import "./Cta.css";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Ready to build something that lasts?</h2>
            <p>
              Tell us about your project and we will reply within one working
              day.
            </p>
            <Link className="btn btn-cyan" to="/Contactus">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
