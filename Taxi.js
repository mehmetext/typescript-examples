"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxi = void 0;
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
exports.Taxi = Taxi;
