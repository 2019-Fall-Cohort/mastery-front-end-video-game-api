const Deact = require("../libs/deact");
const GameButton = require("./GameButton");

function GameCard(game) {
    return Deact.create("section", { class: `game-card` }, [
        Deact.create("h3", { class: `game-card__title` }, game.title),
        Deact.create("h5", { class: `game-card__release-date` }, game.releaseDate),
        // Deact.create("h5", { class: `game-card__category` }, game.category),
        Deact.create("img", { class: `game-card__imageUrl`, src: `${game.imageUrl}`, alt: `${game.title}` }, ""),
        // Deact.create("h5", { class: `game-card__publisher`}, game.publisher),
        // Deact.create("h5", { class:  `game-card__system` }, game.system)
    ]);
}

module.exports = GameCard;