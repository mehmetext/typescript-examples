interface Point {
	x: number;
	y: number;
}

interface Vehicle {
	travelTo(point: Point): void;
}

export class Taxi implements Vehicle {
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
