import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCurrencyDto } from '../dtos/create-currency.dto';
import { Currencies } from '../models/currencies.entities';
import { CurrenciesService } from '../services/currencies.service';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get('/:currency')
  async getCurrency(@Param('currency') currency: string): Promise<Currencies> {
    return await this.currenciesService.getCurrency(currency);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCurrency(
    @Body() createCurrencyDto: CreateCurrencyDto
  ): Promise<Currencies> {
    return await this.currenciesService.createCurrency(createCurrencyDto);
  }

  @Delete(':/currency')
  async deleteCurrency(@Param('currency') currency: string): Promise<void> {
    return await this.currenciesService.deleteCurrency(currency);
  }

  @Patch('/:currency/value')
  async updateCurrency(
    @Param('currency') currency: string,
    @Body() value: number
  ): Promise<Currencies> {
    return await this.currenciesService.updateCurrency({ currency, value });
  }
}
