"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DefaultComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("src/app/animations");
var DefaultComponent = /** @class */ (function () {
    function DefaultComponent(titleService, sidebarService, breadcrumbService, config) {
        var _this = this;
        this.titleService = titleService;
        this.sidebarService = sidebarService;
        this.breadcrumbService = breadcrumbService;
        this.config = config;
        this.sidebarService.sideNavState$.subscribe(function (res) {
            console.log(res);
            _this.onSideNavChange = res;
        }),
            this.config.getData().subscribe(function (data) {
                console.warn(data);
            });
    }
    DefaultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcrumbService.breadcrumbChanged.subscribe(function (crumbs) {
            _this.titleService.setTitle(_this.createTitle(crumbs));
        });
    };
    DefaultComponent.prototype.createTitle = function (routesCollection) {
        var title = 'KMS Dashboard';
        var titles = routesCollection.filter(function (route) { return route.displayName; });
        if (!titles.length) {
            return title;
        }
        var routeTitle = this.titlesToString(titles);
        return routeTitle + " " + title;
    };
    DefaultComponent.prototype.titlesToString = function (titles) {
        return titles.reduce(function (prev, curr) {
            return curr.displayName + " > " + prev;
        }, '');
    };
    DefaultComponent = __decorate([
        core_1.Component({
            selector: 'app-default',
            templateUrl: './default.component.html',
            styleUrls: ['./default.component.scss'],
            animations: [animations_1.onMainContentChange]
        })
    ], DefaultComponent);
    return DefaultComponent;
}());
exports.DefaultComponent = DefaultComponent;
