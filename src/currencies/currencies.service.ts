import { Injectable, InternalServerErrorException } from '@nestjs/common'

export class Currencies {
    currency: string
    value: string
}

export class CurrenciesRepository {
    async getCurrency(currency: string): Promise<Currencies> {
        return new Currencies()
    }

    async createCurrency({ currency, value }): Promise<Currencies> {
        return new Currencies()
    }
}


@Injectable()
export class CurrenciesService {
    constructor(private currenciesRepository: CurrenciesRepository) { }
    async getCurrency(currency: string): Promise<Currencies> {
        return await this.currenciesRepository.getCurrency(currency)
    }

    async createCurrency({ currency, value }): Promise<Currencies> {
        return await this.currenciesRepository.createCurrency({ currency, value })
    }
}