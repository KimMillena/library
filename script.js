const library = document.querySelector(".library");
const openFormBtn = document.querySelector(".header-btn");
const closeFormBtn = document.querySelector(".form-close-btn");
const dialog = document.querySelector(".modal");

const myLibrary = [];

openFormBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeFormBtn.addEventListener("click", () => {
  dialog.close();
});

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function displayBooks() {
  for (const book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const title = document.createElement("h1");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    isRead.textContent = book.isRead;
    library.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(isRead);
  }
}

displayBooks();
