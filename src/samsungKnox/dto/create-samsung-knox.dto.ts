import { IsString } from 'class-validator'
import { SamsungKnox } from '../entities/samsung-knox.entity';

export class CreateSamsungKnoxDto extends SamsungKnox {
    @IsString()
    client: string

    @IsString()
    product: string
}