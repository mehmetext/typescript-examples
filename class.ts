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
		console.log(`Taxi travelTo(x: ${point.x}, y: ${point.y})`);
	}
}

export {};
