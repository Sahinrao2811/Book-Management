const bookForm = {
  getHtm: function () {
    const bookForm = document.createElement("div");
    bookForm.id = "book_form_style";

    const bookName_tag_and_inputContainer = document.createElement("div");
    bookName_tag_and_inputContainer.className = "bookNameInput";

    const bookName_tag = document.createElement("p");
    const bookName_tag_name = document.createTextNode("Book Name");
    bookName_tag.appendChild(bookName_tag_name);
    bookForm.appendChild(bookName_tag);
    bookName_tag_and_inputContainer.appendChild(bookName_tag);

    const bookName_input = document.createElement("input");
    bookName_input.className = "bookName_input";
    bookName_tag_and_inputContainer.appendChild(bookName_input);
    bookForm.appendChild(bookName_tag_and_inputContainer);

    const bookDetail_tag_and_inputContainer = document.createElement("div");
    bookForm.appendChild(bookDetail_tag_and_inputContainer);
    bookDetail_tag_and_inputContainer.className = "bookNameInput";

    const bookDetail_tag = document.createElement("p");
    const bookDetail_tag_Name = document.createTextNode("Book Detail");
    bookDetail_tag.appendChild(bookDetail_tag_Name);
    bookDetail_tag_and_inputContainer.appendChild(bookDetail_tag);

    const bookDetailInput = document.createElement("input");
    bookDetail_tag_and_inputContainer.appendChild(bookDetailInput);

    const authorNameAndInputContainer = document.createElement("div");
    authorNameAndInputContainer.className = "bookNameInput";

    const authorNameTag = document.createElement("p");
    const authorNameTagName = document.createTextNode("Author Name");
    authorNameTag.appendChild(authorNameTagName);
    authorNameAndInputContainer.appendChild(authorNameTag);
    bookForm.appendChild(authorNameAndInputContainer);

    const authorNameInput = document.createElement("input");
    authorNameAndInputContainer.appendChild(authorNameInput);

    const publishDateTagAndInputContainer = document.createElement("div");
    publishDateTagAndInputContainer.className = "bookNameInput";
    bookForm.appendChild(publishDateTagAndInputContainer);

    const publishDateTag = document.createElement("p");
    const publishDateTagName = document.createTextNode("Publish Date");
    publishDateTag.appendChild(publishDateTagName);
    publishDateTagAndInputContainer.appendChild(publishDateTag);

    const publishDateInput = document.createElement("input");
    publishDateTagAndInputContainer.appendChild(publishDateInput);

    const priceTagAndInputContainer = document.createElement("div");
    priceTagAndInputContainer.className = "bookNameInput";
    bookForm.appendChild(priceTagAndInputContainer);

    const priceTag = document.createElement("p");
    const priceTagName = document.createTextNode("Price");
    priceTag.appendChild(priceTagName);
    priceTagAndInputContainer.appendChild(priceTag);

    const priceInput = document.createElement("input");
    priceTagAndInputContainer.appendChild(priceInput);

    const create_btn = document.createElement("button");
    bookForm.appendChild(create_btn);
    create_btn.className = "btn";
    const create_btn_Text = document.createTextNode("Create");
    create_btn.appendChild(create_btn_Text);

    return bookForm;
  },
};

export default bookForm;
