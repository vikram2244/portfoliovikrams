export interface ProjectMetric {
  label: string;
  value: string;
  desc: string;
}

export interface TechHighlight {
  name: string;
  role: string;
}

export interface ArchitectureDetails {
  systemOverview: string;
  problemSolved: string;
  keyModules: string[];
  dataFlow: string[];
  aiComponents: string[];
  techStackHighlight: TechHighlight[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  focus: string[];
  technologies: string[];
  githubUrl: string;
  architectureDetails: ArchitectureDetails;
  metrics: ProjectMetric[];
}

export interface SkillItem {
  name: string;
  level: "Proficient" | "Advanced" | "Expert";
  highlight: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface PhilosophyStage {
  number: string;
  title: string;
  subtitle: string;
  details: string;
  blueprint: string[];
  quote: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  education: {
    institution: string;
  };
  profile: string;
  socials: {
    github: string;
    githubHandle: string;
    instagram: string;
    instagramHandle: string;
    linkedin: string;
    linkedinHandle: string;
    email: string;
    phone: string;
    phoneFormatted: string;
  };
  meta: {
    year: string;
  };
}

export const profile = {
  name: "TIRUMALA BALAJI VIKRAM",
  tagline: "FULL STACK JAVA DEVELOPER",
  education: {
    institution: "SAGI RAMAKRISHNAM RAJU ENGINEERING COLLEGE, AP"
  },
  profile: "I am a Full Stack Java Developer with combined internship experience across three organizations, delivering four full-stack projects using Java, Spring Boot, React.js, and MySQL. Skilled in REST API design, JWT-based authentication, and relational database optimization.",
  socials: {
    github: "https://github.com/vikram2244",
    githubHandle: "vikram2244",
    instagram: "",
    instagramHandle: "",
    linkedin: "https://www.linkedin.com/in/tirumala-balaji-vikram-2833a5273",
    linkedinHandle: "tirumala-balaji-vikram-2833a5273",
    email: "balajivikram2580@gmail.com",
    phone: "7815996075",
    phoneFormatted: "+91 78159 96075"
  },
  meta: {
    year: "2026"
  }
};

export const projects = [
  {
    id: "shopgen",
    number: "01",
    title: "ShopGen",
    tagline: "E-Commerce Web Application with Optimized Backend Performance",
    description: "End-to-end e-commerce web application with React.js for state management, Spring Boot RESTful services, and optimized MySQL database schema reducing data retrieval time by 50%.",
    focus: ["E-Commerce", "Full Stack", "Performance", "REST API"],
    technologies: ["React.js", "Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    githubUrl: "https://github.com/vikram2244/shopzen_springboot",
    liveUrl: "https://shopgen.netlify.app",
    imageUrl: "/assets/projects/shopgen.png",
    architectureDetails: {
      systemOverview: "High-performance e-commerce ecosystem with component-based UI rendering, secure user authentication, cart management, and optimized transactional workflows.",
      problemSolved: "Addressed slow data retrieval and inefficient query performance in e-commerce platforms through relational database schema design and SQL query tuning.",
      keyModules: ["User Authentication & Authorization", "Cart Management System", "Transactional Workflow Engine", "Product Catalog Service"],
      dataFlow: ["User Request via React Frontend", "Spring Boot REST API Gateway", "JWT Authentication & Authorization", "MySQL Database Query Optimization", "Response Rendering & State Management"],
      aiComponents: ["JWT Token Management", "BCrypt Password Encryption", "Role-Based Access Control"],
      techStackHighlight: [
        { name: "React.js", role: "Component-based UI with state management" },
        { name: "Spring Boot", role: "High-performance RESTful web services" },
        { name: "MySQL", role: "Optimized relational database with 50% faster queries" },
        { name: "JWT", role: "Stateless authentication with refresh tokens" }
      ]
    },
    metrics: [
      { label: "Query Performance", value: "50%", desc: "Data retrieval time reduction" },
      { label: "Transactions", value: "ACID", desc: "Transactional integrity guaranteed" },
      { label: "Response Time", value: "<200ms", desc: "Optimized system throughput" }
    ]
  },
  {
    id: "AtSpecialist",
    number: "02",
    title: "AtSpecialist",
    tagline: "E-Commerce Web Application with Optimized Backend Performance",
    description: "End-to-end e-commerce web application with React.js for state management, Spring Boot RESTful services, and optimized MySQL database schema reducing data retrieval time by 50%.",
    focus: ["E-Commerce", "Full Stack", "Performance", "REST API"],
    technologies: ["React.js", "Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    githubUrl: "https://github.com/vikram2244/atspecialist_springboot",
    liveUrl: "https://atspecialistweb.netlify.app",
    imageUrl: "/assets/projects/atspic.png",
    architectureDetails: {
      systemOverview: "High-performance e-commerce ecosystem with component-based UI rendering, secure user authentication, cart management, and optimized transactional workflows.",
      problemSolved: "Addressed slow data retrieval and inefficient query performance in e-commerce platforms through relational database schema design and SQL query tuning.",
      keyModules: ["User Authentication & Authorization", "Cart Management System", "Transactional Workflow Engine", "Product Catalog Service"],
      dataFlow: ["User Request via React Frontend", "Spring Boot REST API Gateway", "JWT Authentication & Authorization", "MySQL Database Query Optimization", "Response Rendering & State Management"],
      aiComponents: ["JWT Token Management", "BCrypt Password Encryption", "Role-Based Access Control"],
      techStackHighlight: [
        { name: "React.js", role: "Component-based UI with state management" },
        { name: "Spring Boot", role: "High-performance RESTful web services" },
        { name: "MySQL", role: "Optimized relational database with 50% faster queries" },
        { name: "JWT", role: "Stateless authentication with refresh tokens" }
      ]
    },
    metrics: [
      { label: "Concurrency", value: "100%", desc: "Zero race-condition failures" },
      { label: "Data Structure", value: "Optimized", desc: "Efficient seat management" },
      { label: "Error Handling", value: "Synchronized", desc: "Conflict-free operations" }
    ]
  },
  {
    id: "jobportal",
    number: "03",
    title: "Job Portal Web Application",
    tagline: "Full-Stack Job Portal with Role-Based Access Control",
    description: "Full-stack job portal with employer and job seeker dashboards, supporting job postings, application tracking, and resume management using Spring Boot and React.js.",
    focus: ["Job Portal", "Full Stack", "Security", "RBAC"],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "React.js", "MySQL"],
    githubUrl: "https://github.com/vikram2244/job-portal/careersitespring",
    liveUrl: "https://jobscareers.netlify.app",
    imageUrl: "/assets/projects/jobscareerpic.png",
    architectureDetails: {
      systemOverview: "Secure job portal with stateless authentication, role-based access control, and hardened security against common vulnerabilities.",
      problemSolved: "Provided secure, role-specific access for employers and job seekers with protected API endpoints and encrypted authentication.",
      keyModules: ["Employer Dashboard", "Job Seeker Dashboard", "Job Posting Service", "Application Tracker", "Resume Management"],
      dataFlow: ["User Authentication via JWT", "Role-Based Access Control", "Job Posting & Application Processing", "Dashboard Data Rendering", "Secure API Endpoint Access"],
      aiComponents: ["JWT with Refresh Tokens", "BCrypt Encryption", "XSS/CSRF/IDOR Protection"],
      techStackHighlight: [
        { name: "Spring Security", role: "Robust authentication & authorization" },
        { name: "JWT", role: "Stateless authentication with refresh tokens" },
        { name: "React.js", role: "Dynamic dashboards for employers & job seekers" },
        { name: "MySQL", role: "Relational data persistence" }
      ]
    },
    metrics: [
      { label: "Security", value: "Hardened", desc: "XSS, CSRF, IDOR protected" },
      { label: "Authentication", value: "JWT + Refresh", desc: "Stateless & secure" },
      { label: "Access Control", value: "RBAC", desc: "Role-based permissions" }
    ]
  },
  {
    id: "promptgen",
    number: "04",
    title: "PromptGen",
    tagline: "AI Prompts Management & Version Control System",
    description: "Application for storing, managing, and version-controlling AI prompts with classification, search/filtering, and collaboration features using Java Spring Boot and React.js.",
    focus: ["AI", "Content Management", "Version Control", "Collaboration"],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "React.js", "MySQL"],
    githubUrl: "https://github.com/vikram2244/promptgen",
    liveUrl: "https://geminiaiprompts.netlify.app/",
    imageUrl: "/assets/projects/promptgen.png",
    architectureDetails: {  
      systemOverview: "AI prompt management platform with version control, classification, and collaborative features for prompt engineering teams.",
      problemSolved: "Enabled efficient prompt organization, version tracking, and team collaboration for AI prompt engineering workflows.",
      keyModules: ["Prompt Classification Engine", "Search & Filter Service", "Version Control System", "Collaboration Hub"],
      dataFlow: ["Prompt Creation & Classification", "Search & Filter Processing", "Version History Tracking", "Collaborative Editing", "Optimized Data Fetching"],
      aiComponents: ["Prompt Versioning Logic", "Classification Heuristics", "Optimized Join Queries"],
      techStackHighlight: [
        { name: "Java Spring Boot", role: "Core business logic implementation" },
        { name: "React.js", role: "Interactive prompt management interface" },
        { name: "MySQL", role: "Optimized schema with reduced latency" },
        { name: "JWT", role: "Secure user authentication" }
      ]
    },
    metrics: [
      { label: "Query Performance", value: "Optimized", desc: "Reduced data-fetching latency" },
      { label: "Version Control", value: "Full History", desc: "Complete prompt version tracking" },
      { label: "Collaboration", value: "Multi-User", desc: "Team-based prompt management" }
    ]
  }
];

export const skillCategories = [
  {
    id: "java-core",
    title: "JAVA & BACKEND",
    description: "Core Java, Spring Boot, Spring MVC, and enterprise-grade backend development.",
    skills: [
      { name: "Java", level: "Expert", highlight: "Core language for enterprise applications" },
      { name: "Spring Boot", level: "Advanced", highlight: "RESTful web services & microservices" },
      { name: "Spring MVC", level: "Advanced", highlight: "Model-View-Controller architecture" },
      { name: "Spring Security", level: "Advanced", highlight: "Authentication & authorization" },
      { name: "Hibernate ORM", level: "Advanced", highlight: "Object-relational mapping" },
      { name: "JWT Authentication", level: "Expert", highlight: "Stateless auth with refresh tokens" }
    ]
  },
  {
    id: "full-stack",
    title: "FRONTEND & FULL STACK",
    description: "Building responsive, component-based user interfaces with modern JavaScript frameworks.",
    skills: [
      { name: "React.js", level: "Expert", highlight: "Component architecture & state management" },
      { name: "JavaScript", level: "Advanced", highlight: "ES6+, async programming" },
      { name: "HTML5 / CSS3", level: "Expert", highlight: "Semantic markup & responsive design" },
      { name: "REST API Development", level: "Expert", highlight: "Scalable API design & integration" },
      { name: "Docker", level: "Proficient", highlight: "Containerization & deployment" }
    ]
  },
  {
    id: "database",
    title: "DATABASE & DATA ARCHITECTURE",
    description: "Relational database design, SQL optimization, and data persistence with ORM.",
    skills: [
      { name: "MySQL", level: "Advanced", highlight: "Relational database design & optimization" },
      { name: "HSQLDB", level: "Proficient", highlight: "In-memory database for testing" },
      { name: "SQL Query Optimization", level: "Advanced", highlight: "Performance tuning & indexing" },
      { name: "Hibernate ORM", level: "Advanced", highlight: "Database abstraction & mapping" },
      { name: "Relational Design", level: "Expert", highlight: "Normalization & schema design" }
    ]
  },
  {
    id: "tools",
    title: "DEVELOPER TOOLS & TESTING",
    description: "Modern development tools, testing frameworks, and version control systems.",
    skills: [
      { name: "JUnit", level: "Advanced", highlight: "Unit testing & test automation" },
      { name: "Selenium WebDriver", level: "Proficient", highlight: "UI automation testing" },
      { name: "Maven", level: "Advanced", highlight: "Build automation & dependency management" },
      { name: "Git / GitHub", level: "Advanced", highlight: "Version control & collaboration" },
      { name: "Postman", level: "Expert", highlight: "API testing & documentation" }
    ]
  }
];

export const philosophy = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understand the problem domain.",
    details: "Analyze business requirements, study user workflows, and define technical objectives with measurable outcomes before writing a single line of code.",
    blueprint: ["Requirement Analysis", "System Architecture Planning", "Technical Feasibility Study"],
    quote: "Great solutions start with understanding the real problem."
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Architect clean, scalable systems.",
    details: "Design object-oriented domain models, define relational database schemas, and structure REST API contracts with security and performance in mind.",
    blueprint: ["OOP Domain Modeling", "Database Schema Design", "REST API Contract Definition"],
    quote: "Clean architecture is the foundation of maintainable software."
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Develop robust full-stack applications.",
    details: "Construct production-ready applications using Java Spring Boot, React.js, and MySQL with component hierarchies and service-oriented architecture.",
    blueprint: ["Backend Service Development", "Frontend Component Building", "API Integration & Testing"],
    quote: "Every line of code should add value and clarity."
  },
  {
    number: "04",
    title: "SECURE",
    subtitle: "Implement robust security measures.",
    details: "Configure JWT-based authentication, role-based access control, and encryption for sensitive data. Protect against common vulnerabilities.",
    blueprint: ["JWT Authentication Setup", "RBAC Implementation", "Security Hardening"],
    quote: "Security is not a feature; it's a fundamental requirement."
  },
  {
    number: "05",
    title: "OPTIMIZE",
    subtitle: "Performance tuning and delivery.",
    details: "Profile application performance, optimize database queries, conduct thorough testing, and deliver polished production-ready deployments.",
    blueprint: ["Performance Profiling", "Query Optimization", "Testing & QA", "Production Deployment"],
    quote: "Optimization transforms good code into exceptional software."
  }
];