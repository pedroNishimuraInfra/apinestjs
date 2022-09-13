import { Injectable } from '@nestjs/common';
import { CreateSamsungCareDto } from './dto/create-samsung-care.dto';
import { UpdateSamsungCareDto } from './dto/update-samsung-care.dto';

@Injectable()
export class SamsungCareService {
  create(createSamsungCareDto: CreateSamsungCareDto) {
    return 'This action adds a new samsungCare';
  }

  findAll() {
    return `This action returns all samsungCare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} samsungCare`;
  }

  update(id: number, updateSamsungCareDto: UpdateSamsungCareDto) {
    return `This action updates a #${id} samsungCare`;
  }

  remove(id: number) {
    return `This action removes a #${id} samsungCare`;
  }

  teste(id: number) {
    return 'teste'
  }
}
