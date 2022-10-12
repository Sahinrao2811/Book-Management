const bookList = {
  getHtml: function () {
    const bookListContainer = document.createElement("div");
    bookListContainer.id = "bookList";

    // const bookList = localStorage.getItem("bookData");
    const bookList = JSON.parse(localStorage.getItem("bookData"));
    console.log(bookList);

    const bookListHeaderContainer = document.createElement("div");
    bookListHeaderContainer.id = "bookListHeader";
    bookListContainer.appendChild(bookListHeaderContainer);

    const listBookIconContainer = document.createElement("div");
    listBookIconContainer.id = "listIcon";
    bookListHeaderContainer.appendChild(listBookIconContainer);
    const listIcon = document.createElement("img");
    listIcon.src = "./js/assets/icon.png";
    listBookIconContainer.appendChild(listIcon);

    const aboutBook = document.createElement("div");
    const aboutBookName = document.createTextNode(` ${bookList[0].bookName} by ${bookList[0].authorName}`);
    aboutBook.appendChild(aboutBookName);
    bookListHeaderContainer.appendChild(aboutBook);

    const bookName_tag_and_inputContainer = document.createElement("div");
    bookName_tag_and_inputContainer.className = "bookNameInput";

    const bookName_tag = document.createElement("p");
    const bookName_tag_name = document.createTextNode("Book Name");
    bookName_tag.appendChild(bookName_tag_name);
    bookListContainer.appendChild(bookName_tag);
    bookName_tag_and_inputContainer.appendChild(bookName_tag);

    const bookName_input = document.createElement("input");
    bookName_input.id = "bookName";
    bookName_tag_and_inputContainer.appendChild(bookName_input);
    bookListContainer.appendChild(bookName_tag_and_inputContainer);

    const bookDetail_tag_and_inputContainer = document.createElement("div");
    bookListContainer.appendChild(bookDetail_tag_and_inputContainer);
    bookDetail_tag_and_inputContainer.className = "bookNameInput";

    const bookDetail_tag = document.createElement("p");
    const bookDetail_tag_Name = document.createTextNode("Book Detail");
    bookDetail_tag.appendChild(bookDetail_tag_Name);
    bookDetail_tag_and_inputContainer.appendChild(bookDetail_tag);

    const bookDetailInput = document.createElement("input");
    bookDetailInput.id = "bookDetail";
    bookDetail_tag_and_inputContainer.appendChild(bookDetailInput);

    const authorNameAndInputContainer = document.createElement("div");
    authorNameAndInputContainer.className = "bookNameInput";

    const authorNameTag = document.createElement("p");
    const authorNameTagName = document.createTextNode("Author Name");
    authorNameTag.appendChild(authorNameTagName);
    authorNameAndInputContainer.appendChild(authorNameTag);
    bookListContainer.appendChild(authorNameAndInputContainer);

    const authorNameInput = document.createElement("input");
    authorNameInput.id = "authorName";
    authorNameAndInputContainer.appendChild(authorNameInput);

    const publishDateTagAndInputContainer = document.createElement("div");
    publishDateTagAndInputContainer.className = "bookNameInput";
    bookListContainer.appendChild(publishDateTagAndInputContainer);

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
    bookListContainer.appendChild(priceTagAndInputContainer);

    const priceTag = document.createElement("p");
    const priceTagName = document.createTextNode("Price");
    priceTag.appendChild(priceTagName);
    priceTagAndInputContainer.appendChild(priceTag);

    const priceInput = document.createElement("input");
    priceInput.id = "price";
    (priceInput.type = "number"),
      priceTagAndInputContainer.appendChild(priceInput);

    return bookListContainer;
  },
};
export default bookList;
