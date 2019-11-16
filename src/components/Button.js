const Deact = require("../libs/deact");

function Button(attributes, content) {
    return Deact.create("button", attributes, content);
};

module.exports = Button;