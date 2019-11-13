const Deact = require("../libs/deact");

const Title = function(className, text) {
    return Deact.create(
        "h1",
         { 
        class: `${className}`
         },
        text
        );
    };

module.exports = Title;