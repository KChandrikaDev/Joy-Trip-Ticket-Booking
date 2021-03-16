import { Injectable, HttpService } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AttractionsInterface } from '../schemas/attractions.schema';
import { map } from 'rxjs/operators';
@Injectable()
export class AttractionsService {
  constructor(
    @InjectModel('attractions')
    private attractionsInterface: Model<AttractionsInterface>,
    private http: HttpService,
  ) {}
  async fetchAttractions(): Promise<AttractionsInterface> {
    const storefetchAttractions: any = await this.http
      .get(
        'https://test.agidmc.com/v1/attractions?country=Argentina&city=Bariloche&page=1&currency=SGD',
        {
          headers: {
            'Content-Type': 'application/json',
            'API-Key': '536e8d33dd5a453faf0986cb01c34043',
          },
        },
      )
      .pipe(map((response) => response.data))
      .toPromise();
      // return storefetchAttractions;
      const finallystorefetchAttractions = new this.attractionsInterface(
        storefetchAttractions
      );
      return finallystorefetchAttractions.save();
   }
}
