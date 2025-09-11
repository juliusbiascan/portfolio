import { Icons } from "@workspace/ui/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Julius Biascan",
  initials: "JB",
  url: "https://juliusbiascan.me",
  location: "Pangasinan, Philippines",
  locationLink: "https://www.google.com/maps/place/pangasinan",
  description:
    "Independent Software Engineer. I love building things and helping people. Very active on Facebook.",
  summary:
    "Computer Science graduate with an insatiable passion for technology and a relentless drive for continuous learning. I thrive on building innovative solutions and staying at the forefront of emerging tech trends.",
  avatarUrl: "/me-ios.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C#",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "juliusbiascan.bcsc.pass@gmail.com",
    tel: "+639165553014",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/juliusbiascan-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/juliusbiascan-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/juliusbiascan-twitter",
        icon: Icons.x,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://dub.sh/juliusbiascan-facebook",
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Hire me ",
      href: "https://juliusbiascan.me/",
      badges: [],
      location: "Pangasinan, Philippines",
      title: "Software Engineer",
      logoUrl: "/hireme.png",
      start: "September 2025",
      end: null,
      description:
        "I dont have a job yet, but I'm looking for one. please hire me.",
    },
  ],
  education: [
    {
      school: "PASS COLLEGE, Alaminos City",
      href: "https://www.facebook.com/passcollege",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/pass-college.jpg",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Vibe AI Website Builder",
      href: "https://vibe.juliusbiascan.me",
      dates: "Sep 2025",
      active: true,
      description:
        "AI website builder SaaS on Next.js 15—generate and manage sites with Prisma/Postgres, tRPC, Clerk, Inngest, and a React 19 + Tailwind UI featuring dashboards, AI messaging, sandbox previews, and usage tracking.",
      technologies: [
        "Next.js 15",
        "React",
        "Inngest",
        "Prisma",
        "E2B",
        "Shadcn UI",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/juliusbiascan/vibe",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://vibe.juliusbiascan.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://r2.juliusbiascan.me/vibe.mp4",
    },
    {
      title: "Echo Support Agent",
      href: "https://echo.juliusbiascan.me",
      dates: "Sep 2025",
      active: true,
      description:
        "Introducing Echo a B2B SaaS AI powered support platform inspired by Intercom, Crisp, and Zendesk.",
      technologies: [
        "Next.js 15",
        "React",
        "Convex",
        "Turborepo",
        "Vapi",
        "AWS",
        "Shadcn UI",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://echo.juliusbiascan.me",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://r2.juliusbiascan.me/echo-video.mp4",
    },
    {
      title: "Paywall",
      href: "https://paywall.juliusbiascan.me/",
      dates: "May 2025",
      active: true,
      description:
        "This project is a modern finance management web application built with Next.js, TypeScript, and Tailwind CSS. It features user authentication, dashboard analytics, account and transaction management, category organization, and data visualization. The app uses Drizzle ORM for database interactions and provides a clean, responsive UI for tracking and",
      technologies: [
        "Nextjs",
        "React",
        "Honojs",
        "CSV Upload",
        "Drizzle ORM",
        "Neon DB",
        "Shadcn UI",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://paywall.juliusbiascan.me/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/juliusbiascan/finance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://r2.juliusbiascan.me/paywall.mp4",
    },

  ],
  hackathons: [
    {
      title: "Alos Elementary School E-Learning Project",
      dates: "September 2023",
      location: "Alos Elementary School",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Robotics Workshop and Competition ",
      dates: "September 14th - 16th, 2018",
      location: "Conference Hall, Alaminos City Hall",
      description:
        "Developed a robot that can navigate through a maze and solve puzzles.",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
  gallery: [
    {
      title: "Life Experiences",
      description: "A collection of moments from diving adventures, presentations, travel, work environments, and memorable experiences around the world.",
      image: "/gallery/1.png",
      alt: "Life experiences collage - diving, presentations, travel, work, and adventures",
      categories: ["Travel", "Work", "Adventures", "Presentations", "Diving"],
    },
    {
      title: "Life Experiences",
      description: "A collection of moments from diving adventures, presentations, travel, work environments, and memorable experiences around the world.",
      image: "/gallery/2.png",
      alt: "Life experiences collage - diving, presentations, travel, work, and adventures",
      categories: ["Travel", "Work", "Adventures", "Presentations", "Diving"],
    },
    {
      title: "Life Experiences",
      description: "A collection of moments from diving adventures, presentations, travel, work environments, and memorable experiences around the world.",
      image: "/gallery/3.png",
      alt: "Life experiences collage - diving, presentations, travel, work, and adventures",
      categories: ["Travel", "Work", "Adventures", "Presentations", "Diving"],
    },
  ],
} as const;
