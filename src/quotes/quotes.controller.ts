import { Controller, Get, Post, Put, Delete, Query, Body, Param, DefaultValuePipe } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quotes } from './quote.entity';


@Controller('quotes/')
export class QuotesController {
    constructor(private quotesService: QuotesService) { }
    
  
    @Get() //@Query('limit', new DefaultValuePipe(5) )limit: number=1,
    async getQuotes():Promise<Quotes[]>{
        return this.quotesService.getAll();
    }


    @Get(':id') 
    async getQuoteById(@Param() id: string ):Promise<Quotes>{
        return this.quotesService.getOne(parseInt(id["id"]));
    }
  
    @Post()
    async createQuote(@Body() quote: Quotes): Promise<Quotes> {
        return this.quotesService.create(quote);
    }

    @Delete(":id") 
    async deleteQuote(@Param()id:number){
        return this.quotesService.delete(id);
    }
 

 
}


