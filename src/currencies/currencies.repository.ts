import { Currencies } from './currency.entities'

export class CurrenciesRepository {
    async getCurrency(currency: string): Promise<Currencies> {
        return new Currencies()
    }

    async createCurrency({ currency, value }): Promise<Currencies> {
        return new Currencies()
    }

    async updateCurrency({ currency, value }): Promise<Currencies> {
        return new Currencies()
    }

    async deleteCurrency(currency: string): Promise<void> {
        return
    }
}
