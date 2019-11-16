const Deact = require("../libs/deact");
const GameCards = require("./GameCards");
const GameForm = require("./GameForm");

function GamePage() {
  return Deact.create("article", { class: "games-page" }, [
    GameForm(),
    GameCards()
  ]);
}

module.exports = GamePage;