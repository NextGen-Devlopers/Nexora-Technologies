import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Cta from "../../Components/Cta/Cta";
import Footer from "../../Components/Footer/Footer";
import heroImage from "../../assets/hero-illustration.svg";
import softwareIcon from "../../assets/icon-software.svg";
import webIcon from "../../assets/icon-web.svg";
import storyImage from "../../assets/about-team.svg";
import securityIcon from "../../assets/icon-security.svg";
import consultingIcon from "../../assets/icon-consulting.svg";
import transformationIcon from "../../assets/icon-transformation.svg";
import shopwave from "../../assets/shopwave.svg";
import shieldops from "../../assets/shieldops.svg";
import logistics from "../../assets/logistics.svg";
import teamiii from "../../assets/team-3.svg";
import teamv from "../../assets/team-5.svg";
import teamvi from "../../assets/team-6.svg";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container grid">
          <div>
            <span className="badge">
              Software &middot; Security &middot; Digital Innovation
            </span>
            <h1>Building the Digital Future.</h1>
            <p className="lead">
              Nexora helps businesses and individuals solve real problems with
              custom software, modern websites, strong security and practical IT
              guidance.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/Services">
                Explore our services
              </Link>
              <Link className="btn btn-ghost" to="/Contactus">
                Talk to our team
              </Link>
            </div>
          </div>
          <img src={heroImage} alt="" />
        </div>
      </section>

      <section className="section white">
        <div className="container grid-2">
          <img src={storyImage} alt="" style={{ borderRadius: "24px" }} />
          <div>
            <h2>Technology that solves the problem in front of you</h2>
            <p className="lead">
              We are a small, focused team of engineers, designers and security
              specialists. We plan carefully, build cleanly and stay with you
              after launch.
            </p>
            <ul className="checks">
              <li>Clear scope and honest timelines</li>
              <li>Secure and mobile-ready from the first line of code</li>
              <li>Support after delivery</li>
            </ul>
            <Link className="link" to="/aboutus">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>Five services, one team</h2>
            <p className="lead">
              Everything you need to plan, build, protect and grow your digital
              presence.
            </p>
          </div>
          <div className="grid-5">
            <div className="card">
              <img className="icon" src={softwareIcon} alt="" />
              <h3>Software Development</h3>
              <p>
                Custom web applications, business systems, and mobile
                applications.
              </p>
            </div>
            <div className="card">
              <img className="icon" src={webIcon} alt="" />
              <h3>Web Design & Development</h3>
              <p>
                Responsive websites, landing pages, e-commerce interfaces, and
                UI/UX design.
              </p>
            </div>
            <div className="card">
              <img className="icon" src={securityIcon} alt="" />
              <h3>Cybersecurity</h3>
              <p>
                Security assessments, risk awareness, and protection strategies
                for digital systems.
              </p>
            </div>
            <div className="card">
              <img className="icon" src={consultingIcon} alt="" />
              <h3>IT Consulting</h3>
              <p>
                Technology planning, infrastructure guidance, and business IT
                solutions.
              </p>
            </div>
            <div className="card">
              <img className="icon" src={transformationIcon} alt="" />
              <h3>Digital Transformation</h3>
              <p>
                Helping organizations modernize operations through digital tools
                and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-head">
            <h2>Selected projects</h2>
            <p className="lead">
              A few recent builds across web, software and security.
            </p>
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
          </div>
          <p style={{ marginTop: "28px" }}>
            <Link className="btn btn-outline" to="/Projects">
              View all projects
            </Link>
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="stats">
            <div>
              <b>120+</b>
              <span>Projects delivered</span>
            </div>
            <div>
              <b>45</b>
              <span>Happy clients</span>
            </div>
            <div>
              <b>8</b>
              <span>Years of experience</span>
            </div>
            <div>
              <b>99.9%</b>
              <span>Average uptime</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <h2>What clients say</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <p className="quote">
                &ldquo;Nexora rebuilt our storefront in six weeks and sales on
                mobile doubled.&rdquo;
              </p>
              <div className="who">
                <img src={teamiii} alt="" />
                <div>
                  <b>Tolu Adeyemi</b>
                  <span>Founder, ShopWave</span>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="quote">
                &ldquo;Their security review found gaps we had missed for years.
                Clear, practical advice.&rdquo;
              </p>
              <div className="who">
                <img src={teamv} alt="" />
                <div>
                  <b>Grace Okoro</b>
                  <span>Operations Lead, CarePoint</span>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="quote">
                &ldquo;The team explained every decision in plain language. We
                always knew where we stood.&rdquo;
              </p>
              <div className="who">
                <img src={teamvi} alt="" />
                <div>
                  <b>Samuel Bello</b>
                  <span>Director, RouteLine</span>
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

export default Home;
