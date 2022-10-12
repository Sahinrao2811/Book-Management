const bookForm = {
  getHtml: function () {
    const bookFormContainer = document.createElement("div");
    bookFormContainer.id = "book_form_style";

    const bookName_tag_and_inputContainer = document.createElement("div");
    bookName_tag_and_inputContainer.className = "bookNameInput";

    const bookName_tag = document.createElement("p");
    const bookName_tag_name = document.createTextNode("Book Name");
    bookName_tag.appendChild(bookName_tag_name);
    bookFormContainer.appendChild(bookName_tag);
    bookName_tag_and_inputContainer.appendChild(bookName_tag);

    const bookName_input = document.createElement("input");
    bookName_input.id = "bookName";
    bookName_tag_and_inputContainer.appendChild(bookName_input);
    bookFormContainer.appendChild(bookName_tag_and_inputContainer);

    const bookDetail_tag_and_inputContainer = document.createElement("div");
    bookFormContainer.appendChild(bookDetail_tag_and_inputContainer);
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
    (priceInput.type = "number"),
      priceTagAndInputContainer.appendChild(priceInput);

    const create_btn = document.createElement("button");
    bookFormContainer.appendChild(create_btn);
    create_btn.className = "btn";
    const create_btn_Text = document.createTextNode("Create");
    create_btn.appendChild(create_btn_Text);

    const saveToLocalStorage = () => {
      let inputBook = {
        bookName: bookName_input.value,
        bookDetail: bookDetailInput.value,
        authorName: authorNameInput.value,
        publishDate: publishDateInput.value,
        price: priceInput.value,
      };

      let bookData = [];
      bookData.push(inputBook);
      localStorage.setItem("bookData", JSON.stringify(bookData));
    };
    create_btn.onclick = saveToLocalStorage;

    return bookFormContainer;
  },
};

export default bookForm;
