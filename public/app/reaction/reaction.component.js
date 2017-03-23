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
var reaction_service_1 = require('./reaction.service');
var checkin_service_1 = require('../checkin.service');
var moment = require('moment');
var ReactionComponent = (function () {
    function ReactionComponent(reactionService, checkinService) {
        this.reactionService = reactionService;
        this.checkinService = checkinService;
        this.users = [];
        this.reactions = [];
        this.disqualified = [];
        this.countdown = 3;
        this.isCountdown = false;
        this.count = 20;
    }
    ReactionComponent.prototype.startCountdown = function () {
        var _this = this;
        this.isCountdown = true;
        setTimeout(function () {
            _this.countdown = 2;
            setTimeout(function () {
                _this.countdown = 1;
                setTimeout(function () {
                    _this.countdown = "GO!";
                    _this.startTime = new Date();
                    setTimeout(function () {
                        _this.isCountdown = false;
                        _this.countdown = 3;
                    }, 5000);
                }, 1000);
            }, 1000);
        }, 1000);
    };
    ReactionComponent.prototype.createNewReaction = function (reaction) {
        var now = moment(reaction.time);
        var then = moment(this.startTime);
        var diff = now.diff(then);
        var d = moment.duration(diff);
        var s = Math.floor(d.asHours()) + moment.utc(diff).format(":mm:ss");
        var newReaction = {
            id: reaction.number,
            name: reaction.number,
            time: s
        };
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.number == (newReaction.id)) {
                if (user.name) {
                    newReaction.name = user.name;
                }
                break;
            }
        }
        var existing = this.reactions.filter(function (reaction) { return reaction.id == newReaction.id; });
        var existingDQ = this.disqualified.filter(function (reaction) { return reaction.id == newReaction.id; });
        if (existing.length == 0 && existingDQ.length == 0 && this.startTime) {
            this.reactions.push(newReaction);
        }
        else if (existing.length == 0 && existingDQ.length == 0 && !this.startTime) {
            this.disqualified.push(newReaction);
        }
    };
    ReactionComponent.prototype.checkInUsers = function () {
        var _this = this;
        this.checkInConnection = this.checkinService.getUsers().subscribe(function (data) {
            if (data instanceof Array && data.length > 0) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var info = data_1[_i];
                    for (var _a = 0, _b = _this.users; _a < _b.length; _a++) {
                        var user = _b[_a];
                        if (user.number == (info.number || -1)) {
                            user.name = info.name;
                        }
                    }
                }
            }
            else {
                for (var _c = 0, _d = _this.users; _c < _d.length; _c++) {
                    var user = _d[_c];
                    if (user.number == (data.number || -1)) {
                        user.name = data.name;
                    }
                }
            }
        });
    };
    ReactionComponent.prototype.setupUsers = function () {
        for (var index = 0; index < this.count; index++) {
            this.users.push({
                number: (index + 1),
                name: null,
            });
        }
    };
    ReactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setupUsers();
        this.connection = this.reactionService.getReactions().subscribe(function (reaction) {
            _this.createNewReaction(reaction);
            console.log(reaction);
        });
        this.checkInUsers();
    };
    ReactionComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
        this.checkInConnection.unsubscribe();
    };
    ReactionComponent = __decorate([
        core_1.Component({
            selector: 'reaction-component',
            templateUrl: './app/reaction/reaction.component.html',
            styleUrls: ['./app/reaction/reaction.component.css'],
            providers: [reaction_service_1.ReactionService, checkin_service_1.CheckinService]
        }), 
        __metadata('design:paramtypes', [reaction_service_1.ReactionService, checkin_service_1.CheckinService])
    ], ReactionComponent);
    return ReactionComponent;
}());
exports.ReactionComponent = ReactionComponent;
//# sourceMappingURL=reaction.component.js.map