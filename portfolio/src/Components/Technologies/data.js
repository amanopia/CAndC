import reactIcon from "../../assets/react-icon.png";
import tailwind from "../../assets/tailwindcss.png";
import sql from "../../assets/sqlServer.png";
import router from "../../assets/react-router.png";
import postman from "../../assets/postman.png";
import node from "../../assets/node.png";
import mongoose from "../../assets/mongoose.png";
import mongo from "../../assets/mongo.png";
import git from "../../assets/git.png";
import jest from "../../assets/jest.png";
import javas from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import exp from "../../assets/express.png";
import gqlImage from "../../assets/gql.png";
import restApi from "../../assets/restApi.png";
// Frontend Development Skills
const frontendSkills = [
  {
    img: reactIcon,
    toolName: "React",
    toolSite: "https://reactjs.org/",
    alias: "React Docs",
  },
  {
    img: tailwind,
    toolName: "Tailwind CSS",
    toolSite: "https://tailwindcss.com/docs",
    alias: "Tailwind Docs",
  },
  {
    img: router,
    toolName: "React Router",
    toolSite: "https://reactrouter.com/web/guides/quick-start",
    alias: "React Router Docs",
  },
  {
    img: html,
    toolName: "HTML",
    toolSite: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    alias: "HTML Docs",
  },
  {
    img: css,
    toolName: "CSS",
    toolSite: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    alias: "CSS Docs",
  },
  {
    img: javas,
    toolName: "JavaScript",
    toolSite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    alias: "JavaScript Docs",
  },
];

// Backend Development Skills
const backendSkills = [
  {
    img: node,
    toolName: "Node.js",
    toolSite: "https://nodejs.org/en/docs/",
    alias: "Node.js Docs",
  },
  {
    img: exp,
    toolName: "Express",
    toolSite: "https://expressjs.com/",
    alias: "Express Docs",
  },
  {
    img: mongoose,
    toolName: "Mongoose",
    toolSite: "https://mongoosejs.com/docs/",
    alias: "Mongoose Docs",
  },
  {
    img: mongo,
    toolName: "MongoDB",
    toolSite: "https://docs.mongodb.com/",
    alias: "MongoDB Docs",
  },
  {
    img: sql,
    toolName: "SQL Server",
    toolSite: "https://docs.microsoft.com/en-us/sql/sql-server/",
    alias: "SQL Server Docs",
  },
];

// Testing and Version Control Skills
const otherSkills = [
  {
    img: git,
    toolName: "Git",
    toolSite: "https://git-scm.com/doc",
    alias: "Git Docs",
  },
  {
    img: postman,
    toolName: "Postman",
    toolSite: "https://learning.postman.com/docs/getting-started/introduction/",
    alias: "Postman Docs",
  },
  {
    img: jest,
    toolName: "Jest",
    toolSite: "https://jestjs.io/docs/getting-started",
    alias: "Jest Docs",
  },
];

const apiStandards = [
  { img: gqlImage, toolName: "GraphQL", toolSite: "", alias: "GrpahQL Docs" },
  { img: restApi, toolName: "Rest API", toolSite: "", alias: "" },
];

export { frontendSkills, backendSkills, otherSkills, apiStandards };
