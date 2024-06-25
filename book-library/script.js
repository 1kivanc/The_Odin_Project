let myLibrary = [];

function Book(imageUrl,title, author, pages, read) {
  this.imageUrl = imageUrl;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const library = document.getElementById('library');
  library.innerHTML = ''; 

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    bookCard.innerHTML = `
      <img src="${book.imageUrl}" alt="${book.title}">
      <p><strong>Başlık:</strong> ${book.title}</p>
      <p><strong>Yazar:</strong> ${book.author}</p>
      <p><strong>Sayfa:</strong> ${book.pages}</p>
      <p><strong>Okudum:</strong> ${book.read ? 'Evet' : 'Hayır'}</p>
      <button class="remove-book-btn" data-index="${index}">Sil</button>
      <button class="toggle-read-btn" data-index="${index}">Okundu İşaretle</button>
    `;

    library.appendChild(bookCard);
  });

  const removeButtons = document.querySelectorAll('.remove-book-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });

  const toggleReadButtons = document.querySelectorAll('.toggle-read-btn');
  toggleReadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      myLibrary[index].read = !myLibrary[index].read;
      displayBooks();
    });
  });
}

document.getElementById('new-book-btn').addEventListener('click', () => {
  document.getElementById('book-form-container').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('book-form-container').style.display = 'none';
});

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const imageUrl = document.getElementById('imageUrl').value;
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(imageUrl,title, author, pages, read);
  addBookToLibrary(newBook);

  document.getElementById('book-form-container').style.display = 'none';
  document.getElementById('book-form').reset();
});


addBookToLibrary(new Book("https://img.kitapyurdu.com/v1/getImage/fn:11819923/wh:true/wi:220",'The Hobbit', 'J.R.R. Tolkien', 310, true));
addBookToLibrary(new Book("https://img.kitapyurdu.com/v1/getImage/fn:11484453/wh:true/wi:220",'1984', 'George Orwell', 328, false));
