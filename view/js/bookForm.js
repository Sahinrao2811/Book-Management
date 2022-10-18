import list from "./home.js";
const bookForm = {
  getHtml: function () {
    const bookFormContainer = document.createElement("div");
    bookFormContainer.id = "book_form_style";
    bookFormContainer.style.display = "none";

    const mainBookNameTagAndInputContainer = document.createElement("div");

    const bookNameTagAndInputContainer = document.createElement("div");
    bookNameTagAndInputContainer.className = "bookNameInput";

    const bookNameTag = document.createElement("p");
    bookNameTag.innerText = "Book Name *";
    bookFormContainer.appendChild(bookNameTag);
    bookNameTagAndInputContainer.appendChild(bookNameTag);

    const bookNameInput = document.createElement("input");
    bookNameInput.id = "bookName";
    bookNameTagAndInputContainer.appendChild(bookNameInput);
    mainBookNameTagAndInputContainer.appendChild(bookNameTagAndInputContainer);
    const bookNameErrorContainer = document.createElement("div");
    bookNameErrorContainer.className = "error";
    const bookNameErrorTag = document.createElement("p");
    bookNameErrorTag.className = "errorInfo";
    bookNameErrorTag.innerText = " Please enter Book Name";

    bookNameErrorContainer.appendChild(bookNameErrorTag);
    mainBookNameTagAndInputContainer.appendChild(bookNameErrorContainer);
    bookFormContainer.appendChild(mainBookNameTagAndInputContainer);

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

    const mainAuthorNameAndInputContainer = document.createElement("div");
    const authorNameAndInputContainer = document.createElement("div");
    authorNameAndInputContainer.className = "bookNameInput";

    const authorNameTag = document.createElement("p");
    const authorNameTagName = document.createTextNode("Author Name *");
    authorNameTag.appendChild(authorNameTagName);
    authorNameAndInputContainer.appendChild(authorNameTag);
    mainAuthorNameAndInputContainer.appendChild(authorNameAndInputContainer);
    bookFormContainer.appendChild(mainAuthorNameAndInputContainer);

    const authorNameErrorContainer = document.createElement("div");
    authorNameErrorContainer.className = "error";
    const authorNameErrorTag = document.createElement("p");
    authorNameErrorTag.innerText = "Please enter author name";
    authorNameErrorContainer.appendChild(authorNameErrorTag);
    mainAuthorNameAndInputContainer.appendChild(authorNameErrorContainer);
    authorNameErrorTag.className = "errorInfo";
    const authorNameInput = document.createElement("input");
    authorNameInput.id = "authorName";
    authorNameAndInputContainer.appendChild(authorNameInput);

    const mainPublishDateTagAndInputContainer = document.createElement("div");
    const publishDateTagAndInputContainer = document.createElement("div");
    publishDateTagAndInputContainer.className = "bookNameInput";
    mainPublishDateTagAndInputContainer.appendChild(publishDateTagAndInputContainer);
    bookFormContainer.appendChild(mainPublishDateTagAndInputContainer);

    const publishDateTag = document.createElement("p");
    const publishDateTagName = document.createTextNode("Publish Date");
    publishDateTag.appendChild(publishDateTagName);
    publishDateTagAndInputContainer.appendChild(publishDateTag);
    const publishDateErrorContainer = document.createElement("div");
    publishDateErrorContainer.className = "error";
    const publishDateErrorTag = document.createElement("p");
    publishDateErrorTag.className = "errorInfo";
    publishDateErrorTag.innerText = "Please enter the publish date";
    publishDateErrorContainer.appendChild(publishDateErrorTag);
    mainPublishDateTagAndInputContainer.appendChild(publishDateErrorContainer);
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
      if (bookNameInput.value === "") {
        bookNameErrorContainer.style.display = "block";
        return true;
      };
      if (authorNameInput.value === "") {
        authorNameErrorContainer.style.display = "block";
        return true;
      }
      if (publishDateInput.value === "") {
        publishDateErrorContainer.style.display = "block";
        return true;
      }
    };

    const saveToLocalStorage = () => {
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
