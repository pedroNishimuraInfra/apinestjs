import { Test, TestingModule } from '@nestjs/testing';
import { SamsungCareService } from './samsung-care.service';

describe('SamsungCareService', () => {
  let service: SamsungCareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamsungCareService],
    }).compile();

    service = module.get<SamsungCareService>(SamsungCareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
