export class CreatePriceAndAvailabilityDto
{
    id: String;
    start: String;
    end: String;
    types: 
    [
        {
            // type1: String,
            count: Number
        },
       
    ];
    currency:String
}

