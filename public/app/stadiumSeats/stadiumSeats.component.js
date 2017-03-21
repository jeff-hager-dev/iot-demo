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
    function StadiumSeatsComponent(zone, stadiumSeatsService, checkinService) {
        this.zone = zone;
        this.stadiumSeatsService = stadiumSeatsService;
        this.checkinService = checkinService;
        this.users = [];
        this.count = 20;
    }
    StadiumSeatsComponent.prototype.ngOnInit = function () {
        this.setupChairs();
        this.checkinUsers();
        this.updateStanding();
    };
    StadiumSeatsComponent.prototype.ngOnDestroy = function () {
        this.standConnection.unsubscribe();
        this.checkinConnection.unsubscribe();
    };
    StadiumSeatsComponent.prototype.setupChairs = function () {
        for (var index = 0; index < this.count; index++) {
            this.users.push({
                number: null,
                name: null,
                gender: null,
                isStanding: null
            });
        }
    };
    StadiumSeatsComponent.prototype.updateStanding = function () {
        var _this = this;
        this.standConnection = this.stadiumSeatsService.getMessages().subscribe(function (data) {
            console.log('User updating standing', data);
            _this.zone.run(function () {
                _this.users.map(function (user) {
                    if (user.number == data.number) {
                        user.isStanding = (data.isStanding == "true");
                    }
                });
            });
        });
    };
    StadiumSeatsComponent.prototype.checkinUsers = function () {
        var _this = this;
        this.checkinConnection = this.checkinService.getUsers().subscribe(function (data) {
            console.log("User Checkin", data);
            _this.zone.run(function () {
                _this.users.map(function (user) {
                    if (user.number == data.number) {
                        user.gender = data.gender;
                        user.name = data.name;
                        user.isStanding = false;
                    }
                });
            });
        });
    };
    StadiumSeatsComponent = __decorate([
        core_1.Component({
            selector: 'stadium-seat-component',
            templateUrl: './app/stadiumSeats/stadiumSeats.component.html',
            styleUrls: ['./app/stadiumSeats/stadiumSeats.component.css'],
            providers: [stadiumSeats_service_1.StadiumSeatsService, checkin_service_1.CheckinService]
        }), 
        __metadata('design:paramtypes', [core_1.NgZone, stadiumSeats_service_1.StadiumSeatsService, checkin_service_1.CheckinService])
    ], StadiumSeatsComponent);
    return StadiumSeatsComponent;
}());
exports.StadiumSeatsComponent = StadiumSeatsComponent;
//# sourceMappingURL=stadiumSeats.component.js.map