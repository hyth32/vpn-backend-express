import { AppDataSource } from '../data-source'
import { Period } from '../entities/period.entity'

export const periodRepository = AppDataSource.getRepository(Period).extend({
    async findOptionalFree(withoutFree: boolean): Promise<Period[]> {
        return this.find({
            order: { value: 'ASC' },
            skip: withoutFree ? 1 : 0,
        })
    },
})
