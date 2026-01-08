import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  FeaturedPageContent,
  HomePageContent,
  NowPageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";
import { sourceLinks } from "./source";

export const identity: Identity = {
  name: "Vinit Shahdeo",
  logo: "/img/vinitshahdeo.png",
  email: "vinishahdeo@gmail.com",
};

export const openGraphImage: string = "/img/vinitshahdeo-portfolio.jpg";

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Now",
    url: "/now",
  },
  {
    title: "Featured",
    url: "/featured",
  },
  {
    title: "Practices",
    url: "/practices",
  },
  {
    title: "Books",
    url: "/books",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Vinit Shahdeo | Portfolio",
    description:
      "Explore the portfolio of Vinit Shahdeo, a Lead Software Engineer specializing in building scalable, secure, and performant backend microservices in Node.js and Go.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com",
  },
  role: "Engineering Lead",
  company: "ZZAZZ",
  description:
    "Software Engineer specializing in building scalable, secure, and performant backend microservices in Node.js and Go. Honored to be recognized as a GitHub Star twice from India. With a knack for building event-driven architecture, I balance code with badminton and find peace in a sip of tea and poetry.",
  socialLinks: socialLinks,
  homeSocialLinks: homeSocialLinks,
  links: [
    {
      title: "Peerlist",
      url: "https://peerlist.io/vinitshahdeo",
      icon: "mdi:link-circle",
      external: true,
    },
    {
      title: "About",
      url: "/about",
      icon: "mdi:account-circle",
    },
    {
      title: "Blog",
      url: "https://vinitshahdeo.dev/",
      icon: "mdi:share-circle",
      external: true,
    },
    {
      title: "Source",
      url: "https://github.com/vinitshahdeo/portfolio",
      icon: "mdi:github",
      external: true,
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Vinit Shahdeo | Lead Software Engineer & GitHub Star",
    description:
      "Discover Vinit Shahdeo, a Lead Software Engineer at an AI startup, formerly Senior Software Engineer at Novo and Software Engineer II at Postman. GitHub Star from India, specializing in Node.js, Go, Microservices, Kafka, GraphQL, REST, and AWS.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/about",
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description: `
      Senior Software Engineer at Novo | Previously at Postman | GitHub Star from India | Node.js, Go, Microservices, Kafka, GraphQL, REST, AWS | Based in Bengaluru, India
    `,
    image_l: {
      url: "/img/vinit_shahdeo.jpg",
      alt: "Vinit Shahdeo",
    },
    image_r: {
      url: "/img/vinit-shahdeo-square-1.jpg",
      alt: "Vinit Shahdeo",
    },
  },
  work: {
    description: `I'm a Senior Software Engineer at Novo, formerly Software Engineer II at Postman. I'm a GitHub Star from India, specializing in Node.js, Go, Microservices, Kafka, GraphQL, REST, and AWS.`,
    items: [
      {
        title: "Engineering Lead",
        company: {
          name: "ZZAZZ",
          image: "/logo/zzazz.jpeg",
          url: "https://zzazz.com/",
        },
        date: "Mar 2025 - Present",
      },
      {
        title: "Senior Software Engineer",
        company: {
          name: "Novo",
          image: "/logo/novo.jpg",
          url: "https://novo.co/",
        },
        date: "Aug 2023 - Mar 2025",
      },
      {
        title: "Software Engineer II",
        company: {
          name: "Postman",
          image: "/logo/postman.webp",
          url: "https://www.postman.com/",
        },
        date: "Jun 2021 - Sept 2023",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Postman",
          image: "/logo/postman.webp",
          url: "https://postman.com/",
        },
        date: "Jun 2019 - May 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    links: socialLinks,
  },
};

// Featured (/featured)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: "Featured Articles, Stories & Interviews | Vinit Shahdeo",
    description:
      "Explore a curated collection of articles, insightful stories, and exclusive interviews with Vinit Shahdeo, a Software Engineer and a GitHub Star from Bengaluru, India.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/featured",
  },
  subtitle: "Thoughts, stories, and interviews.",
};

// Now (/now)
export const nowPageContent: NowPageContent = {
  seo: {
    title: "What I'm doing now | Vinit Shahdeo",
    description:
      "A updated log of what I'm building, learning, reading or exploring at different points of time.",
    image: openGraphImage,
    domain: "vinitshahdeo.com",
    url: "https://vinitshahdeo.com/now",
  },
  title: "Now (Recently)",
  subtitle: "Where I’m at, what I’m focused on, and what I’m not.",
  sourceLinks,
};

export * from "./music";
export * from "./social";
export * from "./featured";
export * from "./source";
export * from "./analytics";
export * from "./github";
