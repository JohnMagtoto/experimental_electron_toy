import {Component} from "angular2/core";

import {BookmarkListComponent} from "./bookmarklist.component";

@Component({
  selector : "bookmark",
  templateUrl : "./app/bookmark/bookmark.component.html",
  directives : [
    BookmarkListComponent
  ],
  styleUrls : ["./app/bookmark/bookmark.component.css"]
})

export class BookmarkComponent {

}
