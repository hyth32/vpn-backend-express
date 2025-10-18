import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { DtoClassType } from '../types/dto.type'

export const validateDto = <T extends object>(
    DtoClass: DtoClassType<T>,
    source: 'body' | 'query' | 'params' = 'body'
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const sourceObject =
            source === 'query'
                ? (req.query as any)
                : source === 'params'
                  ? (req.params as any)
                  : req.body

        const dtoObject = plainToInstance(DtoClass, sourceObject)
        const errors = await validate(dtoObject, {
            whitelist: true,
            forbidNonWhitelisted: true,
        })

        if (errors.length > 0) {
            return res.status(400).json({
                errors: errors.map(error => ({
                    source,
                    property: error.property,
                    constraints: error.constraints,
                })),
            })
        }

        if (source === 'query') {
            const target = req.query as any
            Object.keys(target).forEach(k => delete target[k])
            Object.assign(target, dtoObject)
        } else if (source === 'params') {
            const target = req.params as any
            Object.keys(target).forEach(k => delete target[k])
            Object.assign(target, dtoObject)
        } else {
            req.body = dtoObject
        }

        next()
    }
}
