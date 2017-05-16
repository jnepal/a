import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';

import { WorkoutDetailsPage } from '../workoutDetails/workoutDetails';

@Component({
  selector: 'page-workout',
  templateUrl: 'workouts.html'
})

export class WorkoutsPage{
  private workouts: any;
  constructor(
    public navCtrl:NavController,
    public workoutService:WorkoutService){

      //used to fix automatically update view after navigated from addWorkouts
      //Poor code
      this.workoutService.getWorkouts().subscribe(workouts => {
        this.workouts = workouts;
      });

  }
  //used ngAfterViewInit but no luck
  ngOnInit(){
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected($event, workout){
    this.navCtrl.push(WorkoutDetailsPage, {
      workout:workout
    })
  }
}
