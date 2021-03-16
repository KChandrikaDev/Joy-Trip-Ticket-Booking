import * as mongoose from 'mongoose';

export const AttractionsSchema = new mongoose.Schema({
  data: [
    {
      id: String,
      // type: String,
      active: Boolean,
      additionalInfo: String,
      addressLine: String,
      allPassengerDetailsRequired: Boolean,
      askSpecialRequirements: Boolean,
      category: [],
      city: String,
      contentApproved: Boolean,
      country: String,
      createdOn: String,
      currency: String,
      description: String,
      dropoff: Boolean,
      exclusions: String,
      fromPrice: Number,
      highlights: String,
      hoursOfOperation: {},
      imagePath: [
        {
          original: String,
          thumbnail: String,
        }
      ],
      inclusions: String,
      keywords: String,
      latitude: String,
      longitude: String,
      pickup: Boolean,
      priceApproved: Boolean,
      refMspPrice: Number,
      refOriginalPrice: Number,
      ticketTypesAndPackages: [
        {
          id: String,
          ticketTypeFormat: String,
          name: String,
          description:{},
          termsAndConditions: {},
          isVisitDateCompulsory: Boolean,
          isOpenDated: Boolean,
          isSeparateEmail: Boolean,
          advanceBookingDays: {},
          validFor: String,
          applyCapacity: Boolean,
          variants: [
             {
            //   type: String,
              name: String,
              minimumPax: Number,
              maximumPax: Number,
              minimumAge: Number,
              maximumAge: Number,
            }
          ],
          duration: String,
          questions: [
            {
              id: String,
              question: String,
              options: [],
              optional: Boolean,
              //  type: String,
              isLeadOnly: Boolean,
              multiSelect: Boolean,
            },
          ],
          extras: Boolean,
          extrasList: [],
        },
      ],
      title: String,
      updatedOn: String,
      video: String,
      supplierId: String,
    },
  ]
});

import { Document } from 'mongoose';

export interface AttractionsInterface extends Document {
  data: [
    {
      id: string,
      // type: string,
      active: boolean,
      additionalInfo: string,
      addressLine: string,
      allPassengerDetailsRequired: boolean,
      askSpecialRequirements: boolean,
      category: [],
      city: string,
      contentApproved: boolean,
      country: string,
      createdOn: string,
      currency: string,
      description: string,
      dropoff: boolean,
      exclusions: string,
      fromPrice: number,
      highlights: string,
      hoursOfOperation: {},
      imagePath: [
        {
          original: string,
          thumbnail: string,
        }
      ],
      inclusions: string,
      keywords: string,
      latitude: string,
      longitude: string,
      pickup: boolean,
      priceApproved: boolean,
      refMspPrice: number,
      refOriginalPrice: number,
      ticketTypesAndPackages: [
        {
          id: string,
          ticketTypeFormat: string,
          name: string,
          description: {},
          termsAndConditions: {},
          isVisitDateCompulsory: boolean,
          isOpenDated: boolean,
          isSeparateEmail: boolean,
          advanceBookingDays: {},
          validFor: string,
          applyCapacity: boolean,
          variants: [
            {
              // type: string,
              name: string,
              minimumPax: number,
              maximumPax: number,
              minimumAge: number,
              maximumAge: number,
            }
          ],
          duration: string,
          questions: [
            {
              id: string,
              question: string,
              options: [],
              optional: boolean,
              // type: string,
              isLeadOnly: boolean,
              multiSelect: boolean,
            },
          ],
          extras: boolean,
          extrasList: [],
        },
      ],
      title: string,
      updatedOn: string,
      video: string,
      supplierId: string,
    },
  ];
}
