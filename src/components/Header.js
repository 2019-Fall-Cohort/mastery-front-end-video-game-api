const Deact = require("../libs/deact");
const Nav = require("./Nav");
const Title = require("./Title");
const GameButton = require("./GameButton");

function Header() {
    return Deact.create(
        "header",
        {
            style: `background-color: #AED6F1; display: flex; justify-content: space-between; padding: 1rem;`
        },
        [
        Title("black-text-color", "Video Games"),
        
         Nav({}, [GameButton()])
        ]
    );
}

module.exports = Header;

