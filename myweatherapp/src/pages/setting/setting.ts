import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core';
import { SecureStorage } from 'ionic-native';

import { WeatherService } from '../../services/weather.service';

import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage{
  defaultCity:any;
  results: any;
  query: any;
  city: any;


  constructor(public weatherService:WeatherService,
              public navCtrl:NavController
            ){

  }
  ngOnInit(){
    this.getDefaultCity();
  }
  getQuery(){
    this.weatherService.searchCities(this.query)
                       .subscribe(results => {
                         this.results = results.RESULTS;
                       });
  }
  getDefaultCity(){
    // if(secureStorage.get('city')){
    //   this.defaultCity = JSON.parse(secureStorage.get('city')).name;
    // }else{
    //   this.defaultCity = '';
    // }
  }
  setDefaultCity(city){
  //   this.results = [];
  //
  //   secureStorage.set('city', JSON.stringify(city))
  //                .then(
  //                  data => console.log(data),
  //                  error => console.log(error)
  //                );
  }

}
