const Deact = require("./libs/deact");
const App = require("./components/App");
// const Category = require("./components/Category");

Deact.render(App(), document.querySelector(".app"));
