import { IsOptional, IsString } from 'class-validator'
import { IsUnique } from '../../validators/is-unique.validator'
import { User } from '../../entities/user.entity'

export class CreateUserDto {
    @IsString()
    @IsUnique(User)
    telegramId: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    @IsUnique(User)
    username?: string
}
