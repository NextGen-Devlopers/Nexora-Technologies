import React from "react";
import "./Projects.css";
import Header from "../../Components/Header/Header";
import Cta from "../../Components/Cta/Cta";
import Footer from "../../Components/Footer/Footer";
import shopwave from "../../assets/shopwave.svg";
import shieldops from "../../assets/shieldops.svg";
import logistics from "../../assets/logistics.svg";
import eduportal from "../../assets/eduportal.svg";
import carepoint from "../../assets/carepoint.svg";
import paybridge from "../../assets/paybridge.svg";

const Projects = () => {
  return (
    <div>
      <Header />
      <section className="hero hero-sm">
        <div className="container">
          <span className="badge">Projects</span>
          <h1>Work we are proud of</h1>
          <p className="lead" style={{ marginTop: "18px" }}>
            Sample projects across web, software, security and consulting.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filters">
            <span className="filter on">All</span>
            <span className="filter">Software</span>
            <span className="filter">Web Design</span>
            <span className="filter">Cybersecurity</span>
            <span className="filter">IT Consulting</span>
            <span className="filter">Digital Transformation</span>
          </div>
          <div className="grid-3">
            <div className="pcard">
              <img src={shopwave} alt="" />
              <div className="body">
                <div className="cat">Web Design</div>
                <h3>ShopWave Storefront</h3>
                <p>
                  A fast, mobile-first e-commerce interface with product
                  filtering and a one-page checkout.
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Stripe UI</span>
                  <span className="tag">CSS</span>
                </div>
              </div>
            </div>
            <div className="pcard">
              <img src={paybridge} alt="" />
              <div className="body">
                <div className="cat">Software</div>
                <h3>PayBridge Mobile Banking</h3>
                <p>
                  A mobile banking concept with transfers, cards, and spending
                  insights.
                </p>
                <div className="tags">
                  <span className="tag">React Native</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">REST</span>
                </div>
              </div>
            </div>
            <div className="pcard">
              <img src={shieldops} alt="" />
              <div className="body">
                <div className="cat">Cybersecurity</div>
                <h3>ShieldOps Security Console</h3>
                <p>
                  A security monitoring console that turns raw alerts into clear
                  priorities.
                </p>
                <div className="tags">
                  <span className="tag">Dashboard</span>
                  <span className="tag">Alerts</span>
                  <span className="tag">Zero Trust</span>
                </div>
              </div>
            </div>
            <div className="pcard">
              <img src={eduportal} alt="" />
              <div className="body">
                <div className="cat">Software</div>
                <h3>EduPortal School System</h3>
                <p>
                  A portal for results, timetables, and fee tracking for
                  secondary schools.
                </p>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Express</span>
                  <span className="tag">MySQL</span>
                </div>
              </div>
            </div>
            <div className="pcard">
              <img src={logistics} alt="" />
              <div className="body">
                <div className="cat">Digital Transformation</div>
                <h3>RouteLine Logistics</h3>
                <p>
                  A dispatch dashboard that replaced paper waybills with live
                  delivery tracking.
                </p>
                <div className="tags">
                  <span className="tag">Automation</span>
                  <span className="tag">Maps</span>
                  <span className="tag">Analytics</span>
                </div>
              </div>
            </div>
            <div className="pcard">
              <img src={carepoint} alt="" />
              <div className="body">
                <div className="cat">IT Consulting</div>
                <h3>CarePoint IT Roadmap</h3>
                <p>
                  A three-year technology plan for a multi-branch clinic group.
                </p>
                <div className="tags">
                  <span className="tag">Strategy</span>
                  <span className="tag">Cloud</span>
                  <span className="tag">Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default Projects;
