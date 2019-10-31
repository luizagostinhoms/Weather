import { ResponseWeather } from 'src/app/services/model/responseweather';

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

  export class CityRequestWeather {
    cityName: string;
    countryName: string;
    constructor(cityName: string, countryName: string) {
      this.cityName = cityName;
      this.countryName = countryName;
    }
  }

  export class MapperResultWeather {

    mapperResultWahter(responseWeather: ResponseWeather) : CityWeather {
      
      let cityWeather: CityWeather = new CityWeather();
      cityWeather.cityName = responseWeather.name;
      cityWeather.countryName = responseWeather.sys.country;
      cityWeather.temperature = responseWeather.main.temp;
      cityWeather.humidity = responseWeather.main.humidity;
      cityWeather.pressure = responseWeather.main.pressure;
      cityWeather.dateUpdate = new Date();

      return cityWeather;
    }

  }
  
  