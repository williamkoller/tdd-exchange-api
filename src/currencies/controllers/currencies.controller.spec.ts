import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Currencies } from '../models/currencies.entities';
import { CurrenciesService } from '../services/currencies.service';
import { CurrenciesController } from './currencies.controller';

describe('CurrenciesController', () => {
  let controller: CurrenciesController;
  let service: CurrenciesService;
  let mockData;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrenciesController],
      providers: [
        {
          provide: CurrenciesService,
          useFactory: () => ({
            getCurrency: jest.fn(),
            createCurrency: jest.fn(),
          }),
        },
      ],
    }).compile();

    controller = module.get<CurrenciesController>(CurrenciesController);
    service = module.get<CurrenciesService>(CurrenciesService);
    mockData = { currency: 'USD', value: 1 } as Currencies;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getCurrency', () => {
    it('should be throw when service throw', async () => {
      (service.getCurrency as jest.Mock).mockRejectedValue(
        new BadRequestException()
      );
      expect(controller.getCurrency('INVALID')).rejects.toThrow(
        new BadRequestException()
      );
    });

    it('should be called service with correct params', async () => {
      controller.getCurrency('USD');
      expect(service.getCurrency).toBeCalledWith('USD');
    });

    it('should be returns when service returns', async () => {
      (service.getCurrency as jest.Mock).mockReturnValue(mockData);
      expect(await controller.getCurrency('USD')).toEqual(mockData);
    });
  });
  describe('createCurrency', () => {
    it('should be throw when service throw', async () => {
      (service.getCurrency as jest.Mock).mockRejectedValue(
        new BadRequestException()
      );
      expect(controller.createCurrency(mockData)).rejects.toThrow(
        new BadRequestException()
      );
    });

    it('should be called service with correct params', async () => {
      await controller.createCurrency(mockData);
      expect(service.createCurrency).toBeCalledWith(mockData);
    });

    it('should be returns when service returns', async () => {
      (service.createCurrency as jest.Mock).mockReturnValue(mockData);
      expect(await controller.createCurrency(mockData)).toEqual(mockData);
    });
  });
});