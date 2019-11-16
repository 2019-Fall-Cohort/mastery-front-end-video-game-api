const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const GameCard = require("./GameCard");
const GamePage = require("./GamePage");

function GamesButton() {
    function renderGames() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            GamePage(),
            document.querySelector(".content .container")
        );
        Http.getRequest("http://localhost:8080/api/game", function (games) {
            games.forEach(function (game) {
                Deact.render(
                    GameCard(game),
                    document.querySelector(".game-cards")
                );
            });
        });
    }

    return Button(
        {
            class: "games-button",
            onclick: renderGames
        },
        "Games"
    );
}
module.exports = GamesButton;