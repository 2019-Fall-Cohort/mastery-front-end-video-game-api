const Deact = require("../libs/deact");
const Container = require("./Container");
// const GameCards = require("./GameCards");


function Content() {
  return Deact.create("main", { class: `content` }, Container(""));
}

module.exports = Content;