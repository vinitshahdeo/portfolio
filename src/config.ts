import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
  MusicPlaylist,
} from "./types/config";

export const identity: Identity = {
  name: "Vinit Shahdeo",
  logo: "/vinitshahdeo.png",
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
  // {
  //   title: "Projects",
  //   url: "/projects",
  // },
  // {
  //   title: "Blog",
  //   url: "/blog",
  // },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/vinitshahdeo",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Twitter",
    url: "https://x.com/vinit_shahdeo",
    icon: "mdi:twitter",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/vinitshahdeo",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/vinitshahdeo",
    icon: "mdi:instagram",
    external: true,
  },
];

export const homeSocialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/vinitshahdeo",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Twitter",
    url: "https://x.com/vinit_shahdeo",
    icon: "mdi:twitter",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/vinitshahdeo",
    icon: "mdi:linkedin",
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
      url: "/vinit_shahdeo.jpg",
      alt: "Vinit Shahdeo Profile Photo",
    },
    image_r: {
      url: "/vinit-shahdeo-square-1.jpg",
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
          image: "/novo.jpg",
          url: "https://novo.co/",
        },
        date: "Aug 2023 - Present",
      },
      {
        title: "Software Engineer  II",
        company: {
          name: "Postman",
          image: "/postman.webp",
          url: "https://www.postman.com/",
        },
        date: "Jun 2021 - Sept 2023",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Postman",
          image: "/postman.webp",
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
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Featured | Vinit Shahdeo",
    description: "Featured articles and stories from Vinit Shahdeo.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};


export const musicPlaylist: MusicPlaylist[] = [
  {
    title: "O Mere Dil Ke Chain",
    url: "/music/o-mere-dil-ke-chain.mp3",
  },
  {
    title: "Papa Kehte Hain",
    url: "/music/papa_kehte_hain.mp3",
  },
  {
    title: "Naadan Parindey",
    url: "/music/naadaan-parindey.mp3",
  },
  {
    title: "Naadan Parindey",
    url: "/music/nadaan_parinde_atif.mp3",
  },
  {
    title: "Kehne Ko Jashne Bahara Hai",
    url: "/music/kehne_ko.mp3",
  },
  {
    title: "Keh Doon Tumhe",
    url: "/music/keh_dun_tumhe.mp3",
  },
  {
    title: "Tum Ho",
    url: "/music/tum_ho.mp3",
  },
  {
    title: "Lut Gaye",
    url: "/music/lut_gaye.mp3",
  },
  {
    title: "Rataan Lambiyan",
    url: "/music/raatan_lambiyan_lofi.mp3",
  },
  {
    title: "Madari",
    url: "/music/madari.mp3",
  },
  {
    title: "Allah Ke Bande",
    url: "/music/allah_ke_bande.mp3",
  },
  {
    title: "Man Mera",
    url: "/music/man_mera.mp3",
  },
  {
    title: "Mere Sapno Ki Rani",
    url: "/music/mere_sapno_ki_rani.mp3",
  },
  {
    title: "Dekha Tenu Pehli Pehli Baar Ve",
    url: "/music/dekha-tenu.mp3",
  },
  {
    title: "Yeh Shaam Mastani",
    url: "/music/yeh-shaam.mp3",
  },
  {
    title: "Chand Sifarish",
    url: "/music/chand_sifarish.mp3",
  },
  {
    title: "Chahun Main Ya Naa",
    url: "/music/chahun_main_ya_naa.mp3",
  },
  {
    title: "Jiya Dhadak Dhadak Jaye",
    url: "/music/jiya_dhadak.mp3",
  },
  {
    title: "Lag Ja Gale",
    url: "/music/lag_ja_gale.mp3",
  },
  {
    title: "Teri Deewani",
    url: "/music/teri_deewani.mp3",
  },
  {
    title: "Teri Jhuki Nazar",
    url: "/music/teri_jhuki_nazer.mp3",
  },
  {
    title: "Tujh Mein Rab Dikhta Hai",
    url: "/music/tujhme_rab.mp3",
  },
  {
    title: "Afreen Afreen",
    url: "/music/afreen.mp3",
  },
  {
    title: "Pasoori",
    url: "/music/pasoori.mp3",
  },
  {
    title: "Saiyaara",
    url: "/music/saiyara.mp3",
  }
];
