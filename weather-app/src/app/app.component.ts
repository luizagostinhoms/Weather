import { Component } from '@angular/core';
import { CityRequestWeather } from './weather/model/cityweather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title = 'weather-app';
  cities: Array<CityRequestWeather>;

  constructor() {
    this.cities = new Array<CityRequestWeather>();
    this.cities.push(new CityRequestWeather("Nuuk", "GL"));
    this.cities.push(new CityRequestWeather("Urubici", "BR"));
    this.cities.push(new CityRequestWeather("Nairobi", "KE"));

  }
}
