import bookForm from "./bookForm.js";

const bookContainer = document.getElementById("container");
const bookFormDiv = document.createElement("div");
bookContainer.appendChild(bookFormDiv);

const bookFormTag_Div = document.createElement("div");
bookFormTag_Div.id = "formTag";
const bookForm_tag = document.createElement("p");
const bookFormTag_Name = document.createTextNode("Insert Book Detail");
bookForm_tag.appendChild(bookFormTag_Name);
bookFormTag_Div.appendChild(bookForm_tag);
bookFormDiv.appendChild(bookFormTag_Div);

const formData = () => {
  const btn = document.getElementById("book_form_style");
  if (btn.style.display === "none") {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

bookFormTag_Div.onclick = formData;

bookContainer.appendChild(bookForm.getHtm());
