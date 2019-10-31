import { Component, OnInit, Input } from '@angular/core';
import { CityWeather } from './model/cityweather';

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

