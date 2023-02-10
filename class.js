"use strict";
exports.__esModule = true;
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi travelTo(x: ".concat(point.x, ", y: ").concat(point.y, ")"));
    };
    return Taxi;
}());
