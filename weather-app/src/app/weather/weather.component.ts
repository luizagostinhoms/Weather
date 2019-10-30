import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() city: CityWeather;


  constructor() { }

  ngOnInit() {
  }

}

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
