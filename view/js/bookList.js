const bookList = {
  getHtml: function () {
    const mainBookLIstContainer = document.createElement("div");
    const bookListContainer = document.createElement("div");
    bookListContainer.id = "bookList";
    const bookList = JSON.parse(localStorage.getItem("bookdata"));

    const bookListHeaderContainer = document.createElement("div");
    bookListHeaderContainer.id = "bookListHeader";

    for (let i = 0; i <= bookList.length; i++) {
      // const mainBookLIstContainer = document.createElement("div");
      const bookListHeaderContainer = document.createElement("div");
    const bookListContainer = document.createElement("div");
    bookListContainer.id = "bookList";


      bookListHeaderContainer.id = "bookListHeader";

      // mainBookLIstContainer.appendChild(bookListHeaderContainer);
      // mainBookLIstContainer.appendChild(bookListContainer);


      const aboutBook = document.createElement("div");
      const aboutBookName = document.createTextNode(
        `${bookList[i]?.bookName} by ${bookList[i]?.authorName}`
      );
      aboutBook.appendChild(aboutBookName);
      bookListHeaderContainer.appendChild(aboutBook);

      const bookListFun = () => {
        const btn = document.getElementById("bookList");
        if (btn.style.display === "none") {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      };
      mainBookLIstContainer.appendChild(bookListHeaderContainer);


      bookListHeaderContainer.onclick = bookListFun;

      mainBookLIstContainer.appendChild(bookListContainer);

      
    const bookName_tag_and_inputContainer = document.createElement("div");
    bookName_tag_and_inputContainer.className = "bookNameInput";

    const bookName_tag = document.createElement("p");
    const bookName_tag_name = document.createTextNode("Book Name");
    bookName_tag.appendChild(bookName_tag_name);
    bookListContainer.appendChild(bookName_tag);
    bookName_tag_and_inputContainer.appendChild(bookName_tag);

    const bookName_input_Tag = document.createElement("p");
    const bookName_input_Tag_Name = document.createTextNode(
      `${bookList[i]?.bookName} `
    );
    bookName_input_Tag.appendChild(bookName_input_Tag_Name);
    bookName_tag_and_inputContainer.appendChild(bookName_input_Tag);
    bookListContainer.appendChild(bookName_tag_and_inputContainer)

    const bookDetail_tag_and_inputContainer = document.createElement("div");
    bookListContainer.appendChild(bookDetail_tag_and_inputContainer);
    bookDetail_tag_and_inputContainer.className = "bookNameInput";

    const bookDetail_tag = document.createElement("p");
    const bookDetail_tag_Name = document.createTextNode("Book Detail");
    bookDetail_tag.appendChild(bookDetail_tag_Name);
    bookDetail_tag_and_inputContainer.appendChild(bookDetail_tag);

    const bookDetailInput_Tag = document.createElement("p");
    const bookDetailInput_Tag_Name = document.createTextNode(
      `${bookList[i]?.bookDetail}`
    );
    bookDetailInput_Tag.appendChild(bookDetailInput_Tag_Name);
    bookDetail_tag_and_inputContainer.appendChild(bookDetailInput_Tag);

    const authorNameAndInputContainer = document.createElement("div");
    authorNameAndInputContainer.className = "bookNameInput";

    const authorNameTag = document.createElement("p");
    const authorNameTagName = document.createTextNode("Author Name");
    authorNameTag.appendChild(authorNameTagName);
    authorNameAndInputContainer.appendChild(authorNameTag);
    bookListContainer.appendChild(authorNameAndInputContainer);

    const authorNameInput_tag = document.createElement("p");
    const authorNameInput_tag_Name = document.createTextNode(
      `${bookList[i]?.authorName}`
    );
    authorNameInput_tag.appendChild(authorNameInput_tag_Name);
    authorNameAndInputContainer.appendChild(authorNameInput_tag);

    const publishDateTagAndInputContainer = document.createElement("div");
    publishDateTagAndInputContainer.className = "bookNameInput";
    bookListContainer.appendChild(publishDateTagAndInputContainer);

    const publishDateTag = document.createElement("p");
    const publishDateTagName = document.createTextNode("Publish Date");
    publishDateTag.appendChild(publishDateTagName);
    publishDateTagAndInputContainer.appendChild(publishDateTag);

    const publishDateInput_tag = document.createElement("p");
    const publishDateInput_tag_Name = document.createTextNode(
      `${bookList[i]?.publishDate}`
    );
    publishDateInput_tag.appendChild(publishDateInput_tag_Name);
    publishDateTagAndInputContainer.appendChild(publishDateInput_tag);

    const priceTagAndInputContainer = document.createElement("div");
    priceTagAndInputContainer.className = "bookNameInput";
    bookListContainer.appendChild(priceTagAndInputContainer);

    const priceTag = document.createElement("p");
    const priceTagName = document.createTextNode("Price");
    priceTag.appendChild(priceTagName);
    priceTagAndInputContainer.appendChild(priceTag);

    const priceInput_tag = document.createElement("p");
    const priceInput_tag_Name = document.createTextNode(`${bookList[i]?.price}`);
    priceInput_tag.appendChild(priceInput_tag_Name);
    priceTagAndInputContainer.appendChild(priceInput_tag);

    // return mainBookLIstContainer;

    }
    return mainBookLIstContainer;


    // mainBookLIstContainer.appendChild(bookListHeaderContainer);
    // mainBookLIstContainer.appendChild(bookListContainer);

    // const listBookIconContainer = document.createElement("div");
    // listBookIconContainer.id = "listIcon";
    // bookListHeaderContainer.appendChild(listBookIconContainer);
    // const listIcon = document.createElement("img");
    // listIcon.src = "./js/assets/icon.png";
    // listBookIconContainer.appendChild(listIcon);

    // const aboutBook = document.createElement("div");
    // const aboutBookName = document.createTextNode(
    //   `${bookList[0].bookName} by ${bookList[0].authorName}`
    // );
    // aboutBook.appendChild(aboutBookName);
    // bookListHeaderContainer.appendChild(aboutBook);

    // const bookName_tag_and_inputContainer = document.createElement("div");
    // bookName_tag_and_inputContainer.className = "bookNameInput";

    // const bookName_tag = document.createElement("p");
    // const bookName_tag_name = document.createTextNode("Book Name");
    // bookName_tag.appendChild(bookName_tag_name);
    // bookListContainer.appendChild(bookName_tag);
    // bookName_tag_and_inputContainer.appendChild(bookName_tag);

    // const bookName_input_Tag = document.createElement("p");
    // const bookName_input_Tag_Name = document.createTextNode(
    //   `${bookList[0].bookName} `
    // );
    // bookName_input_Tag.appendChild(bookName_input_Tag_Name);
    // bookName_tag_and_inputContainer.appendChild(bookName_input_Tag);
    // bookListContainer.appendChild(bookName_tag_and_inputContainer);

    // const bookDetail_tag_and_inputContainer = document.createElement("div");
    // bookListContainer.appendChild(bookDetail_tag_and_inputContainer);
    // bookDetail_tag_and_inputContainer.className = "bookNameInput";

    // const bookDetail_tag = document.createElement("p");
    // const bookDetail_tag_Name = document.createTextNode("Book Detail");
    // bookDetail_tag.appendChild(bookDetail_tag_Name);
    // bookDetail_tag_and_inputContainer.appendChild(bookDetail_tag);

    // const bookDetailInput_Tag = document.createElement("p");
    // const bookDetailInput_Tag_Name = document.createTextNode(
    //   `${bookList[0]?.bookDetail}`
    // );
    // bookDetailInput_Tag.appendChild(bookDetailInput_Tag_Name);
    // bookDetail_tag_and_inputContainer.appendChild(bookDetailInput_Tag);

    // const authorNameAndInputContainer = document.createElement("div");
    // authorNameAndInputContainer.className = "bookNameInput";

    // const authorNameTag = document.createElement("p");
    // const authorNameTagName = document.createTextNode("Author Name");
    // authorNameTag.appendChild(authorNameTagName);
    // authorNameAndInputContainer.appendChild(authorNameTag);
    // bookListContainer.appendChild(authorNameAndInputContainer);

    // const authorNameInput_tag = document.createElement("p");
    // const authorNameInput_tag_Name = document.createTextNode(
    //   `${bookList[0]?.authorName}`
    // );
    // authorNameInput_tag.appendChild(authorNameInput_tag_Name);
    // authorNameAndInputContainer.appendChild(authorNameInput_tag);

    // const publishDateTagAndInputContainer = document.createElement("div");
    // publishDateTagAndInputContainer.className = "bookNameInput";
    // bookListContainer.appendChild(publishDateTagAndInputContainer);

    // const publishDateTag = document.createElement("p");
    // const publishDateTagName = document.createTextNode("Publish Date");
    // publishDateTag.appendChild(publishDateTagName);
    // publishDateTagAndInputContainer.appendChild(publishDateTag);

    // const publishDateInput_tag = document.createElement("p");
    // const publishDateInput_tag_Name = document.createTextNode(
    //   `${bookList[0]?.publishDate}`
    // );
    // publishDateInput_tag.appendChild(publishDateInput_tag_Name);
    // publishDateTagAndInputContainer.appendChild(publishDateInput_tag);

    // const priceTagAndInputContainer = document.createElement("div");
    // priceTagAndInputContainer.className = "bookNameInput";
    // bookListContainer.appendChild(priceTagAndInputContainer);

    // const priceTag = document.createElement("p");
    // const priceTagName = document.createTextNode("Price");
    // priceTag.appendChild(priceTagName);
    // priceTagAndInputContainer.appendChild(priceTag);

    // const priceInput_tag = document.createElement("p");
    // const priceInput_tag_Name = document.createTextNode(`${bookList[0]?.price}`);
    // priceInput_tag.appendChild(priceInput_tag_Name);
    // priceTagAndInputContainer.appendChild(priceInput_tag);

    // const bookListFun = () => {
    //   const btn = document.getElementById("bookList");
    //   if (btn.style.display === "none") {
    //     btn.style.display = "block";
    //   } else {
    //     btn.style.display = "none";
    //   }
    // };

    // bookListHeaderContainer.onclick = bookListFun;
    // return mainBookLIstContainer;
  },
};
export default bookList;
