import { Test, TestingModule } from '@nestjs/testing';
import { SamsungCareController } from './samsung-care.controller';
import { SamsungCareService } from './samsung-care.service';

describe('SamsungCareController', () => {
  let controller: SamsungCareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamsungCareController],
      providers: [SamsungCareService],
    }).compile();

    controller = module.get<SamsungCareController>(SamsungCareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
