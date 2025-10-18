import { priceRepository } from '../repositories/price.repository'

export class PriceService {
    async getPrice(regionId: string, periodId: string) {
        return priceRepository.findByRegionAndPeriod(regionId, periodId)
    }
}
