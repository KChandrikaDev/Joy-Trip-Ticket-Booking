import { Body, Controller, Get, Post } from '@nestjs/common';
import { TripbookingService } from '../tripbooking/tripbooking.service';
import { CreateBookingDTO } from '../DTO/createbooking.DTO';

@Controller('tripbooking')
export class TripbookingController {
  constructor(private tripbookingService: TripbookingService) {}

  @Get()
  getTripbooking() {
    const getTripbookingDeatils = this.tripbookingService;
    return getTripbookingDeatils;
  }

  @Post()
  async createTripBooking(@Body() createBookingDTO:CreateBookingDTO):Promise<any>
   {
    const createNewTripBooking = await this.tripbookingService.createBooking(createBookingDTO);
    return createNewTripBooking;
  }
}
