export class CreateBookingDTO
 {
  firstName: String;
  lastName: String;
  personTitle: String;
  email : String;
    phone: String;
    passport: String;
    date: String;;
    pickup: String;
    protect: Boolean;
    comments: String;
    currency: String
    bookings:
    [
      {
          id: String;
          // type: String;
          ticketId: String;
          attractionId: String;
          questions :
            [
              {
                 id: String,
                 answer: String
             }
         ],
           firstName: String;
           lastName: String;
           personTitle: String;
           email: String;
           phone: String
      }
  ]
  
}
