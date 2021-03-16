import * as mongoose from 'mongoose';

export const TripbookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  personTitle: String,
  email : String,
    phone: String,
    passport: String,
    date: String,
    pickup: String,
    protect: Boolean,
    comments: String,
    currency: String,
    bookings:
    [
      {
          id: String,
          // type: String,
          ticketId: String,
          attractionId: String,
          questions :
          [
              {
                 id: String,
                 answer: String
             }
         ],
           firstName: String,
           lastName: String,
           personTitle: String,
           email: String,
           phone: String
      }
  ]
});

import { Document } from 'mongoose';

export interface TripbookingInterface extends Document {
  firstName: string;
  lastName: string;
  personTitle: string;
  email : string;
  phone: string;
  passport: string;
  date: string;
  pickup: string;
  protect: boolean;
  comments: string;
  currency: string;
  bookings:
    [
      {
          id: string;
          // type: string;
          ticketId: string;
          attractionId: string;
          questions :
          [
              {
                 id: string;
                  answer: string
             },
         ],
           firstName: string;
           lastName: string;
           personTitle: string;
           email: string;
           phone: string
      }
  ]
  
}
