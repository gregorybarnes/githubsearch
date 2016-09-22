import { Component } from '@angular/core';
import { GithubService } from './services/github.services';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ GithubService ]
})
export class AppComponent {

}
