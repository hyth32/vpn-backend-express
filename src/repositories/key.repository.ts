import { AppDataSource } from '../data-source'
import { Key } from '../entities/key.entity'

export const keyRepository = AppDataSource.getRepository(Key).extend({})
