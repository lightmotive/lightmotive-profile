require("../src/style.css");
import bodyContent from "../src/body-content.html";
import faviconPath from "../src/assets/professional-logo-icon-72x72.png";

const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = faviconPath;
document.head.appendChild(faviconLink);

document.getElementById("body").innerHTML += bodyContent;

//Append freeCodeCamp test utility (does not work when added directly to HTML)
localStorage.setItem("project_selector", "portfolio");
const fccScript = document.createElement("script");
fccScript.src =
  "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
document.head.appendChild(fccScript);
