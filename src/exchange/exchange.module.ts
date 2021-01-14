import { Module } from '@nestjs/common';
import { ExchangeService } from './services/exchange.service';

@Module({
  providers: [ExchangeService],
})
export class ExchangeModule {}
