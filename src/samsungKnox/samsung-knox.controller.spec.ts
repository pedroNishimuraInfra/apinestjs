import { Test, TestingModule } from '@nestjs/testing';
import { SamsungKnoxController } from './samsung-knox.controller';
import { SamsungKnoxService } from './samsung-knox.service';

describe('SamsungKnoxController', () => {
  let controller: SamsungKnoxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamsungKnoxController],
      providers: [SamsungKnoxService],
    }).compile();

    controller = module.get<SamsungKnoxController>(SamsungKnoxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
