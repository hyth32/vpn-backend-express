import { userRepository } from '../repositories/user.repository'
import { KeyService } from '../services/key.service'
import { Request, Response } from 'express'

const keyService = new KeyService()

export const getKeys = async (req: Request, res: Response) => {
    try {
        const { telegramId, offset = 0, limit = 10 } = req.query
        const userId = await userRepository.getIdFromTelegramId(telegramId as string)
        const keys = await keyService.getAll(userId, offset as number, limit as number)
        return res.status(200).json({
            total: keys.total,
            keys: keys.items.map(key => ({
                id: key.id,
                name: key.configName,
                regionName: key.order.region.name,
            })),
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
