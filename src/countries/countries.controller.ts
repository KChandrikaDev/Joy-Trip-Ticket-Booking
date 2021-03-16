import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCountriesDto } from 'src/DTO/countries.DTO';
import { CountriesService } from '../countries/countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private countriesService: CountriesService) {}
  @Get()
  async getCountries() {
    const getCountriesDetails = await this.countriesService.fetchCountries();
    return getCountriesDetails;
  }
   @Post()
  async addCountries(@Body() createCountriesDto: CreateCountriesDto): Promise<any> {
     const finallyValue = await this.countriesService.createCountries(createCountriesDto);
     return finallyValue;
   }
}
