import { QuotesService } from './quotes/quotes.service';
export declare class AppController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    getRandomQuote(): Promise<String>;
}
