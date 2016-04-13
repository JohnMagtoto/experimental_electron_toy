"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require("angular2/router");
var bookmarklist_component_1 = require("./bookmark/bookmarklist.component");
var bookmark_component_1 = require("./bookmark/bookmark.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <h3>Hello World from AppComponent!!!</h3>\n    <bookmark></bookmark>\n  ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                bookmark_component_1.BookmarkComponent],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.RouteConfig([
            {
                path: "/bookmarklist",
                name: "BookmarkList",
                component: bookmarklist_component_1.BookmarkListComponent
            },
            {
                path: "/bookmark",
                name: "Bookmark",
                component: bookmark_component_1.BookmarkComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map