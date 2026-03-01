export const profile = {
  name: "Hanny Yosephine",
  role: "Software Developer & QA Engineer",
  subRole: "Digital Banking · Mobile · Business Analysis",
  location: "Tangerang, Indonesia",
  email: "hannyyosephine37@gmail.com",
  linkedin: "https://linkedin.com/in/hannyyosephine16",
  whatsapp: "https://wa.me/6282115257721",
  phone: "+62 821-1525-7721",
  summary:
    "I help product teams ship reliable software faster — from building mobile banking features used by real customers, to catching critical bugs before they reach production. I bridge engineering and business so nothing gets lost in translation.",
};

export const metrics = [
  { value: "500+", label: "QA Activities Logged", sub: "zero critical escapes" },
  { value: "3.50", label: "GPA", sub: "Institut Teknologi Del" },
  { value: "4+", label: "Shipped Projects", sub: "end-to-end ownership" },
  { value: "3+", label: "Industries", sub: "FinTech · Energy · Gov" },
];

export const stack = [
  { cat: "Mobile", items: ["Flutter", "Dart", "REST API"] },
  { cat: "Frontend", items: ["React", "HTML/CSS", "WordPress"] },
  { cat: "QA & Testing", items: ["Postman", "Jira", "Katalon Studio", "E2E Testing"] },
  { cat: "BA & Tools", items: ["Figma", "Notion", "Git", "Google Workspace"] },
];

export const experiences = [
  {
    id: "01",
    period: "2025 — Present",
    status: "Current",
    role: "Mobile Developer — Flutter",
    company: "PT Soluix Finteknologi",
    product: "BCA Syariah Digital Banking App",
    type: "Full-time",
    color: "#6C63FF",
    metrics: [
      "Production app · real customers",
      "Faster release cycles",
      "Fewer post-release bugs",
    ],
    points: [
      "Accelerated feature delivery by translating product requirements directly into Flutter UI flows — cutting back-and-forth between product and engineering and reducing rework cycles.",
      "Prevented transaction errors from reaching users by validating API contracts and response accuracy before every release, protecting user trust in a live banking product.",
      "Improved release confidence by leading feature verification and bug triage, ensuring every deployment went out with known issues resolved rather than deferred.",
    ],
  },
  {
    id: "02",
    period: "Aug 2024 — May 2025",
    role: "IT Developer Intern",
    company: "PT Tera Multi Wahana",
    product: null,
    type: "Internship · Jakarta",
    color: "#4ECDC4",
    metrics: [
      "Cleaner client handoffs",
      "Fewer post-release surprises",
      "Faster stakeholder alignment",
    ],
    points: [
      "Reduced misalignment between client expectations and delivered output by joining requirement briefings directly — capturing scope changes in real time and ensuring implementation stayed on track.",
      "Shortened post-release troubleshooting time by systematically collecting user feedback, logging reproducible issues, and coordinating targeted fixes with developers.",
      "Kept stakeholders informed across every delivery cycle, ensuring no one was surprised at go-live — a key factor in maintaining client satisfaction on multiple projects.",
    ],
  },
  {
    id: "03",
    period: "Jun — Aug 2024",
    role: "Quality Test Engineer Intern",
    company: "BSPJI",
    product: null,
    type: "Internship · Medan",
    color: "#FFB547",
    metrics: [
      "500+ defects logged in Jira",
      "Full E2E + API coverage",
      "UAT-ready documentation",
    ],
    points: [
      "Logged 500+ testing activities in Jira across functional, regression, UI/UX, API, and end-to-end layers — creating a traceable quality record that gave the team full visibility into what was tested, found, and fixed.",
      "Accelerated defect resolution by structuring defect reports clearly with reproduction steps, severity, and evidence — reducing the time developers spent investigating reported issues.",
      "Enabled confident release decisions by delivering complete QA documentation (test scenarios, results, regression notes) that met UAT readiness standards on time.",
    ],
  },
  {
    id: "04",
    period: "May — Aug 2024",
    role: "Frontend Developer Intern",
    company: "ZonaEBT",
    product: null,
    type: "Internship · West Jakarta",
    color: "#FF8FA3",
    metrics: [
      "Zero stakeholder revision cycles",
      "Clean dev handover",
      "Faster iteration",
    ],
    points: [
      "Eliminated revision cycles by producing wireframes and mockups upfront and aligning with stakeholders before implementation — changes were caught at design stage, not after code was written.",
      "Delivered website updates that met functional requirements on first review by closely following stakeholder briefs and verifying output against acceptance criteria.",
      "Ensured zero knowledge loss after internship by producing thorough handover documentation, allowing the next developer to continue work without needing onboarding.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "Del-Pick Delivery Service App",
    year: "2025",
    type: "Final Thesis",
    stack: ["Flutter", "Web Admin Dashboard", "Mobile"],
    color: "#6C63FF",
    featured: true,
    desc: "Led a complete product — from zero to shipped. Owned requirement gathering, UX design, feature development, and validation. The app solved a real campus logistics problem: connecting students who need deliveries with drivers, with an admin dashboard for monitoring and routing.",
    outcomes: ["Full mobile + web delivery", "Driver routing system", "Admin monitoring dashboard"],
    impact: "End-to-end ownership of a live product used by real campus users — from first user interview to production deployment.",
  },
  {
    id: "02",
    title: "Toba Tourism Website",
    year: "2024",
    type: "PKM Research Project",
    stack: ["Web", "UX Research", "Tourism Tech"],
    color: "#4ECDC4",
    featured: false,
    desc: "Turned user pain points into a working tourism platform. Conducted direct needs analysis with local tourism partners and users, translated findings into technical requirements, and coordinated the team to deliver. The site improved discoverability of local accommodations, transport, and businesses around Lake Toba.",
    outcomes: ["Real partner needs analysis", "Live tourism platform", "SDG-aligned impact"],
  },
  {
    id: "03",
    title: "Bookshelf App",
    year: "2023",
    type: "Personal Project",
    stack: ["React", "JavaScript"],
    color: "#9B8FFF",
    featured: false,
    desc: "Built a full reading list manager in React — from Figma design to deployed app. Focused on clean UX: users can add, edit, delete, and filter books without friction. Proved ability to ship a complete product independently.",
    outcomes: ["Full React SPA", "CRUD without page reloads", "Responsive on all screens"],
  },
  {
    id: "04",
    title: "OLIS Library App Redesign",
    year: "2023",
    type: "UI/UX Design",
    stack: ["Figma", "Usability Testing"],
    color: "#FF8FA3",
    featured: false,
    desc: "Identified real friction points in the OLIS library app through usability testing, then redesigned the entire information architecture and user flows. The result was a cleaner, more intuitive experience — validated with users before handoff.",
    outcomes: ["Usability research-driven", "Full IA redesign", "Validated prototype"],
  },
];

export const skillGroups = [
  {
    label: "Mobile & Frontend",
    color: "#6C63FF",
    items: [
      { name: "Flutter / Dart", pct: 72 },
      { name: "React / JavaScript", pct: 70 },
      { name: "REST API Integration", pct: 78 },
      { name: "HTML / CSS", pct: 82 },
    ],
  },
  {
    label: "QA & Testing",
    color: "#FFB547",
    items: [
      { name: "Test Case Design", pct: 85 },
      { name: "API Testing (Postman)", pct: 80 },
      { name: "Jira / Defect Tracking", pct: 82 },
      { name: "Katalon Studio", pct: 70 },
    ],
  },
  {
    label: "Business Analysis",
    color: "#4ECDC4",
    items: [
      { name: "Requirements Gathering", pct: 83 },
      { name: "UAT Support", pct: 80 },
      { name: "Documentation", pct: 87 },
      { name: "Stakeholder Communication", pct: 88 },
    ],
  },
];

export const education = {
  degree: "Bachelor of Informatics",
  school: "Institut Teknologi Del",
  gpa: "3.50 / 4.00",
  period: "2021 — 2025",
  courses: [
    "Software Design & Analysis",
    "Software QA",
    "Human-Computer Interaction",
    "OOP",
    "Algorithms & Data Structures",
  ],
};

export const certs = [
  { name: "React — Advanced Learning Path", issuer: "Dicoding" },
  { name: "IDCamp Frontend Developer Track", issuer: "Indosat Ooredoo" },
  { name: "Lintasarta Scholarship", issuer: "Lintasarta" },
  { name: "Duolingo English Test", issuer: "Score: 100" },
];

export const leadership = [
  {
    role: "Deputy Secretary",
    org: "BEM — Student Executive Board",
    desc: "Kept 10+ student programs on track through structured coordination and documentation — ensuring decisions were recorded and follow-ups never fell through the cracks.",
  },
  {
    role: "Core Team Lead — Public Relations",
    org: "Google Developer Student Clubs (GDSC)",
    desc: "Grew community event attendance by leading outreach and PR strategy — making developer events more visible and accessible to students across campus.",
  },
];
