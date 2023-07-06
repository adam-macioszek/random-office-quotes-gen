"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quotesJson = require("./office_quotes.json");
const quotes_service_1 = require("./../quotes/quotes.service");
quotesJson.forEach(element => {
    console.log(element.quote_id);
    let obj = { "id": element.quote_id, "dialog": element.quote, "character": element.character };
});
function load_quotes() {
    constructor(private, quotesService, quotes_service_1.QuotesService);
    { }
    quotesJson.forEach(element => {
        console.log(element.quote_id);
        let obj = { "id": element.quote_id, "dialog": element.quote, "character": element.character };
    });
}
//# sourceMappingURL=load_data.js.map