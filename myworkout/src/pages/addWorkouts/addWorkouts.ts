import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';

import { WorkoutsPage } from '../workouts/workouts';

@Component({
  selector: 'page-addWorkouts',
  templateUrl: 'addWorkouts.html'
})

export class AddworkoutPage{
   title: string;
   note: string;
   type: string;
   result: any;

  constructor(
    public navCtrl:NavController,
    public workoutService:WorkoutService){

  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    //Add Workout
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data
    }, err => console.log(err), () => console.log('Workout Added'));

    // this.navCtrl.setRoot(WorkoutsPage)
    this.navCtrl.push(WorkoutsPage);
  }
}
