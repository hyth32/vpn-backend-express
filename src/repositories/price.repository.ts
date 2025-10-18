import { AppDataSource } from '../data-source'
import { Price } from '../entities/price.entity'

export const priceRepository = AppDataSource.getRepository(Price).extend({
    async findByRegionAndPeriod(regionId: string, periodId: string) {
        return this.findOne({
            where: {
                region: { id: regionId },
                period: { id: periodId },
            },
        })
    },
})
