"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi => travel from (x: ".concat(this.location.x, ", y: ").concat(this.location.y, ") to (x: ").concat(point.x, ", y: ").concat(point.y, ")"));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error("x,y can not be negative");
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi1 = new Taxi({ x: 2, y: 3 });
taxi1.location = { x: 4, y: 5 };
console.log("taxi1.location =", taxi1.location);
taxi1.travelTo({
    x: 1,
    y: 3,
});
