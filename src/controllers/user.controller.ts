import { UserService } from '../services/user.service'
import { Request, Response } from 'express'

const userService = new UserService()

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
