import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes/quotes.service';
import { Quotes } from './quotes/quote.entity';

@Controller()
export class AppController {
  constructor(private readonly quotesService: QuotesService) {}

  
  @Get()
  async getRandomQuote(): Promise<String> {
    const count = this.quotesService.count();
    const id = Math.floor(Math.random() * await count)
    let response = this.quotesService.getOne(id);
    return (await response).quote + " - "+(await response).character
  }
}
