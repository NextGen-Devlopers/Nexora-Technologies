import shopwave from "../assets/shopwave.svg";
import shieldops from "../assets/shieldops.svg";
import logistics from "../assets/logistics.svg";
import eduportal from "../assets/eduportal.svg";
import carepoint from "../assets/carepoint.svg";
import paybridge from "../assets/paybridge.svg";

export const categories = [
  "All",
  "Software",
  "Web Design",
  "Cybersecurity",
  "IT Consulting",
  "Digital Transformation",
];

export const projects = [
  {
    slug: "shopwave-storefront",
    title: "ShopWave Storefront",
    category: "Web Design",
    image: shopwave,
    summary:
      "A fast, mobile-first e-commerce interface with product filtering and a one-page checkout.",
    tags: ["React", "Stripe UI", "CSS"],
    client: "ShopWave Retail",
    duration: "10 weeks",
    year: "2025",
    role: "Design and front-end build",
    overview:
      "ShopWave sells fashion and accessories mostly to shoppers on phones, but its old store was slow and its checkout took five steps. We redesigned the storefront around the phone screen and cut checkout to a single page.",
    challenge:
      "Shoppers were leaving before paying. Pages loaded slowly on mobile data, product filters were hard to use with one hand, and the multi-step checkout asked for the same details twice.",
    solution:
      "We built a lightweight storefront with large tap targets, filters that open as a bottom sheet, and a one-page checkout that remembers delivery details. Images load in stages so the page is usable quickly.",
    features: [
      "Product filtering by size, price and colour",
      "One-page checkout with card and wallet payment",
      "Image loading that stays fast on weak connections",
      "Saved delivery details for returning shoppers",
    ],
    results: [
      { value: "38%", label: "faster page load on mobile" },
      { value: "5 → 1", label: "checkout steps" },
      { value: "24%", label: "fewer abandoned carts" },
    ],
  },
  {
    slug: "paybridge-mobile-banking",
    title: "PayBridge Mobile Banking",
    category: "Software",
    image: paybridge,
    summary:
      "A mobile banking concept with transfers, cards, and spending insights.",
    tags: ["React Native", "Node.js", "REST"],
    client: "PayBridge (concept)",
    duration: "14 weeks",
    year: "2025",
    role: "Product design and full-stack development",
    overview:
      "PayBridge is a banking app concept for people who want to send money, manage cards and understand their spending in one place, without learning a complicated interface.",
    challenge:
      "Most banking apps hide everyday actions behind menus. Users wanted to send money in a few taps, freeze a lost card immediately, and see where their money goes each month.",
    solution:
      "We designed a home screen built around the three things people do most: transfer, pay and check spending. A Node.js API handles accounts and transfers, and the React Native app runs on both iOS and Android from one codebase.",
    features: [
      "Transfers to saved beneficiaries in three taps",
      "Card controls: freeze, unfreeze and set limits",
      "Monthly spending breakdown by category",
      "Biometric sign-in and transaction alerts",
    ],
    results: [
      { value: "3 taps", label: "to complete a transfer" },
      { value: "2", label: "platforms from one codebase" },
      { value: "12", label: "REST endpoints documented" },
    ],
  },
  {
    slug: "shieldops-security-console",
    title: "ShieldOps Security Console",
    category: "Cybersecurity",
    image: shieldops,
    summary:
      "A security monitoring console that turns raw alerts into clear priorities.",
    tags: ["Dashboard", "Alerts", "Zero Trust"],
    client: "Internal security team",
    duration: "12 weeks",
    year: "2026",
    role: "Dashboard design and alert pipeline",
    overview:
      "ShieldOps gives a small security team one screen that shows what needs attention first. It groups related alerts and ranks them by risk so analysts spend their time on real threats.",
    challenge:
      "The team received thousands of alerts a day from different tools. Real incidents were buried in noise, and nobody could tell at a glance which alerts were related.",
    solution:
      "We combined alerts from every source into one feed, grouped duplicates, and scored each group by asset value and severity. The console follows zero trust principles: every action is checked against the analyst's role and logged.",
    features: [
      "Single alert feed from multiple security tools",
      "Risk scoring that ranks alerts by impact",
      "Role-based access with a full audit log",
      "Incident timeline that links related alerts",
    ],
    results: [
      { value: "70%", label: "fewer alerts to review" },
      { value: "9 min", label: "average time to triage" },
      { value: "100%", label: "analyst actions logged" },
    ],
  },
  {
    slug: "eduportal-school-system",
    title: "EduPortal School System",
    category: "Software",
    image: eduportal,
    summary:
      "A portal for results, timetables, and fee tracking for secondary schools.",
    tags: ["React", "Express", "MySQL"],
    client: "Secondary school group",
    duration: "16 weeks",
    year: "2025",
    role: "Full-stack development",
    overview:
      "EduPortal brings results, timetables and school fees into one portal that students, parents and teachers can all use from a phone or a computer.",
    challenge:
      "Results were collected on paper, fee records lived in separate notebooks, and parents had to visit the school to ask for either. Teachers spent days compiling term results.",
    solution:
      "We built a portal where teachers enter scores once and the system calculates totals, positions and grades. Parents sign in to see results and fee balances, and the bursar records payments in the same system.",
    features: [
      "Score entry with automatic grading and class positions",
      "Printable report cards",
      "Class and teacher timetables",
      "Fee tracking with payment history and balances",
    ],
    results: [
      { value: "3 days → 3 hrs", label: "to compile term results" },
      { value: "4", label: "user roles: student, parent, teacher, admin" },
      { value: "0", label: "paper result sheets" },
    ],
  },
  {
    slug: "routeline-logistics",
    title: "RouteLine Logistics",
    category: "Digital Transformation",
    image: logistics,
    summary:
      "A dispatch dashboard that replaced paper waybills with live delivery tracking.",
    tags: ["Automation", "Maps", "Analytics"],
    client: "RouteLine Freight",
    duration: "18 weeks",
    year: "2026",
    role: "Process redesign and dashboard development",
    overview:
      "RouteLine moved its dispatch operation from paper waybills and phone calls to a live dashboard that shows every delivery on a map.",
    challenge:
      "Dispatchers had no way to see where a truck was without calling the driver. Paper waybills got lost, and customers kept calling to ask where their goods were.",
    solution:
      "We mapped the existing delivery process, removed the manual steps, and built a dispatch dashboard with digital waybills and live location tracking. Customers now get status updates automatically.",
    features: [
      "Digital waybills with driver sign-off",
      "Live map of every vehicle and delivery",
      "Automatic status messages to customers",
      "Reports on delivery times and route performance",
    ],
    results: [
      { value: "60%", label: "fewer 'where is my order' calls" },
      { value: "100%", label: "waybills now digital" },
      { value: "18%", label: "shorter average delivery time" },
    ],
  },
  {
    slug: "carepoint-it-roadmap",
    title: "CarePoint IT Roadmap",
    category: "IT Consulting",
    image: carepoint,
    summary: "A three-year technology plan for a multi-branch clinic group.",
    tags: ["Strategy", "Cloud", "Planning"],
    client: "CarePoint Clinics",
    duration: "8 weeks",
    year: "2026",
    role: "Technology assessment and roadmap",
    overview:
      "CarePoint runs several clinics that each grew their own systems. We reviewed what they had and produced a clear three-year plan to bring everything together.",
    challenge:
      "Each branch used different software and kept its own patient records. Equipment was ageing, backups were irregular, and leadership had no budget view of what IT would cost.",
    solution:
      "We audited every branch, ranked the risks, and wrote a phased roadmap: fix backups and security first, move records to a shared cloud system next, then upgrade equipment branch by branch with a costed budget for each year.",
    features: [
      "Technology audit of every branch",
      "Risk ranking and quick-win fixes",
      "Phased three-year plan with yearly budgets",
      "Cloud migration approach for patient records",
    ],
    results: [
      { value: "3 years", label: "phased roadmap delivered" },
      { value: "6", label: "branches assessed" },
      { value: "1", label: "shared records system planned" },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
