import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Database } from 'sqlite3';
import * as quotesJson from './data/office_quotes.json';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
 
}
bootstrap();
