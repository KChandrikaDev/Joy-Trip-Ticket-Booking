import { HttpService, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CountriesInterface } from '../schemas/countries.schema';
import { map } from 'rxjs/operators';
import { CreateCountriesDto } from '../DTO/countries.DTO';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel('countries')
    private readonly countriesInterface: Model<CountriesInterface>,
    private http: HttpService,
  ) {}
  async fetchCountries(): Promise<CountriesInterface> {
    const storefetchCountries: any = await this.http
      .get('https://test.agidmc.com/v1/countries', {
        headers: {
          'Content-Type': 'application/json',
          'API-Key': '536e8d33dd5a453faf0986cb01c34043',
        },
      })
      .pipe(map((response) => response.data))
      .toPromise();
    const finallystorefetchCountries = new this.countriesInterface(
      storefetchCountries,
    );
    return finallystorefetchCountries.save();
  }
  //  createCountries  method
  async createCountries(createCountriesDto: CreateCountriesDto): Promise<CountriesInterface>{
      const addCountries = await new this.countriesInterface(createCountriesDto);
     return addCountries.save();
   }
}
