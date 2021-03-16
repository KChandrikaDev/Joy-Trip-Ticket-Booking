import * as mongoose from 'mongoose';

export const PriceAndAvailabilitySchema = new mongoose.Schema
({
    id: String,
    start: String,
    end: String,
    types: 
    [
        {
            // type1: String,
            count: Number
        },
       
    ],
    currency: String
});

import { Document } from 'mongoose';

export interface PriceAndAvailabilityInterface extends Document 
{
    id: string;
    start: string;
    end: string;
    types: 
    [
        {
            // type1: string;
            count: number
        },
       
    ];
    currency:string
}