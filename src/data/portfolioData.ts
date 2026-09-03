/**
 * Mega Vannan - AI/ML Engineer & Full Stack Developer
 * Portfolio Dataset
 */

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


export const profile = {name:"VIKRAM TIRUMALA BALAJI",tagline:"FULL STACK DEVELOPER",education:{institution:"SRKR ENGINEERING COLLEGE,AP"},profile:"I am a B.E. Computer Science and Engineering (AI/ML specialization) student with a strong passion for developing full-stack applications that solve tangible operational problems.",socials:{github:"https://github.com/megavannan0207-blip",githubHandle:"megavannan0207-blip",instagram:"https://www.instagram.com/megx__._?igsi=OGMyNmFlMTNkdWVm",instagramHandle:"megx__._",linkedin:"https://www.linkedin.com/in/megavannanmj0207",linkedinHandle:"megavannanmj0207",email:"megavannan0207@gmail.com",phone:"8124132474",phoneFormatted:"+91 81241 32474"},meta:{year:"2026"}};
export const projects = [{id:"careermatch-ai",number:"01",title:"CareerMatch.AI",tagline:"AI-Powered Career Guidance & Vector Trajectory Synthesis",description:"An AI-powered career guidance and matching platform designed to help users discover personalized career paths based on their unique skills, interests, and background profile.",focus:["AI","Career Intelligence","Matching","Personalization"],technologies:["React","Python","AI/ML","REST APIs","FastAPI","Vector Matching"],githubUrl:"https://github.com/megavannan0207-blip/CareerMatch_AI",architectureDetails:{systemOverview:"High-performance career discovery ecosystem combining multi-dimensional profile parsing, similarity clustering, and contextual skill trajectory mapping.",problemSolved:"Resolves career ambiguity by providing students and professionals with empirical, data-driven skill gap analyses and actionable milestones rather than generic advice.",keyModules:["Candidate Skill Embedding Engine","Adaptive Recommendation Pipeline","Role Alignment Matrix Evaluator","High-Throughput REST Gateway"],dataFlow:["User Profile Ingestion & Skill Parsing","Embedding Vector Generation via Gemini/NLP","Cosine Distance Matching against Real-World Job Market Benchmarks","Personalized Roadmap & Learning Path Synthesis","Interactive Real-Time Dashboard Feedback"],aiComponents:["Gemini LLM Semantic Reasoning Engine","High-Dimension Cosine Distance Vector Matcher","Custom Skill Taxonomy & Ontology Graph"],techStackHighlight:[{name:"React + Tailwind",role:"Dynamic interactive client application"},{name:"Python / FastAPI",role:"Ultra low-latency REST API gateway"},{name:"Gemini API",role:"Semantic career trajectory synthesis"},{name:"Relational DB",role:"User profile state & roadmap persistence"}]},metrics:[{label:"Match Precision",value:"94.2%",desc:"Evaluated across multi-skill benchmarks"},{label:"Profile Dimensions",value:"32+",desc:"Cognitive & technical skill facets"},{label:"Response Latency",value:"<180ms",desc:"Cached inference throughput"}]},{id:"ai-digital-twin",number:"02",title:"AI Digital Twin of a Student",tagline:"Predictive Cognitive Telemetry & Adaptive Learning Model",description:"An intelligent digital representation of a student's learning profile, skills progression, study habits, and academic behavior.",focus:["AI","Student Analytics","Personalization","Predictive Intelligence"],technologies:["Python","AI/ML","PyTorch","Data Processing","React"],githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Continuous behavioral telemetry modeling system translating real-time assessment feedback, test timings, and study patterns into dynamic learning projections.",problemSolved:"Identifies cognitive gaps and impending academic drop-offs weeks before exams, allowing proactive targeted pedagogical intervention.",keyModules:["Time-Series Academic Behavior Tracker","Mastery Matrix Evaluator","Cognitive Gap Deep Predictor","Interactive Digital Twin Telemetry Hub"],dataFlow:["Continuous Telemetry & Assessment Ingestion","Temporal Sequence Normalization & Feature Scaling","PyTorch Predictive Modeling & Persona Clustering","Adaptive Difficulty Calculation & Interventions","Visual Digital Twin Synchronization"],aiComponents:["PyTorch Deep Neural Network for Retention Forecasting","Unsupervised Student Persona Clustering","Dynamic Difficulty Adjustment Heuristics"],techStackHighlight:[{name:"PyTorch",role:"Deep learning predictive time-series models"},{name:"Python / NumPy",role:"High-speed matrix telemetry processing"},{name:"React + 3D Canvas",role:"Visual student twin avatar & telemetry radar"}]},metrics:[{label:"Retention Forecast",value:"89%",desc:"Early drop-off detection accuracy"},{label:"Tracked Milestones",value:"120+",desc:"Granular learning telemetry points"},{label:"Feedback Loop",value:"Real-Time",desc:"Live twin sync on test submit"}]},{id:"expiry-date-alert-pro",number:"03",title:"Expiry Date Alert Pro",tagline:"Automated Supply Lifecycle & Preventive Expiry Intelligence",description:"A smart application concept for tracking product expiration dates, minimizing commercial waste, and providing automated, proactive alerts.",focus:["Automation","Notifications","Product Management","Smart Tracking"],technologies:["Python","React","REST API","Relational Database","Cron Dispatch"],githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Deterministic inventory lifespan monitor with scheduled dispatch queues, batch date extraction, and zero-loss relational state integrity.",problemSolved:"Prevents thousands in expired inventory losses for retailers and households through proactive multi-tier notification escalation.",keyModules:["Relational Batch Inventory Engine","Automated Multi-Channel Push / Webhook Alert Queue","Consumption Velocity Estimator","CRUD RESTful Control Plane"],dataFlow:["Product Ingestion & Expiry Date Timestamping","Relational Indexing & Category Lifecycle Mapping","Background Asynchronous Cron Worker Polling","Priority Alert Dispatch (Email / In-App Notification)","Consumption / Disposal Logging & Audit Analytics"],aiComponents:["OCR Label Extraction & Date Format Normalizer","Consumption Velocity & Replenishment Heuristic"],techStackHighlight:[{name:"Python / Asyncio",role:"Reliable background scheduling & dispatch worker"},{name:"PostgreSQL / SQLite",role:"ACID-compliant inventory transactions"},{name:"React Frontend",role:"Real-time urgency heatmap dashboard"}]},metrics:[{label:"Dispatch Reliability",value:"99.9%",desc:"Zero missed critical expiration notices"},{label:"Waste Reduction",value:"~35%",desc:"Demonstrated in test grocery batches"},{label:"DB Transactions",value:"ACID",desc:"Strict concurrency safety"}]},{id:"youtube-intelligence",number:"04",title:"AI-Powered YouTube Intelligence",tagline:"Multimodal Video Content Analytics & Semantic Synthesis",description:"A Python-based AI project focused on analyzing YouTube-related content and data, converting massive video transcripts into structured intelligence and sentiment graphs.",focus:["AI","Automation","Data Processing","YouTube Intelligence"],technologies:["Python","AI/ML","PyTorch","CRNN","APIs","Data Analysis"],githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Automated multimodal pipeline querying video metadata, transcript streams, and visual keyframes to extract high-signal thematic summaries and viewer sentiment trends.",problemSolved:"Extracts dense insights and sentiment distributions from multi-hour video libraries in seconds without manual scrubbing.",keyModules:["YouTube Data API Ingestion Stream","Transcript Tokenizer & NLP Analyzer","Video Keyframe CRNN Extraction Pipeline","Topic Clustering & Trend Visualizer"],dataFlow:["YouTube URL Ingestion & Metadata Fetch","Audio Demuxing & Transcript Stream Tokenization","CRNN Frame Sequence & Gemini Summarization Pipeline","Sentiment Lexical Score Aggregation","Structured Intelligence Report Synthesis"],aiComponents:["CRNN (Convolutional Recurrent Neural Network) Keyframe Pipeline","Gemini LLM Semantic Summarization Agent","Lexical Sentiment Vectorizer"],techStackHighlight:[{name:"Python / PyTorch",role:"CRNN sequence classification on frames"},{name:"YouTube Data API",role:"High-volume stream ingestion"},{name:"Gemini API",role:"Hierarchical executive summary generation"}]},metrics:[{label:"Processing Speed",value:"10x",desc:"Faster than realtime video duration"},{label:"Sentiment Accuracy",value:"91.8%",desc:"Validated against manual test sets"},{label:"Report Generation",value:"Instant",desc:"Zero-friction insight export"}]},{id:"full-stack-ai-lab",number:"05",title:"Full-Stack AI Application Lab",tagline:"Next-Gen Prototyping & Pragmatic Agentic Systems Foundry",description:"A curated collection of upcoming full-stack experiments combining modern high-performance web development with practical AI integrations and agentic loops.",focus:["AI","Full Stack","Automation","Modern Web Applications"],technologies:["React","Python","AI/ML","REST APIs","WebSockets","Modern Web Stack"],status:"COMING NEXT",githubUrl:"https://github.com/megavannan0207-blip",architectureDetails:{systemOverview:"Experimental incubator testing cutting-edge generative workflows, low-latency agentic loops, and high-performance WebGL user interfaces.",problemSolved:"Bridges the gap between raw research AI models and slick, ultra-responsive production-ready software experiences.",keyModules:["Agentic Task Dispatcher & Tool Caller","Bidirectional WebSocket Streaming Gateway","Live WebGL Shader & Canvas Playground","Microservice Testbed & Benchmarking Harness"],dataFlow:["User Prompt / Telemetry Stream","Edge Gateway & Agent Orchestration","Multi-Model Low-Latency Inference","Real-Time WebGL Canvas State Rendering"],aiComponents:["Gemini Multi-Agent Orchestration Loops","PyTorch Custom Lightweight Embeddings","Low-Latency WebSockets Streaming Interfaces"],techStackHighlight:[{name:"React + Three.js",role:"Immersive 3D interactive user interfaces"},{name:"Python / WebSockets",role:"Real-time streaming agent communication"},{name:"Gemini 2.0 / Flash",role:"Ultra low-latency multimodal reasoning"}]},metrics:[{label:"Active Prototypes",value:"3",desc:"Under active development in lab"},{label:"Research Focus",value:"Agentic AI",desc:"Practical tool calling & autonomy"},{label:"Architecture",value:"Modular",desc:"Micro-frontend & decoupled APIs"}]}];
export const skillCategories = [{id:"ai-ml",title:"AI / ML & DEEP LEARNING",description:"Applied machine learning, neural architectures, sequence modeling, and pragmatic generative intelligence.",skills:[{name:"Python",level:"Advanced",highlight:"Core language for ML pipelines & backend services"},{name:"Machine Learning",level:"Advanced",highlight:"Feature engineering, classification & regression"},{name:"PyTorch",level:"Proficient",highlight:"Custom tensor models, time-series & neural networks"},{name:"CRNN Pipelines",level:"Proficient",highlight:"Convolutional-Recurrent sequence recognition"},{name:"Gemini AI",level:"Expert",highlight:"Multimodal reasoning, tool calling & structured outputs"},{name:"AI Integration",level:"Expert",highlight:"Embedding intelligence seamlessly into production web apps"}]},{id:"full-stack",title:"FULL STACK WEB DEVELOPMENT",description:"Crafting high-performance, cinematic reactive interfaces with rock-solid client-server communication.",skills:[{name:"React",level:"Expert",highlight:"Component architecture, custom hooks, state machines"},{name:"JavaScript / TypeScript",level:"Advanced",highlight:"ESNext, type safety, async concurrency"},{name:"HTML5 / CSS3",level:"Expert",highlight:"Semantic DOM, CSS 3D transforms, fluid typography"},{name:"REST APIs",level:"Expert",highlight:"Scalable API design, JWT auth, status contracts"},{name:"Tailwind CSS",level:"Expert",highlight:"Luxury design systems, fluid responsive grids"}]},{id:"backend-data",title:"BACKEND & DATA ARCHITECTURE",description:"Designing clean object-oriented systems, normalized databases, and optimized pipeline throughput.",skills:[{name:"Python Services",level:"Advanced",highlight:"FastAPI, Flask, asynchronous request workers"},{name:"Relational Databases",level:"Advanced",highlight:"PostgreSQL, MySQL, SQLite, schema normalization"},{name:"Data Flow Optimization",level:"Advanced",highlight:"Minimizing serialization overhead & query latency"},{name:"Object-Oriented Design",level:"Expert",highlight:"SOLID principles, design patterns, clean abstractions"},{name:"REST Architecture",level:"Expert",highlight:"Stateless microservices & rate-limited gateways"}]},{id:"tools",title:"DEVELOPER TOOLS & WORKFLOW",description:"Modern version control, developer toolchains, and disciplined engineering practices.",skills:[{name:"Git",level:"Advanced",highlight:"Branching strategies, rebase workflows, commit hygiene"},{name:"GitHub",level:"Advanced",highlight:"CI/CD actions, repo management, open-source work"},{name:"VS Code",level:"Expert",highlight:"Configured power environment, linting & debugging"},{name:"Three.js / Canvas",level:"Proficient",highlight:"WebGL shaders, particle systems, 3D math"}]}];
export const philosophy = [{number:"01",title:"DISCOVER",subtitle:"Understand the problem.",details:"Deconstruct operational bottlenecks, examine real-world constraints, and define quantitative engineering objectives before writing code.",blueprint:["Constraint Mapping","User Workflow Analysis","Feasibility & Scope Definition"],quote:"True engineering begins with rigorous questions, not hasty code."},{number:"02",title:"ARCHITECT",subtitle:"Design clean systems and data flow.",details:"Map strict Object-Oriented boundaries, define normalized relational schemas, and structure REST API contracts for predictable scale.",blueprint:["Object-Oriented Domain Modeling","Relational Schema Normalization","REST Contract & State Flow"],quote:"Clean architecture is insurance against future entropy."},{number:"03",title:"BUILD",subtitle:"Develop the product.",details:"Construct robust full-stack software using React, Python, and modern tooling with modular component hierarchies and zero bloat.",blueprint:["Modular Component Hierarchy","Type-Safe Client Interfaces","Deterministic Backend Services"],quote:"Every line of code must justify its existence in latency and clarity."},{number:"04",title:"INTELLIGENT",subtitle:"Integrate AI where it creates real value.",details:"Embed Gemini-based reasoning, PyTorch/CRNN pipelines, and vector matching precisely where heuristics fail and intelligence unlocks capability.",blueprint:["Pragmatic Model Selection","Prompt Optimization & Embeddings","Low-Latency Inference Gateways"],quote:"AI is not a decoration; it is an analytical lever."},{number:"05",title:"SHIP",subtitle:"Optimize and deliver.",details:"Profile latency, refine GPU render paths, audit accessibility, and deliver high-reliability production deployments with polished interactive feedback.",blueprint:["60 FPS GPU Render Optimization","Zero-Regression QA & Telemetry","Polished User Experience"],quote:"Shipping is where intention meets the real world."}];
