import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateExchangeDto } from '../dtos/create-exchange.dto.ts';
import { ExchangeService } from '../services/exchange.service';
import { ExchangeType } from '../types/exchange.type';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Get()
  @UsePipes(ValidationPipe)
  async convertAmount(
    @Query() createExchangeDto: CreateExchangeDto
  ): Promise<ExchangeType> {
    return await this.exchangeService.convertAmount(createExchangeDto);
  }
}
