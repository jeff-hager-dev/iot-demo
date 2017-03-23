"use strict";
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var config_1 = require('../config');
var ReactionService = (function () {
    function ReactionService() {
    }
    ReactionService.prototype.getReactions = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io(config_1.Config.socketUrl);
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