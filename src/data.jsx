import React from 'react';
import { Code, Brain, Cloud, BarChart } from 'lucide-react';

export const profile = {
  name: "Maneesha Bogahawatta",
  role: "Data Science Undergraduate",
  contact: {
    email: "maneeshabogahawatta713@gmail.com",
    phone: "+94 76 9105626",
    linkedin: "www.linkedin.com/in/maneesha-bogahawatta-03a306345",
    github: "github.com/maneesha-bogahawatta",
    location: "Malabe, Sri Lanka"
  },
  about: "Motivated IT undergraduate specializing in Data Science and AI, with strong skills in Python and SQL. I focus on using data to understand real-world problems and create practical solutions. I am experienced in developing web applications that help present and deliver DS/AI projects in a clear and user-friendly way."
};

export const skills = [
  { 
    category: "AI & Machine Learning", 
    items: ["LLMs (GPT, Gemini)", "RAG", "Prompt Engineering", "NLP", "TensorFlow", "PyTorch", "XGBoost"], 
    icon: <Brain /> 
  },
  { 
    category: "Data Science & BI", 
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"], 
    icon: <BarChart /> 
  },
  { 
    category: "Cloud & DevOps", 
    items: ["AWS Cloud", "Microsoft Azure", "CI/CD", "Git", "Docker", "Postman"], 
    icon: <Cloud /> 
  },
  { 
    category: "Development", 
    items: ["Python", "JavaScript", "Streamlit", "FastAPI", "React JS", "MERN Stack"], 
    icon: <Code /> 
  }
];

export const projects = [
  {
    id: 1,
    title: "Energy Demand Forecasting",
    date: "Nov 2025",
    desc: "Forecasted hourly electricity demand using ARIMA, SARIMA, Prophet, and DeepAR models.",
    fullDesc: "This project focused on optimizing energy consumption by forecasting hourly electricity demand. Using advanced time-series analysis (ARIMA, SARIMA) and Deep Learning models (DeepAR), I captured complex trends and seasonality. The results helped in operational planning and energy optimization strategies.",
    tech: ["Python", "Prophet", "GluonTS", "Statsmodels"],
    link: "#"
  },
  {
    id: 2,
    title: "Agentic AI Risk Assessment System",
    date: "Oct 2025",
    desc: "Built a multi-agent AI system that evaluates technical, ethical, and regulatory risks.",
    fullDesc: "I developed a comprehensive risk assessment tool using Agentic AI. The system employs multi-agent workflows to evaluate AI use cases against GDPR and ethical standards. It features real-time risk classification and an interactive UI built with Streamlit.",
    tech: ["CrewAI", "Google Gemini", "ChromaDB", "Streamlit"],
    link: "#"
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    date: "Sept 2025",
    desc: "End-to-end churn prediction system using XGBoost with an interactive dashboard.",
    fullDesc: "This end-to-end Machine Learning pipeline predicts customer churn with high accuracy. I handled data preprocessing, fairness evaluation, and model training using XGBoost. The final model is deployed via a Streamlit dashboard.",
    tech: ["XGBoost", "Streamlit", "Scikit-learn", "Pandas"],
    link: "#"
  },
  {
    id: 4,
    title: "IgniteLearn LMS",
    date: "May 2025",
    desc: "A web platform for managing online courses with user authentication and uploads.",
    fullDesc: "IgniteLearn is a full-stack Learning Management System. I designed a responsive frontend using React and a secure backend API. Key features include user authentication, course creation, and assignment management.",
    tech: ["MERN Stack", "React JS", "Postman API"],
    link: "#"
  },
  {
    id: 5,
    title: "EV Data Preprocessing",
    date: "Aug 2025",
    desc: "Cleaned and prepared EV dataset with technical specs for regression modeling.",
    fullDesc: "This project involved rigorous data cleaning and feature engineering on a dataset of Electric Vehicles. I handled missing values, encoded categorical variables, and standardized numerical features.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    link: "#"
  }
];

// --- NEW CERTIFICATIONS STRUCTURE ---

export const certifications = [
  {
    id: 1,
    title: "AWS SimuLearn: Core Security Concepts",
    issuer: "Amazon Web Services",
    date: "Dec 2025",
    category: "AWS Cloud",
    // Placeholder Image: Replace this later with your actual certificate screenshot
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop", 
    credentialLink: "https://aws.amazon.com/verification", // Link to verify if you have it
    desc: "Mastered fundamental security concepts within the AWS ecosystem, focusing on IAM, encryption, and network security.",
    skills: ["AWS IAM", "Encryption", "Network Security"]
  },
  {
    id: 2,
    title: "Data Integration, Storage & Migration",
    issuer: "Data Governance Institute",
    date: "Dec 2025",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    credentialLink: "#",
    desc: "Comprehensive training on modern data architecture, ETL pipelines, and secure migration strategies for enterprise data.",
    skills: ["ETL", "Data Warehousing", "Migration Strategies"]
  },
  // ... Add 'image' and 'credentialLink' to all other certifications similarly
  {
    id: 3,
    title: "Azure: Relational Database Services",
    issuer: "Microsoft",
    date: "Oct 2025",
    category: "Microsoft Azure",
    image: "https://images.unsplash.com/photo-1633419461186-7d40a23933a7?q=80&w=1000&auto=format&fit=crop",
    credentialLink: "#",
    desc: "Deep dive into managing and deploying relational databases on Microsoft Azure, focusing on SQL Database and optimization.",
    skills: ["Azure SQL", "Database Management", "Cloud DB"]
  },
  // ... continue for the rest
];
// --- NEW BLOGS SECTION ---
export const blogs = [
  {
    id: 1,
    title: "My Journey into Agentic AI",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    excerpt: "Exploring how multi-agent systems are changing the landscape of automated risk assessment and decision making.",
    content: "Agentic AI represents a shift from passive models to active systems that can plan and execute tasks. In my recent project, I utilized CrewAI to build a risk assessment system...",
    tags: ["AI", "Agents", "Future Tech"]
  },
  {
    id: 2,
    title: "Time-Series Forecasting: Beyond ARIMA",
    date: "Nov 22, 2025",
    readTime: "7 min read",
    excerpt: "A comparative look at traditional statistical methods versus modern Deep Learning approaches like Prophet and DeepAR.",
    content: "While ARIMA has been the gold standard for decades, the complexity of modern energy grids requires more robust solutions. In this post, I break down how DeepAR outperforms...",
    tags: ["Data Science", "Forecasting", "Deep Learning"]
  },
  {
    id: 3,
    title: "Building Ethical AI Systems",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    excerpt: "Why GDPR compliance and ethical guardrails are just as important as model accuracy in 2025.",
    content: "As AI becomes ubiquitous, the 'black box' problem becomes a liability. Integrating GDPR checks directly into the development pipeline ensures that our models are safe...",
    tags: ["Ethics", "GDPR", "AI Governance"]
  }
];

export const education = {
  degree: "BSc (Hons) in IT Specializing in Data Science",
  uni: "Sri Lanka Institute of Information Technology",
  gpa: "CGPA: 3.18/4.0",
  year: "2023 - Present"
};

export const activities = [
  "Member, SLIIT IEEE Student Branch",
  "WPC Cricket Club (Present)",
  "Freelance Web Developer (2024-Present)"
];