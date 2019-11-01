import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { OpenWeatherMapService } from '../services/openweathermap.service';
import { ConfigService, ConfigLoader } from '@ngx-config/core';
import { CityRequestWeather } from './model/cityrequestweather';
import { CityWeather } from './model/cityweather';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [ WeatherComponent ],
      providers: [HttpClient, HttpHandler,  OpenWeatherMapService, ConfigService, ConfigLoader]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    component.cityRquest = new CityRequestWeather("São Paulo", "BR");
    spyOn(component, 'intervalNextUdpate');
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component, 'getInfoWeatherService');
    expect(component).toBeTruthy();
  });
});
