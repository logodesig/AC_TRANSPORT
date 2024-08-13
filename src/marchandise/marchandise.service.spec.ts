import { Test, TestingModule } from '@nestjs/testing';
import { MarchandiseService } from './marchandise.service';

describe('MarchandiseService', () => {
  let service: MarchandiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarchandiseService],
    }).compile();

    service = module.get<MarchandiseService>(MarchandiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
