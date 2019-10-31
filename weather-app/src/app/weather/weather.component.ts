import { Component, OnInit, Input } from '@angular/core';
import { CityWeather } from './model/cityweather';
import { OpenWeatherMapService } from '../services/openweathermap.service';
import { ResponseWeather } from '../services/model/responseweather';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '@ngx-config/core';
import { CityRequestWeather } from './model/cityrequestweather';
import { MapperResultWeather } from './model/mapperweather';
import { interval } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() cityRquest: CityRequestWeather;
  city: CityWeather = new CityWeather();
  
  constructor(private openWeatherMapService: OpenWeatherMapService, private config: ConfigService) {}

  ngOnInit() {

    this.getInfoWeatherService(this.cityRquest.cityName, this.cityRquest.countryName); //first req.
    this.intervalNextUdpate();
   
  }

  intervalNextUdpate() {
    const intervaln = this.config.getSettings('intervalApi');
    const interlvaNumber = Number(intervaln); //10 min.

    interval(interlvaNumber).subscribe(x => { //interval for next update
      this.getInfoWeatherService(this.cityRquest.cityName, this.cityRquest.countryName); 
    });
  }

  getInfoWeatherService(cityName: string, countryName: string){
    this.openWeatherMapService.getWeatherCity(cityName, countryName).subscribe(
      data => {
        this.treatResult(data as ResponseWeather);
      },
      (err: HttpErrorResponse) => {
      }
    );
  }

  treatResult(response: ResponseWeather) {
    let mapper: MapperResultWeather = new MapperResultWeather();
    this.city = mapper.mapperResultWahter(response);
  }
}

