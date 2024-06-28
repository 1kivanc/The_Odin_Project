export function homePageLoad(container) {
  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  homeContent.innerHTML = `
      <h2>Restoranımıza Hoş Geldiniz</h2>
      <p>Eşsiz bir lezzet yolculuğuna çıkmaya hazır mısınız?</p>
      <blockquote class="quote">
          "Geleneksel Türk mutfağının zengin tatlarını ve aromalarını keşfedin. 
          Tutku ile hazırlanmış, sevgi ile sunulmuş lezzetler sizleri bekliyor."
      </blockquote>
      <div class="intro">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vel sint assumenda, quasi eum, accusantium pariatur, libero repudiandae hic veritatis ducimus ratione autem possimus veniam dolores reprehenderit? Sapiente officia omnis nam numquam inventore suscipit voluptatibus, autem labore hic quo vel voluptas quam accusamus adipisci, atque reprehenderit facere excepturi modi, illum assumenda pariatur? Dolorem, vero unde dignissimos sed modi voluptatem pariatur!</p>
          <p>Sizleri, her öğünün bir kutlama olduğu ve her lokmanın unutulmaz bir deneyime 
          dönüştüğü restoranımıza davet ediyoruz. Bize katılın ve Türk mutfağının 
          büyüleyici dünyasında kaybolun!</p>
      </div>
  `;

  container.appendChild(homeContent);
}
