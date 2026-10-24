
import "./Services.css";
import Header from "../../Components/Header/Header";
import Cta from "../../Components/Cta/Cta";
import Footer from "../../Components/Footer/Footer";

const Svg = ({ children }) => (
  <svg
    width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round"
  >
    {children}
  </svg>
);

const icons = {
  code: (
    <Svg>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </Svg>
  ),
  monitor: (
    <Svg>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </Svg>
  ),
  shield: (
    <Svg>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  ),
  bulb: (
    <Svg>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </Svg>
  ),
  refresh: (
    <Svg>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </Svg>
  ),
};

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="m7 12.5 3.2 3.2L17 9" fill="none" stroke="#fff"
      strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    icon: "code",
    title: "Software Development",
    description: "Custom web applications, business systems, and mobile applications.",
    features: ["Custom web apps", "Business systems", "Mobile applications"],
  },
  {
    icon: "monitor",
    title: "Web Design & Development",
    description: "Responsive websites, landing pages, e-commerce interfaces, and UI/UX design.",
    features: ["Responsive websites", "E-commerce interfaces", "UI/UX design"],
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    description: "Security assessments, risk awareness, and protection strategies for digital systems.",
    features: ["Security assessments", "Risk awareness training", "Protection strategy"],
  },
  {
    icon: "bulb",
    title: "IT Consulting",
    description: "Technology planning, infrastructure guidance, and business IT solutions.",
    features: ["Technology planning", "Infrastructure guidance", "Vendor selection"],
  },
  {
    icon: "refresh",
    title: "Digital Transformation",
    description: "Helping organizations modernize operations through digital tools and automation.",
    features: ["Process automation", "Digital tools rollout", "Staff onboarding"],
  },
];

const technologies = [
  "React", "Node.js", "TypeScript", "Python", "PostgreSQL",
  "AWS", "Docker", "Figma", "OWASP", "Zero Trust",
];

const steps = [
  { title: "Discover", text: "We learn your goals, users and constraints." },
  { title: "Design", text: "We shape flows, screens and the technical plan." },
  { title: "Develop", text: "We build in short cycles and show progress weekly." },
  { title: "Deliver", text: "We launch, train your team and stay on for support." },
];

export default function Services() {
  return (
 <>
    <Header />
    <div className="services-page">
      {/* HERO */}
      <section className="sv-hero">
        <div className="sv-container">
          <span className="sv-badge">Services</span>
          <h1>Five services that work together</h1>
          <p>Pick one, or let us handle the whole journey from idea to launch.</p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="sv-list">
        <div className="sv-container">
          {services.map((s) => (
            <article className="sv-item" key={s.title}>
              <div className="sv-icon">{icons[s.icon]}</div>
              <div className="sv-info">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <ul className="sv-features">
                {s.features.map((f) => (
                  <li key={f}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="sv-tech">
        <div className="sv-container">
          <h2 className="sv-title">Technology capabilities</h2>
          <div className="sv-chips">
            {technologies.map((t) => (
              <span className="sv-chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sv-process">
        <div className="sv-container">
          <h2 className="sv-title">How we work</h2>
          <div className="sv-steps">
            {steps.map((st, i) => (
              <div className="sv-step" key={st.title}>
                <span className="sv-num">{i + 1}</span>
                <h4>{st.title}</h4>
                <p>{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Cta />
    <Footer />
    </>
  );
}