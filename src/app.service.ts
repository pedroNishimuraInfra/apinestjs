import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from './user/user.service';
import { SamsungKnoxService } from './samsungKnox/samsung-knox.service';
import { CreateSamsungKnoxDto } from './samsungKnox/dto/create-samsung-knox.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,      
    private readonly samsungKnox: SamsungKnoxService,
  ) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  userFindCron() {
    const findAll = this.userService.findAll()

    console.log('lista usuarios')
    console.log(findAll)
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  samsungKnoxCreateCron() {
    const createSamsungKnoxDto = this.samsungKnox.create('Porto Seguro', String(Math.random()))

    console.log('knox criado')
    console.log(createSamsungKnoxDto)
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  samsungKnoxFindCron() {
    const findSamsungKnoxDto = this.samsungKnox.findAll()

    console.log('lista knox')
    console.log(findSamsungKnoxDto)
  }
}
