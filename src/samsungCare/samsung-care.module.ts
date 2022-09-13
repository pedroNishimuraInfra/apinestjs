import { Module } from '@nestjs/common';
import { SamsungCareService } from './samsung-care.service';
import { SamsungCareController } from './samsung-care.controller';

@Module({
  controllers: [SamsungCareController],
  providers: [SamsungCareService],
  exports: [SamsungCareService]
})
export class SamsungCareModule {}
