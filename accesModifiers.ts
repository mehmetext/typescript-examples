interface Point {
	x: number;
	y: number;
}

interface Passenger {
	name: string;
	phone: string;
}

interface Vehicle {
	travelTo(point: Point): void;
}

class Taxi implements Vehicle {
	constructor(private location: Point, private color?: string) {}

	travelTo(point: Point): void {
		console.log(
			`Taxi => travel from (x: ${this.location.x}, y: ${this.location.y}) to (x: ${point.x}, y: ${point.y})`
		);
	}
}

let taxi1: Taxi = new Taxi({ x: 2, y: 3 });

taxi1.travelTo({
	x: 1,
	y: 3,
});

export {};
