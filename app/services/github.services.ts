/**
 * Created by gregorybarnes on 9/22/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username: string;
  private client_id = 'cc59bca4d517c220d60b';
  private client_secret = '86c51ba495e89839682aa3985be69fcf9ce0e6b1';

  constructor(private _http:Http){
    console.log('Github Service Ready...');
    this.username = 'gregorybarnes';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json())
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json())
  }

  updateUser(username: string){
    this.username = username;
  }
}
