const myLibrary = [
  {
    id: 1,
    title: "Harry Potter",
    author: "JK Rowling",
    num_of_pages: 346,
    read: true,
  },
  {
    id: 2,
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    num_of_pages: 346,
    read: false,
  },
  {
    id: 3,
    title: "Pride and Prejuidice",
    author: "Jane Austen",
    num_of_pages: 346,
    read: false,
  },
  {
    id: 4,
    title: "Love",
    author: "Anton Chekhov",
    num_of_pages: 346,
    read: false,
  },
];

const dialog = document.querySelector("dialog");
const booksList = document.querySelector(".booksList");

const booksCardWrapper = document.createElement("div");
booksCardWrapper.id = "booksWrapper";

function Book() {}

function addBookToLibrary() {
  let bookName = prompt("Please enter the name of the book:", "Harry Potter");
  if (!bookName.length) return;
  myLibrary.push(bookName);
}

function removeBookFromLibrary(deleteIndex) {
  myLibrary.splice(deleteIndex, 1);
  displayBooks();
}

function displayBooks() {
  let allData = myLibrary.map((item, index) => {
    return `<div class="card">
    
    <button id="delete" onClick="removeBookFromLibrary(${index})">Delete</button>
    <div id="titleWrapper">
        <h3>
        ${item.title}
        </h3>
        <h5>${item.author}</h5>
    </div>
    <div>
        <div>
        
        ${item.num_of_pages} Pages</div>
        <div id="read-btn">
            <input type="checkbox" id="read" name="read" value={${item.read}} />
            <label for="read">Read</label>
        </div>
    </div>
    </div>`;
  });
  booksCardWrapper.innerHTML = allData;
}

function displayModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

displayBooks();

booksList.appendChild(booksCardWrapper);
// console.log(booksText);
console.log(myLibrary);

// addBookToLibrary();
