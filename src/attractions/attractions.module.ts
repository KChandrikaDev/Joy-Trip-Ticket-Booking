import { Module, HttpModule } from '@nestjs/common';
import { AttractionsService } from './attractions.service';
import { AttractionsController } from './attractions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AttractionsSchema } from '../schemas/attractions.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'attractions', schema: AttractionsSchema },
    ]),
  ],
  providers: [AttractionsService],
  controllers: [AttractionsController],
})
export class AttractionsModule {}
