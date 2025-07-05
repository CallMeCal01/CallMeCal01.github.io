

var productsPath = "../shop/products/products.html";
var pricesPath = "../shop/prices/prices.html";
var stockPath = "../shop/products/stocklevel.html";

var products = [
                "Vanilla Soy Wax Candle",
                "Lavender Soy Wax Candle",
                "Whiskey, Wood Smoke and Leather",
            ];

var prices = document.getElementById(pricesPath).innerHTML;
var stock = document.getElementById(stockPath).innerHTML;

console.log(products, prices, stock);