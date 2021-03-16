import * as mongoose from 'mongoose';

export const CountriesSchema = new mongoose.Schema({
  data: [
    {
      country: String,
      count: Number,
    },
  ],
});

import { Document } from 'mongoose';

export interface CountriesInterface extends Document {
  data: [
    {
      country: string;
      count: number;
    },
  ];
}
