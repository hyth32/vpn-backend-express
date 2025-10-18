import { RegionService } from '../services/region.service'
import { Request, Response } from 'express'

const regionService = new RegionService()

export const getRegions = async (req: Request, res: Response) => {
    try {
        const regions = await regionService.getAll()
        return res.status(200).json(
            regions.map(region => ({
                id: region.id,
                name: region.name,
            }))
        )
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
