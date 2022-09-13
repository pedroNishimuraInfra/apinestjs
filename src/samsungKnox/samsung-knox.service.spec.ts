import { Test, TestingModule } from '@nestjs/testing';
import { SamsungKnoxService } from './samsung-knox.service';

describe('SamsungKnoxService', () => {
  let service: SamsungKnoxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamsungKnoxService],
    }).compile();

    service = module.get<SamsungKnoxService>(SamsungKnoxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
