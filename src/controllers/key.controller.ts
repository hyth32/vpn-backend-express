import { KeyService } from '../services/key.service'
import { Response } from 'express'
import { GetKeysQueryDto } from '../dto/key/get.dto'
import { TypedRequestParams, TypedRequestQuery } from '../types/request.type'

const keyService = new KeyService()

export const getKeys = async (req: TypedRequestQuery<GetKeysQueryDto>, res: Response) => {
    try {
        const keys = await keyService.getAll(req.query)
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

export const getKey = async (req: TypedRequestParams<{ keyId: string }>, res: Response) => {
    try {
        const key = await keyService.show(req.params.keyId)
        return res.status(200).json({
            id: key.id,
            name: key.configName,
            regionName: key.order.region.name,
            expirationDate: key.expirationDate,
            expired: key.isExpired(),
            free: key.isFree(),
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
