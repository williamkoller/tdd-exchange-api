import { Module } from '@nestjs/common';
import { CurrenciesService } from './services/currencies.service';
import { CurrenciesController } from './controllers/currencies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currencies } from './models/currencies.entities';
import { CurrenciesRepository } from './repositories/currencies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Currencies, CurrenciesRepository])],
  providers: [CurrenciesService],
  controllers: [CurrenciesController],
  exports: [CurrenciesService],
})
export class CurrenciesModule {}
