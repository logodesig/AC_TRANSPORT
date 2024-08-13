import { Test, TestingModule } from '@nestjs/testing';
import { DriverprofilService } from './driverprofil.service';

describe('DriverprofilService', () => {
  let service: DriverprofilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverprofilService],
    }).compile();

    service = module.get<DriverprofilService>(DriverprofilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
