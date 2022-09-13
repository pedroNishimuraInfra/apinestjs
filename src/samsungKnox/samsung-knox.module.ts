import { Module } from '@nestjs/common';
import { SamsungKnoxService } from './samsung-knox.service';
import { SamsungKnoxController } from './samsung-knox.controller';

@Module({
  controllers: [SamsungKnoxController],
  providers: [SamsungKnoxService],
  exports: [SamsungKnoxService]
})
export class SamsungKnoxModule {}
