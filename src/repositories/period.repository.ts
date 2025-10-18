import { AppDataSource } from '../data-source'
import { Period } from '../entities/period.entity'

export const periodRepository = AppDataSource.getRepository(Period).extend({})
