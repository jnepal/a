import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { AddworkoutPage } from '../pages/addWorkouts/addWorkouts';
import { WorkoutDetailsPage } from '../pages/workoutDetails/workoutDetails';

import { WorkoutService } from '../services/workout.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutsPage,
    AddworkoutPage,
    WorkoutDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    WorkoutsPage,
    AddworkoutPage,
    WorkoutDetailsPage
  ],
  providers: [WorkoutService]
})
export class AppModule {}
