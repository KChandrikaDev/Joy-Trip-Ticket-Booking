import { Test, TestingModule } from '@nestjs/testing';
import { PriceandavailabilityController } from './priceandavailability.controller';

describe('PriceandavailabilityController', () => {
  let controller: PriceandavailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceandavailabilityController],
    }).compile();

    controller = module.get<PriceandavailabilityController>(PriceandavailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
