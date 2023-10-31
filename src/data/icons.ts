export type Icon = {
  name: string;
  url: string;
  alt: string;
  isFrontEnd: boolean;
  isBackEnd: boolean;
  isDevOps: boolean;
};

export type IconsObject = {
  [key: string]: Icon;
};

export const iconsObject: IconsObject = {
  html5: {
    name: "HTML5",
    url: "https://img.icons8.com/color/100/html-5--v1.png",
    alt: "HTML5 Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  css3: {
    name: "CSS3",
    url: "https://img.icons8.com/color/100/css3.png",
    alt: "CSS3 Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  javascript: {
    name: "JavaScript",
    url: "https://img.icons8.com/color/100/javascript.png",
    alt: "JavaScript Logo",
    isFrontEnd: true,
    isBackEnd: true,
    isDevOps: false,
  },
  python: {
    name: "Python",
    url: "https://img.icons8.com/color/100/python--v1.png",
    alt: "Python Logo",
    isFrontEnd: false,
    isBackEnd: true,
    isDevOps: false,
  },
  reactnative: {
    name: "React Native",
    url: "https://img.icons8.com/ios/100/react-native--v1.png",
    alt: "React Native Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  next: {
    name: "Next",
    url: "https://img.icons8.com/fluency/100/000000/nextjs.png",
    alt: "Next.js Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  react: {
    name: "React",
    url: "https://img.icons8.com/officel/100/react.png",
    alt: "React Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  mongodb: {
    name: "MongoDB",
    url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
    alt: "MongoDB Logo",
    isFrontEnd: false,
    isBackEnd: true,
    isDevOps: false,
  },
  express: {
    name: "Express",
    url: "https://img.icons8.com/officel/100/000000/express-js.png",
    alt: "Express.js Logo",
    isFrontEnd: false,
    isBackEnd: true,
    isDevOps: false,
  },
  nodejs: {
    name: "Node JS",
    url: "https://img.icons8.com/fluency/100/node-js.png",
    alt: "Node.js Logo",
    isFrontEnd: false,
    isBackEnd: true,
    isDevOps: false,
  },
  redux: {
    name: "Redux",
    url: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-shadow-tal-revivo.png",
    alt: "Redux Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  jest: {
    name: "Jest",
    url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png",
    alt: "Jest Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  tailwind: {
    name: "Tailwind",
    url: "https://img.icons8.com/fluency/100/tailwind_css.png",
    alt: "TailwindCSS Logo",
    isFrontEnd: true,
    isBackEnd: false,
    isDevOps: false,
  },
  typescript: {
    name: "TypeScript",
    url: "https://img.icons8.com/fluency/100/typescript--v2.png",
    alt: "TypeScript Logo",
    isFrontEnd: true,
    isBackEnd: true,
    isDevOps: false,
  },
  jwt: {
    name: "JWT",
    url: "https://img.icons8.com/color/100/java-web-token.png",
    alt: "JWT Logo",
    isFrontEnd: false,
    isBackEnd: true,
    isDevOps: false,
  },
  jira: {
    name: "Jira",
    url: "https://img.icons8.com/color/100/jira.png",
    alt: "Jira Logo",
    isFrontEnd: false,
    isBackEnd: false,
    isDevOps: true,
  },
  confluence: {
    name: "Confluence",
    url: "https://img.icons8.com/color/100/confluence--v2.png",
    alt: "JWT Logo",
    isFrontEnd: false,
    isBackEnd: false,
    isDevOps: true,
  },
  git: {
    name: "Git",
    url: "https://img.icons8.com/external-those-icons-flat-those-icons/100/external-Git-Logo-social-media-those-icons-flat-those-icons.png",
    alt: "JWT Logo",
    isFrontEnd: false,
    isBackEnd: false,
    isDevOps: true,
  },
  github: {
    name: "Github",
    url: "https://img.icons8.com/glyph-neue/100/github.png",
    alt: "JWT Logo",
    isFrontEnd: false,
    isBackEnd: false,
    isDevOps: true,
  },
  bitbucket: {
    name: "Bitbucket",
    url: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo.png",
    alt: "JWT Logo",
    isFrontEnd: false,
    isBackEnd: false,
    isDevOps: true,
  },
};

export const iconsArray = Object.keys(iconsObject).map(
  (key) => iconsObject[key]
);

type Domain = "backend" | "frontend" | "devops";

function filterByDomain(
  primaryDomain: Domain,
  secondaryDomain?: Domain
): Icon[] {
  const domainMap: { [key in Domain]: keyof Icon } = {
    backend: "isBackEnd",
    frontend: "isFrontEnd",
    devops: "isDevOps",
  };

  if (secondaryDomain) {
    return iconsArray.filter(
      (icon) =>
        (icon[domainMap[primaryDomain]] as boolean) &&
        (icon[domainMap[secondaryDomain]] as boolean)
    );
  } else {
    return iconsArray.filter(
      (icon) => icon[domainMap[primaryDomain]] as boolean
    );
  }
}

export const backendIcons = filterByDomain("backend");
export const frontendIcons = filterByDomain("frontend");
export const devopsIcons = filterByDomain("devops");
export const fullStackIcons = [...new Set([...backendIcons, ...frontendIcons])];
