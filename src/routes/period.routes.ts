import { Router } from 'express'
import { getPeriods } from '../controllers/period.controller'
import { validateDto } from '../middlewares/validate-dto.middleware'
import { GetPeriodsQueryDto } from '../dto/period/get.dto'

const router = Router()

router.get('/', validateDto(GetPeriodsQueryDto, 'query'), getPeriods)

export default router
