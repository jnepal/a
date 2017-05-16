import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()

export class WorkoutService{
  protected apiKey: string;
  protected workoutUrl: string;
  protected database: string;
  protected collection:string;

  constructor(public http:Http){
    console.log('Service Connected..');

    this.apiKey     = 'API_KEY';
    this.database   = 'DATABASE';
    this.collection = 'COLLECTION';
    this.workoutUrl = 'https://api.mlab.com/api/1/databases/'+this.database+'/collections/'+this.collection;
  }
  getWorkouts(){
    return this.http.get(this.workoutUrl+'?apiKey='+this.apiKey)
               .map(res => res.json());
  }
  addWorkout(workout){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.workoutUrl+'?apiKey='+this.apiKey, JSON.stringify(workout),{headers: headers})
               .map(res => res.json());
  }

  deleteWorkout(workoutId){
    return this.http.delete(this.workoutUrl+'/'+workoutId+'?apiKey='+this.apiKey)
                    .map(res => res.json());
  }
}
