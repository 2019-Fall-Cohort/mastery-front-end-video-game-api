const Deact = require("../libs/deact");
const GameCards = require("./GameCards");
const GameForm = require("./GameForm");
// const Category = require("./Category");

function GamePage() {
  return Deact.create("article", { class: "games-page" }, [
    GameForm(),   
    // Category(),
    GameCards()
  ]);
}

module.exports = GamePage;