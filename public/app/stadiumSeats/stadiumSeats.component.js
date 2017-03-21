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
var checkin_service_1 = require('../checkin.service');
var StadiumSeatsComponent = (function () {
    function StadiumSeatsComponent(stadiumSeatsService, checkinService) {
        this.stadiumSeatsService = stadiumSeatsService;
        this.checkinService = checkinService;
        this.users = [];
        this.count = 20;
    }
    StadiumSeatsComponent.prototype.setUsers = function () {
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
        this.standConnection = this.stadiumSeatsService.getMessages().subscribe(function (user) {
            _this.users.push(user);
        });
        this.checkinConnection = this.checkinService.getUsers().subscribe(function (user) {
            _this.users.push(user);
        });
        this.setUsers();
    };
    StadiumSeatsComponent.prototype.ngOnDestroy = function () {
        this.standConnection.unsubscribe();
        this.checkinConnection.unsubscribe();
    };
    StadiumSeatsComponent = __decorate([
        core_1.Component({
            selector: 'stadium-seat-component',
            templateUrl: './app/stadiumSeats/stadiumSeats.component.html',
            styleUrls: ['./app/stadiumSeats/stadiumSeats.component.css'],
            providers: [stadiumSeats_service_1.StadiumSeatsService, checkin_service_1.CheckinService]
        }), 
        __metadata('design:paramtypes', [stadiumSeats_service_1.StadiumSeatsService, checkin_service_1.CheckinService])
    ], StadiumSeatsComponent);
    return StadiumSeatsComponent;
}());
exports.StadiumSeatsComponent = StadiumSeatsComponent;
//# sourceMappingURL=stadiumSeats.component.js.map