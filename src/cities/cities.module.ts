import { HttpModule, Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesSchema } from '../schemas/cities.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'cities', schema: CitiesSchema }]),
  ],
  providers: [CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
