import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { IsExists } from '../../validators/is-exists.validator'
import { User } from '../../entities/user.entity'

export class GetKeysQueryDto {
    @IsString()
    @IsNotEmpty()
    @IsExists(User, 'telegramId')
    telegramId: string

    @IsOptional()
    @IsNumber()
    offset: number

    @IsOptional()
    @IsNumber()
    limit: number
}
