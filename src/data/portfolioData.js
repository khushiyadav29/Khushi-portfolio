import { 
  Code2, 
  Terminal, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Mail, 
  Trophy, 
  BookOpen, 
  Star, 
  Award,
  Sparkles,
  School,
  GraduationCap
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const personalInfo = {
  name: "Khushi Yadav",
  title: "Problem Solver",
  institution: "Netaji Subhas University of Technology (NSUT), Delhi",
  program: "B.Tech in Computer Science with Artificial Intelligence (Batch of 2027)",
  year: "Final Year B.Tech Student",
  location: "Delhi, India",
  email: "khushi.yadav.ug23@nsut.ac.in",
  resumeUrl: "/resume.pdf", // Expected to be in public/resume.pdf
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/khushiyadav29",
      icon: FaGithub,
      color: "hover:text-[#2dba4e]"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/khushi-yadav-0b0a382a1/",
      icon: FaLinkedin,
      color: "hover:text-[#0077b5]"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/khushi_yadav29/",
      icon: SiLeetcode,
      color: "hover:text-[#f89f1b]"
    },
    {
      name: "Email",
      url: "khushi.yadav.ug23@nsut.ac.in",
      icon: Mail,
      color: "hover:text-[#ea4335]"
    }
  ],
  bio: "I am a passionate B.Tech student at Netaji Subhas University of Technology (NSUT), specializing in Computer Science and Artificial Intelligence. My core technical interest lies at the intersection of robust Real World Problems and cutting-edge solutions. I spend my time solving complex Data Structures & Algorithms challenges, building production-ready web applications, and experimenting with Explainable AI and Retrieval-Augmented Generation (RAG). I am currently preparing for upcoming software engineering opportunities.",
  stats: [
    { value: 800, label: "DSA Problems Solved", suffix: "+" },
    { value: 45, label: "LeetCode Rank", suffix: "K" },
    { value: 4, label: "Production Projects", suffix: "+" }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 75 }
    ]
  },
  {
    category: "AI & ML",
    icon: Cpu,
    skills: [
      { name: "Scikit Learn", level: 80 },
      { name: "SHAP (Explainable AI)", level: 85 },
      { name: "LangChain (RAG)", level: 80 },
      { name: "Gemini API", level: 85 }
    ]
  }
];

export const projectsData = [
  {
    title: "PlacementPilot",
    subtitle: "AI-Powered Placement Dashboard",
    description: "An intelligent, end-to-end dashboard that automates the collection and management of college placement opportunities straight form your gmail. It extracts application criteria from emails, alerts users of deadlines, and checks eligibility criteria.",
    features: [
      "Google Gmail OAuth integration for automated inbox monitoring.",
      "Gemini AI parsing to extract deadlines, salary package, roles, and CGPA requirements.",
      "Automatic deadline calculation.",
    ],
    tech: ["Gemini API", "OAuth"],
    github: "https://github.com/khushiyadav29/Placement-Pilot",
    demo: "https://placement-pilot-etdz.onrender.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "LoanWise",
    subtitle: "Explainable AI Loan Approval Prediction",
    description: "A machine learning system engineered to predict loan approvals while delivering clear transparency. It uses SHAP (SHapley Additive exPlanations) values to clarify why a loan request was approved or rejected.",
    features: [
      "Random Forest & SVM Classifiers delivering over 95% predictive accuracy.",
      "SHAP visual interpretations to dismantle black-box machine learning barriers.",
      "Interactive recommendation engine suggesting score improvement metrics.",
      "Dynamic dashboards mapping applicant risk profiles against historical credit databases."
    ],
    tech: ["Python", "SHAP", "FastAPI"],
    github: "https://github.com/khushiyadav29/Loan_approval_prediction_app",
    demo: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ResearchHelp",
    subtitle: "RAG-Based PDF Q&A Engine",
    description: "A Retrieval-Augmented Generation (RAG) platform allowing users to search, query, and synthesize information from multiple dense scientific research papers in PDF format.",
    features: [
      "Multi-PDF concurrent upload and chunking engine using LangChain.",
      "FAISS Vector Store for sub-second semantic search index retrieval.",
      "Gemini API integration for context-guided, citation-backed answers.",
      "History-tracking agent keeping track of the conversational state."
    ],
    tech: ["React", "LangChain", "Gemini API", "FastAPI"],
    github: "https://github.com/khushiyadav/ResearchHelp",
    demo: "#",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
  }
];

export const timelineData = [
  {
    year: "2023",
    title: "B.Tech Computer Science & AI at NSUT",
    description: "Secured admission at the prestigious Netaji Subhas University of Technology (NSUT), Delhi in the specialized CSE-Artificial Intelligence branch."
  },
  {
    year: "Late 2023",
    title: "Mastering C++",
    description: "Developed strong object-oriented programming foundation, low-level memory concepts, and structured syntax standards in C++."
  },
  {
    year: "2024",
    title: "Diving into Data Structures & Algorithms",
    description: "Solved 800+ problems across LeetCode and GeeksforGeeks (top 50,000 globally)."
  },
  {
    year: "Present",
    title: "Internship Preparation",
    description: "Deepening knowledge in System Design, Operating Systems, and DBMS, while actively applying for Software Engineering & AI internships."
  }
];

export const achievementsData = [
  {
    title: "97.69 Percentile in JEE Main",
    description: "Ranked among the top candidates in one of the toughest engineering entrance exams in the world, securing admission into NSUT.",
    icon: Star,
    badge: "National Level"
  },
  {
    title: "Inter College Kabaddi Champion",
    description: "Led the college team to victory, proving leadership, strategic communication, athletic discipline, and teamwork.",
    icon: Trophy,
    badge: "Sports & Leadership"
  }
];

export const certificatesData = [
  {
    title: "Supervised Machine Learning: Regression and Classification ",
    issuer: "Coursera / Stanford Online",
    date: "Oct 2024",
    id: "UWOIEOP7VBCR",
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google",
    date: "Jan 2024",
    id: "7186397",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Jan 2024",
    id: "a6fe4b6732b747eba01a7fd762a358c4",
  }
];
