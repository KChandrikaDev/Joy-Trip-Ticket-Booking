import { Test, TestingModule } from '@nestjs/testing';
import { PriceandavailabilityService } from './priceandavailability.service';

describe('PriceandavailabilityService', () => {
  let service: PriceandavailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceandavailabilityService],
    }).compile();

    service = module.get<PriceandavailabilityService>(PriceandavailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
