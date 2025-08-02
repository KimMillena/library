const library = document.querySelector(".library");
const openFormBtn = document.querySelector(".header-btn");
const closeFormBtn = document.querySelector(".form-close-btn");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookPages = document.querySelector(".book-pages");
const bookRead = document.querySelector(".book-read");
const addNewBook = document.querySelector(".form-add-book-btn");
const dialog = document.querySelector(".modal");

let myLibrary = [new Book("Atomic Habits", "James Clear", 320, true)];

openFormBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

addNewBook.addEventListener("click", (e) => {
  e.preventDefault();

  addBookToLibrary(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked
  );
  displayBooks();
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

Book.prototype.updateRead = function () {
  this.isRead = !this.isRead;
};

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("data-id", book.id);

  const bookContent = document.createElement("div");
  bookContent.classList.add("book-content");
  bookCard.appendChild(bookContent);

  const bookButtons = document.createElement("div");
  bookButtons.classList.add("book-buttons");
  bookCard.appendChild(bookButtons);

  const title = document.createElement("h1");
  title.textContent = book.title;
  bookContent.appendChild(title);

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;
  bookContent.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;
  bookContent.appendChild(pages);

  const isRead = document.createElement("p");
  isRead.textContent = `Status: ${
    book.isRead ? "Already read" : "Not yet read"
  }`;
  bookContent.appendChild(isRead);

  const readButton = document.createElement("button");
  readButton.classList.add("read-book-btn");
  readButton.textContent = `${book.isRead ? "Mark as Unread" : "Mark as Read"}`;

  readButton.addEventListener("click", () => {
    book.updateRead();
    displayBooks();
  });

  bookButtons.appendChild(readButton);

  const removeBookButton = document.createElement("button");
  removeBookButton.classList.add("remove-book-btn");
  removeBookButton.textContent = "Remove Book";

  removeBookButton.addEventListener("click", () => {
    const bookId = book.id;
    myLibrary = myLibrary.filter((book) => book.id !== bookId);
    displayBooks();
  });

  bookButtons.appendChild(removeBookButton);

  library.appendChild(bookCard);
}

function displayBooks() {
  library.innerHTML = "";

  for (const book of myLibrary) {
    createBookCard(book);
  }
}

displayBooks();
