/**
 * Created by gregorybarnes on 9/22/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username: string;

  constructor(private _http:Http){
    console.log('Github Service Ready...');
    this.username = 'gregorybarnes';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username).map(res => res.json())
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos').map(res => res.json())
  }

  updateUser(username: string){
    this.username = username;
  }
}
