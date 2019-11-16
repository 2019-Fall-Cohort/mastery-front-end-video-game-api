const Deact = require("../libs/deact");
const Button = require("./Button");

function GameForm() {
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

  return Deact.create("form", { onsubmit: handleSubmit }, [
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
      "input",
      { class: "game-category", placeholder: "Category", type: "text" },
      ""
    ),
    Deact.create(
        "input",
        { class: "game-publisher", placeholder: "Publisher", type: "text" },
        ""
      ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = GameForm;