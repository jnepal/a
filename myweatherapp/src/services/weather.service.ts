import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()

export class WeatherService{
  apiKey: string;
  conditionUrl: string;
  searchUrl: string;

  constructor(public http:Http){
    this.apiKey = 'API_KEY';
    this.conditionUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q/'
    this.searchUrl = 'http://localhost:8100/search/aq?query=';
  }

  getWeather(zmw){
    return this.http.get(this.conditionUrl+'zmw:'+zmw+'.json')
               .map(res => res.json());
  }

  searchCities(query){
    return this.http.get(this.searchUrl+''+query)
                    .map(res => res.json());
  }
}
