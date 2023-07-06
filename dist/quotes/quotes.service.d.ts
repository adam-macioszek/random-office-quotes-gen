import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Quotes } from './quote.entity';
export declare class QuotesService {
    private quoteRepository;
    constructor(quoteRepository: Repository<Quotes>);
    getAll(): Promise<Quotes[]>;
    create(quote: Quotes): Promise<Quotes>;
    getOne(id: number): Promise<Quotes>;
    update(id: number, product: Quotes): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    count(): Promise<number>;
}
