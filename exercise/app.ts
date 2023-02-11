import ProductService from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
console.log(result);

result = _productService.getById(2);
console.log(result);
