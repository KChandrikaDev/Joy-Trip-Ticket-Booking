import { Controller , Body, Post } from '@nestjs/common';
import { PriceandavailabilityService } from '../priceandavailability/priceandavailability.service';
import { CreatePriceAndAvailabilityDto } from '../DTO/priceAndAvailability.DTO';

@Controller('priceandavailability')
export class PriceandavailabilityController {
    constructor(private readonly priceandavailabilityService:PriceandavailabilityService){}
    // @Post()
    // async createPriceAndAvailability(@Body() createPriceAndAvailabilityDto:CreatePriceAndAvailabilityDto):Promise<any>
    // {
    //     const addPriceAvailability=await this.priceandavailabilityService.createPriceAndAvailability(createPriceAndAvailabilityDto);
    //     return addPriceAvailability;
    // }
    @Post()
    async storedPriceAndAvailability(@Body() createPriceAndAvailabilityDto:CreatePriceAndAvailabilityDto):Promise<any>
    {
        const storePAvailability=await this.priceandavailabilityService.addPriceAndAvailability(createPriceAndAvailabilityDto);
        return storePAvailability;
    }
}
