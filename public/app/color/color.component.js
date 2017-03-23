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
var color_service_1 = require('./color.service');
var angular2_color_picker_1 = require('angular2-color-picker');
var Color = (function () {
    function Color() {
    }
    return Color;
}());
exports.Color = Color;
var ColorComponent = (function () {
    function ColorComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
        this.color = '#fff';
        this.count = 20;
    }
    ColorComponent.prototype.setColor = function (color, user) {
        this.colorService.setColor(user, color.slice(1));
    };
    ColorComponent.prototype.setAllColors = function (color) {
        var _this = this;
        this.colors.forEach(function (userColor) {
            userColor.color = color;
            _this.colorService.setColor(userColor.number, userColor.color.slice(1));
        });
    };
    ColorComponent.prototype.setupColors = function () {
        for (var index = 0; index < this.count; index++) {
            this.colors.push({
                number: (index + 1),
                color: '#fff'
            });
        }
    };
    ColorComponent.prototype.ngOnInit = function () {
        this.setupColors();
    };
    ColorComponent.prototype.ngOnDestroy = function () {
    };
    ColorComponent = __decorate([
        core_1.Component({
            selector: 'color-component',
            templateUrl: './app/color/color.component.html',
            styleUrls: ['./app/color/color.component.css'],
            providers: [color_service_1.ColorService, angular2_color_picker_1.ColorPickerService]
        }), 
        __metadata('design:paramtypes', [color_service_1.ColorService])
    ], ColorComponent);
    return ColorComponent;
}());
exports.ColorComponent = ColorComponent;
//# sourceMappingURL=color.component.js.map