import { Test, TestingModule } from '@nestjs/testing';
import { OpportuniteService } from './opportunite.service';

describe('OpportuniteService', () => {
  let service: OpportuniteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpportuniteService],
    }).compile();

    service = module.get<OpportuniteService>(OpportuniteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
