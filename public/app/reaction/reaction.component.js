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
var ReactionComponent = (function () {
    function ReactionComponent(reactionService) {
        this.reactionService = reactionService;
        this.reactions = [];
        this.countdown = 3;
        this.isCountdown = false;
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
    ReactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.reactionService.getReactions().subscribe(function (reaction) {
            _this.reactions.push(reaction);
        });
    };
    ReactionComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    ReactionComponent = __decorate([
        core_1.Component({
            selector: 'reaction-component',
            templateUrl: './app/reaction/reaction.component.html',
            styleUrls: ['./app/reaction/reaction.component.css'],
            providers: [reaction_service_1.ReactionService]
        }), 
        __metadata('design:paramtypes', [reaction_service_1.ReactionService])
    ], ReactionComponent);
    return ReactionComponent;
}());
exports.ReactionComponent = ReactionComponent;
//# sourceMappingURL=reaction.component.js.map