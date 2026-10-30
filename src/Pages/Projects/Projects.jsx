import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import Header from "../../Components/Header/Header";
import Cta from "../../Components/Cta/Cta";
import Footer from "../../Components/Footer/Footer";
import { categories, projects } from "../../data/projects";

const Projects = () => {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

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
          <div className="filters" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter ${active === category ? "on" : ""}`}
                aria-pressed={active === category}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="filter-count" aria-live="polite">
            Showing {visible.length}{" "}
            {visible.length === 1 ? "project" : "projects"}
            {active !== "All" && <> in {active}</>}
          </p>

          {visible.length > 0 ? (
            <div className="grid-3">
              {visible.map((project) => (
                <Link
                  key={project.slug}
                  to={`/Projects/${project.slug}`}
                  className="pcard"
                >
                  <img src={project.image} alt="" />
                  <div className="body">
                    <div className="cat">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="pcard-link">View details</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h3>No projects in this category yet</h3>
              <p>Pick another category or view everything we have built.</p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setActive("All")}
              >
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default Projects;
