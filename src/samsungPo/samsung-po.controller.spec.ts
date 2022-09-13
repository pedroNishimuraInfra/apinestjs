import { Test, TestingModule } from '@nestjs/testing';
import { SamsungPoController } from './samsung-po.controller';
import { SamsungPoService } from './samsung-po.service';

describe('SamsungPoController', () => {
  let controller: SamsungPoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamsungPoController],
      providers: [SamsungPoService],
    }).compile();

    controller = module.get<SamsungPoController>(SamsungPoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
