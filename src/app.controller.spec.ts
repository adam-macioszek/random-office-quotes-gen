import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesService } from './quotes/quotes.service';

describe('AppController', () => {
  let appController: AppController;

  const mockQuotesService ={
    count: jest.fn().mockImplementation(()=> Promise.resolve(10)),
    getOne: jest.fn().mockImplementation((id)=> Promise.resolve({
      "quote_id": 0,
      "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
      "character": "Michael"
    }))
  }
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [QuotesService],
    }).overrideProvider(QuotesService).useValue(mockQuotesService).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a quote', async () => {
      expect(await appController.getRandomQuote()).toEqual(
        {
          quote_id: expect.any(Number),
          quote: expect.any(String),
          character: expect.any(String),
        }
      );
    });
  });
});
