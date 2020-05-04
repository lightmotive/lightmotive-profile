require("../src/style.css");
import bodyContent from "../src/body-content.html";
import faviconPath from "../src/assets/logos/favicon_symbol.png";

const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = faviconPath;
document.head.appendChild(faviconLink);

document.getElementById("body").innerHTML += bodyContent;
