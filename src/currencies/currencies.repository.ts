import { EntityRepository, Repository } from 'typeorm'
import { Currencies } from './currencies.entities'
import { InternalServerErrorException } from '@nestjs/common'
import { CurrenciesInputType } from './types/currencies-input.type'
import { validateOrReject } from 'class-validator'

@EntityRepository()
export class CurrenciesRepository extends Repository<Currencies> {
    async getCurrency(currency: string): Promise<Currencies> {
        const result = await this.findOne({ currency })
        if (!result) {
            throw new InternalServerErrorException()
        }
        return result
    }

    async createCurrency(currenciesInputType: CurrenciesInputType): Promise<Currencies> {
        const createCurrency = new Currencies()
        Object.assign(createCurrency, currenciesInputType)

        try {
            await validateOrReject(createCurrency)
            await this.save(createCurrency)
            return createCurrency
        } catch (error) {
            throw new InternalServerErrorException(error)
        }

    }

    async updateCurrency({ currency, value }: CurrenciesInputType): Promise<Currencies> {
        const result = await this.findOne({ currency });
        return new Currencies()
    }
    async deleteCurrency(currency: string): Promise<void> {
        return
    }
}
