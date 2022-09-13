import { Injectable } from '@nestjs/common';
import { CreateSamsungPoDto } from './dto/create-samsung-po.dto';
import { UpdateSamsungPoDto } from './dto/update-samsung-po.dto';

@Injectable()
export class SamsungPoService {
  create(createSamsungPoDto: CreateSamsungPoDto) {
    return 'This action adds a new samsungPo';
  }

  findAll() {
    return `This action returns all samsungPo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} samsungPo`;
  }

  update(id: number, updateSamsungPoDto: UpdateSamsungPoDto) {
    return `This action updates a #${id} samsungPo`;
  }

  remove(id: number) {
    return `This action removes a #${id} samsungPo`;
  }
}
