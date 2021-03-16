import { HttpModule, Module } from '@nestjs/common';
import {PriceandavailabilityService } from '../priceandavailability/priceandavailability.service';
import {PriceandavailabilityController} from '../priceandavailability/priceandavailability.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceAndAvailabilitySchema } from '../schemas/priceandavailability.schema'

@Module({
    imports: [
        HttpModule,
        MongooseModule.forFeature([{ name: 'priceandavailability', schema: PriceAndAvailabilitySchema}]),
      ],
      providers: [PriceandavailabilityService],
     controllers: [PriceandavailabilityController],
})
export class PriceandavailabilityModule {}
