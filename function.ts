function getAverage(a: number, b: number, c?: number): string {
	let total = a + b;
	let count = 2;

	if (typeof c != "undefined") {
		total += c;
		count++;
	}

	let result = total / count;

	return `Result: ${result}`;
}

export {};
