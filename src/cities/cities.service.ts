import { HttpService, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CitiesInterface } from '../schemas/cities.schema';
import { map } from 'rxjs/operators';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel('cities') private citiesInterface: Model<CitiesInterface>,
    private http: HttpService,
  ) {}
  async fetchCities(): Promise<CitiesInterface> {
    const storefetchCities: any = await this.http
      .get('https://test.agidmc.com/v1/cities?country=Argentina', {
        headers: {
          'Content-Type': 'application/json',
          'API-Key': '536e8d33dd5a453faf0986cb01c34043',
        },
      })
      .pipe(map((response) => response.data))
      .toPromise();
    console.log('fetch cities', storefetchCities);
    const finallystorefetchCities = new this.citiesInterface(storefetchCities);
    return finallystorefetchCities.save();
  }
}
