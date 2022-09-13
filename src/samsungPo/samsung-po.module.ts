import { Module } from '@nestjs/common';
import { SamsungPoService } from './samsung-po.service';
import { SamsungPoController } from './samsung-po.controller';

@Module({
  controllers: [SamsungPoController],
  providers: [SamsungPoService]
})
export class SamsungPoModule {}
