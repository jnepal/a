import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})

export class WeatherPage{
  query:string;
  weather: any;
  results: any;
  zmw: any;


  constructor(public weatherService:WeatherService){

  }

  ngOnInit(){
    this.getDefaultCity();
    this.weatherService.getWeather(this.zmw)
                       .subscribe(weather => {
                         this.weather = weather.current_observation;
                       });
  }
  getQuery(){
    this.weatherService.searchCities(this.query)
                      .subscribe(result => {
                        this.results = result.RESULTS;
                      });
  }
  chooseCity(city){
    this.results = [];
    this.weatherService.getWeather(city.zmw)
                       .subscribe(weather => {
                         this.weather = weather.current_observation;
                       });
  }
  getDefaultCity(){
    this.zmw = '94125.1.99999';
  }
}
