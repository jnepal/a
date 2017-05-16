import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { WeatherService } from '../services/weather.service';

import { TabsPage } from '../pages/tabs/tabs';
import { WeatherPage } from '../pages/weather/weather';
import { SettingPage } from '../pages/setting/setting';

@NgModule({
  declarations: [
    MyApp,
    SettingPage,
    TabsPage,
    WeatherPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingPage,
    TabsPage,
    WeatherPage
  ],
  providers: [WeatherService]
})
export class AppModule {}
