import { Test, TestingModule } from '@nestjs/testing';
import { MarchandiseController } from './marchandise.controller';
import { MarchandiseService } from './marchandise.service';

describe('MarchandiseController', () => {
  let controller: MarchandiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarchandiseController],
      providers: [MarchandiseService],
    }).compile();

    controller = module.get<MarchandiseController>(MarchandiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
