var candleScents = ["Vanilla", "Lavender", "Whiskey, Wood Smoke and Leather", "Pear and Jasmine", "French Pear", "Jasmine", "Peppermint", "Strawberry", "Sandalwood and Pine", "Amber",];
var candleWaxTypes = ["Soy", "Soy + Coconut", "Coconut"];
var candleSizes = ["Tealight", "Small", "Medium", "Large"];

console.log(candleScents);

var docGrid = document.getElementById(docGrid).innerHTML

for (let i = 0; i < candleScents.length; i++) {
  docGrid = docGrid + candleScents[i] + ", ";
}