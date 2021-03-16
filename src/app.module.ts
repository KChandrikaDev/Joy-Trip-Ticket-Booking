import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { CountriesModule } from './countries/countries.module';
import { AttractionsModule } from './attractions/attractions.module';
import { TripbookingModule } from './tripbooking/tripbooking.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceandavailabilityModule } from './priceandavailability/priceandavailability.module';

@Module({
  imports: [
    CitiesModule,
    CountriesModule,
    AttractionsModule,
    TripbookingModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:password@123@cluster0.wwvgf.mongodb.net/test',
    ),
   PriceandavailabilityModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
