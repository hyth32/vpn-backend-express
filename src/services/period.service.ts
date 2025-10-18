import { periodRepository } from '../repositories/period.repository'

export class PeriodService {
    async getAll() {
        return await periodRepository.find()
    }
}
