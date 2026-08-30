import {
  RiFacebookFill,
  RiInstagramFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";

export const LINK_NAV_SECTION = [
  { name: "Home", label: "home" },
  { name: "About", label: "about" },
  { name: "Education", label: "education" },
  { name: "Skills", label: "skills" },
  { name: "Contact", label: "contact" },
  { name: "Porjects", label: "projects" },
];

export const LINK_SOCIAL_MEDIA = [
  {
    url: "https://www.facebook.com/profile.php?id=61576343513811",
    icon: RiFacebookFill,
  },
  { url: "https://x.com/Hussam_A_", icon: RiTwitterXFill },
  { url: "https://github.com/HussamMAhmad", icon: RiGithubFill },
  {
    url: "https://www.instagram.com/w.wsy0?igsh=OWRoMTVlYjdnZnBk",
    icon: RiInstagramFill,
  },
];

export const EDUCATION_DATA = [
  {
    period: "2020 - 2026",
    title: "Communications Engineering Degree",
    subtitle: "Homs University",
    description:
      "Built a solid foundation in signal processing, systems engineering, and analytical problem-solving, providing a seamless transition into software and web architecture.",
  },
  {
    period: "2022 - 2025",
    title: "Full-Stack Web Development",
    subtitle: "Self-Directed & Practical Projects",
    description:
      "Mastered core web fundamentals (HTML, CSS, JavaScript, TypeScript) and scaled up to modern frontend and backend frameworks through hands-on project implementations.",
  },
  {
    period: "2025 - Present",
    title: "Advanced Architecture & Engineering",
    subtitle: "Continuous Professional Growth",
    description:
      "Expanding expertise in building scalable full-stack applications, database modeling (Relational & NoSQL), cloud integrations, and robust application security.",
  },
];

export const TECHNICAL_ECOSYSTEM_MAIN = [
  {
    id: "frontend",
    subtitle: "Primary Expertise",
    title: "Frontend & Full-Stack Core",
    description:
      "Building reactive, performant, and type-safe user interfaces with modern web standards.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript (ES6+)",
    ],
  },
  {
    id: "backend",
    subtitle: "Server & Architecture",
    title: "Backend & Databases",
    description:
      "Designing RESTful APIs, relational data models, and scalable server structures.",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "JWT Auth",
    ],
  },
];

export const TECHNICAL_ECOSYSTEM_SUB = [
  {
    id: "security",
    skills: [
      "Upstash Workflow",
      "Arcjet Protection",
      "Nodemailer",
      "RESTful Architecture",
    ],
    title: "Workflows & Security",
  },
  {
    id: "tools",
    skills: ["Git & GitHub", "Vite", "Photoshop (UI Assets)", "Material UI"],
    title: "Tools & Graphics",
  },
];
