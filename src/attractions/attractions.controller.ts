import { Controller, Get } from '@nestjs/common';
import { AttractionsService } from '../attractions/attractions.service';

@Controller('attractions')
export class AttractionsController {
  constructor(private attractionsService: AttractionsService) {}

  @Get()
  async getAttractions(): Promise<any> {
    const getAttractionsDetails = await this.attractionsService.fetchAttractions();
    return getAttractionsDetails;
  }
}
