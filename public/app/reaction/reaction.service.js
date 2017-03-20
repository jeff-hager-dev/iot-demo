"use strict";
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var ReactionService = (function () {
    function ReactionService() {
        this.url = 'http://localhost:3005';
    }
    ReactionService.prototype.getReactions = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on('reaction', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ReactionService;
}());
exports.ReactionService = ReactionService;
//# sourceMappingURL=reaction.service.js.map