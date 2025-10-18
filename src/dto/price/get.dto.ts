import { IsNotEmpty, IsString } from 'class-validator'
import { IsExists } from '../../validators/is-exists.validator'
import { Region } from '../../entities/region.entity'
import { Period } from '../../entities/period.entity'

export class GetPriceQueryDto {
    @IsString()
    @IsNotEmpty()
    @IsExists(Region)
    regionId: string

    @IsString()
    @IsNotEmpty()
    @IsExists(Period)
    periodId: string
}
