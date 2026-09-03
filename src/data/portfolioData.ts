<<<<<<< HEAD
=======
/**
 * Mega Vannan - AI/ML Engineer & Full Stack Developer
 * Portfolio Dataset
 */

>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
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

<<<<<<< HEAD
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
    githubUrl: "https://github.com/vikram2244",
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
    id: "airline-reservation",
    number: "02",
    title: "Airline Reservation System",
    tagline: "Console-Based Reservation with Data Structures & Algorithms",
    description: "Console-based airline reservation system in Java implementing core DSA concepts for seat selection, booking management, and synchronized error-handling to prevent race conditions.",
    focus: ["Java", "DSA", "OOP", "Concurrency"],
    technologies: ["Java", "Data Structures", "Algorithms", "OOP"],
    githubUrl: "https://github.com/vikram2244",
    architectureDetails: {
      systemOverview: "Robust console-based reservation system with synchronized data structures ensuring conflict-free seat bookings and cancellations.",
      problemSolved: "Prevented conflicting seat bookings and race-condition failures during concurrent access through synchronized error-handling logic.",
      keyModules: ["Seat Selection Engine", "Booking Management System", "Cancellation Handler", "Availability Viewer"],
      dataFlow: ["User Input Processing", "Data Structure Validation", "Conflict Detection & Resolution", "Booking Confirmation", "Availability Update"],
      aiComponents: ["Synchronized Thread Safety Mechanisms", "Race-Condition Prevention Logic"],
      techStackHighlight: [
        { name: "Java", role: "Core programming language" },
        { name: "Data Structures", role: "Efficient seat and booking management" },
        { name: "OOP", role: "Clean object-oriented design patterns" }
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
    githubUrl: "https://github.com/vikram2244",
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
    githubUrl: "https://github.com/vikram2244",
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
=======

export const profile = {name:"VIKRAM TIRUMALA BALAJI",tagline:"FULL STACK DEVELOPER",education:{institution:"SRKR ENGINEERING COLLEGE,AP"},profile:"I am a B.E. Computer Science and Engineering (AI/ML specialization) student with a strong passion for developing full-stack applications that solve tangible operational problems.",socials:{github:"https://github.com/megavannan0207-blip",githubHandle:"megavannan0207-blip",instagram:"https://www.instagram.com/megx__._?igsi=OGMyNmFlMTNkdWVm",instagramHandle:"megx__._",linkedin:"https://www.linkedin.com/in/megavannanmj0207",linkedinHandle:"megavannanmj0207",email:"megavannan0207@gmail.com",phone:"8124132474",phoneFormatted:"+91 81241 32474"},meta:{year:"2026"}};
export const projects = [{id:"careermatch-ai",number:"01",title:"CareerMatch.AI",tagline:"AI-Powered Career Guidance & Vector Trajectory Synthesis",description:"An AI-powered career guidance and matching platform designed to help users discover personalized career paths based on their unique skills, interests, and background profile.",focus:["AI","Career Intelligence","Matching","Personalization"],technologies:["React","Python","AI/ML","REST APIs","FastAPI","Vector Matching"],githubUrl:"https://github.com/megavannan0207-blip/CareerMatch_AI",architectureDetails:{systemOverview:"High-performance career discovery ecosystem combining multi-dimensional profile parsing, similarity clustering, and contextual skill trajectory mapping.",problemSolved:"Resolves career ambiguity by providing students and professionals with empirical, data-driven skill gap analyses and actionable milestones rather than generic advice.",keyModules:["Candidate Skill Embedding Engine","Adaptive Recommendation Pipeline","Role Alignment Matrix Evaluator","High-Throughput REST Gateway"],dataFlow:["User Profile Ingestion & Skill Parsing","Embedding Vector Generation via Gemini/NLP","Cosine Distance Matching against Real-World Job Market Benchmarks","Personalized Roadmap & Learning Path Synthesis","Interactive Real-Time Dashboard Feedback"],aiComponents:["Gemini LLM Semantic Reasoning Engine","High-Dimension Cosine Distance Vector Matcher","Custom Skill Taxonomy & Ontology Graph"],techStackHighlight:[{name:"React + Tailwind",role:"Dynamic interactive client application"},{name:"Python / FastAPI",role:"Ultra low-latency REST API gateway"},{name:"Gemini API",role:"Semantic career trajectory synthesis"},{name:"Relational DB",role:"User profile state & roadmap persistence"}]},metrics:[{label:"Match Precision",value:"94.2%",desc:"Evaluated across multi-skill benchmarks"},{label:"Profile Dimensions",value:"32+",desc:"Cognitive & technical skill facets"},{label:"Response Latency",value:"<180ms",desc:"Cached inference throughput"}]},{id:"ai-digital-twin",number:"02",title:"AI Digital Twin of a Student",tagline:"Predictive Cognitive Telemetry & Adaptive Learning Model",description:"An intelligent digital representation of a student's learning profile, skills progression, study habits, and academic behavior.",focus:["AI","Student Analytics","Personalization","Predictive Intelligence"],technologies:["Python","AI/ML","PyTorch","Data Processing","React"],githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Continuous behavioral telemetry modeling system translating real-time assessment feedback, test timings, and study patterns into dynamic learning projections.",problemSolved:"Identifies cognitive gaps and impending academic drop-offs weeks before exams, allowing proactive targeted pedagogical intervention.",keyModules:["Time-Series Academic Behavior Tracker","Mastery Matrix Evaluator","Cognitive Gap Deep Predictor","Interactive Digital Twin Telemetry Hub"],dataFlow:["Continuous Telemetry & Assessment Ingestion","Temporal Sequence Normalization & Feature Scaling","PyTorch Predictive Modeling & Persona Clustering","Adaptive Difficulty Calculation & Interventions","Visual Digital Twin Synchronization"],aiComponents:["PyTorch Deep Neural Network for Retention Forecasting","Unsupervised Student Persona Clustering","Dynamic Difficulty Adjustment Heuristics"],techStackHighlight:[{name:"PyTorch",role:"Deep learning predictive time-series models"},{name:"Python / NumPy",role:"High-speed matrix telemetry processing"},{name:"React + 3D Canvas",role:"Visual student twin avatar & telemetry radar"}]},metrics:[{label:"Retention Forecast",value:"89%",desc:"Early drop-off detection accuracy"},{label:"Tracked Milestones",value:"120+",desc:"Granular learning telemetry points"},{label:"Feedback Loop",value:"Real-Time",desc:"Live twin sync on test submit"}]},{id:"expiry-date-alert-pro",number:"03",title:"Expiry Date Alert Pro",tagline:"Automated Supply Lifecycle & Preventive Expiry Intelligence",description:"A smart application concept for tracking product expiration dates, minimizing commercial waste, and providing automated, proactive alerts.",focus:["Automation","Notifications","Product Management","Smart Tracking"],technologies:["Python","React","REST API","Relational Database","Cron Dispatch"],githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Deterministic inventory lifespan monitor with scheduled dispatch queues, batch date extraction, and zero-loss relational state integrity.",problemSolved:"Prevents thousands in expired inventory losses for retailers and households through proactive multi-tier notification escalation.",keyModules:["Relational Batch Inventory Engine","Automated Multi-Channel Push / Webhook Alert Queue","Consumption Velocity Estimator","CRUD RESTful Control Plane"],dataFlow:["Product Ingestion & Expiry Date Timestamping","Relational Indexing & Category Lifecycle Mapping","Background Asynchronous Cron Worker Polling","Priority Alert Dispatch (Email / In-App Notification)","Consumption / Disposal Logging & Audit Analytics"],aiComponents:["OCR Label Extraction & Date Format Normalizer","Consumption Velocity & Replenishment Heuristic"],techStackHighlight:[{name:"Python / Asyncio",role:"Reliable background scheduling & dispatch worker"},{name:"PostgreSQL / SQLite",role:"ACID-compliant inventory transactions"},{name:"React Frontend",role:"Real-time urgency heatmap dashboard"}]},metrics:[{label:"Dispatch Reliability",value:"99.9%",desc:"Zero missed critical expiration notices"},{label:"Waste Reduction",value:"~35%",desc:"Demonstrated in test grocery batches"},{label:"DB Transactions",value:"ACID",desc:"Strict concurrency safety"}]},{id:"youtube-intelligence",number:"04",title:"AI-Powered YouTube Intelligence",tagline:"Multimodal Video Content Analytics & Semantic Synthesis",description:"A Python-based AI project focused on analyzing YouTube-related content and data, converting massive video transcripts into structured intelligence and sentiment graphs.",focus:["AI","Automation","Data Processing","YouTube Intelligence"],technologies:["Python","AI/ML","PyTorch","CRNN","APIs","Data Analysis"],githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Automated multimodal pipeline querying video metadata, transcript streams, and visual keyframes to extract high-signal thematic summaries and viewer sentiment trends.",problemSolved:"Extracts dense insights and sentiment distributions from multi-hour video libraries in seconds without manual scrubbing.",keyModules:["YouTube Data API Ingestion Stream","Transcript Tokenizer & NLP Analyzer","Video Keyframe CRNN Extraction Pipeline","Topic Clustering & Trend Visualizer"],dataFlow:["YouTube URL Ingestion & Metadata Fetch","Audio Demuxing & Transcript Stream Tokenization","CRNN Frame Sequence & Gemini Summarization Pipeline","Sentiment Lexical Score Aggregation","Structured Intelligence Report Synthesis"],aiComponents:["CRNN (Convolutional Recurrent Neural Network) Keyframe Pipeline","Gemini LLM Semantic Summarization Agent","Lexical Sentiment Vectorizer"],techStackHighlight:[{name:"Python / PyTorch",role:"CRNN sequence classification on frames"},{name:"YouTube Data API",role:"High-volume stream ingestion"},{name:"Gemini API",role:"Hierarchical executive summary generation"}]},metrics:[{label:"Processing Speed",value:"10x",desc:"Faster than realtime video duration"},{label:"Sentiment Accuracy",value:"91.8%",desc:"Validated against manual test sets"},{label:"Report Generation",value:"Instant",desc:"Zero-friction insight export"}]},{id:"full-stack-ai-lab",number:"05",title:"Full-Stack AI Application Lab",tagline:"Next-Gen Prototyping & Pragmatic Agentic Systems Foundry",description:"A curated collection of upcoming full-stack experiments combining modern high-performance web development with practical AI integrations and agentic loops.",focus:["AI","Full Stack","Automation","Modern Web Applications"],technologies:["React","Python","AI/ML","REST APIs","WebSockets","Modern Web Stack"],status:"COMING NEXT",githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Experimental incubator testing cutting-edge generative workflows, low-latency agentic loops, and high-performance WebGL user interfaces.",problemSolved:"Bridges the gap between raw research AI models and slick, ultra-responsive production-ready software experiences.",keyModules:["Agentic Task Dispatcher & Tool Caller","Bidirectional WebSocket Streaming Gateway","Live WebGL Shader & Canvas Playground","Microservice Testbed & Benchmarking Harness"],dataFlow:["User Prompt / Telemetry Stream","Edge Gateway & Agent Orchestration","Multi-Model Low-Latency Inference","Real-Time WebGL Canvas State Rendering"],aiComponents:["Gemini Multi-Agent Orchestration Loops","PyTorch Custom Lightweight Embeddings","Low-Latency WebSockets Streaming Interfaces"],techStackHighlight:[{name:"React + Three.js",role:"Immersive 3D interactive user interfaces"},{name:"Python / WebSockets",role:"Real-time streaming agent communication"},{name:"Gemini 2.0 / Flash",role:"Ultra low-latency multimodal reasoning"}]},metrics:[{label:"Active Prototypes",value:"3",desc:"Under active development in lab"},{label:"Research Focus",value:"Agentic AI",desc:"Practical tool calling & autonomy"},{label:"Architecture",value:"Modular",desc:"Micro-frontend & decoupled APIs"}]}];
export const skillCategories = [{id:"ai-ml",title:"AI / ML & DEEP LEARNING",description:"Applied machine learning, neural architectures, sequence modeling, and pragmatic generative intelligence.",skills:[{name:"Python",level:"Advanced",highlight:"Core language for ML pipelines & backend services"},{name:"Machine Learning",level:"Advanced",highlight:"Feature engineering, classification & regression"},{name:"PyTorch",level:"Proficient",highlight:"Custom tensor models, time-series & neural networks"},{name:"CRNN Pipelines",level:"Proficient",highlight:"Convolutional-Recurrent sequence recognition"},{name:"Gemini AI",level:"Expert",highlight:"Multimodal reasoning, tool calling & structured outputs"},{name:"AI Integration",level:"Expert",highlight:"Embedding intelligence seamlessly into production web apps"}]},{id:"full-stack",title:"FULL STACK WEB DEVELOPMENT",description:"Crafting high-performance, cinematic reactive interfaces with rock-solid client-server communication.",skills:[{name:"React",level:"Expert",highlight:"Component architecture, custom hooks, state machines"},{name:"JavaScript / TypeScript",level:"Advanced",highlight:"ESNext, type safety, async concurrency"},{name:"HTML5 / CSS3",level:"Expert",highlight:"Semantic DOM, CSS 3D transforms, fluid typography"},{name:"REST APIs",level:"Expert",highlight:"Scalable API design, JWT auth, status contracts"},{name:"Tailwind CSS",level:"Expert",highlight:"Luxury design systems, fluid responsive grids"}]},{id:"backend-data",title:"BACKEND & DATA ARCHITECTURE",description:"Designing clean object-oriented systems, normalized databases, and optimized pipeline throughput.",skills:[{name:"Python Services",level:"Advanced",highlight:"FastAPI, Flask, asynchronous request workers"},{name:"Relational Databases",level:"Advanced",highlight:"PostgreSQL, MySQL, SQLite, schema normalization"},{name:"Data Flow Optimization",level:"Advanced",highlight:"Minimizing serialization overhead & query latency"},{name:"Object-Oriented Design",level:"Expert",highlight:"SOLID principles, design patterns, clean abstractions"},{name:"REST Architecture",level:"Expert",highlight:"Stateless microservices & rate-limited gateways"}]},{id:"tools",title:"DEVELOPER TOOLS & WORKFLOW",description:"Modern version control, developer toolchains, and disciplined engineering practices.",skills:[{name:"Git",level:"Advanced",highlight:"Branching strategies, rebase workflows, commit hygiene"},{name:"GitHub",level:"Advanced",highlight:"CI/CD actions, repo management, open-source work"},{name:"VS Code",level:"Expert",highlight:"Configured power environment, linting & debugging"},{name:"Three.js / Canvas",level:"Proficient",highlight:"WebGL shaders, particle systems, 3D math"}]}];
export const philosophy = [{number:"01",title:"DISCOVER",subtitle:"Understand the problem.",details:"Deconstruct operational bottlenecks, examine real-world constraints, and define quantitative engineering objectives before writing code.",blueprint:["Constraint Mapping","User Workflow Analysis","Feasibility & Scope Definition"],quote:"True engineering begins with rigorous questions, not hasty code."},{number:"02",title:"ARCHITECT",subtitle:"Design clean systems and data flow.",details:"Map strict Object-Oriented boundaries, define normalized relational schemas, and structure REST API contracts for predictable scale.",blueprint:["Object-Oriented Domain Modeling","Relational Schema Normalization","REST Contract & State Flow"],quote:"Clean architecture is insurance against future entropy."},{number:"03",title:"BUILD",subtitle:"Develop the product.",details:"Construct robust full-stack software using React, Python, and modern tooling with modular component hierarchies and zero bloat.",blueprint:["Modular Component Hierarchy","Type-Safe Client Interfaces","Deterministic Backend Services"],quote:"Every line of code must justify its existence in latency and clarity."},{number:"04",title:"INTELLIGENT",subtitle:"Integrate AI where it creates real value.",details:"Embed Gemini-based reasoning, PyTorch/CRNN pipelines, and vector matching precisely where heuristics fail and intelligence unlocks capability.",blueprint:["Pragmatic Model Selection","Prompt Optimization & Embeddings","Low-Latency Inference Gateways"],quote:"AI is not a decoration; it is an analytical lever."},{number:"05",title:"SHIP",subtitle:"Optimize and deliver.",details:"Profile latency, refine GPU render paths, audit accessibility, and deliver high-reliability production deployments with polished interactive feedback.",blueprint:["60 FPS GPU Render Optimization","Zero-Regression QA & Telemetry","Polished User Experience"],quote:"Shipping is where intention meets the real world."}];
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
