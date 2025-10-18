import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'

export const validateDto = (DtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoObject = plainToInstance(DtoClass, req.body)
        const errors = await validate(dtoObject, {
            whitelist: true,
            forbidNonWhitelisted: true,
        })

        if (errors.length > 0) {
            return res.status(400).json({
                errors: errors.map(error => ({
                    property: error.property,
                    constraints: error.constraints,
                })),
            })
        }

        req.body = dtoObject
        next()
    }
}
