export class CityWeather {

    cityName: string;
    countryName: string;
    temperature: number;
    humidity: number;
    pressure: number;
    dateUpdate: Date;
  
    getCompositName(){
      return this.cityName + ", " + this.countryName;
    }
  }
  