import list from "./home.js";
const bookForm = {
  getHtml: function () {
    const bookFormContainer = document.createElement("div");
    bookFormContainer.id = "book_form_style";
    bookFormContainer.style.display = "none";

    const bookNameTagAndInputContainer = document.createElement("div");
    bookNameTagAndInputContainer.className = "bookNameInput";

    const bookNameTag = document.createElement("p");
    bookNameTag.innerText = "Book Name";
    bookFormContainer.appendChild(bookNameTag);
    bookNameTagAndInputContainer.appendChild(bookNameTag);

    const bookNameInput = document.createElement("input");
    bookNameInput.id = "bookName";
    bookNameInput.required = true;
    bookNameTagAndInputContainer.appendChild(bookNameInput);
    bookFormContainer.appendChild(bookNameTagAndInputContainer);

    const bookDetailTagAndInputContainer = document.createElement("div");
    bookFormContainer.appendChild(bookDetailTagAndInputContainer);
    bookDetailTagAndInputContainer.className = "bookNameInput";

    const bookDetailTag = document.createElement("p");
    const bookDetailTagName = document.createTextNode("Book Detail");
    bookDetailTag.appendChild(bookDetailTagName);
    bookDetailTagAndInputContainer.appendChild(bookDetailTag);

    const bookDetailInput = document.createElement("input");
    bookDetailInput.id = "bookDetail";
    bookDetailTagAndInputContainer.appendChild(bookDetailInput);

    const authorNameAndInputContainer = document.createElement("div");
    authorNameAndInputContainer.className = "bookNameInput";

    const authorNameTag = document.createElement("p");
    const authorNameTagName = document.createTextNode("Author Name");
    authorNameTag.appendChild(authorNameTagName);
    authorNameAndInputContainer.appendChild(authorNameTag);
    bookFormContainer.appendChild(authorNameAndInputContainer);

    const authorNameInput = document.createElement("input");
    authorNameInput.id = "authorName";
    authorNameAndInputContainer.appendChild(authorNameInput);

    const publishDateTagAndInputContainer = document.createElement("div");
    publishDateTagAndInputContainer.className = "bookNameInput";
    bookFormContainer.appendChild(publishDateTagAndInputContainer);

    const publishDateTag = document.createElement("p");
    const publishDateTagName = document.createTextNode("Publish Date");
    publishDateTag.appendChild(publishDateTagName);
    publishDateTagAndInputContainer.appendChild(publishDateTag);

    const publishDateInput = document.createElement("input");
    publishDateInput.id = "publishDate";
    publishDateInput.type = "date";
    publishDateTagAndInputContainer.appendChild(publishDateInput);

    const priceTagAndInputContainer = document.createElement("div");
    priceTagAndInputContainer.className = "bookNameInput";
    bookFormContainer.appendChild(priceTagAndInputContainer);

    const priceTag = document.createElement("p");
    const priceTagName = document.createTextNode("Price");
    priceTag.appendChild(priceTagName);
    priceTagAndInputContainer.appendChild(priceTag);

    const priceInput = document.createElement("input");
    priceInput.id = "price";
    priceInput.type = "number";
    priceTagAndInputContainer.appendChild(priceInput);

    const createBtn = document.createElement("button");
    bookFormContainer.appendChild(createBtn);
    createBtn.className = "btn";
    const createBtnText = document.createTextNode("Create");
    createBtn.appendChild(createBtnText);

    const isValid = () => {
      if (
        bookNameInput.value === "" ||
        bookDetailInput.value === "" ||
        authorNameInput.value === ""
      ) {
        alert(" Please enter the required field");
        return true;
      }
    };

    const saveToLocalStorage = () => {
      // isValid();
      if (isValid()) {
        return;
      }
      const inputBook = {
        id: Math.floor(Math.random() * 100),
        bookName: bookNameInput.value,
        bookDetail: bookDetailInput.value,
        authorName: authorNameInput.value,
        publishDate: publishDateInput.value,
        price: priceInput.value
      };
      let bookData;
      if (localStorage.getItem("bookdata")) {
        bookData = JSON.parse(localStorage.getItem("bookdata") || "[]");
      } else {
        bookData = [];
      }
      bookData.push(inputBook);
      localStorage.setItem("bookdata", JSON.stringify(bookData));
      list();
    };
    createBtn.onclick = saveToLocalStorage;

    return bookFormContainer;
  }
};

export default bookForm;
