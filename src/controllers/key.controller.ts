import { KeyService } from '../services/key.service'
import { Request, Response } from 'express'
import { GetKeysQueryDto } from '../dto/key/get.dto'

const keyService = new KeyService()

export const getKeys = async (req: Request, res: Response) => {
    try {
        const dto = req.query as unknown as GetKeysQueryDto
        const keys = await keyService.getAll(dto)
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
