export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type SourceLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
  domain: string;
  url: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  company: string;
  description: string;
  socialLinks: SocialLink[];
  homeSocialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    icon: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type MusicPlaylist = {
  title: string;
  url: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
    image_l: {
      url: string;
      alt: string;
    };
    image_r: {
      url: string;
      alt: string;
    };
  };
  work: {
    description: string;
    items: ResumeItem[];
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type NowPageContent = {
  seo: SEOInfo;
  subtitle: string;
  title: string;
  sourceLinks: SocialLink[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type FeaturedPageContent = {
  seo: SEOInfo;
  subtitle: string;
};

export type FeaturedPost = {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  date: string;
  url: string;
  author: string;
  publisher: string;
};
