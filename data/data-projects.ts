import { imageProjects } from "@/public/projects";

export const PROJECTS_DATA = [
  {
    id: "sub-tracker-pgedu-management-platform",
    featured: true,
    title: "Educational Management Platform (SaaS Admin Portal)",
    category: "fullstack",
    description:
      "An end-to-end type-safe educational administrative platform with dynamic RBAC and role-based traffic control.",
    image: imageProjects.project1,
    tags: [
      "React",
      "TypeScript",
      "Refine Framework",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Better Auth",
      "Tailwind CSS",
      "Vite",
    ],
    githubUrls: {
      frontend: "https://github.com/HussamMAhmad/Classroom-fronend",
      backend: "https://github.com/HussamMAhmad/classroom-backend",
    },
    liveUrl: "https://classroom-frontend-rho-one.vercel.app/",
  },
  {
    id: "stock-tracker-platform",
    title: "Stock Tracker Platform",
    category: "fullstack",
    featured: true,
    description:
      "A real-time financial dashboard built with Next.js 15, Finnhub API, Better Auth, and Inngest. Features stock market search, personalized watchlists, and event-driven background processing.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Finnhub API",
      "Inngest",
    ],
    image: imageProjects.project2,
    githubUrl: "https://github.com/HussamMAhmad/signalist_stock-tracker-app",
    liveUrl: "https://signalist-stock-tracker-app-sooty.vercel.app/",
  },
  {
    id: "subtrack-prisma-api",
    title: "SubTrack - Subscription Tracker API",
    category: "backend",
    featured: true,
    description:
      "A robust backend system built with Express.js to manage subscriptions and automate renewals. Features an event-driven Smart Notification Engine powered by Upstash Workflow and security shielding via Arcjet.",
    tags: [
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Upstash Workflow",
      "Arcjet",
      "Zod",
      "Nodemailer",
    ],
    image: imageProjects.project3,
    githubUrl: "https://github.com/HussamMAhmad/Subscrption-tracker-postgresql",
  },
  {
    id: "subtrack-mongodb-api",
    title: "SubTrack - Subscription Tracker API (MongoDB Edition)",
    category: "backend",
    featured: false,
    description:
      "A scalable backend service built with Express.js and MongoDB to manage subscription lifecycles. Features NoSQL data modeling via Mongoose, event-driven email workflows using Upstash Workflow, and security shielding via Arcjet.",
    tags: [
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Upstash Workflow",
      "Arcjet",
      "Zod",
      "Nodemailer",
    ],
    image: imageProjects.project4,
    githubUrl: "https://github.com/HussamMAhmad/Subscrption-tracker-mongodb",
  },
  {
    id: "dineroot-restaurant-app",
    title: "DineRoot - Premium Responsive Restaurant Web App",
    category: "frontend",
    featured: false,
    description:
      "A modern, high-end restaurant landing page built with React 19 and Tailwind CSS. Features mobile-first responsive layouts, interactive menu filtering, and optimized component architecture.",
    tags: [
      "React 19",
      "Tailwind CSS",
      "JavaScript",
      "React Icons",
      "Jest",
      "UI/UX Design",
    ],
    image: imageProjects.project5,
    githubUrl: "https://github.com/HussamMAhmad/gerich-restaurant",
    liveUrl: "https://gerich-restaurant-nu.vercel.app/",
  },
  {
    id: "gpt3-jsm-ai-landing-page",
    title: "GPT3-JSM - Futuristic AI & Next-Gen Tech Landing Page",
    category: "frontend",
    featured: false,
    description:
      "A cutting-edge, futuristic AI landing page built with React 19 and Tailwind CSS. Features modern glassmorphism aesthetics, neon gradients, interactive feature showcases, and a mobile-first responsive architecture.",
    tags: [
      "React 19",
      "Tailwind CSS",
      "JavaScript",
      "React Icons",
      "Glassmorphism",
      "UI/UX Design",
    ],
    image: imageProjects.project6,
    githubUrl: "https://github.com/HussamMAhmad/gpt3-jsm",
    liveUrl: "https://gpt3-jsm-liart.vercel.app/",
  },
  {
    id: "bankmodern-fintech-landing-page",
    title: "BankModern - Next-Generation Banking & FinTech UI",
    category: "frontend",
    featured: false,
    description:
      "A sophisticated, high-fidelity banking landing page built with React 19 and Tailwind CSS. Features modern FinTech aesthetics, interactive business metrics, custom gradient styling, and a fully responsive mobile-first architecture.",
    tags: [
      "React 19",
      "Tailwind CSS",
      "JavaScript",
      "React Icons",
      "FinTech UI",
      "UI/UX Design",
    ],
    image: imageProjects.project7,
    githubUrl: "https://github.com/HussamMAhmad/bank-modern-app",
    liveUrl: "https://bank-modern-app-red.vercel.app/",
  },
  {
    id: "react-redux-weather-app",
    title: "Dynamic Localized Weather Application",
    category: "frontend",
    featured: false,
    description:
      "A dynamic weather application built with React 19, Redux Toolkit, and Material UI. Features real-time weather data fetching, centralized state management with createAsyncThunk, full Arabic/English localization with dynamic RTL/LTR layout switching, and localized date/time formatting.",
    tags: [
      "React 19",
      "Redux Toolkit",
      "Material UI (MUI)",
      "i18next",
      "Moment.js",
      "REST API",
      "JavaScript",
    ],
    image: imageProjects.project8,
    githubUrl: "https://github.com/HussamMAhmad/wether-app",
    liveUrl: "https://wether-app-mauve.vercel.app/",
  },
];

export const TOP_PROJECTS = PROJECTS_DATA.filter((project) => {
  return project.featured;
});
