import {Component} from "angular2/core";

import {BannerBarComponent} from "../bookmark/banner.component";

@Component({
  selector : "bookmark",
  templateUrl : "./app/bookmark/bookmark.component.html",
  directives : [
    BannerBarComponent
  ]
})

export class BookmarkComponent {

}
