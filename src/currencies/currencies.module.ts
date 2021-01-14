import { Module } from '@nestjs/common';
import { CurrenciesService } from './services/currencies.service';

@Module({
  providers: [CurrenciesService]
})
export class CurrenciesModule {}
