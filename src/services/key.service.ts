import { keyRepository } from '../repositories/key.repository'
import { GetKeysQueryDto } from '../dto/key/get.dto'
import { userRepository } from '../repositories/user.repository'

export class KeyService {
    async getAll(dto: GetKeysQueryDto) {
        const telegramId = dto.telegramId
        const offset = dto.offset ?? 0
        const limit = dto.limit ?? 10
        const user = await userRepository.findByTelegramId(telegramId)

        const [items, total] = await keyRepository.findByUserId(user.id, offset, limit)

        return { total, items }
    }
}
