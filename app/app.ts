import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <h3>Hello World from AppComponent!!!</h3>
  `
})

export class App {



}

bootstrap(App);
