interface Point {
	x: number;
	y: number;
}

interface Passenger {
	name: string;
	phone: string;
}

interface Vehicle {
	currentLocation: Point;
	travelTo(point: Point): void;
}

class Taxi implements Vehicle {
	currentLocation: Point;
	travelTo(point: Point): void {
		console.log(`Taxi => travelTo(x: ${point.x}, y: ${point.y})`);
	}
}

let taxi1: Taxi = new Taxi();

taxi1.currentLocation = { x: 2, y: 3 };

console.log("taxi1.currentLocation:", taxi1.currentLocation);

taxi1.travelTo({
	x: 1,
	y: 3,
});

export {};
