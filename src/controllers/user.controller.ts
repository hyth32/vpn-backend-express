import { CreateUserDto } from '../dto/user/create.dto'
import { UserService } from '../services/user.service'
import { Response } from 'express'
import { TypedRequestBody } from '../types/request.type'

const userService = new UserService()

export const createUser = async (req: TypedRequestBody<CreateUserDto>, res: Response) => {
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
