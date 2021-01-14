import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './configs/typeorm-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    ExchangeModule,
    CurrenciesModule,
  ],
})
export class AppModule {}
