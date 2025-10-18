import { Price } from '../entities/price.entity'
import { PriceService } from '../services/price.service'
import { Request, Response } from 'express'

const priceService = new PriceService()

export const getPrice = async (req: Request, res: Response) => {
    try {
        const { regionId, periodId } = req.query
        const price = (await priceService.getPrice(regionId as string, periodId as string)) as Price
        return res.status(200).json({
            quantity: price.keyCount,
            price: price.amount,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
