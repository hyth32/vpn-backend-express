import { PeriodService } from '../services/period.service'
import { Request, Response } from 'express'

const periodService = new PeriodService()

export const getPeriods = async (req: Request, res: Response) => {
    try {
        const periods = await periodService.getAll()
        return res.status(200).json(
            periods.map(period => ({
                id: period.id,
                name: period.name,
            }))
        )
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
