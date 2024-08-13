import { Test, TestingModule } from '@nestjs/testing';
import { OpportuniteController } from './opportunite.controller';
import { OpportuniteService } from './opportunite.service';

describe('OpportuniteController', () => {
  let controller: OpportuniteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpportuniteController],
      providers: [OpportuniteService],
    }).compile();

    controller = module.get<OpportuniteController>(OpportuniteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
