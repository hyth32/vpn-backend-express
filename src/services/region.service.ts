import { Region } from '../entities/region.entity'
import { regionRepository } from '../repositories/region.repository'

export class RegionService {
    async getAll(): Promise<Region[]> {
        return regionRepository.find()
    }
}
