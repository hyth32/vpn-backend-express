import { keyRepository } from '../repositories/key.repository'

export class KeyService {
    async getAll(userId: string, offset: number, limit: number) {
        const [items, total] = await keyRepository.findAndCount({
            where: { order: { user: { id: userId } } },
            order: { createdAt: 'DESC' },
            skip: offset,
            take: limit,
        })

        return { total, items }
    }
}
