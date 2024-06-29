import type {
  NavBarLink,
  Identity,
  AboutPageContent,
  FeaturedPageContent,
  HomePageContent,
} from "../types/config";

import { socialLinks, homeSocialLinks } from "./social";

export const identity: Identity = {
  name: "Vinit Shahdeo",
  logo: "/img/vinitshahdeo.png",
  email: "vinishahdeo@gmail.com",
};

export const openGraphImage: string = "/img/vinitshahdeo-og-image.png";

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
    title: "Blog",
    url: "https://vinitshahdeo.dev/",
    external: true,
  },
  {
    title: "Featured",
    url: "/featured",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Vinit Shahdeo | Portfolio",
    description:
      "Explore the portfolio of Vinit Shahdeo, a Senior Software Engineer specializing in building scalable, secure, and performant backend microservices in Node.js and Go.",
    image: openGraphImage,
  },
  role: "Senior Backend Engineer",
  description:
    "Software Engineer specializing in building scalable, secure, and performant backend microservices in Node.js and Go. Honored to be recognized as a GitHub Star twice from India. With a knack for building event-driven architecture, I balance code with badminton and find peace in a sip of tea and poetry.",
  socialLinks: socialLinks,
  homeSocialLinks: homeSocialLinks,
  links: [
    {
      title: "Peerlist",
      url: "https://peerlist.io/vinitshahdeo",
      external: true,
    },
    {
      title: "Blog",
      url: "https://vinitshahdeo.dev/",
      external: true,
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About Vinit Shahdeo | Senior Software Engineer & GitHub Star",
    description:
      "Discover Vinit Shahdeo, a Senior Software Engineer at Novo, formerly Software Engineer II at Postman. GitHub Star from India, specializing in Node.js, Go, Microservices, Kafka, GraphQL, REST, and AWS.",
    image: openGraphImage,
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description: `
      Senior Software Engineer at Novo | Previously at Postman | GitHub Star from India | Node.js, Go, Microservices, Kafka, GraphQL, REST, AWS
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
        title: "Senior Software Engineer",
        company: {
          name: "Novo",
          image: "/logo/novo.jpg",
          url: "https://novo.co/",
        },
        date: "Aug 2023 - Present",
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
    title: "Vinit Shahdeo - Featured Articles, Stories & Interviews",
    description:
      "Explore a curated collection of articles, insightful stories, and exclusive interviews with Vinit Shahdeo, a Software Engineer and a GitHub Star from Bengaluru, India.",
    image: openGraphImage,
  },
  subtitle: "Thoughts, stories, and interviews.",
};

export * from "./music";
export * from "./social";
export * from "./featured";
