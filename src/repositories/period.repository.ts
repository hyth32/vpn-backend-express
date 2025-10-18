import { AppDataSource } from '../data-source'
import { Period } from '../entities/period.entity'

export const periodRepository = AppDataSource.getRepository(Period).extend({
    async findOptionalFree(withoutFree: boolean) {
        return this.find({
            order: { value: 'ASC', createdAt: 'ASC' },
            skip: withoutFree ? 1 : 0,
        })
    },
})
