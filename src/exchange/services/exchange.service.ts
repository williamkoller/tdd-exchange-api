import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrenciesService } from '../../currencies/services/currencies.service';
import { CreateExchangeDto } from '../dtos/create-exchange.dto.ts';
import { ExchangeType } from '../types/exchange.type';

@Injectable()
export class ExchangeService {
  constructor(private currenciesService: CurrenciesService) {}
  async convertAmount({
    from,
    to,
    amount,
  }: CreateExchangeDto): Promise<ExchangeType> {
    if (!from || !to || !amount) {
      throw new BadRequestException();
    }
    try {
      const currencyFrom = await this.currenciesService.getCurrency(from);
      const currencyTo = await this.currenciesService.getCurrency(to);

      return { amount: (currencyFrom.value / currencyTo.value) * amount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
