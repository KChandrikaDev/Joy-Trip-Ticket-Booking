import { Injectable, HttpService } from '@nestjs/common';
import{ PriceAndAvailabilityInterface } from '../schemas/priceandavailability.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePriceAndAvailabilityDto} from '../DTO/priceAndAvailability.DTO';
import { map } from 'rxjs/operators';
@Injectable()
export class PriceandavailabilityService {
    constructor(@InjectModel('priceandavailability') 
    private readonly priceAndAvailabilityInterface:Model<PriceAndAvailabilityInterface>,
    private http: HttpService,){}
    async createPriceAndAvailability(createPriceAndAvailabilityDto:CreatePriceAndAvailabilityDto):Promise<PriceAndAvailabilityInterface>
    {
        const createPAvailability=await new this.priceAndAvailabilityInterface(createPriceAndAvailabilityDto);
        console.log('++++++', createPAvailability)
        return createPAvailability;
    }

    async addPriceAndAvailability(createPriceAndAvailabilityDto:CreatePriceAndAvailabilityDto): Promise<PriceAndAvailabilityInterface> {
        const addPAvailability: any = await this.http
          .post(
            'https://test.agidmc.com/v1/priceAndAvailability',
            {
              headers: {
                'Content-Type': 'application/json',
                'API-Key': '536e8d33dd5a453faf0986cb01c34043',
              },
            },
          )
          .pipe(map((response) => response.data))
          .toPromise();
          console.log("+++++", addPAvailability);
          const finallystoredAvailability = new this.priceAndAvailabilityInterface(addPAvailability);
          return finallystoredAvailability.save();
       }
}
