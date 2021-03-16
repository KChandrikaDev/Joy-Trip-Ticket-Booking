import { HttpModule, Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesSchema } from '../schemas/countries.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'countries', schema: CountriesSchema }]),
  ],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
