import { Router } from 'express'
import { getPeriods } from '../controllers/period.controller'

const router = Router()

router.get('/', getPeriods)

export default router
