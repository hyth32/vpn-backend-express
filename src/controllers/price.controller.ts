import { GetPriceQueryDto } from '../dto/price/get.dto'
import { PriceService } from '../services/price.service'
import { Request, Response } from 'express'

const priceService = new PriceService()

export const getPrice = async (req: Request, res: Response) => {
    try {
        const dto = req.query as unknown as GetPriceQueryDto
        const price = await priceService.getPrice(dto)
        return res.status(200).json({
            quantity: price.keyCount,
            price: price.amount,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
