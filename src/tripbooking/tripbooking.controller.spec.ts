import { Test, TestingModule } from '@nestjs/testing';
import { TripbookingController } from './tripbooking.controller';

describe('TripbookingController', () => {
  let controller: TripbookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripbookingController],
    }).compile();

    controller = module.get<TripbookingController>(TripbookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
