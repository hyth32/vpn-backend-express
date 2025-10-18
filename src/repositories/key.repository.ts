import { AppDataSource } from '../data-source'
import { Key } from '../entities/key.entity'

export const keyRepository = AppDataSource.getRepository(Key).extend({
    async findByUserId(
        userId: string,
        offset: number,
        limit: number
    ): Promise<[items: Key[], total: number]> {
        return this.findAndCount({
            where: { order: { user: { id: userId } } },
            order: { updatedAt: 'DESC' },
            relations: { order: { region: true } },
            skip: offset,
            take: limit,
        })
    },
})
