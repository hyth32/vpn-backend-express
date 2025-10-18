import { GetPriceQueryDto } from '../dto/price/get.dto'
import { PriceService } from '../services/price.service'
import { Request, Response } from 'express'
import { TypedRequestQuery } from '../types/request.type'

const priceService = new PriceService()

export const getPrice = async (req: TypedRequestQuery<GetPriceQueryDto>, res: Response) => {
    try {
        const price = await priceService.getPrice(req.query)
        return res.status(200).json({
            quantity: price.keyCount,
            price: price.amount,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
