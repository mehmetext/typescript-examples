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
	constructor(private _location: Point, private _color?: string) {}

	travelTo(point: Point): void {
		console.log(
			`Taxi => travel from (x: ${this.location.x}, y: ${this.location.y}) to (x: ${point.x}, y: ${point.y})`
		);
	}

	get location(): Point {
		return this._location;
	}

	set location(value: Point) {
		if (value.x < 0 || value.y < 0) {
			throw new Error("x,y can not be negative");
		}

		this._location = value;
	}
}

let taxi1: Taxi = new Taxi({ x: 2, y: 3 });

taxi1.location = { x: 4, y: 5 };
console.log("taxi1.location =", taxi1.location);

taxi1.travelTo({
	x: 1,
	y: 3,
});

export {};
