import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Projects/Projects.css";
import "./ProjectDetails.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Icon from "../../Components/Icon";
import { getProject, projects } from "../../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div>
        <Header />
        <section className="section pd-missing">
          <div className="container">
            <h1>Project not found</h1>
            <p className="lead">
              We could not find that project. It may have been moved or the
              link may be wrong.
            </p>
            <Link className="btn btn-primary" to="/Projects">
              Back to all projects
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .sort(
      (a, b) =>
        Number(b.category === project.category) -
        Number(a.category === project.category),
    )
    .slice(0, 3);

  const facts = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Year", value: project.year },
  ];

  return (
    <div className="page-project-details">
      <Header />

      <section className="hero hero-sm pd-hero">
        <div className="container">
          <Link to="/Projects" className="pd-back">
            <Icon name="back" size={16} /> All projects
          </Link>
          <span className="badge">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
        </div>
      </section>

      <section className="pd-main">
        <div className="container">
          <img className="pd-cover" src={project.image} alt={project.title} />

          <dl className="pd-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="pd-layout">
            <article className="pd-story">
              <h2>Overview</h2>
              <p>{project.overview}</p>

              <h2>The challenge</h2>
              <p>{project.challenge}</p>

              <h2>What we built</h2>
              <p>{project.solution}</p>

              <h2>Key features</h2>
              <ul className="checks">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>

            <aside className="pd-side">
              <div className="pd-box">
                <h3>Built with</h3>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pd-box pd-box-cta">
                <h3>Need something similar?</h3>
                <p>Tell us what you are planning and we will reply within one working day.</p>
                <Link className="btn btn-cyan btn-sm" to="/Contactus">
                  Talk to us
                </Link>
              </div>
            </aside>
          </div>

          <h2 className="pd-h2">Results</h2>
          <div className="pd-results">
            {project.results.map((result) => (
              <div className="pd-result" key={result.label}>
                <b>{result.value}</b>
                <span>{result.label}</span>
              </div>
            ))}
          </div>

          <h2 className="pd-h2">More projects</h2>
          <div className="grid-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/Projects/${item.slug}`}
                className="pcard"
              >
                <img src={item.image} alt="" />
                <div className="body">
                  <div className="cat">{item.category}</div>
                  <h3>{item.title}</h3>
                  <span className="pcard-link">View details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
