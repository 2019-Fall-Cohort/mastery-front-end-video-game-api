const Deact = require("../libs/deact");
const Button = require("./Button");
// const Category = require("./components/Category");

async function GameForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector(".game-title").value;
    const releaseDate = document.querySelector(".game-release-date").value;
    const category = document.querySelector(".game-category").value;
    const publisher = document.querySelector(".game-publisher").value;

    fetch(`http://localhost:8080/api/game`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        releaseDate: releaseDate,
        category: category,
        publisher: publisher,
      })
    })
      .then(response => {
        return response.json();
      })
      .then(game => {
        console.log(game);
      });
  }
 
  return  Deact.create("form", { onsubmit: handleSubmit }, [
    Deact.create("h5", {}, "Add Game:"),
    Deact.create(
      "input",
      { class: "game-name", placeholder: "Title", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "game-image-url", placeholder: "Image Url", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "game-releaseDate", placeholder: "Release Date", type: "text" },
      ""
    ),
    Deact.create(
      "select",
      { class: "game-category", placeholder: "Category" },
     addDropDownValue().then()   ),      
    Deact.create(
      "input",
      { class: "game-publisher", placeholder: "Publisher", type: "text" },
      ""
    ),
    Button({ type: "submit" }, "Submit")
  ]);  
}

async function addDropDownValue(){
    fetch("http://localhost:8080/api/category/all")
    .then(response => response.json())
    .then(function (data) {
      let options=[];

        for (let index = 0; index < data.length; index++) {
            let option = document.createElement("option");
            option.classList.add("category-option");
            option.value = data[index].id;
            option.textContent = data[index].name;
            options.push(option);
        }
        console.log(options)
        return [...options];
    })
  }
module.exports = GameForm;