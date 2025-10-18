import { periodRepository } from '../repositories/period.repository'
import { userRepository } from '../repositories/user.repository'

export class PeriodService {
    async getAll(telegramId: string) {
        const isFreeKeyUsedByUser = await userRepository.hasFreeKey(telegramId)
        return await periodRepository.findOptionalFree(isFreeKeyUsedByUser)
    }
}
