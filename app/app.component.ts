import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {BookmarkListComponent} from "./bookmark/bookmarklist.component";
import {BookmarkComponent} from "./bookmark/bookmark.component" ;

@Component({
  selector: 'app',
  template: `
    <h3>Hello World from AppComponent!!!</h3>
    <bookmark></bookmark>
  `,
  directives : [
    ROUTER_DIRECTIVES,
    BookmarkComponent],
  providers : [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path : "/bookmarklist",
    name : "BookmarkList",
    component : BookmarkListComponent
  },
  {
    path : "/bookmark",
    name : "Bookmark",
    component : BookmarkComponent
  }
])

export class AppComponent {}
