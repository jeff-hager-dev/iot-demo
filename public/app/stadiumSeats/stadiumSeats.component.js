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
                number: (index + 1),
                name: null,
                gender: null,
                isOn: null
            });
        }
    };
    StadiumSeatsComponent.prototype.updateStanding = function () {
        var _this = this;
        this.standConnection = this.stadiumSeatsService.getMessages().subscribe(function (data) {
            console.log('User standing update', data);
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.number == (data.number || -1)) {
                    user.isOn = data.isOn;
                }
            }
        });
    };
    StadiumSeatsComponent.prototype.checkinUsers = function () {
        var _this = this;
        this.checkinConnection = this.checkinService.getUsers().subscribe(function (data) {
            console.log("User Checkin", data);
            if (data instanceof Array && data.length > 0) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var info = data_1[_i];
                    for (var _a = 0, _b = _this.users; _a < _b.length; _a++) {
                        var user = _b[_a];
                        if (user.number == (info.number || -1)) {
                            user.gender = info.gender;
                            user.name = info.name;
                            user.isOn = info.isOn || false;
                        }
                    }
                }
            }
            else {
                for (var _c = 0, _d = _this.users; _c < _d.length; _c++) {
                    var user = _d[_c];
                    if (user.number == (data.number || -1)) {
                        user.gender = data.gender;
                        user.name = data.name;
                        user.isOn = false;
                    }
                }
            }
        });
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