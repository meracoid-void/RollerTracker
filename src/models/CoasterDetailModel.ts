export interface CoasterDetailsModel {
    '@context': string;
    '@id': string;
    '@type': string;
    id: number;
    name: string;
    materialType: MaterialType;
    seatingType: SeatingType;
    model: Model;
    speed: number;
    height: number;
    length: number;
    inversionsNumber: number;
    manufacturer: Manufacturer;
    restraint: Restraint;
    launchs: Launch[];
    park: Park;
    status: Status;
    openingDate: string;
    closingDate: string;
    totalRatings: number;
    validDuels: number;
    score: string;
    rank: number;
    mainImage: MainImage;
  }
  
  export interface MaterialType {
    '@type': string;
    name: string;
  }
  
  export interface SeatingType {
    '@type': string;
    name: string;
  }
  
  export interface Model {
    '@id': string;
    '@type': string;
    name: string;
  }
  
  export interface Manufacturer {
    '@type': string;
    name: string;
  }
  
  export interface Restraint {
    '@id': string;
    '@type': string;
    name: string;
  }
  
  export interface Launch {
    '@id': string;
    '@type': string;
    name: string;
  }
  
  export interface Park {
    '@id': string;
    '@type': string;
    name: string;
    country: Country;
  }
  
  export interface Country {
    '@type': string;
    name: string;
  }
  
  export interface Status {
    '@id': string;
    '@type': string;
    name: string;
  }
  
  export interface MainImage {
    '@id': string;
    '@type': string;
    path: string;
  }
  