const myLibrary = [
  {
    id: 1,
    title: "Harry Potter",
    author: "JK Rowling",
    num_of_pages: 346,
    read: "read",
  },
  {
    id: 2,
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    num_of_pages: 346,
    read: "unread",
  },
  {
    id: 3,
    title: "Pride and Prejuidice",
    author: "Jane Austen",
    num_of_pages: 346,
    read: "read",
  },
  {
    id: 4,
    title: "Love",
    author: "Anton Chekhov",
    num_of_pages: 346,
    read: "unread",
  },
];

const dialog = document.querySelector("dialog");
const booksList = document.querySelector(".booksList");

const booksCardWrapper = document.createElement("div");
booksCardWrapper.id = "booksWrapper";

const newBookForm = document.getElementById("addNewBookForm");
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const num_of_pages = document.getElementById("num_of_pages").value;

  if (title && author && num_of_pages) {
    const book = new Book(myLibrary.length, title, author, num_of_pages);
    addBookToLibrary(book);
    newBookForm.reset();
  } else {
    alert("Please fill in the fields");
  }
});

function Book(id, title, author, num_of_pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.num_of_pages = num_of_pages;
  this.read = read;
}

Book.prototype.changeReadStatus = function () {
  this.read = this.read === "read" ? "unread" : "read";
};

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const num_of_pages = document.getElementById("num_of_pages").value;
  const read = document.getElementById("read").value;

  if (title && author && num_of_pages) {
    const book = new Book(myLibrary.length, title, author, num_of_pages, read);
    myLibrary.push(book);
    displayBooks();
    newBookForm.reset();
  } else {
    alert("Please fill in the fields");
  }
}

function removeBookFromLibrary(deleteIndex) {
  myLibrary.splice(deleteIndex, 1);
  displayBooks();
}

function handleToggle(editBookIndex) {
  let selectedBook = myLibrary[editBookIndex];
  if (!selectedBook) return;

  console.log({ selectedBook });
  const book = new Book(
    selectedBook.id,
    selectedBook.title,
    selectedBook.author,
    selectedBook.num_of_pages,
    selectedBook.read
  );
  book.changeReadStatus();
  myLibrary[editBookIndex].read = book.read;
  displayBooks();
}

function displayBooks() {
  let allData = myLibrary.map((item, index) => {
    return `<div class="card">
    
    <button id="deleteBtn" onClick="removeBookFromLibrary(${index})">Delete</button>
    <div id="titleWrapper">
        <h3>
        ${item.title}
        </h3>
        <h5>${item.author}</h5>
    </div>
    <div>

    <div id="read-btn">
      <div>${item.num_of_pages} Pages</div>
      <div>
        <input type="checkbox" id="read${index}" name="read${index}"
        ${
          item.read === "read" ? "checked" : ""
        } onChange="handleToggle(${index})"
        />
 
        <label for="read">${
          item?.read === "read" ? "Mark as Unread" : "Mark as Read"
        } </label>
     
    
      </div>
    </div>
    
    
    </div>
    </div>`;
  });
  booksCardWrapper.innerHTML = allData;
}

function displayModal() {
  //   addBookToLibrary();
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

booksList.appendChild(booksCardWrapper);
displayBooks();
console.log({ myLibrary });
