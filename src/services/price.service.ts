import { GetPriceQueryDto } from '../dto/price/get.dto'
import { Price } from '../entities/price.entity'
import { priceRepository } from '../repositories/price.repository'

export class PriceService {
    async getPrice(dto: GetPriceQueryDto): Promise<Price> {
        return priceRepository.findByRegionAndPeriod(dto.regionId, dto.periodId)
    }
}
