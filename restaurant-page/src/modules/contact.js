export function contactPageLoad(container) {
  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");

  contactContent.innerHTML = `
      <h2>Bize Ulaşın</h2>
      <p>Aşağıdaki kanallar aracılığıyla bizimle iletişime geçebilirsiniz:</p>
      <div class="contact-info">
          <div class="contact-item">
              <h3>Telefon</h3>
              <p>+90 555 555 55 55</p>
          </div>
          <div class="contact-item">
              <h3>Adres</h3>
              <p>Örnek Mahallesi, Örnek Sokak, No: 123, İstanbul, Türkiye</p>
          </div>
          <div class="contact-item">
              <h3>Email</h3>
              <p>info@restoran.com</p>
          </div>
      </div>
  `;

  container.appendChild(contactContent);
}
