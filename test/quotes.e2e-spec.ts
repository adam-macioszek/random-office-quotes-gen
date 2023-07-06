import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { QuotesModule } from './../src/quotes/quotes.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Quotes } from './../src/quotes/quote.entity';

describe('QuotesControler (e2e)', () => {
  let app: INestApplication;
  const mockUsersRepository={
    find: jest.fn().mockImplementation(quote=>Promise.resolve(quote)),
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [QuotesModule],
    }).overrideProvider(getRepositoryToken(Quotes))
    .useValue(mockUsersRepository)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/quotes (GET)', () => {
    return request(app.getHttpServer())
      .get('/quotes')
      .expect(200)
  });
});
