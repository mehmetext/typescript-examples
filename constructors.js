"use strict";
exports.__esModule = true;
var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi => travel from (x: ".concat(this.location.x, ", y: ").concat(this.location.y, ") to (x: ").concat(point.x, ", y: ").concat(point.y, ")"));
    };
    return Taxi;
}());
var taxi1 = new Taxi({ x: 2, y: 3 });
taxi1.travelTo({
    x: 1,
    y: 3
});
