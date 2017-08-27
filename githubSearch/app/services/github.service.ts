import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
  private username:string;
  private clientId = '4fcc26bd6d90e795e920';
  private clientSecret='91a60dbb13aeaf51f8315c61e76405f8ba4b354f';

  constructor(private _http:Http){
    console.log('Github Service Ready..');
    this.username = 'sndsabin';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret).map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos'+'?client_id='+this.clientId+'&client_secret='+this.clientSecret).map(res => res.json())
  }
  updateUser(username:string){
    this.username = username;
  }
}
