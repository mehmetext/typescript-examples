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
	color: string;
	currentLocation: Point;

	constructor(location: Point, color?: string) {
		this.currentLocation = location;
		if (typeof color != "undefined") this.color = color;
	}

	travelTo(point: Point): void {
		console.log(`Taxi => travelTo(x: ${point.x}, y: ${point.y})`);
	}
}

let taxi1: Taxi = new Taxi({ x: 2, y: 3 });

console.log("taxi1.currentLocation:", taxi1.currentLocation);

taxi1.travelTo({
	x: 1,
	y: 3,
});

export {};
