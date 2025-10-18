import { User } from '../entities/user.entity'
import { AppDataSource } from '../data-source'

export const userRepository = AppDataSource.getRepository(User).extend({
    async findByTelegramId(telegramId: string) {
        return this.findOne({ where: { telegramId } })
    },

    async getIdFromTelegramId(telegramId: string) {
        const user = this.findByTelegramId(telegramId)
        return user?.telegramId
    },

    async hasFreeKey(telegramId: string) {
        const user = await this.findByTelegramId(telegramId)
        return !!user?.freeKeyUsed
    },
})
