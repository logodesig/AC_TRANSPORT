import { Test, TestingModule } from '@nestjs/testing';
import { DriverprofilController } from './driverprofil.controller';
import { DriverprofilService } from './driverprofil.service';

describe('DriverprofilController', () => {
  let controller: DriverprofilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverprofilController],
      providers: [DriverprofilService],
    }).compile();

    controller = module.get<DriverprofilController>(DriverprofilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
