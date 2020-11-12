import { Test, TestingModule } from '@nestjs/testing'
import { CurrenciesRepository } from './currencies.repository'
import { InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { Currencies } from './currencies.entities'

describe('CurrenciesRepository', () => {
  let repository
  let mockData
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrenciesRepository]
    }).compile()

    repository = module.get<CurrenciesRepository>(CurrenciesRepository)
    mockData = { currency: 'USD', value: 1 } as Currencies
    repository.save = jest.fn()
    repository.findOne = jest.fn()

  })

  it('should be defined', () => {
    expect(repository).toBeDefined()
  })

  describe('getCurrency', () => {
    it('should be called findOne with correct params', async () => {
      repository.findOne = jest.fn().mockReturnValue({})
      await repository.getCurrency('USD')
      expect(repository.findOne).toBeCalledWith({ currency: 'USD' })
    })

    it('should be throw findOne returns empty', async () => {
      repository.findOne = jest.fn().mockReturnValue(undefined)
      await expect(repository.getCurrency('USD')).rejects.toThrow(new InternalServerErrorException())
    })

    it('should be returns when findOne returns', async () => {
      repository.findOne = jest.fn().mockReturnValue(mockData)
      expect(await repository.getCurrency('USD')).toEqual(mockData)
    })

    describe('createCurrency', () => {
      it('should be called save with correct params', async () => {
        repository.save = jest.fn().mockReturnValue(mockData)
        await repository.createCurrency(mockData)
        expect(repository.save).toBeCalledWith(mockData)
      })

      it('should be throw when save throw', async () => {
        repository.save = jest.fn().mockRejectedValue(new Error())
        await expect(repository.createCurrency(mockData)).rejects.toThrow()
      })

      it('should be throw if called with invalid params', async () => {
        mockData.currency = 'INVALID'
        await expect(repository.createCurrency(mockData)).rejects.toThrow()

        mockData.currency = 'USD'
        mockData.value = 'INVALID'
        await expect(repository.createCurrency(mockData)).rejects.toThrow()
      })

      it('should be returns created data', async () => {
        expect(await repository.createCurrency(mockData)).toEqual(mockData)
      })
    })

    describe('updateCurrency', () => {
      it('should be called infoOne with correct params', async () => {
        repository.findOne = jest.fn().mockReturnValue(mockData);
        await repository.updateCurrency(mockData);
        expect(repository.findOne).toBeCalledWith({ currency: 'USD'});
      })

      it('should be throw findOne returns empty', async () => {
        repository.findOne = jest.fn().mockReturnValue(undefined)
        await expect(repository.updateCurrency(mockData)).rejects.toThrow(
          new NotFoundException(`The currency ${mockData.currency} not found`)
        )
      })

      it('should be called save with correct params', async () => {
        repository.findOne = jest.fn().mockReturnValue(mockData)
        repository.save = jest.fn().mockReturnValue(mockData)
        await repository.updateCurrency(mockData)
        expect(repository.save).toBeCalledWith(mockData)
      })
    })
  })
})
