export class CreateCountriesDto {
  data: [
    {
      readonly country: { type: string; trim: true };
      readonly count: { type: number; trim: true };
    },
  ];
}
