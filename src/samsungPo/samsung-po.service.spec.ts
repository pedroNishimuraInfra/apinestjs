import { Test, TestingModule } from '@nestjs/testing';
import { SamsungPoService } from './samsung-po.service';

describe('SamsungPoService', () => {
  let service: SamsungPoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamsungPoService],
    }).compile();

    service = module.get<SamsungPoService>(SamsungPoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
