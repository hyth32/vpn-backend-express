import { GetPeriodsQueryDto } from '../dto/period/get.dto'
import { PeriodService } from '../services/period.service'
import { Request, Response } from 'express'
import { TypedRequestQuery } from '../types/request.type'

const periodService = new PeriodService()

export const getPeriods = async (req: TypedRequestQuery<GetPeriodsQueryDto>, res: Response) => {
    try {
        const periods = await periodService.getAll(req.query)
        return res.status(200).json(
            periods.map(period => ({
                id: period.id,
                name: period.name,
                discount: period.discount,
            }))
        )
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
