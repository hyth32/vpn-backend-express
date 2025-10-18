import { GetPeriodsQueryDto } from '../dto/period/get.dto'
import { Period } from '../entities/period.entity'
import { periodRepository } from '../repositories/period.repository'
import { userRepository } from '../repositories/user.repository'

export class PeriodService {
    async getAll(dto: GetPeriodsQueryDto): Promise<Period[]> {
        const isFreeKeyUsedByUser = await userRepository.hasFreeKey(dto.telegramId)
        return await periodRepository.findOptionalFree(isFreeKeyUsedByUser)
    }
}
