import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  private user: User[] = []

  create(createUserDto: CreateUserDto) {
    const lastUserId = this.user[this.user.length - 1]?.id || 0

    const id = lastUserId + 1

    const newUser: User = {
      id,
      ...createUserDto
    }

    this.user.push(newUser)

    return newUser
  }

  findAll() {
    return this.user
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
