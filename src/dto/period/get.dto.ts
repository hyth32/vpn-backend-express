import { IsNotEmpty, IsString } from 'class-validator'

export class GetPeriodsQueryDto {
    @IsString()
    @IsNotEmpty()
    telegramId: string
}
