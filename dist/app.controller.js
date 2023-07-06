"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const quotes_service_1 = require("./quotes/quotes.service");
let AppController = class AppController {
    constructor(quotesService) {
        this.quotesService = quotesService;
    }
    async getRandomQuote() {
        const count = this.quotesService.count();
        const id = Math.floor(Math.random() * await count);
        let response = this.quotesService.getOne(id);
        return (await response).quote + " - " + (await response).character;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getRandomQuote", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [quotes_service_1.QuotesService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map