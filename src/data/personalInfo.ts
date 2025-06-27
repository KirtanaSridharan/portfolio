import { Skill } from "../models";

export const personalInfo = {
  name: "Kirtana Sridharan",
  title: "Software Engineer",
  description: "Analyze. Code. Build. Repeat.",
  about:
    "I'm a passionate developer with expertise in both software development and data science. With over 2 years of experience, I combine strong programming skills with data analysis and machine learning capabilities. I focus on writing clean, efficient code and creating intuitive user experiences, while also implementing sophisticated data models that solve real-world problems.",
  location: "New York, NY",
  email: "skirtana24@gmail.com",
  github: "https://github.com/KirtanaSridharan",
  linkedin: "https://www.linkedin.com/in/kirtana-sridharan/",
  resume:
    "https://drive.google.com/file/d/1PTG56UiBlqi_o5o5xPy9BBOnu836R03V/view?usp=sharing",
};

export const skills: Skill[] = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Python", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "PyTest", category: "backend" },
  { name: "Jest", category: "backend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "Material UI", category: "frontend" },
  { name: "Pandas", category: "datascience" },
  { name: "NumPy", category: "datascience" },
  { name: "Matplotlib", category: "datascience" },
  { name: "scikit-learn", category: "datascience" },
  { name: "TensorFlow", category: "datascience" },
  { name: "PyTorch", category: "datascience" },
  { name: "Tableau", category: "datascience" },
  { name: "LLMs", category: "datascience"},
  { name: "LangChain", category: "datascience"},
  { name: "LangGraph", category: "datascience"},
  { name: "RAG", category: "datascience"},
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "GCP", category: "tools"},
  { name: "CI/CD", category: "tools" },
  { name: "JIRA", category: "tools" },
];

export const experience = [
  {
    title: "Software Engineering Intern",
    company: "Progyny",
    period: "Nov 2024 - April 2025",
    description: "Worked on secure and scalable internal tools for healthcare data processing. Built a React-based product roadmap dashboard, automated health claims ingestion using AWS Lambda, and developed a Python module to consolidate patient data, reducing manual work and improving data integrity.",
  },
  {
    title: "Data Analyst",
    company: "Kahana",
    period: "Jul 2024 - Nov 2024",
    description: "Analyzed user engagement data to define KPIs and guide feature development. Built interactive dashboards in Looker using Google Analytics and Firebase data, enabling real-time insights and driving a 25% improvement in user retention.",
  },
  {
    title: "Data Science Research Intern",
    company: "IIT Madras",
    period: "Aug 2023 - Jan 2024",
    description: "Designed an efficient CNN-based recommender system for edge deployment. Leveraged Lottery Ticket Hypothesis and attention-based distillation to optimize model performance, reducing error and power consumption on constrained hardware",
  },
];
