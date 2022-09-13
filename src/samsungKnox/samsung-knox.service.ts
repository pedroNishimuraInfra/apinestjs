import { Injectable } from '@nestjs/common';
import { CreateSamsungKnoxDto } from './dto/create-samsung-knox.dto';
import { UpdateSamsungKnoxDto } from './dto/update-samsung-knox.dto';
import { SamsungKnox } from './entities/samsung-knox.entity'


@Injectable()
export class SamsungKnoxService {
  private samsungKnox: SamsungKnox[] = []

  create(client=null, product=null) {
    const lastSamsungKnoxId = this.samsungKnox[this.samsungKnox.length - 1]?.id || 0

    const id = lastSamsungKnoxId + 1

    const newSamsungKnox: SamsungKnox = {
      id,
      client, 
      product
    }

    this.samsungKnox.push(newSamsungKnox)

    return newSamsungKnox
  }

  findAll() {
    return this.samsungKnox
  }

  findOne(id: number) {
    return `This action returns a #${id} samsungKnox`;
  }

  update(id: number, updateSamsungKnoxDto: UpdateSamsungKnoxDto) {
    return `This action updates a #${id} samsungKnox`;
  }

  remove(id: number) {
    return `This action removes a #${id} samsungKnox`;
  }
}
