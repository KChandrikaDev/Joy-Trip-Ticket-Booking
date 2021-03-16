import * as mongoose from 'mongoose';

export const CitiesSchema = new mongoose.Schema({
  data: [
    {
      city: String,
      country: String,
      count: Number,
    },
  ],
});

import { Document } from 'mongoose';

export interface CitiesInterface extends Document {
  data: [
    {
      city: string;
      country: string;
      count: number;
    },
  ];
}
