"use strict";
exports.__esModule = true;
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi => travelTo(x: ".concat(point.x, ", y: ").concat(point.y, ")"));
    };
    return Taxi;
}());
var taxi1 = new Taxi();
taxi1.currentLocation = { x: 2, y: 3 };
console.log("taxi1.currentLocation:", taxi1.currentLocation);
taxi1.travelTo({
    x: 1,
    y: 3
});
