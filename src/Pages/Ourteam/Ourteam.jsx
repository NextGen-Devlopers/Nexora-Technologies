import React from "react";
import "./Ourteam.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import darlington from "../../assets/darlington.jpg";
import modesta from "../../assets/modesta.jpg";
import faith from "../../assets/faith.jpg";
import victor from "../../assets/victor.jpg";
import daniel from "../../assets/daniel.jpg";

const Ourteam = () => {
  return (
    <div>
      <Header />
      <main id="home">
        <section class="hero" id="about">
          <div class="container hero-content">
            <span class="eyebrow">Our Team</span>
            <h1>The people behind Nexora</h1>
            <p>
              Engineers, designers and security specialists who care about
              getting it right.
            </p>
          </div>
        </section>

        <section class="team-section" id="team">
          <div class="container team-container">
            <div class="team-group">
              <h2>Meet The Team</h2>
              <div class="team-grid">
                <article class="person-card">
                  <div className="portrait">
                    <img src={darlington} alt="Ogbonna Darlington Onyekachi" />
                  </div>
                  <div class="person-info">
                    <h3>Ogbonna Darlington Onyekachi</h3>
                    <p class="role">Group Leader</p>
                    <p class="bio">
                      <h4>Roles</h4>
                      <ul>
                        <li>Coordinate the group and assign tasks</li>
                        <li>
                          Build and maintain the main website sections and
                          pages.
                        </li>
                        <li>Integrate the pages developed by other members.</li>
                        <li>
                          Manage GitHub collaboration, review code, and test the
                          final website.
                        </li>
                      </ul>
                    </p>
                    <div class="socials">
                      <a href="" aria-label=" LinkedIn">
                        in
                      </a>
                      <a href="" aria-label=" X">
                        𝕏
                      </a>
                      <a href="" aria-label=" GitHub">
                        GH
                      </a>
                    </div>
                  </div>
                </article>
                <article class="person-card">
                  <div className="portrait">
                    <img src={faith} alt="Adigun Opeyemi Faith" />
                  </div>
                  <div class="person-info">
                    <h3>Adigun Opeyemi Faith</h3>
                    <p class="role"> Services Page Developer</p>
                    <p class="bio">
                      <h4>Roles</h4>
                      <ul>
                        <li>Design and develop the Services page.</li>
                        <li>
                          Present the five main services shown on the homepage:
                          Software Development, Web Design and Development,
                          Cybersecurity, IT Consulting, and Digital
                          Transformation.
                        </li>
                        <li>Create service cards and descriptions.</li>
                      </ul>
                    </p>
                    <div class="socials">
                      <a href="" aria-label=" LinkedIn">
                        in
                      </a>
                      <a href="" aria-label=" X">
                        𝕏
                      </a>
                      <a href="" aria-label=" GitHub">
                        GH
                      </a>
                    </div>
                  </div>
                </article>

                <article class="person-card">
                  <div className="portrait">
                    <img src={victor} alt="Chukwumaeke Victor C." />
                  </div>
                  <div class="person-info">
                    <h3>Chukwumaeke Victor C. </h3>
                    <p class="role">Aboutus page</p>
                    <p class="bio">
                      <h4>Roles</h4>
                      <ul>
                        <li>Design and develop the About Us page.</li>
                        <li>
                          Present Nexora's company background, mission, vision,
                          values, and approach to technology.
                        </li>
                        <li>
                          Ensure the page follows the existing website design
                          and works on mobile and desktop.
                        </li>
                      </ul>
                    </p>
                    <div class="socials">
                      <a href="" aria-label=" LinkedIn">
                        in
                      </a>
                      <a href="" aria-label=" X">
                        𝕏
                      </a>
                      <a href="" aria-label=" GitHub">
                        GH
                      </a>
                    </div>
                  </div>
                </article>
                <article class="person-card">
                  <div className="portrait">
                    <img src={modesta} alt="Onyema Modesta" />
                  </div>
                  <div class="person-info">
                    <h3>Onyema Modesta</h3>
                    <p class="role">Contact Us Page Developer</p>
                    <p class="bio">
                      <h4>Roles</h4>
                      <ul>
                        <li>Design and develop the Contact Us page.</li>
                        <li>
                          Display company contact details and relevant
                          communication information.
                        </li>
                        <li>
                          Implement basic form validation and responsive
                          styling.
                        </li>
                      </ul>
                    </p>
                    <div class="socials">
                      <a href="" aria-label=" LinkedIn">
                        in
                      </a>
                      <a href="" aria-label=" X">
                        𝕏
                      </a>
                      <a href="" aria-label=" GitHub">
                        GH
                      </a>
                    </div>
                  </div>
                </article>

                <article class="person-card">
                  <div className="portrait">
                    <img src={daniel} alt="Ogbonna Darlington Onyekachi" />
                  </div>
                  <div class="person-info">
                    <h3>Chidiebere Daniel</h3>
                    <p class="role">Our Team Page Developer</p>
                    <p class="bio">
                      <h4>Roles</h4>
                      <ul>
                        <li>Design and develop the Our Team page.</li>
                        <li>
                          Create team-member profile cards with names, roles,
                          photos.
                        </li>
                        <li>
                          Present the company's expertise and collaborative
                          culture.
                        </li>
                        <li>
                          Make the page responsive and visually consistent with
                          the rest of the website.
                        </li>
                      </ul>
                    </p>
                    <div class="socials">
                      <a href="" aria-label=" LinkedIn">
                        in
                      </a>
                      <a href="" aria-label=" X">
                        𝕏
                      </a>
                      <a href="" aria-label=" GitHub">
                        GH
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section class="join-section" id="services">
          <div class="container join-layout">
            <div class="join-art" aria-hidden="true">
              <span class="bubble bubble-one"></span>
              <span class="bubble bubble-two"></span>
              <span class="bubble bubble-three"></span>
              <span class="bubble bubble-four"></span>
              <span class="bubble bubble-five"></span>
            </div>
            <div class="join-copy">
              <h2>Join our team</h2>
              <p>
                We are always looking for curious people who like solving real
                problems. Send us your CV and a short note about what you want
                to build.
              </p>
              <Link class="button" to="/Contactus">
                See open roles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ourteam;
