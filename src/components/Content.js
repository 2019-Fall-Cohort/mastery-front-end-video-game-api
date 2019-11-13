const Deact = require("../libs/deact");
const Container = require("./Container");


function Content() {
  return Deact.create("main", { class: `content` }, Container(""));
}

module.exports = Content;