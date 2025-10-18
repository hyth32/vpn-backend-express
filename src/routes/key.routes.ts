import { Router } from 'express'
import { validateDto } from '../middlewares/validate-dto.middleware'
import { GetKeysQueryDto } from '../dto/key/get.dto'
import { getKeys } from '../controllers/key.controller'

const router = Router()

router.get('/', validateDto(GetKeysQueryDto, 'query'), getKeys)

export default router
