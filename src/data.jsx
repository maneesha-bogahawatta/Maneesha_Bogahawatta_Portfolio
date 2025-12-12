import React from 'react';
import { Code, Brain, Cloud, BarChart } from 'lucide-react';

// --- IMAGE IMPORTS ---
// Make sure these files exist in your src/assets folder!
import evProjectImg from './assets/evImage.png';
import EFProjectImg from './assets/energyForcat.png';
import ChurnProjectImg from './assets/churnPrediction.png';
import AIRiskProjectImg from './assets/riskAssessment.png';
import LmsProjectImg from './assets/lms.png';

// Blog Images (Ensure you have these or comment them out if missing)
import TimeSeriesBlogImg from './assets/TimeSeries.png';
import AIEthicsBlogImg from './assets/AIEthics.png';
import FutureTecBlogImg from './assets/FututreTec.png';

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

// --- PROJECTS (With Rich Content Blocks) ---

export const projects = [
  {
    id: 1,
    title: "Energy Demand Forecasting",
    date: "Nov 2025",
    image: EFProjectImg,
    github: "https://github.com/maneesha-bogahawatta/Energy-Demand-Forecasting-ML-TimeSeries",
    desc: "Optimizing energy consumption by forecasting hourly electricity demand using Deep Learning (DeepAR) and statistical models.",
    tech: ["Python", "Prophet", "GluonTS", "Statsmodels", "DeepAR"],
    content: [
      { type: "heading", text: "Why This Project Matters" },
      { type: "paragraph", text: "Energy grid stability relies on the delicate balance between supply and demand. Over-generation wastes resources, while under-generation causes blackouts. A 1% improvement in forecasting accuracy can save utility companies millions in operational costs." },
      
      { type: "callout", title: "Project Impact", text: "The DeepAR model reduced the Mean Absolute Percentage Error (MAPE) by 12% compared to the baseline, allowing for more precise peak-load planning." },

      { type: "heading", text: "Challenges Faced" },
      { type: "list", items: [
          "Non-Linear Seasonality: Electricity usage spikes unpredictably during holidays and sudden weather changes.",
          "Cold Start Problem: Traditional models struggled to predict demand for new sensors with little historical data.",
          "Data Noise: The raw dataset contained gaps due to sensor failures."
        ] 
      },

      { type: "heading", text: "How I Solved It" },
      { type: "paragraph", text: "To handle seasonality, I integrated **Facebook Prophet**, which has built-in holiday effects. For the 'Cold Start' problem, I switched to **Amazon DeepAR** (via GluonTS). Unlike ARIMA, DeepAR learns a global model from all sensors simultaneously, allowing it to predict patterns for new sensors based on the group's behavior." }
    ]
  },
  {
    id: 2,
    title: "Agentic AI Risk Assessment",
    date: "Oct 2025",
    image: AIRiskProjectImg,
    github: "https://github.com/Dilnuka/risk_analyzer/tree/main/ai_risk_classifier",
    desc: "A multi-agent AI system that evaluates technical, ethical, and regulatory risks using CrewAI and Google Gemini.",
    tech: ["CrewAI", "Google Gemini", "ChromaDB", "Streamlit", "Python"],
    content: [
      { type: "heading", text: "Why This Project Matters" },
      { type: "paragraph", text: "With the EU AI Act and GDPR, compliance is no longer optional. Manual risk assessment is slow and expensive. This tool democratizes AI safety by allowing developers to instantly audit their use cases against complex regulations." },

      { type: "heading", text: "Challenges Faced" },
      { type: "list", items: [
          "Hallucinations: Early versions of the 'Compliance Agent' would invent non-existent GDPR articles.",
          "Agent Loops: Agents would sometimes get stuck debating a risk score indefinitely.",
          "Context Limits: Passing entire legal documents into the prompt window was too expensive."
        ] 
      },

      { type: "heading", text: "How I Solved It" },
      { type: "paragraph", text: "I implemented a **RAG (Retrieval-Augmented Generation)** system using ChromaDB. Instead of hallucinating, the agents now query a vector database of verified legal texts. To stop loops, I introduced a 'Manager Agent' with strict hierarchical authority to make the final decision after two rounds of debate." }
    ]
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    date: "Sept 2025",
    image: ChurnProjectImg,
    github: "https://github.com/SusheniUmayangana/Customer_churn",
    desc: "End-to-end churn prediction pipeline using XGBoost with fairness evaluation and a Streamlit dashboard.",
    tech: ["XGBoost", "Streamlit", "Scikit-learn", "Pandas", "Fairness AI"],
    content: [
      { type: "heading", text: "Why This Project Matters" },
      { type: "paragraph", text: "Acquiring a new customer costs 5x more than retaining an existing one. By identifying at-risk customers early, businesses can intervene with targeted offers, directly protecting revenue." },

      { type: "heading", text: "Challenges Faced" },
      { type: "list", items: [
          "Imbalanced Data: The dataset had 85% loyal customers and only 15% churners, leading the model to lazily predict 'No Churn' for everyone.",
          "Black Box Nature: Stakeholders didn't trust the XGBoost predictions without explanation.",
          "Bias: Initial models showed higher error rates for certain demographic groups."
        ] 
      },

      { type: "heading", text: "How I Solved It" },
      { type: "paragraph", text: "I used **SMOTE (Synthetic Minority Over-sampling Technique)** to balance the training classes. To build trust, I integrated **SHAP (SHapley Additive exPlanations)** values into the dashboard, showing exactly *why* a customer was flagged (e.g., 'High Monthly Charges'). Finally, I ran fairness audits to ensure equal predictive accuracy across demographics." }
    ]
  },
  {
    id: 4,
    title: "IgniteLearn LMS",
    date: "May 2025",
    image: LmsProjectImg,
    github: "https://github.com/maneesha-bogahawatta/Ignite-Learn",
    desc: "A full-stack Learning Management System with user authentication, course management, and assignment tracking.",
    tech: ["MERN Stack", "React JS", "Node.js", "MongoDB", "Postman API"],
    content: [
      { type: "heading", text: "Why This Project Matters" },
      { type: "paragraph", text: "Education is moving online, but many existing LMS platforms are clunky and expensive. IgniteLearn provides a lightweight, fast alternative focused on user experience and accessibility." },

      { type: "heading", text: "Challenges Faced" },
      { type: "list", items: [
          "State Management: Keeping track of user login sessions and course progress across different pages was complex.",
          "File Uploads: Handling large video course files without crashing the server.",
          "Security: Preventing unauthorized users from accessing paid course content."
        ] 
      },

      { type: "heading", text: "How I Solved It" },
      { type: "paragraph", text: "I implemented **Redux Toolkit** for global state management to handle authentication seamlessy. For file uploads, I used **Multer** middleware with optimized chunking. Security was handled via **JWT (JSON Web Tokens)** and protected backend routes that verify the token before serving data." }
    ]
  },
  {
    id: 5,
    title: "EV Data Preprocessing",
    date: "Aug 2025",
    image: evProjectImg,
    github: "https://github.com/maneesha-bogahawatta/Data-Preprocessing-Reading-Assignment_FDM",
    desc: "Rigorous data cleaning and feature engineering pipeline for Electric Vehicle datasets.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    content: [
      { type: "heading", text: "Why This Project Matters" },
      { type: "paragraph", text: "Garbage In, Garbage Out. In Machine Learning, 80% of the work is data cleaning. This project establishes a reusable pipeline to turn messy raw vehicle data into a clean asset for regression modeling." },

      { type: "heading", text: "Challenges Faced" },
      { type: "list", items: [
          "Inconsistent Units: Some cars listed range in miles, others in kilometers.",
          "Missing Data: Key battery capacity specs were missing for 20% of the older models.",
          "Outliers: Several entries had unrealistic top speeds (likely data entry errors)."
        ] 
      },

      { type: "heading", text: "How I Solved It" },
      { type: "paragraph", text: "I wrote a custom **Unit Normalization function** to standardize all metrics. For missing battery data, I used **KNN Imputation** (imputing based on similar car models) rather than dropping rows. I also implemented an IQR (Interquartile Range) filter to automatically detect and flag outliers." }
    ]
  }
];


// --- CERTIFICATIONS ---
export const certifications = [
  {
    id: 1,
    title: "AWS SimuLearn: Core Security Concepts",
    issuer: "Amazon Web Services",
    date: "Dec 2025",
    category: "AWS Cloud",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop", 
    credentialLink: "https://aws.amazon.com/verification",
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
  }
];

// --- BLOGS (With Rich Content Blocks) ---
export const blogs = [
  {
    id: 1,
    title: "My Journey into Agentic AI",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    image: FutureTecBlogImg,
    excerpt: "Exploring how multi-agent systems are changing the landscape of automated risk assessment and decision making.",
    tags: ["AI", "Agents", "Future Tech"],
    references: [
      { title: "CrewAI Documentation", url: "https://docs.crewai.com/" },
      { title: "LangChain Agents", url: "https://python.langchain.com/docs/modules/agents/" }
    ],
    content: [
      { type: "paragraph", text: "When I first started working with AI models, they felt more like calculators than collaborators. They answered questions, generated text, and helped with analysis, but they never truly did things on their own. Agentic AI changed that perspective for me. Instead of treating models as passive tools, I began seeing them as components of active, goal-driven systems." },
      { type: "heading", text: "From Single Models to Agentic Systems" },
      { type: "paragraph", text: "Like many people, my early AI projects revolved around single-model setups: one model, one prompt, one response. That approach works well for narrow tasks, but it quickly hits limits when you need deeper reasoning, coordination, or domain specialization." },
      { type: "quote", text: "The shift—from 'call the model once' to 'design a team of agents'—was the mental leap that pushed me toward multi-agent systems." },
      { type: "heading", text: "Why Multi-Agent for Risk Assessment?" },
      { type: "paragraph", text: "Risk assessment is inherently multi-dimensional. It often involves collecting data, evaluating probability, applying domain-specific rules, and communicating results." },
      { type: "list", items: [
          "A Data Analyst Agent that parses inputs and extracts key risk factors.",
          "A Risk Modeler Agent that applies scoring logic and scenario analysis.",
          "A Compliance Agent that checks against policies or thresholds.",
          "A Narrator Agent that turns the outcome into a human-readable summary."
        ] 
      },
      { type: "paragraph", text: "By embedding this flow into a CrewAI pipeline, each agent had a precise job and a clear handoff to the next. This architecture made the system easier to reason about and, importantly, easier to improve one piece at a time." }
    ]
  },
  {
    id: 2,
    title: "Time-Series Forecasting: Beyond ARIMA",
    date: "Nov 22, 2025",
    readTime: "7 min read",
    image: TimeSeriesBlogImg,
    excerpt: "A comparative look at traditional statistical methods versus modern Deep Learning approaches like Prophet and DeepAR.",
    tags: ["Data Science", "Forecasting", "Deep Learning"],
    references: [
      { title: "Forecasting: Principles and Practice", url: "https://otexts.com/fpp3/" },
      { title: "Amazon DeepAR Paper", url: "https://arxiv.org/abs/1704.04110" }
    ],
    content: [
      { type: "paragraph", text: "For decades, ARIMA (AutoRegressive Integrated Moving Average) has been the gold standard for time-series forecasting. It's robust, mathematically sound, and interpretable. However, in the modern energy sector, data is rarely linear or simple." },
      { type: "heading", text: "The Limitation of Linear Models" },
      { type: "paragraph", text: "In my Energy Demand Forecasting project, I realized that traditional models struggle with 'Cold Start' problems and complex, non-linear dependencies like sudden weather changes or holidays. This is where Deep Learning enters the chat." },
      { type: "heading", text: "Why DeepAR?" },
      { type: "paragraph", text: "DeepAR is a probabilistic forecasting model based on autoregressive recurrent neural networks. Unlike ARIMA, which fits a single model to a single time series, DeepAR learns a global model from thousands of related time series." },
      { type: "list", items: [
          "Captures complex seasonality and trends automatically.",
          "Generates probabilistic forecasts (not just a single number), which is crucial for risk planning.",
          "Handles missing data much more gracefully than statistical methods."
        ] 
      }
    ]
  },
  {
    id: 3,
    title: "Building Ethical AI Systems",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    image: AIEthicsBlogImg,
    excerpt: "Why GDPR compliance and ethical guardrails are just as important as model accuracy in 2025.",
    tags: ["Ethics", "GDPR", "AI Governance"],
    references: [
      { title: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
      { title: "Fairness in Machine Learning", url: "https://fairmlbook.org/" }
    ],
    content: [
      { type: "paragraph", text: "As AI becomes ubiquitous, the 'black box' problem becomes a liability. It's no longer enough to build a model that works; we must build models that work fairly and transparently." },
      { type: "heading", text: "The GDPR Challenge" },
      { type: "paragraph", text: "Under GDPR Article 22, individuals have the right not to be subject to a decision based solely on automated processing. This means 'The AI said so' is not a valid legal defense." },
      { type: "quote", text: "We must move from 'Black Box' AI to 'Glass Box' AI—systems that are explainable by design." },
      { type: "paragraph", text: "Integrating these checks directly into the CI/CD pipeline ensures that our models remain safe and compliant long after they are deployed." }
    ]
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
  "Freelance Web Developer (2024-Present)"
];

// --- REFERENCES (MENTORS) ---
export const references = [
  {
    name: "Mrs. N.S.W Pathirana",
    role: "Senior Manager, Innovation Centre",
    org: "People's Bank",
    contact: "nishaniwijesekara73@gmail.com", 
    phone: "+94 77 613 4102",
    relation: "Professional Mentor"
  },
  {
    name: "Professor B.C Walpola",
    role: "Department of Soil Science",
    org: "University of Ruhuna",
    contact: "bcwalpola@soil.ruh.ac.lk",
    phone: "+94 71 251 6239",
    relation: "Academic Supervisor"
  }
];