import { IsString, IsNumber } from 'class-validator'
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
    @IsString()
    name: string

    @IsString()
    nickName: string

    @IsNumber()
    age: number
}
