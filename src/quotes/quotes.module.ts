import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { Quotes } from './quote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Quotes])],
  providers: [QuotesService],
  controllers: [QuotesController]
})
export class QuotesModule {}
