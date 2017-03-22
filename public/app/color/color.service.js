"use strict";
var Observable_1 = require('rxjs/Observable');
var io = require('socket.io-client');
var ColorService = (function () {
    function ColorService() {
        this.url = 'http://localhost:3005';
    }
    ColorService.prototype.getColors = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket = io(_this.url);
            _this.socket.on('color', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ColorService;
}());
exports.ColorService = ColorService;
//# sourceMappingURL=color.service.js.map