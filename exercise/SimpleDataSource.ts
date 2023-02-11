import Product from "./Product";

export default class SimpleDataSource {
	private products: Product[];

	constructor() {
		this.products = [
			new Product(1, "Samsung S5", "Telefon", 1000),
			new Product(2, "Samsung S6", "Telefon", 2000),
			new Product(3, "Samsung S7", "Telefon", 3000),
			new Product(4, "Samsung S8", "Telefon", 4000),
		];
	}

	getProducts(): Product[] {
		return this.products;
	}
}
