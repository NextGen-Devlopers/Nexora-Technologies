import React from "react";
import "./Cta.css";

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
            <a className="btn btn-cyan" href="/Contact">
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
