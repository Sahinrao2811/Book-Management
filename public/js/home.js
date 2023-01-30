import bookForm from "./bookForm.js";
import bookList from "./bookList.js";

const bookContainer = document.getElementById("container");
const bookFormDiv = document.createElement("div");
bookContainer.appendChild(bookFormDiv);

const bookFormTagDiv = document.createElement("div");
bookFormTagDiv.id = "formTag";
const bookFormTag = document.createElement("p");
const bookFormTagName = document.createTextNode("Insert Book Detail");

bookFormTag.appendChild(bookFormTagName);
bookFormTagDiv.appendChild(bookFormTag);
bookFormDiv.appendChild(bookFormTagDiv);

const formData = () => {
  const btn = document.getElementById("book_form_style");
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

bookFormTagDiv.onclick = formData;

bookContainer.appendChild(bookForm.getHtml());
list();

function list () {
  if (bookContainer.lastChild.className === "booklist") {
    bookContainer.lastChild.innerHTML = "";
  }
  bookContainer.appendChild(bookList.getHtml());
}

export default list;
