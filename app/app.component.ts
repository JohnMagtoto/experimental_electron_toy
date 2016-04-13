import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {BookmarkListComponent} from "./bookmark/bookmarklist.component";

@Component({
  selector: 'app',
  template: `
    <h3>Hello World from AppComponent!!!</h3>
  `,
  directives : [ROUTER_DIRECTIVES],
  providers : [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path : "/bookmarklist",
    name : "BookmarkList",
    component : BookmarkListComponent
  }
])

export class AppComponent {}
