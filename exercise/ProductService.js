"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.dataSource = new SimpleDataSource_1["default"]();
        this.products = __spreadArray([], this.dataSource.getProducts(), true);
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (e) { return e.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products = __spreadArray(__spreadArray([], this.products, true), [product], false);
        }
        else {
            this.products = this.products.map(function (e) {
                if (e.id == product.id) {
                    e = product;
                }
                return e;
            });
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        this.products = this.products.filter(function (e) { return e.id != product.id; });
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports["default"] = ProductService;
