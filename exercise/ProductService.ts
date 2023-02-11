import IProductService from "./IProductService";
import Product from "./Product";
import SimpleDataSource from "./SimpleDataSource";

export default class ProductService implements IProductService {
	private dataSource: SimpleDataSource;
	private products: Product[];

	constructor() {
		this.dataSource = new SimpleDataSource();
		this.products = [...this.dataSource.getProducts()];
	}

	getById(id: number): Product {
		return this.products.filter((e) => e.id === id)[0];
	}

	getProducts(): Product[] {
		return this.products;
	}

	saveProduct(product: Product): void {
		if (product.id == 0 || product.id == null) {
			product.id = this.generateId();
			this.products = [...this.products, product];
		} else {
			this.products = this.products.map((e) => {
				if (e.id == product.id) {
					e = product;
				}
				return e;
			});
		}
	}

	deleteProduct(product: Product): void {
		this.products = this.products.filter((e) => e.id != product.id);
	}

	private generateId(): number {
		let key = 1;

		while (this.getById(key) != null) {
			key++;
		}

		return key;
	}
}
