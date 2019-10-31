import { Component } from '@angular/core';
import { OpenWeatherMapService } from './services/openweathermap.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CityWeather, MapperResultWeather } from './weather/model/cityweather';
import { ResponseWeather } from './services/model/responseweather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  
  cities: Array<CityWeather> = new Array<CityWeather>();

  constructor(private openWeatherMapService: OpenWeatherMapService){
    this.getInfoWeatherServce("Nuuk", "GL");
    this.getInfoWeatherServce("Urubici", "BR");
    this.getInfoWeatherServce("Nairobi", "KE");

  }

  getInfoWeatherServce(city: string, countryCode: string){
    this.openWeatherMapService.getWeatherCity(city, countryCode).subscribe(
      data => {
        this.treatResult(data as ResponseWeather);
      },
      (err: HttpErrorResponse) => {
      }
    );
  }

  treatResult(response: ResponseWeather){
    let mapper: MapperResultWeather = new MapperResultWeather();
    this.cities.push(mapper.mapperResultWahter(response));
  }

}
