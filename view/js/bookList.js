import list from "./home.js";

const bookLisT = {
  getHtml () {
    const mainBookLIstContainer = document.createElement("div");
    mainBookLIstContainer.className = "booklist";
    mainBookLIstContainer.innerHTML = "";

    const bookList = JSON.parse(localStorage.getItem("bookdata") || "[]");
    for (let i = 0; i < bookList.length; i++) {
      const bookListContainer = document.createElement("div");
      bookListContainer.id = "book";
      const bookListHeaderContainer = document.createElement("div");
      bookListHeaderContainer.id = "bookListHeader";

      const bookDes = document.createElement("div");
      bookDes.className = "description";
      bookDes.style.display = "none";
      const deleteBtnDiv = document.createElement("div");
      deleteBtnDiv.id = "dlt";

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete_btn");
      deleteBtn.innerText = "Delete";
      deleteBtnDiv.appendChild(deleteBtn);
      bookDes.appendChild(deleteBtnDiv);

      deleteBtn.addEventListener("click", () => {
        const newBookList = bookList.filter(
          (item) => item.id !== bookList[i].id
        );
        console.log("new", newBookList);
        localStorage.setItem("bookdata", JSON.stringify(newBookList));
        list();
      });

      descriptionFun(bookDes, bookList[i]);

      bookListContainer.appendChild(bookListHeaderContainer);
      bookListContainer.appendChild(bookDes);
      mainBookLIstContainer.appendChild(bookListContainer);

      const aboutBook = document.createElement("div");
      const aboutBookName = document.createTextNode(
        `${bookList[i].bookName} by ${bookList[i].authorName}`
      );
      aboutBook.appendChild(aboutBookName);
      bookListHeaderContainer.appendChild(aboutBook);

      const bookListFun = (i) => {
        const btn = document.getElementsByClassName("description")[i];
        console.log(btn.style.display);
        if (btn.style.display === "none") {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      };

      bookListHeaderContainer.addEventListener("click", () => bookListFun(i));
    }

    function descriptionFun (desc, item) {
      const bookNameInput = document.createElement("div");
      bookNameInput.className = "bookNameInput";

      const bookNameTag = document.createElement("p");
      bookNameTag.innerText = "Book Name";
      desc.appendChild(bookNameTag);
      bookNameInput.appendChild(bookNameTag);
      const bookNameInputTag = document.createElement("p");
      bookNameInputTag.innerText = `${item.bookName}`;
      bookNameInputTag.contentEditable = false;

      bookNameInputTag.addEventListener("dblclick", () => {
        bookNameInputTag.contentEditable = true;
        bookNameInputTag.focus();
      });

      bookNameInputTag.onblur = () => {
        console.log(bookNameInputTag.innerText);
        updateBook(item.id, "bookName", bookNameInputTag.innerText);
      };

      bookNameInput.appendChild(bookNameInputTag);
      desc.appendChild(bookNameInput);

      const bookDetailTagAndInputContainer = document.createElement("div");
      desc.appendChild(bookDetailTagAndInputContainer);
      bookDetailTagAndInputContainer.className = "bookNameInput";

      const bookDetailTag = document.createElement("p");
      bookDetailTag.innerText = "Book Detail";
      bookDetailTagAndInputContainer.appendChild(bookDetailTag);

      const bookDetailInputTag = document.createElement("p");
      const bookDetailInputTagValue = document.createTextNode(
        `${item.bookDetail}`
      );
      bookDetailInputTag.appendChild(bookDetailInputTagValue);
      bookDetailTagAndInputContainer.appendChild(bookDetailInputTag);

      bookDetailInputTag.addEventListener("dblclick", () => {
        bookDetailInputTag.contentEditable = true;
        bookDetailInputTag.focus();
      });

      bookDetailInputTag.onblur = () =>
        updateBook(item.id, "bookDetail", bookDetailInputTag.innerText);

      const authorNameAndInputContainer = document.createElement("div");
      authorNameAndInputContainer.className = "bookNameInput";

      const authorNameTag = document.createElement("p");
      const authorNameTagName = document.createTextNode("Author Name");
      authorNameTag.appendChild(authorNameTagName);
      authorNameAndInputContainer.appendChild(authorNameTag);
      desc.appendChild(authorNameAndInputContainer);

      const authorNameInputTag = document.createElement("p");
      const authorNameInputTagValue = document.createTextNode(
        `${item.authorName}`
      );
      authorNameInputTag.appendChild(authorNameInputTagValue);
      authorNameAndInputContainer.appendChild(authorNameInputTag);

      authorNameInputTag.addEventListener("dblclick", () => {
        authorNameInputTag.contentEditable = true;
        authorNameInputTag.focus();
      });

      authorNameInputTag.onblur = () =>
        updateBook(item.id, "authorName", authorNameInputTag.innerText);

      const publishDateTagAndInputContainer = document.createElement("div");
      publishDateTagAndInputContainer.className = "bookNameInput";
      desc.appendChild(publishDateTagAndInputContainer);

      const publishDateTag = document.createElement("p");
      const publishDateTagName = document.createTextNode("Publish Date");
      publishDateTag.appendChild(publishDateTagName);
      publishDateTagAndInputContainer.appendChild(publishDateTag);

      const publishDateInputTag = document.createElement("p");
      const publishDateInputTagValue = document.createTextNode(
        `${item.publishDate}`
      );
      publishDateInputTag.appendChild(publishDateInputTagValue);
      publishDateTagAndInputContainer.appendChild(publishDateInputTag);
      publishDateInputTag.addEventListener("dblclick", () => {
        publishDateInputTag.contentEditable = true;
        publishDateInputTag.focus();
      });

      publishDateInputTag.onblur = () =>
        updateBook(item.id, "publishDate", authorNameInputTag.innerText);

      const priceTagAndInputContainer = document.createElement("div");
      priceTagAndInputContainer.className = "bookNameInput";
      desc.appendChild(priceTagAndInputContainer);

      const priceTag = document.createElement("p");
      const priceTagName = document.createTextNode("Price");
      priceTag.appendChild(priceTagName);
      priceTagAndInputContainer.appendChild(priceTag);

      const priceInputTag = document.createElement("p");
      const priceInputTagValue = document.createTextNode(`${item.price}`);
      priceInputTag.appendChild(priceInputTagValue);
      priceTagAndInputContainer.appendChild(priceInputTag);
      priceInputTag.addEventListener("dblclick", () => {
        priceInputTag.contentEditable = true;
        priceInputTag.focus();
      });

      priceInputTag.onblur = () =>
        updateBook(item.id, "price", priceInputTag.innerText);

      function updateBook (id, key, value) {
        const items = JSON.parse(localStorage.getItem("bookdata"));
        const updateItem = items.find((item) => item.id === id);
        updateItem[key] = value;
        localStorage.setItem("bookdata", JSON.stringify(items));
      }
    }

    return mainBookLIstContainer;
  }
};
export default bookLisT;
