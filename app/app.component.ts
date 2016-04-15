import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {BookmarkListComponent} from "./bookmark/bookmarklist.component";
import {BookmarkComponent} from "./bookmark/bookmark.component" ;
import {BannerBarComponent} from "./banner/banner.component";

@Component({
  selector: 'app',
  templateUrl : './app/app.component.html',
  styleUrls : ["./app/app.component.css"],
  directives : [
    ROUTER_DIRECTIVES,
    BookmarkComponent,
    BannerBarComponent],
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
