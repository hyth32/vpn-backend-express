import { Router } from 'express'
import { createUser } from '../controllers/user.controller'
import { validateDto } from '../middlewares/validate-dto.middleware'
import { CreateUserDto } from '../dto/user/create.dto'

const router = Router()

router.post('/', validateDto(CreateUserDto), createUser)

export default router
