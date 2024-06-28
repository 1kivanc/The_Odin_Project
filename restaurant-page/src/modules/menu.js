import kebapImage from "../images/kebap.jpg";
import baklamaImage from "../images/baklava.jpg";
import DonerImage from "../images/doner.jpg";
import LahmacunImage from "../images/lahmacun.jpg";
import PideImage from "../images/pide.jpg";

export function menuPageLoad(container) {
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  menuContent.innerHTML = `
      <h2>Menu</h2>
      <div class="menu-items">
          <div class="menu-item">
              <img src="${kebapImage}" alt="Kebap">
              <h3>Kebap</h3>
              <p>Lezzetli ve otantik Türk kebabı, közlenmiş biber ve domates ile servis edilir.</p>
          </div>
          <div class="menu-item">
              <img src="${baklamaImage}" alt="Baklava">
              <h3>Baklava</h3>
              <p>İnce katmanlı hamur ve ceviz ile yapılan geleneksel Türk tatlısı.</p>
          </div>
          <div class="menu-item">
              <img src="${DonerImage}" alt="Döner">
              <h3>Döner</h3>
              <p>Marinasyonlu etin döner şişe sarılıp yavaş yavaş pişirilmesiyle yapılan nefis döner.</p>
          </div>
          <div class="menu-item">
              <img src="${LahmacunImage}" alt="Lahmacun">
              <h3>Lahmacun</h3>
              <p>İnce hamur üzerine yayılmış baharatlı kıymalı karışım ile hazırlanan Türk pizzası.</p>
          </div>
          <div class="menu-item">
              <img src="${PideImage}" alt="Pide">
              <h3>Pide</h3>
              <p>Peynir, sucuk, kıyma gibi çeşitli malzemelerle hazırlanan geleneksel Türk pidesi.</p>
          </div>
      </div>
  `;

  container.appendChild(menuContent);
}
