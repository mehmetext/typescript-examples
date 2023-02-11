"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = [
            new Product_1["default"](1, "Samsung S5", "Telefon", 1000),
            new Product_1["default"](2, "Samsung S6", "Telefon", 2000),
            new Product_1["default"](3, "Samsung S7", "Telefon", 3000),
            new Product_1["default"](4, "Samsung S8", "Telefon", 4000),
        ];
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports["default"] = SimpleDataSource;
