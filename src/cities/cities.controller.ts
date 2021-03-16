import { Controller, Get } from '@nestjs/common';
import { CitiesService } from '../cities/cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  getCities() {
    const getCitiesDeatils = this.citiesService.fetchCities();
    return getCitiesDeatils;
  }
}
