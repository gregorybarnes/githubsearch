/**
 * Created by gregorybarnes on 9/22/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
  private username: string;

  constructor(){
    console.log('Github Service Ready...');
    this.username = 'gregorybarnes';
  }
}
