const Deact = require("../libs/deact");
const Header = require("./Header");
const Content = require("./Content");

function App() {
  return Deact.create("section", { class: `app-container` }, [
    Header(),
    Content()
  ]);
}

module.exports = App;