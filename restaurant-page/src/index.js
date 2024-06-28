import { homePageLoad } from "./modules/home";
import { menuPageLoad } from "./modules/menu";
import { contactPageLoad } from "./modules/contact";
import "./styles.css"; // CSS dosyasını içe aktarıyoruz

const contentDiv = document.getElementById("content");

function clearContent() {
  contentDiv.innerHTML = "";
}

function loadHomePage() {
  clearContent();
  homePageLoad(contentDiv);
}

function loadMenuPage() {
  clearContent();
  menuPageLoad(contentDiv);
}

function loadContactPage() {
  clearContent();
  contactPageLoad(contentDiv);
}

// Initial page load
document.addEventListener("DOMContentLoaded", loadHomePage);

// Event listeners for tab buttons
document.getElementById("home-tab").addEventListener("click", loadHomePage);
document.getElementById("menu-tab").addEventListener("click", loadMenuPage);
document
  .getElementById("contact-tab")
  .addEventListener("click", loadContactPage);
