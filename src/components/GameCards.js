const Deact = require("../libs/deact");

function GameCards() {
  return Deact.create("section", { class: `game-cards` }, "");
}

module.exports = GameCards;