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
var stadiumSeats_service_1 = require('./stadiumSeats.service');
var StadiumSeatsComponent = (function () {
    function StadiumSeatsComponent(stadiumSeatsService) {
        this.stadiumSeatsService = stadiumSeatsService;
        this.users = [];
        this.messages = [];
        this.count = 20;
    }
    StadiumSeatsComponent.prototype.sendMessage = function () {
        this.stadiumSeatsService.sendMessage(this.message);
        this.message = '';
        for (var index = 0; index < this.count; index++) {
            var user = {
                id: 1,
                name: "Lauren",
                gender: "F",
                isStanding: true
            };
            if (index == 1 || index == 2) {
                user.name = null;
            }
            if (index == 3 || index == 4 || index == 7) {
                user.isStanding = false;
            }
            if (index == 3 || index == 6 || index == 5) {
                user.gender = "M";
            }
            this.users.push(user);
        }
    };
    StadiumSeatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.stadiumSeatsService.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    StadiumSeatsComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    StadiumSeatsComponent = __decorate([
        core_1.Component({
            selector: 'stadium-seat-component',
            templateUrl: './app/stadiumSeats/stadiumSeats.component.html',
            providers: [stadiumSeats_service_1.StadiumSeatsService]
        }), 
        __metadata('design:paramtypes', [stadiumSeats_service_1.StadiumSeatsService])
    ], StadiumSeatsComponent);
    return StadiumSeatsComponent;
}());
exports.StadiumSeatsComponent = StadiumSeatsComponent;
//# sourceMappingURL=stadiumSeats.component.js.map