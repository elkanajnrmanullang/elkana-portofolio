export interface Socials {
  linkedin: string;
  github: string;
  instagram: string;
  whatssapp: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  availability: string;
  socials: Socials;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  desc: string;
}

export interface Project {
  title: string;
  tech: string;
  desc: string;
}

export const PROFILE: Profile = {
  name: "Elkana Juanro Manullang",
  title: "Software Engineer | Backend Specialist | AI Automation",
  subtitle: "Founder of Celestara Eterna & Informatics Engineering Student",
  summary:
    "I’m Elkana Juanro Manullang, an 8th-semester Informatics Engineering student at Institut Teknologi Sumatera with a clear focus on Full-Stack Software Engineering. I specialize in React.js/Next.js for frontend and Laravel/Python for backend. Beyond code, I architect scalable systems and lead creative tech solutions as the Founder of Celestara Eterna. I define myself not just as a coder, but as a problem solver who bridges the gap between technical complexity and business goals.",
  availability: "Open for Full-Stack & Software Engineering Roles",
  socials: {
    linkedin: "https://linkedin.com/in/elkanajnrmanullang",
    github: "https://github.com/elkanajnrmanullang",
    instagram: "https://instagram.com/elkanajnr_manullang",
    whatssapp:
      "https://api.whatsapp.com/send/?phone=6281382394412&text&type=phone_number&app_absent=0",
    email: "mailto:elkana.juanro@gmail.com",
  },
};

export const SKILLS: string[] = [
  "Backend Architecture (Laravel, Python)",
  "Full-Stack Dev (Next.js, React)",
  "AI & LLM Integration",
  "Database (PostgreSQL, MySQL)",
  "Mobile Dev (Flutter)",
  "Cloud Infra & VPS",
  "Data Processing (Pandas, NumPy)",
  "System Design & REST APIs",
  "Technical Leadership",
  "Business Process Automation",
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Celestara Eterna",
    role: "Founder",
    type: "Full-time",
    period: "Mar 2024 - Present",
    desc: "Leading end-to-end operations, from system architecture to business strategy. Scaling the agency to empower talents and delivering modern digital solutions for clients.",
  },
  {
    company: "Telkom Indonesia (Telkom Akses)",
    role: "Software Developer Intern",
    type: "Internship",
    period: "Jun 2025 - Aug 2025",
    desc: "Solved critical operational challenges by developing a Python Flask + PostgreSQL reporting system. Automated processing of 40,000+ rows of technician data, replacing manual Excel workflows.",
  },
  {
    company: "PT. Winnicode Garuda",
    role: "Laravel Developer",
    type: "Internship",
    period: "Mar 2025 - Jul 2025",
    desc: "Developed 'The Celestern Times' news portal using Laravel & React. Integrated admin panels, optimized API performance, and implemented RBAC security with Laravel Sanctum.",
  },
  {
    company: "Institut Teknologi Sumatera",
    role: "Lab Assistant",
    type: "Part-time",
    period: "Sep 2024 - Jan 2025",
    desc: "Teaching computer basics and advanced data processing using Microsoft Excel & VBA to freshman students.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "AltaQuant",
    tech: "Python, Hybrid AI, LLM",
    desc: "Autonomous Financial Decision Engine. Replicates institutional trading logic using 'Waterfall Analysis' and Generative AI for narrative reasoning.",
  },
  {
    title: "LeafGenn",
    tech: "Python, Automation",
    desc: "Automated Retail Leaflet Generator. Reduced design time from 12 hours to 60 minutes using spatial mapping algorithms and data validation.",
  },
  {
    title: "MaNIST",
    tech: "Flask, CNN, NumPy",
    desc: "End-to-End Handwritten Digit Recognition. Bridging the gap between Jupyter Notebook models and real-time web deployment.",
  },
  {
    title: "The Celestern Times",
    tech: "Laravel 12, React, PostgreSQL",
    desc: "AI-Powered Modern News Platform with microservices architecture, Google OAuth, and AdSense integration.",
  },
  {
    title: "SIMONI",
    tech: "Flutter, Mobile Dev",
    desc: "Employee Performance Monitoring System for UPTD BPMKP Lampung. Features geolocation attendance and real-time task tracking.",
  },
];
