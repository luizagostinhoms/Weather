import { Component } from '@angular/core';
import { CityWeather } from './weather/weather.component';
import { OpenWeatherMapService } from './services/openweathermap.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  
  city: CityWeather;

  constructor(private openWeatherMapService: OpenWeatherMapService){
    
    this.getInfoWeatherServce("London", "uk");

    this.city = new CityWeather();
    this.city.cityName = "São Paulo";
    this.city.countryName = "BR";
    this.city.dateUpdate = new Date;
    this.city.humidity = 55;
    this.city.pressure = 60;
    this.city.temperature = 30;
  }

  getInfoWeatherServce(city: string, countryCode: string){
    this.openWeatherMapService.getWeatherCity(city, countryCode).subscribe(
      data => {
        this.treatResult(data);
      },
      (err: HttpErrorResponse) => {
        console.debug(err);
      }
    );
  }

  treatResult(data){
    console.debug(data);
  }

}
