import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeService } from '../services/exchange.service';
import { ExchangeController } from './exchange.controller';
import { CreateExchangeDto } from '../dtos/create-exchange.dto.ts';
import { ExchangeType } from '../types/exchange.type';

describe('ExchangeController', () => {
  let controller: ExchangeController;
  let service: ExchangeService;
  let mockData;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExchangeController],
      providers: [
        {
          provide: ExchangeService,
          useFactory: () => ({
            convertAmount: jest.fn(),
          }),
        },
      ],
    }).compile();

    controller = module.get<ExchangeController>(ExchangeController);
    service = module.get<ExchangeService>(ExchangeService);
    mockData = { from: 'USD', to: 'BRL', amount: 1 } as CreateExchangeDto;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('convertAmount()', () => {
    it('should be throw when service throw', async () => {
      (service.convertAmount as jest.Mock).mockRejectedValue(
        new BadRequestException()
      );
      await expect(
        controller.convertAmount({ from: 'INVALID', to: 'INVALID', amount: 1 })
      ).rejects.toThrow(new BadRequestException());
    });
  });

  it('should be called service with correct params', async () => {
    controller.convertAmount(mockData);
    expect(service.convertAmount).toBeCalledWith(mockData);
  });

  it('should be called service with correct params', async () => {
    const mockReturn = { amount: 1 } as ExchangeType;
    (service.convertAmount as jest.Mock).mockReturnValue(mockReturn);
    expect(await controller.convertAmount(mockData)).toEqual(mockReturn);
  });
});
