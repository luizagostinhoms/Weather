import { Component } from '@angular/core';
import { CityWeather } from './weather/weather.component';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  
  city: CityWeather;

  constructor(){
    this.city = new CityWeather();
    this.city.cityName = "São Paulo";
    this.city.countryName = "BR";
    this.city.dateUpdate = new Date;
    this.city.humidity = 55;
    this.city.pressure = 60;
    this.city.temperature = 30;
  }

}
