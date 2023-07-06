import { Test, TestingModule } from '@nestjs/testing';
import { QuotesService } from './quotes.service';
import { Quotes } from './quote.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('QuotesService', () => {
  let service: QuotesService;
  const mockQuotesRepository ={
    create: jest.fn().mockImplementation(quote=>Promise.resolve(quote)),
    save: jest.fn().mockImplementation((quote)=>Promise.resolve(quote)),

       
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuotesService, {
        provide: getRepositoryToken(Quotes),
        useValue:mockQuotesRepository
      }],
    }).compile();

    service = module.get<QuotesService>(QuotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create new quote', async () => {
    expect(await service.create({
      "quote_id": 0,
      "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
      "character": "Michael"
    })).toEqual({
      "quote_id": 0,
      "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
      "character": "Michael"
    });
  });

});
