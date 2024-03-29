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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var stadiumSeats_component_1 = require('./stadiumSeats/stadiumSeats.component');
var header_component_1 = require('./header/header.component');
var reaction_component_1 = require('./reaction/reaction.component');
var seat_component_1 = require('./seat/seat.component');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var color_component_1 = require('./color/color.component');
var angular2_color_picker_1 = require('angular2-color-picker');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular2_color_picker_1.ColorPickerModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                stadiumSeats_component_1.StadiumSeatsComponent,
                seat_component_1.SeatComponent,
                reaction_component_1.ReactionComponent,
                header_component_1.HeaderComponent,
                color_component_1.ColorComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map