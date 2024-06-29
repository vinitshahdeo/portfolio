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
    title: "Vinit Shahdeo | Business Card",
    description:
      "Senior Software Engineer specializing in building scalable, secure and performant backend microservices in Node.js and Go.",
    image: identity.logo,
  },
  role: "Senior Backend Engineer",
  description:
    "Software Engineer specializing in building scalable, secure and performant backend microservices in Node.js and Go. Honoured to be recognized as a GitHub Star twice from India.  With a knack for building event-driven architecture, I balance code with badminton and find peace in a sip of tea and poetry.",
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
    title: "About | Vinit Shahdeo",
    description:
      "Senior Software Engineer at Novo | Previously at Postman | GitHub Star from India | Node.js, Go, Microservices, Kafka, GraphQL, REST, AWS",
    image: identity.logo,
  },
  subtitle: "Thanks for stopping by! Here's a bit about me.",
  about: {
    description: `
      Senior Software Engineer at Novo | Previously at Postman | GitHub Star from India | Node.js, Go, Microservices, Kafka, GraphQL, REST, AWS
    `, // Markdown is supported
    image_l: {
      url: "/img/vinit_shahdeo.jpg",
      alt: "Vinit Shahdeo Profile Photo",
    },
    image_r: {
      url: "/img/vinit-shahdeo-square-1.jpg",
      alt: "Vinit Shahdeo Profile Photo",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
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
        title: "Software Engineer  II",
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
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Blog (/blog)
export const featuredPageContent: FeaturedPageContent = {
  seo: {
    title: "Featured | Vinit Shahdeo",
    description: "Featured articles and stories from Vinit Shahdeo.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and interviews.",
};

export * from "./music";
export * from "./social";
export * from "./featured";
