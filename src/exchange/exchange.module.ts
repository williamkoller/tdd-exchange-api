import { Module } from '@nestjs/common';
import { CurrenciesModule } from 'src/currencies/currencies.module';
import { ExchangeService } from './services/exchange.service';
import { ExchangeController } from './exchange.controller';

@Module({
  imports: [CurrenciesModule],
  providers: [ExchangeService],
  controllers: [ExchangeController],
})
export class ExchangeModule {}
