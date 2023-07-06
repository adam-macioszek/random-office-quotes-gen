import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

describe('QuotesController', () => {
  let controller: QuotesController;
  const mockQuotesService ={
    getQuoteById: jest.fn((id)=>{
      return {
      "quote_id": 0,
      "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
      "character": "Michael"
    }
    }),
    getOne: jest.fn().mockImplementation((id)=> Promise.resolve({
      "quote_id": 0,
      "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
      "character": "Michael"
    })
    )
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [QuotesService]
    }).overrideProvider(QuotesService).useValue(mockQuotesService).compile();

    controller = module.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should get quote by id', async () => {
    expect(await controller.getQuoteById("{id:0}")).toEqual({
      "quote_id": 0,
      "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
      "character": "Michael"
    });
  });
});
