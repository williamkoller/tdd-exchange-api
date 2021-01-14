import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
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
}
