const bookList = {
  getHtml: function () {
    const mainBookLIstContainer = document.createElement("div");
    mainBookLIstContainer.className = "booklist"
   
    const bookList = JSON.parse(localStorage.getItem("bookdata") || "[]");
  
    for (let i=0; i<bookList.length; i++){

       
    const bookListContainer = document.createElement("div");
    bookListContainer.id = "book";

    const bookListHeaderContainer = document.createElement("div");
    bookListHeaderContainer.id = "bookListHeader";

    const bookDes = document.createElement("div");
    bookDes.className= "description"

       const deleteBtnDiv = document.createElement("div");
       deleteBtnDiv.id = "dlt";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delet_btn")
    deleteBtn.innerText = "Delete";
    deleteBtnDiv.appendChild(deleteBtn);
    bookDes.appendChild(deleteBtnDiv);

    deleteBtn.addEventListener("click", ()=>{
      const newBookList = bookList.filter(item=>item.id!==bookList[i].id);
      console.log("new", newBookList);
      localStorage.setItem("bookdata", JSON.stringify(newBookList))
    })

  

    
    descriptionFun( bookDes , bookList[i]);

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
      console.log(btn);
      if (btn.style.display === "none") {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    bookListHeaderContainer.addEventListener("click", ()=> bookListFun(i))

    }
  
    function descriptionFun (desc, item) {

      const bookName_tag_and_inputContainer = document.createElement("div");
      bookName_tag_and_inputContainer.className = "bookNameInput";
  
      const bookName_tag = document.createElement("p");
      const bookName_tag_name = document.createTextNode("Book Name");
      bookName_tag.appendChild(bookName_tag_name);
      desc.appendChild(bookName_tag);
      bookName_tag_and_inputContainer.appendChild(bookName_tag);
  
      const bookName_input_Tag = document.createElement("input");
      bookName_input_Tag.value = `${item.bookName} `
      bookName_input_Tag.disabled = true

      bookName_tag_and_inputContainer.appendChild(bookName_input_Tag);
      desc.appendChild(bookName_tag_and_inputContainer);
  
      const bookDetail_tag_and_inputContainer = document.createElement("div");
      desc.appendChild(bookDetail_tag_and_inputContainer);
      bookDetail_tag_and_inputContainer.className = "bookNameInput";
  
      const bookDetail_tag = document.createElement("p");
      const bookDetail_tag_Name = document.createTextNode("Book Detail");
      bookDetail_tag.appendChild(bookDetail_tag_Name);
      bookDetail_tag_and_inputContainer.appendChild(bookDetail_tag);
  
      const bookDetailInput_Tag = document.createElement("input");
        bookDetailInput_Tag.disabled = true
      bookDetailInput_Tag.value = `${item?.bookDetail}`
      bookDetail_tag_and_inputContainer.appendChild(bookDetailInput_Tag);
  
      const authorNameAndInputContainer = document.createElement("div");
      authorNameAndInputContainer.className = "bookNameInput";
  
      const authorNameTag = document.createElement("p");
      const authorNameTagName = document.createTextNode("Author Name");
      authorNameTag.appendChild(authorNameTagName);
      authorNameAndInputContainer.appendChild(authorNameTag);
      desc.appendChild(authorNameAndInputContainer);
  
      let authorNameInput_tag = document.createElement("input");
      authorNameInput_tag.disabled = true
      authorNameInput_tag.value = `${item?.authorName}`
      authorNameAndInputContainer.appendChild(authorNameInput_tag);
  
      const publishDateTagAndInputContainer = document.createElement("div");
      publishDateTagAndInputContainer.className = "bookNameInput";
      desc.appendChild(publishDateTagAndInputContainer);
  
      const publishDateTag = document.createElement("p");
      const publishDateTagName = document.createTextNode("Publish Date");
      publishDateTag.appendChild(publishDateTagName);
      publishDateTagAndInputContainer.appendChild(publishDateTag);
  
      const publishDateInput_tag = document.createElement("input");
      publishDateInput_tag.disabled = true
      publishDateInput_tag.value =  `${item?.publishDate}`
       
      publishDateTagAndInputContainer.appendChild(publishDateInput_tag);
  
      const priceTagAndInputContainer = document.createElement("div");
      priceTagAndInputContainer.className = "bookNameInput";
      desc.appendChild(priceTagAndInputContainer);
  
      const priceTag = document.createElement("p");
      const priceTagName = document.createTextNode("Price");
      priceTag.appendChild(priceTagName);
      priceTagAndInputContainer.appendChild(priceTag);
  
      const priceInput_tag = document.createElement("input");
      priceInput_tag.disabled = true
      priceInput_tag.value = `${item?.price}`
      priceTagAndInputContainer.appendChild(priceInput_tag);
  
    }
    
    return mainBookLIstContainer;
  },
};
export default bookList;
