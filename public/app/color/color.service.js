//import { Http } from '@angular/http';
"use strict";
var ColorService = (function () {
    function ColorService() {
        this.url = 'http://localhost:3005/1/#CCCCCC';
    }
    ColorService.prototype.setColor = function (number, color) {
        alert('color service called');
        //this.http.get(this.url)
        //.then(function(response: any) {
        //    alert('response was called!');
        //})
    };
    return ColorService;
}());
exports.ColorService = ColorService;
//# sourceMappingURL=color.service.js.map