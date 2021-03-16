import { Test, TestingModule } from '@nestjs/testing';
import { TripbookingService } from './tripbooking.service';

describe('TripbookingService', () => {
  let service: TripbookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TripbookingService],
    }).compile();

    service = module.get<TripbookingService>(TripbookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
