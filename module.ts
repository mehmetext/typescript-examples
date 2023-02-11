import { Taxi } from "./Taxi";

let taxi1: Taxi = new Taxi({ x: 2, y: 3 });

taxi1.location = { x: 4, y: 5 };
console.log("taxi1.location =", taxi1.location);

taxi1.travelTo({
	x: 1,
	y: 3,
});

export {};
