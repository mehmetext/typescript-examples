"use strict";
exports.__esModule = true;
function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c != "undefined") {
        total += c;
        count++;
    }
    var result = total / count;
    return "Result: ".concat(result);
}
