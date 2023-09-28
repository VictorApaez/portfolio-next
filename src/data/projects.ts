import { iconsObject, Icon } from "./icons";
const {
  html5,
  css3,
  javascript,
  python,
  reactnative,
  next,
  react,
  mongodb,
  express,
  nodejs,
  redux,
  jwt,
  jest,
  typescript,
  tailwind,
} = iconsObject;

export type ProjectType = {
  name: string;
  alt: string;
  imgUrl: string;
  shortDesc: string;
  icons: Icon[];
  isLive: boolean;
  demoLink?: string;
  githubLink: string;
};

export const projects: ProjectType[] = [
  {
    demoLink: "https://the-book-swap.netlify.app/",
    githubLink: "https://github.com/VictorApaez/book-swap",
    imgUrl: "book-swap.png",
    alt: "Image of the web app the book swap",
    name: "The Book Swap",
    shortDesc:
      "Users can search for a specific book, or browse through a list of books available online.",
    icons: [react, redux, express, nodejs, mongodb],
    isLive: true,
  },
  {
    demoLink: "https://code-vision.vercel.app/dashboard/bubblesort",
    githubLink: "https://github.com/VictorApaez/code-vision",
    imgUrl: "code-vision.png",
    alt: "Image of the web app Code Vision",
    name: "Code Vision",
    shortDesc:
      "Designed an interactive dashboard to help users visualize and understand various sorting algorithms.",
    icons: [next, tailwind, typescript],
    isLive: true,
  },
  {
    demoLink: "https://thetrailers.netlify.app/",
    githubLink: "https://github.com/VictorApaez/movie-trailers-app",
    imgUrl: "trailers.png",
    alt: "Image of the web app The Trailers",
    name: "The Trailers",
    shortDesc:
      "A Netflix replica, this web application has trailers for top rated, now playing,and current entertainment.",
    icons: [react, html5, css3],
    isLive: true,
  },
  {
    demoLink: "https://legendsofleague.netlify.app/",
    githubLink: "https://github.com/durlinlin/Legendary-Slayers-FE",
    imgUrl: "LoL.png",
    alt: "Image of the web app League of Legends",
    name: "League of Legends",
    shortDesc:
      "This web application helps gamers search and build teams with their favorite characters and items.",
    icons: [react, express, nodejs, jwt, mongodb],
    isLive: true,
  },
  {
    demoLink: "https://victorapaez.github.io/snake-game/",
    githubLink: "https://github.com/VictorApaez/snake-game",
    imgUrl: "snake-game.png",
    alt: "Image of the web app game Snake",
    name: "Snake Game",
    shortDesc:
      "Slither your way to the apples. Play the classic snake game in retro arcade format",
    icons: [javascript, html5, css3],
    isLive: true,
  },
  {
    demoLink: "https://breddit.netlify.app/",
    githubLink: "https://github.com/SEI-Buffleheads/reddit-clone",
    imgUrl: "breddit.png",
    alt: "Image of the web app Breddit",
    name: "Breddit",
    shortDesc:
      "Inspired by Reddit, this web application is a network of communities where people can share their interests and ideas.",
    icons: [react, express, nodejs, mongodb],
    isLive: true,
  },
  {
    githubLink: "https://github.com/VictorApaez/volunteer-connect",
    imgUrl: "volunteer-connect.png",
    alt: "Image of Volunteer Connect",
    name: "Volunteer Connect",
    shortDesc:
      "This web application is designed for companies and users to find volunteer opportunities through posts and comments.",
    icons: [react, redux, nodejs, jwt, mongodb],
    isLive: false,
  },
  {
    githubLink: "https://github.com/VictorApaez/minesweeper-python",
    imgUrl: "minesweeper.png",
    alt: "Image of Minesweeper",
    name: "Minesweeper",
    shortDesc:
      "Minesweeper is a classic puzzle game implemented using Python, Tkinter, and Object-Oriented Programming",
    icons: [python],
    isLive: false,
  },
  {
    githubLink: "https://github.com/VictorApaez/calculator-gui-python",
    imgUrl: "calculator-app.png",
    alt: "Image of Calculator app",
    name: "Calculator",
    shortDesc:
      "This calculator application was built with Kivy in Python and Test Driven Development practices using pytest.",
    icons: [python],
    isLive: false,
  },
  {
    githubLink: "https://github.com/VictorApaez/fractal-tree-python",
    imgUrl: "fractal-tree.png",
    alt: "Image of Fractal Tree",
    name: "Fractal Tree",
    shortDesc:
      "This project uses Python's turtle module to animate a drawing of a fractal tree.",
    icons: [python],
    isLive: false,
  },
];
