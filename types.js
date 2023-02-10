"use strict";
exports.__esModule = true;
var a = 3;
var b = "Mehmet";
var c = true;
var d;
var e = [1, 2, 3];
var g = [1, "Mehmet", true];
var h = ["Mehmet", 1, true];
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
