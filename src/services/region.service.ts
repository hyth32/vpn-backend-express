import { regionRepository } from '../repositories/region.repository'

export class RegionService {
    async getAll() {
        return regionRepository.find()
    }
}
