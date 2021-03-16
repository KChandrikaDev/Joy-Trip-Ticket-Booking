import { HttpModule, Module } from '@nestjs/common';
import { TripbookingService } from './tripbooking.service';
import { TripbookingController } from './tripbooking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TripbookingSchema } from 'src/schemas/tripbooking.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'tripticketbooking', schema: TripbookingSchema },
    ]),
  ],
  providers: [TripbookingService],
  controllers: [TripbookingController],
})
export class TripbookingModule {}
