import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator'
import { AppDataSource } from '../data-source'
import { EntityTarget, FindOptionsWhere } from 'typeorm'

@ValidatorConstraint({ name: 'IsUnique', async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    async validate(value: unknown, args: ValidationArguments): Promise<boolean> {
        if (value === null || value === undefined) return true

        const [entityClass, propertyOverride] = args.constraints as [EntityTarget<unknown>, string?]
        const propertyName = propertyOverride ?? args.property

        try {
            const repository = AppDataSource.getRepository(entityClass as EntityTarget<any>)
            const where: FindOptionsWhere<any> = { [propertyName]: value } as any
            const exists = await repository.exist({ where })
            return !exists
        } catch (_error) {
            return false
        }
    }

    defaultMessage(args: ValidationArguments): string {
        const propertyName = (args.constraints?.[1] as string) ?? args.property
        return `${propertyName} must be unique`
    }
}

export function IsUnique(
    entityClass: EntityTarget<any>,
    propertyName?: string,
    validationOptions?: ValidationOptions
) {
    return function (object: object, property: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [entityClass, propertyName],
            validator: IsUniqueConstraint,
        })
    }
}
