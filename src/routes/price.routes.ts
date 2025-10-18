import { Router } from 'express'
import { validateDto } from '../middlewares/validate-dto.middleware'
import { getPrice } from '../controllers/price.controller'
import { GetPriceQueryDto } from '../dto/price/get.dto'

const router = Router()

router.get('/', validateDto(GetPriceQueryDto, 'query'), getPrice)

export default router
