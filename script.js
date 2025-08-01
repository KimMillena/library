const library = document.querySelector(".library");
const openFormBtn = document.querySelector(".header-btn");
const closeFormBtn = document.querySelector(".form-close-btn");
const addNewBook = document.querySelector(".form-add-book-btn");
const dialog = document.querySelector(".modal");

const myLibrary = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 213,
    isRead: "Already read",
  },
];

openFormBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeFormBtn.addEventListener("click", () => {
  dialog.close();
});

addNewBook.addEventListener("click", (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector(".book-title").value;
  const bookAuthor = document.querySelector(".book-author").value;
  const bookPages = document.querySelector(".book-pages").value;
  const bookRead = document.querySelector(".book-read").checked;

  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  displayBooks();
});

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead ? "Already read" : "Not yet read";
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function displayBooks() {
  library.innerHTML = "";

  for (const book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("h1");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    bookCard.appendChild(pages);

    const isRead = document.createElement("p");
    isRead.textContent = `Read: ${book.isRead}`;
    bookCard.appendChild(isRead);

    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "Read";
    bookCard.appendChild(readButton);

    const removeBookButton = document.createElement("button");
    readButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove";
    bookCard.appendChild(removeBookButton);

    library.appendChild(bookCard);
  }
}

displayBooks();
console.log(myLibrary);
