import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Quotes } from './quote.entity'

@Injectable()
export class QuotesService {
    constructor(@InjectRepository(Quotes) private quoteRepository: Repository<Quotes>) { }
  
   async getAll(): Promise<Quotes[]> {
       return await this.quoteRepository.find()
   }

   async create(quote: Quotes): Promise<Quotes> {
        return await this.quoteRepository.save(quote);

   }

   async getOne(id: number): Promise<Quotes> {
        return await this.quoteRepository.findOne({where:{ quote_id: id}});
   }

   async update(id: number, product: Quotes): Promise<UpdateResult> {
        return await this.quoteRepository.update(id, product);
   }

   async delete(id: number): Promise<DeleteResult> {
        return await this.quoteRepository.delete(id);
   }
   
   async count(): Promise<number > {
    return await this.quoteRepository.count();
   }
}
