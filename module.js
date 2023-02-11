"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Taxi_1 = require("./Taxi");
var taxi1 = new Taxi_1.Taxi({ x: 2, y: 3 });
taxi1.location = { x: 4, y: 5 };
console.log("taxi1.location =", taxi1.location);
taxi1.travelTo({
    x: 1,
    y: 3,
});
