import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Cta from "../../Components/Cta/Cta";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <section class="hero">
        <div class="container grid">
          <div>
            <span class="badge">
              Software &middot; Security &middot; Digital Innovation
            </span>
            <h1>Building the Digital Future.</h1>
            <p class="lead">
              Nexora helps businesses and individuals solve real problems with
              custom software, modern websites, strong security and practical IT
              guidance.
            </p>
            <div class="actions">
              <a class="btn btn-primary" href="services.html">
                Explore our services
              </a>
              <a class="btn btn-ghost" href="contact.html">
                Talk to our team
              </a>
            </div>
          </div>
          <img src="../images/hero-illustration.svg" alt="" />
        </div>
      </section>
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
