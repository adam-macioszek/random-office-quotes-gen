import { QuotesService } from './quotes.service';
import { Quotes } from './quote.entity';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getQuotes(): Promise<Quotes[]>;
    getQuoteById(id: string): Promise<Quotes>;
    createQuote(quote: Quotes): Promise<Quotes>;
    deleteQuote(id: number): Promise<import("typeorm").DeleteResult>;
}
