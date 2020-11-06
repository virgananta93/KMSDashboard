"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var divider_1 = require("@angular/material/divider");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var menu_1 = require("@angular/material/menu");
var list_1 = require("@angular/material/list");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                sidebar_component_1.SidebarComponent
            ],
            imports: [
                common_1.CommonModule,
                divider_1.MatDividerModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                menu_1.MatMenuModule,
                list_1.MatListModule
            ],
            exports: [
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                sidebar_component_1.SidebarComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
