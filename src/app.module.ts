import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quotes } from'./quotes/quote.entity';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quotes]),
    TypeOrmModule.forRoot({
    type :"sqlite",
    database: "quotesDB",
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize: true
  })
],
  controllers: [AppController, QuotesController],
  providers: [AppService, QuotesService], 
})
export class AppModule {}
