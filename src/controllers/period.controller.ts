import { Period } from '../entities/period.entity'
import { PeriodService } from '../services/period.service'
import { Request, Response } from 'express'

const periodService = new PeriodService()

export const getPeriods = async (req: Request, res: Response) => {
    try {
        const { telegramId } = req.query
        const periods = await periodService.getAll(telegramId as string)
        return res.status(200).json(
            periods.map((period: Period) => ({
                id: period.id,
                name: period.name,
                discount: period.discount,
            }))
        )
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
