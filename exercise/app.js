"use strict";
exports.__esModule = true;
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1["default"]();
var result;
result = _productService.getProducts();
console.log(result);
result = _productService.getById(2);
console.log(result);
