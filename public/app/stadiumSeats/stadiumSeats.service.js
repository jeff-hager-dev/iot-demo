"use strict";
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var StadiumSeatsService = (function () {
    function StadiumSeatsService() {
        this.url = 'http://localhost:3005';
    }
    StadiumSeatsService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    StadiumSeatsService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return StadiumSeatsService;
}());
exports.StadiumSeatsService = StadiumSeatsService;
//# sourceMappingURL=stadiumSeats.service.js.map