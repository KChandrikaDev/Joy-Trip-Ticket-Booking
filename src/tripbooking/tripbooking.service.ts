import { HttpService, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TripbookingInterface } from '../schemas/tripbooking.schema';
import { map } from 'rxjs/operators';
import {CreateBookingDTO} from '../DTO/createbooking.DTO';
@Injectable()
export class TripbookingService {
  constructor(
    @InjectModel('tripticketbooking')
    private tripbookingInterface: Model<TripbookingInterface>,
    private http: HttpService,
  ) {}
  async fetchTripbooking():Promise<TripbookingInterface> {
      const storeFetchTripbooking:any= await this.http
         .get('https://test.agidmc.com/v1/createBooking', {
          headers: {
            'Content-Type': 'application/json',
            'API-Key': '536e8d33dd5a453faf0986cb01c34043',
           },
        })
        .pipe(map((response) => response.data))
        .toPromise();
        const finallyStoreTripbooking= await new this.tripbookingInterface(storeFetchTripbooking);
        return finallyStoreTripbooking.save();
     }
     
  async createBooking(createBookingDTO:CreateBookingDTO):Promise<TripbookingInterface>{
    const createticketBooking=await new this.tripbookingInterface(createBookingDTO);
    console.log('createbooking',createticketBooking);
    console.log("++",createticketBooking);
    return createticketBooking.save();
  }
}

