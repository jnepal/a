import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { WorkoutsPage } from '../workouts/workouts';

import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'page-workoutDetails',
  templateUrl: 'workoutDetails.html'
})

export class WorkoutDetailsPage{
  workout: any;
  result: any;

  constructor(
    public workoutService:WorkoutService,
    public navCtrl:NavController,
    public navParams:NavParams){
    this.workout = navParams.data.workout;
  }

  deleteWorkout(workoutId){
    this.workoutService.deleteWorkout(workoutId)
                       .subscribe(data => {
                         this.result = data
                       }, err => console.log(err), () => console.log('Workout Deleted'));

    // this.navCtrl.setRoot(WorkoutsPage);
    this.navCtrl.push(WorkoutsPage);
  }
}
